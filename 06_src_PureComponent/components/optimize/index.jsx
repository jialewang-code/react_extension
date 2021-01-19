import React, { PureComponent } from 'react'
import './index.css'

//PureComponent 用于组件状态未修改时使用，使用后状态未修改不重新render
//PureComponent 重写了 shouldComponentUpdate 钩子
export default class Parent extends PureComponent {
  state = { carName: '奔驰' }

  changeCar=() => {
    this.setState({ carName: '宝马' })
    //不要这样修改状态
    // const obj = this.state;
    // obj.carName = '小车'
    // this.setState(obj)
  }

  // shouldComponentUpdate (nextProps,nextState) {
  //   console.log(this.props, this.state);//当前的props,state
  //   console.log(nextProps, nextState);//要变化的目标props,state
  //   return !(this.state.carName === nextState.carName)
  // }
  
  render () {
    console.log('Parent---render');
    const { carName } = this.state
    return (
      <div className='parent'>
        <h2>我是Parent组件</h2>
        <h4>我的车名是：{carName}</h4>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName='奥拓'/>
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate (nextProps,nextState) {
  //   console.log(this.props, this.state);//当前的props,state
  //   console.log(nextProps, nextState);//要变化的目标props,state
  //   return !(this.props.carName === nextProps.carName)
  // }

  render () {
    console.log('Child---render');
    return (
      <div className='child' >
        <h2>我是Child组件</h2>
        <h4>我的接收到的车名是：{this.props.carName}</h4>
      </div>
    )
  }
}
