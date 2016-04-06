const Quark = require('../index');
const should = require('should');

// export process.env.TWILIO_ACCOUNT_SID = 'AC0e44c9fd3b4b68e26e046c5412aa796c'
// export process.env.TWILIO_AUTH_TOKEN = '50730cf1c9588176ea3f7b084dcbdb8a'
// export process.env.TWILIO_SENDER_PHONE_NUMBER = '+1 385-355-6412'

describe('Quark test', () => {
  it('should expose an object to send SMS messages via Twilio', done =>  {
    const quark = new Quark({});
    quark.validate();
    quark.initialize();
    global.should.have.property('TwilioSMS');
    done();
  });

  it('should send a SMS to a specific phone number', done => {
    TwilioSMS
    .send('+58 424-948-6309', 'This is an automatic generated message')
    .then((response) => {
      console.log(response);
      done();
    })
    .catch((error) => {
      done(error);
    });
  });
});
