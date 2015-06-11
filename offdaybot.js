var listoff = require('./listoff');

module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  //var userId = req.body.user_id;
  var offDay = req.body.text;

  var botPayload = {
    text : userName + ' dang ky nghi thu ' + offDay
  }

  listoff.addDay(userName, offDay);

  console.log('listoff: ');
  console.log(listoff.getData());

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
