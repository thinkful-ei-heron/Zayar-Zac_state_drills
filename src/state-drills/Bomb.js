import React from 'react';


export default class Bomb extends React.Component {

  state = {
    count: 0,
    timer: null
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState(
          {count: this.state.count + 1})
      }, 1000)
    })
  }

  render() {
    let bombstate;
    if (this.state.count === 8) {
      bombstate = 'BOOM!!!!';
      clearInterval(this.state.timer);
    }
  		else if (this.state.count % 2 === 0) { bombstate = 'tick' }
    else { bombstate = 'tock' }
  

    return (
      <div>
        <p>
          {bombstate}
        </p>
      </div>
    )
  }
}