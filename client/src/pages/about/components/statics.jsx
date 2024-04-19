/* eslint-disable react/prop-types */

import Contents from '../../home/contents'
import TitleContainer from '../../../containers/titleContainer'
import { SocialComponent } from './components'
import Mzungu from './../../../assets/mzungu.jpg'
const TeamMemberContainer = ({ name, designation }) => {
    return (
        <div className='flex   px-1'>
            <div className='flex w-full h-full items-center justify-center  flex-col'>
                <img src={Mzungu} className='flex w-[100px]  rounded-full h-[100px] bg-red-100' />


                <div className='flex px-2    items-center justify-center '>
                    Kennedy
                </div>
            </div>
        </div>
    )
}

function Stats() {
    return (
        <Contents bg="bg-primary-900 ">
            <TitleContainer title="Statistics " />
            <div className="flex  justify-between  w-full py-4   ">
                <TeamMemberContainer name="Ms Valentine Otiende" designation="CEO/Founder" />
                <TeamMemberContainer name="Ms Annonymous" designation="Director Sales & Marketing" />
                <TeamMemberContainer name="Kennedy Makokha" designation="ICT Officer" />

                <TeamMemberContainer name="James Maina" designation="Human Resourse Manager" />

            </div>
        </Contents>
    )
}

export default Stats