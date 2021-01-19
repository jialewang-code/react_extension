import React, { Component } from 'react'

export default class Demo extends Component {

  state = { count: 0 }
  
  add = () => {
    //对象式的setState
    // const { count } = this.state;
    // this.setState({ count: count + 1 }, () => {
    //   //render调用之后执行回调
    //   console.log(this.state.count)
    // })
    //更新状态是一个异步动作，这里输出之前的状态
    // console.log(this.state.count);

    //函数式的setState
    this.setState((state, props) => {
      console.log(state,props);
      return {count:state.count+1}
    })
  }
  render() {
    return (
      <div>
        <h2>当前的求和结果为：{this.state.count}</h2>
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}
