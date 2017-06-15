// gulpfile.js
var gulp = require('gulp');
var apidoc = require('gulp-apidoc');
var child_process = require('child_process');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var server = require('gulp-express');
var Server = require('karma').Server;
var browserSync = require('browser-sync');
var mongobackup = require('mongobackup');
var jasmine = require('gulp-jasmine');
var nightwatch = require('gulp-nightwatch');

var plugins= require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', 'check-*',
	'jasmine-*', 'mongobackup', 'karma', 'karma-*', 'yargs'],
	scope: ['dependencies', 'devDependencies'],
	lazy: false

});


//console.log(plugins);
//var argv = require('yargs').argv;

//var nodemon = require('gulp-nodemon');
//var jshint = require('gulp-jshint');

//var checkPages = require('check-pages');

//var mongobackup = require('mongobackup');
//var shell = require('gulp-shell');


var exec = require('child_process').exec;

function execute(command, callback) {
    exec(command, function(error, stdout, stderr){callback(stdout);});
}

//// these plugins are added first, but still need for
//// dev team to group files by types to make it happen
//// such as .js folder, .css folder, build folder

//var minifyCSS = require('gulp-minify-css');


//// end of additional plugins


//// begin of additional plugins

/**
 * Run test once and exit
 */

gulp.task('test',function () {
    return gulp.src('test/test.js')
        .pipe(jasmine()).on("error", function(){process.exit(1)});
});

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(plugins.clean());
});

/*
 * Linting task. This will lint all js files in the current level and below
 * Should be run any before testing and deployment
 */
gulp.task('lint', function() {
  return gulp.src('./*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('vendor', function() {
  return gulp.src('./public/javascripts/*.js')
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest('./public/javascripts/'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename('vendor.min.js'))
    .pipe(gulp.dest('./public/javascripts/'))
    .on('error', plugins.util.log);
});

//gulp.task('build', ['vendor'], function() {
gulp.task('build-concat', ['vendor'], function() {
  return gulp.src('./public/stylesheets/*.css')
  .pipe(plugins.minifyCss({keepBreaks:false}))
      .pipe(plugins.rename('style.min.css'))
      .pipe(gulp.dest('./build/concat/stylesheets/'));
  });

gulp.task('compress', function() {
  gulp.src('./public/javascripts/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('build', ['compress'], function() {
  return gulp.src('./public/stylesheets/*.css')
    .pipe(plugins.minifyCss({keepBreaks:false}))
    .pipe(plugins.rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(gulp.dest('./build/css'));

    //.pipe(minifyCSS({keepBreaks:false}))
    //.pipe(rename('style.min.css'))
    //.pipe(gulp.dest('./public/stylesheets/'))
});

//// end of additional plugins
gulp.task('nodemon', ['lint'], function (cb) {
  var called = false;
  return plugins.nodemon({

    // nodemon our expressjs server
     script: 'bin/www',
    // script: '/Users/Seiji/Desktop/team2/bin/www',
    // watch core server file(s) that require server restart on change
    watch: ['./routes/'],

    ext: 'html js',
    env: { 'NODE_ENV': 'development' }
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      browserSync.reload({
        stream: true
      });
    });
});


gulp.task('browser-sync', ['nodemon'/*, 'mongostart', 'watch-check'*/], function () {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // watch the following files; changes will be injected (css & images) or cause browser to refresh
    files: ['public/**/*.*', 'views/**/*.*', 'public/javascripts/*.js'],

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,

    //Change whether browser will auto open
    open: true,

		//The small pop-over notifications in the browser are not always needed/wanted.
		notify: false,

    // open the proxied app in chrome
    //browser: ['google chrome']
  });
});

// mongodump - dump all databases on localhost
gulp.task('mongodump', function() {
  mongobackup.dump({
    host : 'localhost',
    out : './dumps/mongo'
  });
});

// mongorestore - restore database to localhost
gulp.task('mongorestore', function() {
  mongobackup.restore({
    host : 'localhost',
    drop : true,
    path : './dumps/mongo'
  });
});

// NightWatch
gulp.task('night', function() {
  return gulp.src('./test/end2end/*.js')
    .pipe(nightwatch({
      configFile: './nightwatch.json'
    })).on("error", function(){process.exit(1)});
});


gulp.task('default', ['browser-sync','night']);


// prerequisites - must have heroku command line tools installed
//               - must be authenticated with heroku
//               - must have git installed and be in application root directory
//               - must be authenticated with git so that password does not have to be entered on push
gulp.task('stage', ['test'], function(){
    execute('git symbolic-ref --short HEAD', function(br){
        console.log('deploying current branch: ' + br);
        var timer;
        return gulp.src('')
                .pipe(plugins.shell([
                    '<%= setKillTimer() %>',
                    'heroku git:remote -a robobetty-test<%= getArg()%> -r test<%= getArg() %>',
                    '<%= clearKillTimer() %>',
                    'git push -f test<%= getArg() %> <%= determineBranch() %>'
                ], {
                    templateData: {
                        determineBranch: function() {
                            var n_remote = br.trim() + ':master';
                            return n_remote;
                        },
                        getArg: function() {
                            var n = plugins.yargs.test;
                            if (n === null) {
                                n = "1";
                            }
                            return n;
                        },
                        setKillTimer: function() {
                            timer = setTimeout(function(){
                            console.error('ERROR: Wasn\'t able to deploy server.  Are you logged in? Please run "heroku login" and authenticate with Git.');
                            process.exit(1);
                            }, 5000);
                            return "";
                        },
                        clearKillTimer: function() {
                            clearTimeout(timer);
                            return "";
                        }
                    }
                }));
    });
});

// check pages on development
gulp.task('checkDev', ['lint'], function(callback) {
  var options = {
    pageUrls: [
      'http://alpha-team.herokuapp.com/',
      'http://alpha-team.herokuapp.com/register',
      'http://alpha-team.herokuappp.com/login'
    ],
    checkLinks: true,
    maxResponseTime: 500,
    summary: true
  };

  callback = function() {
    console.log('Done checking development.');
  };

  plugins.checkPages(console, options, callback);
});

// check pages on production
gulp.task('checkProd', function(callback) {
  var options = {
    pageUrls: [
      'http://alpha-team.herokuapp.com/',
      'http://alpha-team.herokuapp.com/register',
      'http://alpha-team.herokuappp.com/login'
    ],
    checkLinks: true,
    maxResponseTime: 500,
    summary: true
  };

  callback = function() {
    console.log('Done checking production.');
  };

plugins.checkPages(console, options, callback);

});


gulp.task('apidoc', function(){
          plugins.apidoc.exec({
            src: "routes/api",
            dest: "apidoc/"
          });
});

// Deploy API Docs to gh pages
var deploy = require('gulp-gh-pages');

gulp.task('deploy-gh', function () {
   	var currentdate = new Date();
	/*var timeString = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();*/
    var options = {
        message :  "Update API Doc --skip-ci"
    };
    return gulp.src('./apidoc/**/*')
        .pipe(plugins.deploy(options));
});

var open = require('gulp-open');

// Open API Docs
gulp.task('apidoc-url', function(){
  var options = {
    url: 'http://cse112-goldteam.github.io/web-app/'
  };
  return gulp.src('./README.md')
  .pipe(plugins.open('', options));
});
gulp.task('doc-deploy', ['apidoc','deploy-gh','apidoc-url']);
