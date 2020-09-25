const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//    to: 'daniel.molina3192@gmail.com',
//    from: 'daniel.molina3192@gmail.com',
//    subject: 'This is my first creation!',
//    text: 'I hope you get this'
// })

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'daniel.molina3192@gmail.com',
      subject: 'Thanks for joining in',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app`
   })
}

const sendCancelationEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'daniel.molina3192@gmail.com',
      subject: 'Sorry to see you go!',
      text: `Goodby, ${name}. I hope to see you back sometime soon`
   })
}

module.exports = {
   sendWelcomeEmail,
   sendCancelationEmail
}