Package.describe({
  name: 'rainhaven:iron-seo',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Title and Meta Tags for Iron Router and Social Sharing',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['underscore', 'iron:router']);
  api.addFiles('rainhaven:iron-seo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:iron-seo');
  api.addFiles('rainhaven:iron-seo-tests.js');
});
