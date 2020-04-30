
//该文件是count的容器组件
//引入ui组件
import Count from '../components/Count'
//引入connect方法（重点）
import {connect} from 'react-redux'
//引入action
import {increment,decrement} from '../redux/actions/count'

function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        jia:(value)=>{
            dispatch(increment(value))
        },
        jian:(value)=>{
            dispatch(decrement(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)