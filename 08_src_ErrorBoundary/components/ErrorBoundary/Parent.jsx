import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError: ''//用于标识子组件是否发生错误
  }
  //当Parent的子组件出现报错的时候，会触发getDeriveStateFromError调用，并携带错误信息
  static getDerivedStateFromError (error) {
    console.log('@@@',error);
    return {hasError:error}
  }

  componentDidCatch () {
    console.log('此处统计错误，反馈给服务器，通知编码人员处理BUG');
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError? <h2>当前网络不稳定，请稍后再试！！</h2>:<Child/>}
      </div>
    )
  }
}
