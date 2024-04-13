import Shelf from './../src/models/shelfmodel.js'
import User from './../src/models/usersModel.js'
import role from "../src/models/rolesmodel.js";
import firebaseAdmin from "./../firebaseAdmin.js";
export const publish = async (id) => {
    try {
        let Shelve = await Shelf.findById(id)
        let Owner = await User.findById(Shelve.createdBy)
        let updates = await Shelf.findOneAndUpdate({ _id: id }, { published: !Shelve.published }, { new: true, useFindAndModify: false })

        let payload = {
            notification: {
                title: `${updates.published ? "Published " : "Unpublished"}`,
                body: `${Shelve.name} Has been ${updates.published ? "Published" : "Unpublished"} `,
                image: `${Shelve.files[0]}`
            },
            "webpush": {
                "fcm_options": {
                    "link": "https://dummypage.com"
                }
            },
            data: {
                url: 'https://www.youtube.com'
            },

            tokens: Owner.tokens
        }

        let v = await firebaseAdmin.messaging().sendEachForMulticast(payload)

        // return res.status(200).json({ message: 'Shelf Updated successfully ', updates })
    } catch (error) {
        console.log(error)
        // return res.status(400).json({ message: 'Shelf Updated failed ' })
    }

}