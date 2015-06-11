var listoff = require('./listoff');

module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  //var userId = req.body.user_id;
  var offDay = req.body.text;
  var botPayload = {
    text : userName + ' dang ky nghi thu ' + offDay
  }

  console.log('listoff: ');
  listoff.getData(userName, offDay);

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
