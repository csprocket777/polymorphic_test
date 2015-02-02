/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'polymorphic-test',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

      ENV.contentSecurityPolicy = {
//          'default-src': "'self' http://0.0.0.0:4200",
          'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://0.0.0.0:4200 http://127.0.0.1:4200  http://127.0.0.1:35729  http://0.0.0.0:35729  http://lsrtember", // Allow scripts from https://cdn.mxpnl.com
          'font-src': "'self' 'unsafe-inline' http://0.0.0.0:4200 http://127.0.0.1:4200", // Allow fonts to be loaded from http://fonts.gstatic.com
          'connect-src': "'self' http://127.0.0.1:35729 http://127.0.0.1:35729/livereload http://lsrtember ws://127.0.0.1:35729", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
//          'img-src': "'self'",
          'style-src': "'self' 'unsafe-inline' http://0.0.0.0:4200 http://127.0.0.1:", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
//          'media-src': "'self'"
      }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
