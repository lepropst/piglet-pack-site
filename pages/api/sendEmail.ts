// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import AWS from "aws-sdk";
type Data = {
  error?: string | {};
  message?: string;
};

export function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  // let toArr = ["pigletpack@protonmail.com"];
  let fromAddr = req.body.fromAddr;
  let message = req.body.message;
  let bodySubject = req.body.subject;
  let mess = {};
  // Set region
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "us-east-1",
  });
  const awsMessage = `${fromAddr}\n${bodySubject}\n\n${message}`;
  console.log(awsMessage);
  console.log(req.body);
  // Create publish parameters
  var params = {
    Message: awsMessage /* required */,
    TopicArn: "arn:aws:sns:us-east-1:911310303347:pigletpack",
  };

  // Create promise and SNS service object
  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  publishTextPromise
    .then(function (data) {
      console.log(
        `Message ${params.Message} sent to the topic ${params.TopicArn}`
      );
      console.log("MessageID is " + data.MessageId);
      res.status(200);
      mess = { message: `Success!    ${data.MessageId}` };
    })
    .catch(function (err) {
      console.error(err, err.stack);
      res.status(400);
      mess = { error: err.stack.toString() };
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

export default sendEmail;
