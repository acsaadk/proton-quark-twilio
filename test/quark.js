const Quark = require('../index');
const should = require('should');

// export process.env.TWILIO_ACCOUNT_SID = '***************'
// export process.env.TWILIO_AUTH_TOKEN = '**************'
// export process.env.TWILIO_SENDER_PHONE_NUMBER = '****'

describe('Quark test', () => {
  it('should expose an object to send SMS messages via Twilio', done =>  {
    const quark = new Quark({});
    quark.validate();
    quark.initialize();
    global.should.have.property('twilioSMS');
    done();
  });

  it('should send a SMS to a specific phone number', done => {
    twilioSMS
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
