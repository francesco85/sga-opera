const path = require('path');
module.exports = {
    mode:'development',
    entry:'./js/main.js',
    output:{
        path: path.resolve(__dirname, './temp/scripts'),
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            }
        ] 
    }
};