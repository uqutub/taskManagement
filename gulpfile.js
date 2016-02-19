// Improt Modules
var gulp = require('gulp');
var del = require('del');
//var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var gulpNodemon = require('gulp-nodemon');

// Define Paths
var path = {
    libs: [
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/http.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
    ],
    clientts: 'client/src/app/**/*.ts',
    html: 'client/src/app/**/*.html',
    css: 'client/src/app/**/*.css',
    nots: '!client/src/app/**/*.ts',
    assets: 'client/src/app/**/*',
    index: 'client/src/index.html',
    build: 'client/build',
    buildapp: 'client/build/app',
    buildlib: 'client/build/lib',
    serverts: 'server/src/**/*.ts',
    serverbuild: 'server/build',
    serverjs: 'server/src/**/*.js*',
    // excludeTyping: '!server/typings/**/*.d.ts',
    // excludeNodeModules: '!node_modules/**/*.d.ts'
};

var serverCompilerOptions = { "target": "ES5", "module": "commonjs", "sourceMap": true };
/*var serverCompilerOptions = {
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs"
  },
  "exclude": [
    "node_modules"
  ]
};*/
var clientCompilerOptions = {
        "target": "ES5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
};


// Clean Server JS
gulp.task('cleanServerJS', function () {
    return del(path.serverjs);
});

// Clean the Contents of the Distribution Directory
gulp.task('clean', function () {
    return del([path.build, path.serverbuild]);
});

// Copy Assets
gulp.task('copy:assets', function () {
    return gulp.src([path.assets, path.nots])
        .pipe(gulp.dest(path.buildapp));
});

gulp.task('copy:index', function () {
    return gulp.src([path.index])
        .pipe(gulp.dest(path.build));
});



// copy Libs
gulp.task('copy:libs', function () {
    return gulp.src(path.libs)
        .pipe(gulp.dest(path.buildlib));
});


function ServerTranspileTest(tsFilePath) {
    return gulp.src(tsFilePath.path)
    .pipe(typescript(serverCompilerOptions))
    .pipe(gulp.dest(path.serverbuild));
};
// TypeScript Server Transpile -- STEP 3 --
gulp.task('Servertranspile', function () {
    return gulp
        .src(path.serverts)
        .pipe(typescript(serverCompilerOptions))
        .pipe(gulp.dest(path.serverbuild));
});

// TypeScript Client Transpile -- STEP 3 --
gulp.task('Clienttranspile', function () {
    return gulp
        .src([path.clientts, '!server/typings/tsd.d.ts', '!node_modules/angular2/typings/node/node.d.ts'])
        .pipe(typescript(clientCompilerOptions))
        .pipe(gulp.dest(path.buildapp));
});

// Build Project -- STEP 2 --
gulp.task('build', sequence('clean', 'copy:assets', 'copy:index', 'copy:libs', 'Clienttranspile', 'Servertranspile', 'cleanServerJS'));

// Default Task -- STEP 1 --
gulp.task('default', ['build']);

// Watch Task
gulp.task('start', sequence('build', 'nodemon', 'watch'));

// Serve Task
gulp.task('nodemon', function () {
    gulpNodemon({
        script: 'server/build/app.js'
    }).on('restart', function () {
        console.log('GULP: nodemon restarted server.js');
    })
});

// //// Watch Server TypeScript
// // gulp.task('watchServerTS', function () {
// //     return gulp.watch(path.serverts, function(file){
// //         gulp.src(file.path).pipe(typescript(serverCompilerOptions)).pipe(gulp.dest(path.serverbuild));
// //     });
// // });
// gulp.task('watchServerTS', function () {
//    return  gulp.watch(path.serverts, ['Servertranspile']);
// });
// // Watch Client TypeScript
// // gulp.task('watchClientTS', function () {
// //     return gulp.watch(path.clientts, function(file){
// //         gulp.src(file.path).pipe(typescript(clientCompilerOptions)).pipe(gulp.dest(path.buildapp));
// //     });
// // });
// gulp.task('watchClientTS', function(){
//     return  gulp.watch(path.clientts, ['Clienttranspile']);
// });
// // Watch Html
// gulp.task('watchhtml', function () {
//     return gulp.watch(path.html, function(file){
//         gulp.src(file.path).pipe(gulp.dest(path.buildapp));
//     });
// });
// // Watch Index
// gulp.task('watchindex', function () {
//     return gulp.watch(path.index, function(file){
//         gulp.src(file.path).pipe(gulp.dest(path.build));
//     });
// });
// // Watch CSS
// gulp.task('watchcss', function () {
//     return gulp.watch(path.css, function(file){
//         gulp.src(file.path).pipe(gulp.dest(path.buildapp));
//     });
// });


gulp.task('watch', function(){
    //server ts watching
    gulp.watch(path.serverts, ['Servertranspile']);
    //client ts watching
    gulp.watch(path.clientts, ['Clienttranspile']);
    //client html watching
    gulp.watch(path.html, function(file){
        gulp.src(file.path).pipe(gulp.dest(path.buildapp));
    });
    //client index.html watching
    gulp.watch(path.index, function(file){
        gulp.src(file.path).pipe(gulp.dest(path.build));
    });
    //client css watching
    gulp.watch(path.css, function(file){
        gulp.src(file.path).pipe(gulp.dest(path.buildapp));
    });
})
