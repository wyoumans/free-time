'use strict';

var fs             = require('fs')
  , pathToDefaults = __dirname + '/defaults.json'
  , defaults = { week: 40, day: 8 }
  ;

(function() {

  if (!fs.existsSync(pathToDefaults)) {
    saveDefaults(defaults);
  } else {
    defaults = require(pathToDefaults);
  }

})();

function saveDefaults(newDefaults) {
  return fs.writeFileSync(pathToDefaults, JSON.stringify(newDefaults));
}

module.exports = {
  defaults: defaults,

  updateDefaultHoursPerWeek: function(hours) {
    defaults.week = hours;
    saveDefaults(defaults);
  },

  updateDefaultHoursPerDay: function(hours) {
    defaults.day = hours;
    saveDefaults(defaults);
  }
};
