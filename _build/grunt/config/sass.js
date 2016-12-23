module.exports = {
    dist: {
        options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: '<%= devPath %>/app/sass',
            src: ['*.scss'],
            dest: '<%= devPath %>/app/styles',
            ext: '.css'
        }]
    }
};
