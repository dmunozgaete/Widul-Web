module.exports = function(grunt, options) {

    grunt.registerTask('validate', ['jshint']);   //ALIAS

    var conf = {
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            validthis: true,
            devel: true
        },

        controllers: {
            src: [
                'app/views/**/*.js'
            ]
        },

        bundles: {
            src: [
                'app/bundles/**/*.js',
                '!app/bundles/mocks/js/angular-mocks.js',
                '!app/bundles/angular-locale/moment.es-CL.js'
            ]
        },

        core: {
            src: [
                'app/application.js'
            ]
        }
    };

    if(!grunt.option('report')){
        conf.options["reporter"] = require('jshint-stylish');
    }

    return conf;
};