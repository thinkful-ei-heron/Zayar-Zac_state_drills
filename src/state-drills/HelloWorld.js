import React from 'react';


export default class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        <p>Hello {this.state.who}!</p>
        <button>World</button>
        <button>Frield</button>
        <button>React</button>
      </div>
      )
    };
  
}