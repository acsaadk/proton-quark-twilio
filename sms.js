'use strict'

const twilio = require('twilio');
const _accountSid = process.env.TWILIO_ACCOUNT_SID || null;
const _authToken = process.env.TWILIO_AUTH_TOKEN || null;
const _sender = process.env.TWILIO_SENDER_PHONE_NUMBER || null;

class TwilioSMS {
  constructor(accountSid, authToken) {
    if(_accountSid === null){
      throw(new Error(`Twilio Account SID is missing`));
    }
    if(_authToken === null){
      throw(new Error(`Twilio Auth Token is missing`));
    }
    this._twilioClient = twilio(_accountSid, _authToken);
  }

  send(to, message, sender){
    const opts = {
      from: sender || _sender || null,
      to: to || null,
      body: message || null
    };
    if(opts.from === null){
      throw(new Error(`Sender phone number is missing`));
    }
    if(opts.to === null){
      throw(new Error(`Destination phone number is missing`));
    }
    if(opts.message === null){
      throw(new Error(`Message content is missing`));
    }
    return new Promise((resolve, reject) => {
      this._twilioClient.sendMessage(opts, (err, response) => {
        if(err){
          reject(err);
        }else{
          resolve(response);
        }
      });
    });
  }
}

module.exports = TwilioSMS;
