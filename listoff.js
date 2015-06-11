listoff = [];

listObj = {
	init: function() {
		// do something
	},

	getItem: function() {

	},

	getWeek: function(weekId) {
		return listoff[weekId];
	},

	setWeek: function(weekId, week) {
		listoff[weekId] = week;
	},

	addWeek: function(week) {
		//generate id
		//set week
	},

	addDay: function(user, day) {
		listoff.push([user,day]);
	},

	getData: function() {
		return listoff;
	}
}

module.exports = listObj;