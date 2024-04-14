
import Underline from './underline.png'
function TitleContainer(props) {
    return (
        <div className={`flex flex-col w-auto ${props.left ? " px-2 items-start justify-center" : "items-center justify-center"}`}>
            <div className={`text-xl sm:text-[18px] font-semibold  uppercase text-secondary-100`}>{props.title}</div>
            <img src={Underline} className={` w-20 ${props.left && "hidden"}`} alt='' />
        </div>
    )
}

export default TitleContainer