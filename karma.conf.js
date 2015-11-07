// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angularfire/dist/angularfire.js',
      'client/bower_components/angular-animate/angular-animate.js',
      'client/bower_components/angular-aria/angular-aria.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-material/angular-material.js',
      'client/bower_components/angular-material/angular-material-mocks.js',
      'client/bower_components/angular-material/modules/js/**/*.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/firebase/firebase.js',
      'client/bower_components/lodash/dist/lodash.compat.js',
      'client/app/app.js',
      'client/app/**/*.js',
      'client/components/**/*.js',
      'client/app/**/*.html',
      'client/components/**/*.html'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      '**/*.coffee': 'coffee',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [
      // 'client/app/topics/Topic/Topic.controller.spec.js',
      // 'client/app/topics/topics.controller.spec.js',
      // 'client/app/authors/authors.controller.spec.js',
      // 'client/app/authors/author/author.controller.spec.js',
      // 'client/app/factories/ProjectApi/ProjectApi.service.spec.js',
      'client/app/factories/ProjectComponentsApi/ProjectComponentsApi.service.spec.js', // ProjectComponentsApi will be removed - it was for the Rails API
      'client/app/factories/ApiConfig/ApiConfig.service.spec.js',
      // 'client/app/factories/AuthorApi/AuthorApi.service.spec.js',
      // 'client/app/factories/ToolApi/ToolApi.service.spec.js',
      // 'client/app/factories/TopicApi/TopicApi.service.spec.js',
      // 'client/app/tools/tools.controller.spec.js',
      // 'client/app/tools/Tool/Tool.controller.spec.js',
      'client/app/directives/cardDirective/cardDirective.directive.spec.js',
      // 'client/app/projects/project/project.controller.spec.js',
      // 'client/app/projects/projects.controller.spec.js',
      'client/app/main/main.controller.spec.js',
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
