// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import AWS from 'aws-sdk';
type Data = {
  error?: string | {};
  message?: string;
};

export async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // let toArr = ["pigletpack@protonmail.com"];
  let fromAddr = req.body.fromAddr;
  let message = req.body.message;
  let bodySubject = req.body.subject;
  let mess = {};
  // Set region
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
  });
  const awsMessage = `${fromAddr}\n${bodySubject}\n\n${message}`;
  // Create publish parameters
  var params = {
    Message: awsMessage /* required */,
    TopicArn: 'arn:aws:sns:us-east-1:911310303347:pigletpack',
  };

  // Create promise and SNS service object
  console.log('creatig sns service objectt');
  var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
    .publish(params)
    .promise();
  console.log('handling results');
  // Handle promise's fulfilled/rejected states

  publishTextPromise
    .then(function (data) {
      console.log('success');
      console.log(
        `Message ${params.Message} sent to the topic ${params.TopicArn}`
      );
      console.log('MessageID is ' + data.MessageId);
      res.status(200);
      mess = { message: `Success!    ${data.MessageId}` };
    })
    .catch(function (err) {
      console.log('error');
      console.log(err, err.stack);
      res.status(400);
      mess = { error: err.stack.toString() };
    });

  console.log('sendig message');
  res.send(mess);
}

export default sendEmail;
