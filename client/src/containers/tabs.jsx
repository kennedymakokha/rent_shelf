
import TitleContainer from './titleContainer'

function Tab(props) {
    return (
        <div className='p-1 mb-4'>
            <div className='sm:flex hidden h-10 gap-x-1 w-full '>
                {props.data.map((menu, i) => (
                    <div key={i} className={`h-full w-1/2 rounded-md  text-slate-100 `}>
                        <div onClick={() => props.onChange(menu.title)} className={`h-full capitalize  text-[15px] rounded-md w-full p-1 drop-shadow-md flex items-center justify-center  ${menu.state === true ? "bg-slate-100 text-primary-100" : "bg-primary-600"} `}>
                            {menu.title}
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-auto sm:hidden flex  float-right  '>
                <select onChange={(e) => props.onChange(menu.title)} className='h-10 w-auto capitalize flex items-center text-[20px] px-2 text-primary-100 font-semi-bold  rounded-sm shadow-[inset_-12px_-8px_40px_#46464620]'>
                    {props.data.map((sub, i) => (
                        <option value={sub.title} sub key={i}>{sub.title}</option>
                    ))
                    }
                </select>
            </div>
        </div>
    )
}

export const TabContainer = (props) => {
    return (<>
        {props.tab.title === props.tab1 && props.tab.state && <>
            <div className=' p-1 py-3'>
                <TitleContainer title={props.title} />
                {props.body}
            </div>
        </>}
    </>
    )

}

export default Tab