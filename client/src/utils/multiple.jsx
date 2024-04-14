export const Multiple = (props) => {
    let count = []
    for (let index = 0; index < props.count; index++) {
        count.push(index)
    }
    return (
        <div className={`${props.row && "flex-row gap-x-2"} ${props.col && "flex-col gap-y-1"}  flex transition duration-50 fade-in`} >
            {count.map((user, i) => (
                <div i={i} key={i}>
                    {props.body}
                </div>
            ))}
        </div>


    )
}

export const Repeat = ({ count, body }) => {
    const repeatedElements = [...Array(count)].map((_, i) => (
        <>{body}</>
    ))
    return repeatedElements

}

export const Ratings = (props) => {
    let count = []
    let unCount = []
    for (let index = 0; index < props.count; index++) {
        count.push(index)
    }
    let neg = 5 - props.count
    for (let index = 0; index < neg; index++) {
        unCount.push(index)
    }
    return (
        <div className={`${props.row && "flex-row"} flex transition duration-50 fade-in`} >
            {count.map((user, i) => (
                <div i={i} key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${props.small ? "sm:w-5 sm:h-5" : "sm:w-6 sm:h-6"} text-yellow-600 w-4 h-4`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
            ))}
            {unCount.map((user, i) => (
                <div i={i} key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${props.small ? "sm:w-5 sm:h-5" : "sm:w-6 sm:h-6"} text-yellow-600 w-4 h-4`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
            ))}
        </div>


    )
}
Ratings.propTypes = String, Number;