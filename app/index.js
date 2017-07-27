/**
 * Created by w4995 on 2017/7/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import Slider from './components/Slider';
const IMAGES = [
    {src: require('./images/1.gif')},
    {src: require('./images/2.gif')},
    {src: require('./images/3.gif')}
];
ReactDOM.render(<Slider
    images={IMAGES}
    autoPlay={true} // 是否启动自动轮播
    delay={2.5}     // 每隔多少秒轮播一张图
    speed={2}       // 每次轮播图片移动的速度
    arrows={true}   // 是否显示左右箭头
    dots={true}     // 是否显示点状导航
/>, document.querySelector('#root'));