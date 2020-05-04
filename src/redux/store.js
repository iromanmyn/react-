//该文件可以创建一个redux中核心对象store，暴露出去
import {createStore,applyMiddleware} from 'redux'
//引入为count服务的reducer
import countReducer from './reducers/count_reducer'
//引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
//创建store，同时制定好为store服务的reducer,随后暴露
export default createStore(countReducer,applyMiddleware())
