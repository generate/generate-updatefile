---
install:
  global: ['update']
---
'use strict';

module.exports = function(app) {
  app.task('default', function(cb) {
    return app.src('*.js', {cwd: __dirname})
      .pipe(app.dest('tmp'))
  });
};
