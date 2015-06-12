var listObj = require('./listObj');

module.exports = function (req, res, next) {
 	var userName = req.body.user_name;
	var botPayload = {
		text : listObj.getData()
	}
	// avoid infinite loop
	if (userName !== 'slackbot') {
	return res.status(200).json(botPayload.text);
	} else {
	return res.status(200).end();
	}
}