/**
 * Created by w4995 on 2017/7/25.
 */
import React, {Component} from 'react';
import './Slider.less'
import SliderItems from "./SliderItems";
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0,isMoving:false};
    }

    turn = (step) => {
        if (!this.state.isMoving){
            this.setState({isMoving:true});
            let index = this.state.index + step;
            if (index > this.props.images.length) {
                this.sliders.style.transitionDuration = '0s';
                this.sliders.style.left = 0;
                index = 1;
                getComputedStyle(this.sliders).left;
                this.sliders.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
                setTimeout(()=>{
                    this.setState({isMoving:false})
                },this.props.speed * 1000);
                return;
            } else if (index < 0) {
                this.sliders.style.transitionDuration = '0s';
                this.sliders.style.left = (this.props.images.length) * -500 + 'px';
                getComputedStyle(this.sliders).left;
                index = this.props.images.length - 1;
                this.sliders.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
                this.setState({index});
                setTimeout(()=>{
                    this.setState({isMoving:false})
                },this.props.speed * 1000);
                return;
            }
            this.setState({index});
            setTimeout(()=>{
                this.setState({isMoving:false})
            },this.props.speed * 1000);
            this.setState({index})
        }

    };
    go = () => {
        this.timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    };

    componentDidMount() {
        this.sliders = document.querySelector('.sliders');
        if (this.props.autoPlay)
        this.go();
    }

    render() {
        return (
            <div className="slider-wrapper" onMouseOver={() => clearInterval(this.timer)} onMouseOut={this.go}>
                <SliderItems images={this.props.images} index={this.state.index} speed={this.props.speed}/>
                <SliderArrows turn={this.turn}/>
                <SliderDots images={this.props.images} turn={this.turn} index={this.state.index}/>
                }
            </div>
        )
    }
}