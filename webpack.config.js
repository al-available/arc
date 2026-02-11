//  webpack.config.js  this is basically used for the the entry point
//  and out put destination point dor plugins and dependecies 

import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
    mode:'development',
    entry:{
       main: './src/index.js',
       about:'./src/about.js'

    },
    output:{
        filename:'[name].js',
        path:path.resolve(import.meta.dirname,'dist'),
        clean:true,
    },
    devtool: "eval-source-map",
    devServer: {
    watchFiles:["./src/**/*.html"],
    hot:true
  },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            template:"./src/about.html",
            filename:"about.html",
            chunks:["about"]
        })

    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.html$/i,
                use:['html-loader']
            },
            {
 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }

}