/**
 * Created by w4995 on 2017/7/25.
 */
import React,{Component} from 'react';
export default class SliderItem extends Component{
    render(){
        return(
            <li className="slider">
                <img src={this.props.image.src}/>
            </li>
        )
    }
}