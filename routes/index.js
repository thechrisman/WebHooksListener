var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/', function(req, res, next) {

  var requestBody = {
    text: req.body.text,
    username: req.body.username || "WebHookEvent"
  };

  request.post({
    url: 'https://hooks.slack.com/services/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',
    json: true,
    body: requestBody
  });

  res.sendStatus(204);
});

module.exports = router;
