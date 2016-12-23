module.exports = {
    options: {
        livereload: true
    },
    js: {
        files: ['<%= devPath %>/app/scripts/**/*.js'],
        tasks: 'injector'
    },
    sass: {
        files: ['<%= devPath %>/app/sass/**/*.scss'],
        tasks: ['sass', 'injector']
    },
    css: {
        files: ['<%= devPath %>/app/styles/**/*.css'],
        tasks: 'injector'
    },
    index: {
        files: ['<%= devPath %>/app/index.html']
    },
    bower: {
        files: ['./bower.json'],
        tasks: ['wiredep']
    }
};