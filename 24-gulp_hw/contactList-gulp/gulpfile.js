const { src, dest, series, parallel, watch } = require('gulp')
const {path} = require('./gulp/path.js')


const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// const inject = require('gulp-inject');


function buildTask() {
    return series(
        cleanDist,
        parallel(
            copyHtmlTask,
            copyCssTask,
            copyJsTask,
            copyVendorJsTask
        )
    )
}

function serveTask() {
    browserSync.init({
        server: {
            baseDir: path.dest
        }
    });
    watch(path.srcHtml, series(copyHtmlTask, reloadBrowser))
    watch(path.srcAllJs, series(copyJsTask, reloadBrowser))
    watch(path.srcAllCss, series(copyCssTask, reloadBrowser))


}
function reloadBrowser(done) {
    browserSync.reload()
    done()
}

function copyHtmlTask() {
    return src(path.srcHtml)
        .pipe(dest(path.dest))
    // .pipe(inject(series(copyCssTask, copyVendorJsTask, copyJsTask)))

}
function copyCssTask() {
    return src(path.srcAllCss)
        .pipe(concat(path.destCss))
        .pipe(dest(path.dest))
}

function copyJsTask() {
    return src(path.srcJs)
        .pipe(concat(path.destJs))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.dest))
}

function cleanDist() {
    return src(path.dest, { read: false, allowEmpty: true })
        .pipe(clean())
}

function copyVendorJsTask() {
    return src(path.srcVendor)
        .pipe(concat(path.destVendor))
        .pipe(dest(path.dest))
}


exports.build = buildTask()
exports.serve = series(buildTask(), serveTask)
