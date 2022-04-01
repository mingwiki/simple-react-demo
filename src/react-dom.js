import React from "./react"
const ReactDom = {
  render(vDom, container) {
    // container.innerHTML = ''
    render(vDom, container)
  },
  renderComponent
}
function render(vDom, container) {
  container.append(createDomFromVdom(vDom))
}
function createDomFromVdom(vDom) {
  let node
  if (typeof vDom === "string") {// 处理tag和children.tag  
    node = document.createTextNode(vDom)
  }
  if (typeof vDom === "object") {
    if (typeof vDom.tag === "function") {
      // let component = new vDom.tag(vDom.attr)
      let component = getComponent(vDom.tag, vDom.attr)
      node = createDomFromVdom(component.render())
      component.$root = node
    } else {
      node = document.createElement(vDom.tag)
      setAttribute(node, vDom.attr) // 处理 attr
      vDom.children.forEach(child => { render(child, node) })
    }
  }
  // console.log(node)
  return node
}
function getComponent(tag, attr) {
  let component
  if (tag.prototype instanceof React.Component) {
    component = new tag(attr)
  } else {
    let Component = class extends React.Component {
      render() {
        // console.dir(tag.bind(this))
        // console.dir(tag)
        return tag.bind(this)(attr)
        // return tag(attr)
      }
    }
    // Component.prototype.render = function () {
    //   console.log(tag)
    //   return tag(attr)
    // }
    // console.log(component)
    component = new Component(attr)
  }
  // console.log(component)

  return component
}
function renderComponent(component) {
  // console.log(component)
  if (component.$root) {
    component.$root.parentNode.replaceChild(createDomFromVdom(component.render()), component.$root)
  }
}
function setAttribute(node, attr) { // 把vdom.attr挂到node上
  if (!attr) return

  for (let key in attr) {
    if (key.startsWith("on")) {
      node[key.toLocaleLowerCase()] = attr[key]
    } else if (key === "style") {
      // console.log(attr)
      Object.assign(node.style, attr[key])
    } else {
      node[key] = attr[key]
    }
  }
}

export default ReactDom