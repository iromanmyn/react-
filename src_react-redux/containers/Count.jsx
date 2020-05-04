
//该文件是count的容器组件
//引入ui组件
import Count from '../components/Count'
//引入connect方法（重点）
import {connect} from 'react-redux'
//引入action
import {increment,decrement} from '../redux/actions/count'


export default connect(
    state=>({count:state}),//映射状态
    //原始版
    // dispatch => (
    //     {
    //         jia:(value)=>{dispatch(increment(value))},
    //         jian:(value)=>{dispatch(decrement(value))}
    //     }
    // )
    //精简版
    {increment,decrement}
)(Count)