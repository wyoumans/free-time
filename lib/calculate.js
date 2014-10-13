'use strict';

var moment       = require('moment')
  , totalMinutes = 0;

/**
 * Calculates the date/time when all hours will be complete assuming no breaks
 * between now and completion
 *
 * @param  Integer totalHours     total hours to be worked during this period
 * @param  Integer currentHours   hours completed during this period
 * @param  Integer currentMinutes minutes completed during this period
 * @return Moment                 date/time when work will be complete
 */
var calculate = function(totalHours, currentHours, currentMinutes) {
  var hoursRemaining   = totalHours - currentHours
    , minutesRemaining = totalMinutes - currentMinutes
    , dateFinished     = new moment().add(hoursRemaining, 'hours')
                                     .add(minutesRemaining, 'minutes');

  return dateFinished;
}

module.exports = calculate;
