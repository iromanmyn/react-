//该文件是count的ui组件
import React, { Component } from 'react'
export default class Count extends Component {

    increment = ()=> {
        //1.获取用户的输入
        const {value} = this.refs.user_selected
    }
    decrement = ()=> {
        //1.获取用户的输入
        const {value} = this.refs.user_selected
        
    }
    //当前和是奇数再加
    incrementIfOdd = ()=> {
        //1.获取用户的输入
        const {value} = this.refs.user_selected
        //2.获取现在的和
        
       
    }
    //等500毫秒再加
    incrementAsync = ()=> {
        //1.获取用户的输入
        const {value} = this.refs.user_selected
       
        setTimeout(() => {
            
        }, 500);
    }

    render() {
        return (
            <div>
                <h1>当前求和为：xxx</h1>
                <select ref="user_selected">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
