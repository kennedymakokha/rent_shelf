import Logs from './../models/logsmodel.js'
import Africastalking from 'africastalking';
// import africastalking from 'africastalking'
// const credentials = {
//     // apiKey: '84fac51ff8e918a3120fc417469c7cfb86dfb5bd1b6bb71abde77fb7c111c73a',         // use your sandbox app API key for development in the test environment
//     // username: 'PikUpMtaani',  
//     apiKey: '84fac51ff8e918a3120fc417469c7cfb86dfb5bd1b6bb71abde77fb7c111c73a',         // use your sandbox app API key for development in the test environment
//     username: 'pmtaani',
//     // use 'sandbox' for development in the test environment
// };

const africastalking = Africastalking({
    apiKey: '84fac51ff8e918a3120fc417469c7cfb86dfb5bd1b6bb71abde77fb7c111c73a',         // use your sandbox app API key for development in the test environment
    username: 'pmtaani',
});
// africastalking(credentials);

// Initialize a service e.g. SMS
const sms = africastalking.SMS
export const SendMessage = async (data) => {

    try {
        const options = {
            to: [`${data.address}`],
            message: `${data.Body}`,
            from: "PikUpMtaani",
        }
        let r = await sms.send(options)
        let body = { target: data.id, success: true, subject: data.subject, sent_to: data.address }
        await Logs.create(body)
    } catch (error) {
        let body = { target: data.id, success: false, subject: data.subject, sent_to: data.address, failure_reason: error }
        await Logs.create(body)
        console.log(error)

    }
}

