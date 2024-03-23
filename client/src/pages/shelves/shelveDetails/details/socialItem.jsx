import React from 'react'

function SocialItem({ social, setShowModal }) {
    const action = () => {
        setShowModal(true)
    }
    return (
        <div onClick={action} className='w-7 h-7 group border group-hover:border-primary-100 border-secondary-100 flex justify-center items-center  rounded-sm'>
            {social.icon}
        </div>
    )
}

export default SocialItem