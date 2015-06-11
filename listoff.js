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
		//gerenate id
		//set week
	},

	getData: function(user, day) {

		listoff.push([user,day]);
		return listoff;
	}
}

module.exports = listObj;