# Polymorphic-test

This repo is simply to portray an issue I'm experiencing with polymorphic hasMany relationships and Ember-Data version 1.0.0-beta.14.1.

Upon a fresh load of the app, the first time a relationship is changed and saved to the server, the relationship is emptied while subsequent updates are saved properly.

This could simply be that I'm returning the wrong payload structure from the REST API.