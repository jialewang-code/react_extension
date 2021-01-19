import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render () {
    return (
      <div className='parent'>
        <h2>我是Parent组件</h2>
        {/* react中插槽技术，传递属性默认使用render */}
        <A render={name => <B name={name} />} />
        {/* <A>
          <B/>
        </A> */}
      </div>
    )
  }
}

class A extends Component {
  state = { name:'tom'}
  render () {
    return (
      <div className='a' >
        <h2>我是A组件</h2>
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render () {
    return (
      <div className='b' >
        <h2>我是B组件</h2>
        <h4>我收到的名字是：{this.props.name }</h4>
      </div>
    )
  }
}
