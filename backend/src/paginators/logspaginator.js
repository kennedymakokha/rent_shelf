

const paginated = (model) => {

    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const count = await model.countDocuments().exec()
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const pager = Math.trunc(count / limit)
        const results = {}
        const admin = {}

        if (pager > 1) {
            results.pager = pager
        }

        if (endIndex < model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit,

            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,

            }
        }



        try {
        
            var { success, word,user } = req.query
            var searchKey = new RegExp(`${word}`, 'i')
            if (word) {
                results.results = await model.find({ sent_to: searchKey, }).limit(limit).skip(startIndex).populate('target','name')
                    .exec()
                res.paginate = { results }
                next()

            }
            if (user) {
                results.results = await model.find({ target: user, }).limit(limit).skip(startIndex).populate('target','name')
                    .exec()
                res.paginate = { results }
                next()

            }
            if (success===true) {
                results.results = await model.find({ success: true, }).limit(limit).skip(startIndex).populate('target','name')
                    .exec()
                res.paginate = { results }
                next()

            }
            else {
                results.results = await model.find().limit(limit).skip(startIndex).populate('target','name')
                    .exec()
                res.paginate = { results }
                next()
            }

        } catch (error) {
            res.status(400).json({ message: error.message })
        }

        // await model.slice(startIndex, endIndex)

    }

}

export default paginated
