
module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var offDay = req.body.text;
  var botPayload = {
    text : userName + 'nghi vao thu' + offDay
  }

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
