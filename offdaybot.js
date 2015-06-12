var listObj = require('./listObj');

module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  //var userId = req.body.user_id;
  var offDay = req.body.text;
  var botPayload = {};
  var t = new Date;
  var today = t.getDay();

  if (today===5 || today===6) {

    if ("234567".indexOf(offDay) === -1) {
      botPayload = {
        text : 'Xem lai cu phap! '
      }
    }
    else {
      botPayload = {
        text : 'Ban da dang ky nghi thu ' + offDay
      }

      //update database
      var weekid = listObj.getMonday();
      
      var fulllist = listObj.getData();
      var lengthlist = fulllist.length;

      if (lengthlist === 0) {
        listObj.addWeek();
        fulllist = listObj.getData();
        lengthlist = fulllist.length;
      }

      if (fulllist[lengthlist-1].week === weekid) {
        listObj.addData(userName, offDay);
      }
      else {
        listObj.addWeek();
        listObj.addData(userName, offDay);
      }
    }

  }

  else {
    var botPayload = {
      text : 'Chi duoc dang ky vao thu 6 hoac 7!'
    };
  }

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload.text);
  } else {
    return res.status(200).end();
  }
}
