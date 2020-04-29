//该文件可以创建一个redux中核心对象store，暴露出去
import {createStore} from 'redux'
//引入为count服务的reducer
import countReducer from './count_reducer'
//创建store，同时制定好为store服务的reducer,随后暴露
export default createStore(countReducer)
