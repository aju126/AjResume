!function(e,n){var t="undefined"!=typeof n.jQuery&&n.jQuery;t?ReactRailsUJS.handleEvent=function(n,i){t(e).on(n,i)}:ReactRailsUJS.handleEvent=function(n,t){e.addEventListener(n,t)},"undefined"!=typeof Turbolinks&&Turbolinks.supported?"undefined"!=typeof Turbolinks.EVENTS?ReactRailsUJS.TurbolinksClassic.setup():"undefined"!=typeof Turbolinks.controller?ReactRailsUJS.Turbolinks.setup():ReactRailsUJS.TurbolinksClassicDeprecated.setup():t&&"function"==typeof t.pjax?ReactRailsUJS.pjax.setup():ReactRailsUJS.Native.setup()}(document,window);