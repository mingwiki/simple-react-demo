import React from './react'
import ReactDom from './react-dom'


// let welcome = " this is a react-demo*****"
// let obj = {
//   backgroundColor: "red",
//   fontSize: "30px"
// }
// let div = (
//   <div className="demo">{welcome}
//     <div style={obj}>this is div 1</div>
//     <div>this is div 2</div>
//     <button className="btn" onClick={() => { console.log("Click button") }}>button</button>
//   </div>
// )

// console.dir(div)

// ReactDom.render(div, document.querySelector("div.container"))
class Menu extends React.Component {
  render() {
    return <h1>{this.props.id}{this.props.title}</h1>
  }
}
function Menu2() {
  return <h1>{this.props.id}</h1>
}
class App extends React.Component {
  constructor(props) {
    // super(props)
    super(props)
    // console.log(this)
    // this.props = props
    this.state = { title: "this is state" }
  }

  handleClick() {
    this.setState({
      title: "setState works"
    })
  }
  render() {
    // console.log(this)
    return (
      <div>
        <h1>{this.state.title}</h1  >
        <p>{this.props.id}</p>
        <Menu id={this.props.id} title={this.state.title} />
        <Menu2 id={this.props.id} />
        <span onClick={this.handleClick.bind(this)} style={{ color: "red" }}>hello world</span>
      </div >
    )
  }
}

ReactDom.render((<App id="app" />), document.querySelector("div.container"))