import ReactDom from "./react-dom"

class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }
  setState(obj) {
    Object.assign(this.state, obj)
    console.log("setState is clicked")

    // console.log(this)
    ReactDom.renderComponent(this)
  }
}
const React = {
  createElement(tag, attr, ...children) {
    // console.log(arguments)
    return { tag, attr, children }
  },
  Component
}

export default React