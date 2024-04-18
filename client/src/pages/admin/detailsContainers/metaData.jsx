/* eslint-disable react/prop-types */
export const MetaDatacontainer = (props) => (
    <div className='flex gap-x-2 min-h-4 '>
        <span className='font-bold h-1 flex text-sm text-slate-600'>{props.title}:</span>
        <span className='font-semibold text-sm'>{props.value}</span>
    </div>
    // <h1 className='font-bold h-10 flex text-sm  p-2 text-slate-600'>{props.title}:<span className='font-semibold  px-2'>{props.value}</span></h1>
)