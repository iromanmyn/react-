//该文件是真正操作状态的人
//该函数是counteReducer,action是动作对象
import {INCREMENT,DECREMENT} from '../action_type'
let initState = 0//定义初始状态
export default function (preState=initState,action){
    // if(preSatae === undefined) preSatae = 0
    const {type,data} = action
    let newState
    switch (type) {
        case INCREMENT:
            //如果加
            newState = preState + data
            return newState
        case DECREMENT:
            //如果减
            newState = preState - data
            return newState
        default:
            //如果动作类型type不是加也不是减，就是初始化的时候
            return preState
    }

    
}