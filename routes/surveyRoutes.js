const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(',').map((email) => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send and mail
    const mailer = new Mailer(survey, surveyTemplate(survey));
  });
};
