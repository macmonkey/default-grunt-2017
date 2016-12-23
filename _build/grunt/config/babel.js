/**
 * Created by Jenson on 23.12.16.
 */
module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            "<%= devPath %>/app/scripts/app.js": "<%= devPath %>/app/scripts/app.es6"
        }
    }
};