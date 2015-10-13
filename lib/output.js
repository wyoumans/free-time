'use strict';

var moment = require('moment')
  , clc    = require('cli-color')
  , cowsay = require('cowsay');

/**
 * Prints the message to the console
 *
 * @param  Integer totalHours    total hours to be worked during this period
 * @param  Moment dateFinished   date/time when work will be complete
 * @param  String period         'week' | 'day'
 */
var output = function(totalHours, dateFinished, period) {
  var dateFormatted = dateFinished.calendar();

  console.log();
  console.log('Howdy!');
  console.log('You will have completed %j hours for the %s:', totalHours, period);
  console.log();

  console.log(clc.blue(cowsay.say({
    text: dateFormatted,
    f: 'tux'
  })));

  console.log();
}

module.exports = output;
