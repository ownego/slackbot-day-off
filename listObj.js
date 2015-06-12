listoff = [];

listObj = {
	init: function() {
		// do something
	},

	getMonday: function() {
		//get First day of next week
		var d = new Date;
		var w = d.getDate() - d.getDay();
		var md = new Date(d.setDate(w+8)).toUTCString().substring(0, 16);
		return md;
	},

	// getWeek: function(weekId) {
	// 	return listoff[weekId];
	// },

	// setWeek: function(weekId, week) {
	// 	listoff[weekId] = week;
	// },

	addWeek: function() {
		//add new week to the list
		listoff.push({week:"", data:[]});
		var n = listoff.length;
		listoff[n-1].week = this.getMonday();
	},

	addData: function(name, day) {
		//add user name & off day to last week in the list
		var lw = listoff[listoff.length-1].data;
		var newuserreg = true;

		//check if lw is empty array
		if (lw.length === 0) {
			lw[0] = {};
			lw[0].name = name;
			lw[0].day = day;
		}
		else {
			for (i=0; i<lw.length; i++) {
				if (lw[i].name === name) {
					lw[i].day = day;
					newuserreg = false;
				}
			}

			if (newuserreg) {
				lw.push({name:"", day:""});
				lw[lw.length-1].name = name;
				lw[lw.length-1].day = day;
			}
		}
	},

	showData: function() {
		//show last week
		var show = [];
		var l = listoff.length;
		show[0] = listoff[l-1];
		return show;
	},

	getData: function() {
		return listoff;
	}

}

module.exports = listObj;