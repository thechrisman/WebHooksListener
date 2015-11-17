var express = require('express');
var request = require('request');
var auth = require('./../utils/auth');
var router = express.Router();

router.post('/account1', auth('cmudd', 'ChrisisCool'), function(req, res, next) {
  sendSlackMessage(req);
  res.sendStatus(204);
});

router.post('/account2', auth('cmudd1', 'ChrisisCool'), function(req, res, next) {
  sendSlackMessage(req);
  res.sendStatus(204);
});

router.post('/account3', function(req, res, next) {
  res.sendStatus(500);
});

function sendSlackMessage(req) {
  var requestBody = {
    text: "Asset " + req.body.assetId + " has triggered a " + req.body.event.type + " event on " + req.body.event.date + ".",
    username: req.body.event.type + " Event" || "WebHookEvent"
  };

  request.post({
    url: 'https://hooks.slack.com/services/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',
    json: true,
    body: requestBody
  });
}

module.exports = router;
