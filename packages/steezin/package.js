/**
 * Created by TheAbbott on 3/15/15.
 */
Package.describe({
    summary: "Steezy themin",
    version: '0.1.0',
    name: "steezin"
});

Package.onUse(function (api) {

    api.use(['fourseven:scss', 'templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

    api.addFiles([
        'stylesheets/screen.scss',
        'templates/nav.html',
        'steezin.js'
    ], ['client']);

});