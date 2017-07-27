/**
 * Created by w4995 on 2017/7/25.
 */
import React,{Component} from 'react';
import SliderItem from "./SliderItem";
export default class SliderItems extends Component{
    render(){
        let style = {
            width: (this.props.images.length + 1) * 500 + 'px',
            left:this.props.index*-500 + 'px',
            transitionDuration:  this.props.speed+'s'
        };
        return(
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image, index) =>(
                           <SliderItem image={image} key={index}/>
                    ))
                }
                <SliderItem image={this.props.images[0]} key={this.props.images.length}/>
            </ul>
        )
    }
}