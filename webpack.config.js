/**
 * Created by w4995 on 2017/7/25.
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 打包的入口文件
    entry:'./app/index.js',
    // 配置输出的目录和文件名
    output:{
        // 打包后的文件保存的目录
        path: path.resolve('build'),
        // 打包后的文件名
        filename:'bundle.js'
    },
    // 配置模块的打包方式
    module: {
        // 配置不同类型文件的加载方式
        rules:[
            {
                test:/\.jsx?$/,// 匹配后缀是js或者jsx的文件
                use:'babel-loader',// 使用babel进行转译
                exclude:/node_modules/ // 为了提高解析速度,需要忽略node_modules中的
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(gif|jpg|png)$/,
                // limit: 限定图片大小的分界线,如果图片的体积小于给定的值(8*1024)的话,这个图片就会变成base64格式内嵌到网页中,否则就会经过重命名后保存到目标里去,在网页中会得到一个新的URL路径
                use:'url-loader?limit=8194'
            }
        ]
    },
    // 配置插件
    plugins:[
        // 可以以index.html作为模版,并向其中插入打包后的bundle.js文件,然后保存到目标路径下
        new HtmlWebpackPlugin({
            // 以app下的index.html作为模版
            template:'./app/index.html'
        })
    ]
};