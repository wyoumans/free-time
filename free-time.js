#!/usr/bin/env node

'use strict';

var calculate           = require('./lib').calculate
  , output              = require('./lib').output
  , program             = require('commander')
  , config              = require('./config')
  , defaults            = config.defaults
  , timeSpanDescription = 'day';

(function() {
  program
    .version('0.1.1')
    .option('-w, --week', 'Sets the period to 1 week. Default is 1 day')
    .option('-t, --total <n>', 'Total hours to be worked for the set period', parseInt)
    .option('-h, --hours <n>', 'Total hours completed for the set period', parseInt)
    .option('-m, --minutes <n>', 'Total hours completed for the set period', parseInt)
    .option('-c, --config', 'Show defaults')
    .option('--config-hours-per-day <n>', 'Update the default hours per day', parseInt)
    .option('--config-hours-per-week <n>', 'Update the default hours per week', parseInt)
    .parse(process.argv);

  if (program.config) {

    console.log('Your current settings are:', defaults);

  } else if (program.configHoursPerDay || program.configHoursPerWeek) {
    if (program.configHoursPerDay) {
      config.updateDefaultHoursPerDay(program.configHoursPerDay);
    }

    if (program.configHoursPerWeek) {
      config.updateDefaultHoursPerWeek(program.configHoursPerWeek);
    }

    console.log('The settings have been updated:', defaults);

  } else {

    if (program.week) {
      program.total = program.total || defaults.week;
      timeSpanDescription = 'week';
    } else {
      program.total = program.total || defaults.day;
    }

    program.hours = program.hours || 0;
    program.minutes = program.minutes || 0;

    var timeFormatted = calculate(program.total, program.hours, program.minutes);
    output(program.total, timeFormatted, timeSpanDescription);
  }
})();
