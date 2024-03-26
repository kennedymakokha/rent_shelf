import Loader from './loading21.gif'
export default function FormAction({
    handleSubmit,
    isLoading,
    type = 'Button',
    action = 'submit',
    text
}) {
    return (
        <>
            <div className="bg-gray-400 w-full  relative z-0">
                {
                    type === 'Button' ?
                        <button
                            type={action}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-100 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                            onClick={handleSubmit}
                        >


                            {text}
                        </button>
                        :
                        <></>
                }
                {/* {!isLoading && <div className="absolute bg-black opacity-80 inset-0 flex justify-center items-center z-10">
                    <img src={Loader} alt='' className='h-40 w-40' />
                </div>} */}
            </div>

        </>
    )
}