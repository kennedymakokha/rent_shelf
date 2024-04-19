/* eslint-disable react/prop-types */

import Breadcrump from '../../containers/breadcrump'

function Contents(props) {
    return (
        <div className={`flex w-full ${props.backDrop ? "py-0" : "py-3"}  ${props.bg} flex-col  `}>
            {props.backDrop && <Breadcrump detailed={props.detailed} title={props.title} paths={props.path} backDrop={props.backDrop} />}
            <div className={`flex w-full sm:py-1 py-8 sm:mt-6 ${props.bg} flex-col px-2 sm:px-[3rem]`}>
                {props.children}
            </div>


        </div >
    )
}

export default Contents