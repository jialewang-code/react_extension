import React, { Component } from 'react'
import './index.css'

//创建一个共用的上下文容器对象
const MyContext = React.createContext()
const { Provider,Consumer } = MyContext;
export default class A extends Component {
  state = { username: 'tom',age:18 }
  
  render () {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h2>我是A组件</h2>
        <h4>我的用户名是：{username}</h4>
        <h4>我的的年龄是：{age}</h4>
        {/* 使用Provider，并传值 */}
        <Provider value={{username,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child' >
        <h2>我是B组件</h2>
        <C/>
      </div>
    )
  }
}

// class C extends Component {
//   //声明接收context
//   static contextType = MyContext;
  
//   render () {
//     console.log(this.context);
//     const { username, age } = this.context
//     return (
//       <div className='grand'>
//         <h2>我是C组件</h2>
//         <h4>我从A组件接收到的用户名是：{username}</h4>
//         <h4>我从A组件接收到的年龄是：{age}</h4>
//       </div>
//     )
//   }
// }

function C () {
  return (
    <div className='grand'>
      <h2>我是C组件</h2>
      <h4>我从A组件接收到的用户名是：
       <Consumer>
        {
          value => {
           return `${value.username}`
          }
        }
      </Consumer>
      </h4>
      <h4>我从A组件接收到的年龄是：
       <Consumer>
        {
          value => {
           return `${value.age}`
          }
        }
      </Consumer>
      </h4>
    </div>
  )
}