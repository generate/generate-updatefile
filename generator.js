'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-updatefile')) return;

  /**
   * Generate an `updatefile.js` file to the current working directory.
   *
   * ```sh
   * $ gen updatefile
   * $ gen updatefile --dest ./docs
   * ```
   * @name updatefile
   * @api public
   */

  app.task('default', ['updatefile']);
  app.task('updatefile', function(cb) {
    return app.src('templates/updatefile.js', {cwd: __dirname})
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
  });
};
