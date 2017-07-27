/**
 * Created by w4995 on 2017/7/27.
 */
import React, {Component} from 'react';
import {
    HashRouter as Router, Route, Link
}from 'react-router-dom';
function Home() {
    return <div>Home</div>
}
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><a href="#/">首页</a></li>
                        <li><a href="#/user"></a></li>
                    </ul>
                    <hr/>

                    <Route path='/' component={Home}/>
                    <Route path='/user' component={User}/>

                </div>
            </Router>
        )
    }
}