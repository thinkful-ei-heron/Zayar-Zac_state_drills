import React from 'react';

export default class Roulette extends React.Component {

	static defaultProps = {
		bulletInChamber: 8
	}

	constructor(props) {
		super(props);
		this.state = {
			chamber: this.props.bulletInChamber,
			spinningTheChamber: false,
			readout: ''
		}
		this.bulletInChamber = this.props.bulletInChamber;
	}

	pickChamber () {
		return Math.ceil(Math.random() * 8);
	}

	clickHandler() {
		this.setState({
			spinningTheChamber: true,
			readout: 'Spinning the chamber and pulling the trigger! ...'
			})
		let timer = setTimeout(() => {
			this.setState({spinningTheChamber: false});
			let newChamb = this.pickChamber();
			if (newChamb === this.state.chamber) {
				this.setState({
					readout: `BANG !!!!`
				})
			}
			else this.setState({
				readout: `You\'re safe!`
			});
			this.setState({
				chamber: newChamb
			});
			clearTimeout(timer);
		  }, 2000)
	}

	render() {
		return (
			<div>
				<button onClick={() => this.clickHandler()}>Pull the Trigger!</button>
				<p>{this.state.readout}</p>
			</div>
		)
	}
}