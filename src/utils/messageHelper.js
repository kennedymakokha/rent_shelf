/* Copyright (c) Meta Platforms, Inc. and affiliates.
* All rights reserved.
*
* This source code is licensed under the license found in the
* LICENSE file in the root directory of this source tree.
*/

import axios from 'axios';

export function sendMessage(data) {
    var config = {
        method: 'post',
        url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
        headers: {
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
}

export function getTextMessageInput(recipient, text) {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "preview_url": false,
        "recipient_type": "individual",
        "to": recipient,
        "type": "text",
        "text": {
            "body": text
        }
    });
}

export function getTemplatedMessageInput(recipient, text) {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": recipient,
        "type": "template",
        // "buttons_types": "OTP",
        "template": {
            "name": "auth_template",
            "language": {
                "code": "en"
            },

           
            // "components": [
            //     {
            //         "type": "header",
            //         "parameters": [
            //             {
            //                 "type": "image",
            //                 "image": {
            //                     "link": movie.thumbnail
            //                 }
            //             }
            //         ]
            //     },
            //     {
            //         "type": "body",
            //         "parameters": [
            //             {
            //                 "type": "text",
            //                 "text": movie.title
            //             },
            //             {
            //                 "type": "date_time",
            //                 "date_time": {
            //                     "fallback_value": movie.time
            //                 }
            //             },
            //             {
            //                 "type": "text",
            //                 "text": movie.venue
            //             },
            //             {
            //                 "type": "text",
            //                 "text": seats
            //             }
            //         ]
            //     }
            // ]
        }
    }
    );
}

// module.exports = {
//   sendMessage: sendMessage,
//   getTextMessageInput: getTextMessageInput,
//   getTemplatedMessageInput: getTemplatedMessageInput
// };


