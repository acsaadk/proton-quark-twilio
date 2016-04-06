'use strict'

const Quark = require('proton-quark');
const SMS = require('./sms');
const accountSid = process.env.TWILIO_ACCOUNT_SID || null;
const authToken = process.env.TWILIO_AUTH_TOKEN || null;

class TiwilioQuark extends Quark {
  constructor(proton){
    super(proton)
  }

  validate(){
    if(!accountSid){
      throw(new Error(`TWILIO_ACCOUNT_SID is missing in your environment`));
    }
    if(!authToken){
      throw(new Error(`TWILIO_AUTH_TOKEN is missing in your environment`));
    }
  }

  initialize(){
    global.twilioSMS = new SMS();
  }

  get accountSid(){
    return accountSid;
  }

  get authToken(){
    return authToken;
  }
}

module.exports = TiwilioQuark;
