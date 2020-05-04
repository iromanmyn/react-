//该文件是专门用于创建和Count相关的action，
//有两种action：
//1.加的action{type:'increment',data:??}
//2.减的action{type:'decrement',data:??}
import {INCREMENT,DECREMENT} from '../action_type'
//创建加
export const increment = value=> ({type:INCREMENT,data:value})

//创建减
export const decrement = value=> ({type:DECREMENT,data:value})
//创建等一等再加的action
//1.有一种特殊的action 是函数
//2.该函数会交给store
//3.store底层加了判断，如果action是函数就立刻调用，且传入store.dispatch
export const incrementAsync = (value,time)=> {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(value))
        }, time)
        // axios.post(url,{}).then(
        //     response => {dispatch(increment(response))},
        //     error => {}
        // )
    }
}
