import React from 'react';


export default class HelloWorld extends React.Component {
  state = {
    who: ''
  };
  
  whoHandler = (e, str) => {

    this.setState({

      

    }
    )}

  render() {
    return (
      <div>
        <p>Hello {this.state.who}!</p>
        <button onClick={e => this.whoHandler('world')} id='btn-world'>World</button>
        <button onClick={e => this.whoHandler('friend')} id='btn-friend'>Friend</button>
        <button onClick={e => this.whoHandler('React')} id='btn-react'>React</button>
      </div>
      )
    };
  
}

