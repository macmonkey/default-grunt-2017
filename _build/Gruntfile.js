'use strict';
module.exports = function (grunt)
{

    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),


        data: {
            "rootPath": "./..",
            "buildPath": "<%= rootPath %>/_build",
            "devPath": "<%= rootPath %>/develop",
            "disPath": "<%= devPath %>/dist"
        },

        init: true,

        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                projectDefault: 'grunt/tasks/default.js'
            }


        }
    });

    grunt.registerTask('default', ['projectDefault']);
};
