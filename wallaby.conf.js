
module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js',
            'package.json',
            '!src/**/*spec.js'
        ],

        tests: [
            'src/**/*spec.js'
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                "presets": [
                    "react",
                    "stage-1"
                ]
            })
        },

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',
        
    };
};