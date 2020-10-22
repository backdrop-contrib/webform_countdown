Webform Countdown
======================

Webform Countdown provides a textarea component for Drupal webforms with a configurable, twitter-style dynamic word or character count.

Installation
------------

- Install this module using [the official Backdrop CMS instructions](  https://backdropcms.org/guide/modules).

- Download [jquery.word-and-character-counter.js](https://github.com/qwertypants/jQuery-Word-and-Character-Counter-Plugin) ([unminified](https://raw.githubusercontent.com/qwertypants/jQuery-Word-and-Character-Counter-Plugin/master/jquery.word-and-character-counter.js) or [minified](https://raw.githubusercontent.com/qwertypants/jQuery-Word-and-Character-Counter-Plugin/master/jquery.word-and-character-counter.min.js)) and add it to the lib folder of the module, so that the module directory looks like this:

```
webform_countdown
    lib
        jquery.word-and-character-counter.js
    LICENSE.txt
    README.md
    webform_countdown.info
    webform_countdown.js
    webform_countdown.module
```

  If you are using the minified file, please take off the `min`, i.e., rename it to `jquery.word-and-character-counter.js`.


Documentation
-------------

Additional documentation is located in [the Wiki](https://github.com/backdrop-contrib/webform_countdown/wiki/Documentation).

Issues
------

Bugs and feature requests should be reported in [the Issue Queue](https://github.com/backdrop-contrib/webform_countdown/issues).

Current Maintainers
-------------------

- [Robert J. Lang](https://github.com/bugfolder).

Credits
-------

- Ported to Backdrop CMS by [Robert J. Lang](https://github.com/bugfolder).
- Originally written for Drupal by [Andrew Lindsay (Mirabuck)](https://www.drupal.org/u/mirabuck).
- Based on the [word-and-character-counter.js project](https://github.com/qwertypants/jQuery-Word-and-Character-Counter-Plugin).
- Drupal version sponsored by [openmedia.ca](openmedia.ca) and [New/Mode](http://www.newmode.net/).

License
-------

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.

