const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={

    output:{
        path: path.join(__dirname, '/dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.jsx', '.js', '*' ],
        modules: [__dirname, 'node_modules']
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }

}