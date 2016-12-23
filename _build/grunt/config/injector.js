/**
 * Created by Jenson on 23.12.16.
 */
module.exports = {
    options: {
        relative: false,
        ignorePath: '<%= devPath %>/app/',
        addRootSlash: false
    },
    build: {
        files: {
            '<%= devPath %>/app/index.html': [
                '<%= devPath %>/app/scripts/**/*.js',
                '<%= devPath %>/app/styles/**/*.css'
            ]
        }
    }
};