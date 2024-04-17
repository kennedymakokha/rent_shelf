
import Icons from './components/Icons';
import Welcome from './components/Welcome';
import Card from './components/Card';
import Feedback from './components/Feedback';
function index() {
    return (
        <div className=' h-[800px] ' >
            <Welcome />
            <Icons />
            <Card />
            <Feedback />
            <div className='sm:flex hidden '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.077687954472!2d36.96623995390627!3d-1.1325819000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f476cc33dc0bd%3A0xaecec38bcb28cf4f!2sKimbo!5e0!3m2!1sen!2ske!4v1710730730364!5m2!1sen!2ske" width="700" height="400"
                    style={{ paddingBottom: 30, marginTop: "10%", marginLeft: "44%", border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>

            </div>
            {/* <img src=
                'https://media.geeksforgeeks.org/wp-content/uploads/20230821104522/gfg-(5).jpg'
                style={{ marginTop: "14%", marginLeft: "44%" }} /> */}
        </div>
    );
}

export default index;