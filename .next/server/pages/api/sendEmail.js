"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 3211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_sendEmail),
  "sendEmail": () => (/* binding */ sendEmail)
});

;// CONCATENATED MODULE: external "aws-sdk"
const external_aws_sdk_namespaceObject = require("aws-sdk");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/sendEmail.ts

function sendEmail(req, res) {
    // let toArr = ["pigletpack@protonmail.com"];
    let fromAddr = req.body.fromAddr;
    let message = req.body.message;
    let bodySubject = req.body.subject;
    let mess = {};
    // Set region
    external_aws_sdk_default().config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-east-1"
    });
    const awsMessage = `${fromAddr}\n${bodySubject}\n\n${message}`;
    console.log(awsMessage);
    console.log(req.body);
    // Create publish parameters
    var params = {
        Message: awsMessage /* required */ ,
        TopicArn: "arn:aws:sns:us-east-1:911310303347:pigletpack"
    };
    // Create promise and SNS service object
    var publishTextPromise = new (external_aws_sdk_default()).SNS({
        apiVersion: "2010-03-31"
    }).publish(params).promise();
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(function(data) {
        console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
        console.log("MessageID is " + data.MessageId);
        res.status(200);
        mess = {
            message: `Success!    ${data.MessageId}`
        };
    }).catch(function(err) {
        console.error(err, err.stack);
        res.status(400);
        mess = {
            error: err.stack.toString()
        };
    });
    res.send(mess);
// sgMail
//   .send({
//     to: toArr,
//     from: "pigletpack@protonmail.com",
//     templateId: "d-59114bf0e5794c4dac9faa4f71e24d6b",
//     dynamicTemplateData: {
//       subject: bodySubject,
//       fromAddr: fromAddr,
//       message: message,
//     },
//     replyTo: "pigletpack@protonmail.com",
//     subject: `[Lead from website] : ${bodySubject}`,
//   })
//   .then(
//     () => {},
//     (error) => {
//       console.error(error);
//       if (error.response) {
//         console.error(error.response.body);
//       }
//     }
//   );
}
/* harmony default export */ const api_sendEmail = (sendEmail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3211));
module.exports = __webpack_exports__;

})();