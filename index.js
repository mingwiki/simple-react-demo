import React, { Component } from './react.js';
import ReactDOM from './react-dom.js';

let str = 'jirengu';
let styleObj = {
  color: 'red',
  fontSize: '30px'
};


function Article(props) {
  // console.log(props)
  return <p>hello {props.title}</p>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '饥人谷'
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>App</h1>
        <Article title={this.state.title}></Article>
        <div> <button onClick={this.clickMe.bind(this)}> Click Me</button> </div>
      </div>
    )
  }

  clickMe() {
    this.setState({ title: '硬核空间' });
  }
}




ReactDOM.render(<App />, document.body);