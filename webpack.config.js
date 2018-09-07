const path = require('path');
module.exports = {
    mode:'development',
    entry:'./app/assets/scripts/Main.js',
    output:{
        path: path.resolve(__dirname, 'app/temp/scripts'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {   loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            }
        ] 
    },
     resolve: {
       extensions: ['.js']
     }
};