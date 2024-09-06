# Free Time

When can I start working on my side project?

When can I spend time with my family?

When can I leave for that weekend camping trip?

If you work at a place where you have to punch a clock and have to put in a minimum number of hours per day or week, this little tool is for you.

## Configuration

By default, the tool thinks you work 8 hours per day and 40 hours per week. If this is not true, you can update the defaults with the following commands:

```
$ ./free-time.js --config

Your current settings are: { week: 40, day: 8 }
```

```
$ ./free-time.js --config-hours-per-day 9

The settings have been updated: { week: 40, day: 9 }
```

```
$ ./free-time.js --config-hours-per-week 20

The defaults have been updated: { week: 20, day: 9 }
```

## Usage

```
$ ./free-time.js --help

  Usage: free-time.js [options]

  Options:

    -h, --help                      output usage information
    -V, --version                   output the version number
    -w, --week                      sets the period to 1 week. Default is 1 day
    -t, --total <n>                 total hours to be worked for the set period
    -h, --hours <n>                 total hours completed for the set period
    -m, --minutes <n>               total hours completed for the set period
    -c, --config                    show configuration
    --config-hours-per-day <n>      update the default hours per day
    --config-hours-per-week <n>     update the default hours per week
```

```
$ ./free-time.js --hours 7 --minutes 18

Howdy!
You will have completed 8 hours for the day:

 __________________
< Today at 4:55 PM >
 ------------------
   \
    \
        .--.
       |o_o |
       |:_/ |
      //   \ \
     (|     | )
    /'\_   _/`\
    \___)=(___/

```

```
$ ./free-time.js -w --hours 34 --minutes 43

Howdy!
You will have completed 40 hours for the week:

 __________________
< Today at 6:09 PM >
 ------------------
   \
    \
        .--.
       |o_o |
       |:_/ |
      //   \ \
     (|     | )
    /'\_   _/`\
    \___)=(___/

```

## License

[MIT License](http://wy.mit-license.org/) Copyright © 2013 - 2025 William Youmans
