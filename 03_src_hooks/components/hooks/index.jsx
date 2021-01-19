import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
// class Demo extends React.Component {
//   state = { count: 0 }

//   myRef=React.createRef()

//   add=() => {
//     this.setState(state=>({count:state.count+1}))
//   }
//   unmount=() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   show=() => {
//     alert(this.myRef.current.value);
//   }
//   componentDidMount () {
//     this.timer=setInterval(() => {
//       this.setState(state=>({count:state.count+1}))
//     },1000)
//   }
//   componentWillUnmount () {
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef }/>
//         <h2>当前求和的结果为：{this.state.count}</h2>
//         <button onClick={this.add}>点击+1</button>
//         <button onClick={this.unmount}>点击卸载组件</button>
//         <button onClick={this.show}>点击提示输入</button>
//       </div>
//     )
//   }
// }

//函数式组件
function Demo () {
  const myRef=React.useRef()
  //state Hook
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timer=setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  },[])
  
  //加的回调
  function add () {
    // setCount(count+1)//第一种写法
    setCount(count => count + 1);
  }
  function unmount () {
     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function show () {
    alert(myRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={myRef }/>
      <h2>当前求和的结果为：{count}</h2>
      <button onClick={add}>点击+1</button>
      <button onClick={unmount}>点击卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}

export default Demo
