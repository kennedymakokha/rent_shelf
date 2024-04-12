import expressAsyncHandler from "express-async-handler"
import { getMessaging } from "firebase-admin/messaging";

const SubscribeToTopic = expressAsyncHandler(async (req, res) => {
    try {
        const registrationTokens = [

        ];
        registrationTokens.push(req.body.token)

        // Subscribe the devices corresponding to the registration tokens to the
        // topic.
        getMessaging().subscribeToTopic(registrationTokens, req.body.topic)
            .then((response) => {
                // See the MessagingTopicManagementResponse reference documentation
                // for the contents of response.
                return res.status(200).json({ message: 'Successfully subscribed to topic ', response })
                console.log('Successfully subscribed to topic:', response);
            })
            .catch((error) => {
                return res.status(400).json({ message: 'Error subscribing to topic ', error })
            
            });
    } catch (error) {
        console.log(error)
    }
})

export { SubscribeToTopic }