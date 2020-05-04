//该文件是专门用于创建和Count相关的action，
//有两种action：
//1.加的action{type:'increment',data:??}
//2.减的action{type:'decrement',data:??}
import {INCREMENT,DECREMENT} from '../action_type'
//创建加
export const increment = value=> ({type:INCREMENT,data:value})

//创建减
export const decrement = value=> ({type:DECREMENT,data:value})
