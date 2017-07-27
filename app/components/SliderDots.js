/**
 * Created by w4995 on 2017/7/25.
 */
import React,{Component} from 'react';
import './SliderDots.less'
export default class SliderDots extends Component{
    render(){
        return(
            <div className="slider-dots">
                {
                    this.props.images.map((item,index)=>(
                        <span className={'dot ' + ((index == this.props.index || (this.props.index == this.props.images.length && index == 0))? 'active' : '')} key={index} onClick={()=>this.props.turn(index-this.props.index)}></span>
                ))
                }
            </div>
        )
    }
}