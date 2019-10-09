import React from 'react';


export default class HelloWorld extends React.Component {
  state = {
    who: ''
  };
  
  whoHandler = str => {

    this.setState({
      who: str
    }
    )}

  render() {
    return (
      <div>
        <p>Hello{this.state.who}!</p>
        <button onClick={() => this.whoHandler(' world')} id='btn-world'>World</button>
        <button onClick={() => this.whoHandler(' friend')} id='btn-friend'>Friend</button>
        <button onClick={() => this.whoHandler(' React')} id='btn-react'>React</button>
      </div>
      )
    };
  
}

