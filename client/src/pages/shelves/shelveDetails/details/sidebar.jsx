/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import What from './../../../../assets/wat.webp'
import Chat from './sidebarComponents/chat.jsx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import OwnerCard from './sidebarComponents/OwnerCard.jsx'
import DetailCard from './sidebarComponents/detailCard.jsx'
import RateCard from './sidebarComponents/rateCard.jsx'
import ClaimModal from './sidebarComponents/claimModal.jsx'
import RateModal from './sidebarComponents/rateModal.jsx'
import SafetyCard from './sidebarComponents/sefety.jsx'
import DirectionCard from './sidebarComponents/directioncard.jsx'

function Sidebar({ data }) {
    const [chating, setChating] = useState(false)
    const [reveal, setReveal] = useState(false)
    const [show, setshow] = useState(false)
    const [rateShow, setrRatingsshow] = useState(false)
    const [msg, setMessage] = useState("")
    const { userInfo } = useSelector((state) => state.auth)
    const StartChat = () => {
        if (!userInfo) { toast.warning("Kindly login to chat") }
        else { setChating(prev => !prev) }
    }
    const RevealContact = () => {
        if (!userInfo) { toast.warning("Login first") }
        else { setReveal(prev => !prev) }
    }
    return (
        <div className='flex flex-col w-full mt-2 gap-y-2'>
            <DirectionCard data={data} />
            {/* <DetailCard data={data} /> */}
            {/* <MapswithDirection/> */}

            <OwnerCard data={data} RevealContact={RevealContact} reveal={reveal} />
            <Chat userInfo={userInfo}
                chating={chating} StartChat={StartChat}
                msg={msg} setMessage={setMessage}
            />
            <RateCard setrRatingsshow={setrRatingsshow} setshow={setshow} data={data} />
            <SafetyCard />
            <RateModal show={rateShow} setshow={setrRatingsshow} id={data?.createdBy._id} />
            <ClaimModal show={show} setshow={setshow} id={data?.createdBy._id} />
        </div>
    )
}

export default Sidebar