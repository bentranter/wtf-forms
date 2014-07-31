Package.describe({
  summary: 'Friendlier HTML form controls with a little CSS magic.',
  version: '2.0.1'
});


Package.on_use(function (api, where) {
  api.add_files([
    // I should probably remove this...
    'font/fontello.eot',
    'font/fontello.svg',
    'font/fontello.ttf',
    'font/fontello.woff',
    'wtf-forms.css'
  ], 'client');
});