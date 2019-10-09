import React from 'react';


export default class Bomb extends React.Component {

  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        {
        count: this.state.count + 1
      }
    )}, 1000)
  }

  

  render() {
    return (
      <div>
        <p>
          {this.state.bombstate}
        </p>
      </div>
    )
  }
}