const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')


function css(){
    return gulp
    .src('SCSS/app.scss')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    //esto de abajo hace que tu hoja de estilo se haga mas ligera una vez finalizando el proyecto
    .pipe(sass({
        outputStyle: 'expanded', //nested, compact, compressed
    }))
    .pipe(gulp.dest('css'));
}

function watchFiles(){
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}


// Registrar funciones como tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));