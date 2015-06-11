var listoff = require('./listoff');

module.exports = function (req, res, next) {
	var botPayload = {
		text : 'Danh sach nghi: '+listoff
	}
	  // avoid infinite loop
	if (userName !== 'slackbot') {
	return res.status(200).json(botPayload);
	} else {
	return res.status(200).end();
	}
}