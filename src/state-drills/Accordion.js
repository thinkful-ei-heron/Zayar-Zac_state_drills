import React from 'react';

export default class Accordion extends React.Component {

	static defaultProps = {
		sections: [{}]
	}

    constructor(props) {
        super(props);
        this.state = {
            openIndex: null
        }
    }

	btnHandler = index => {
		this.setState({
			openIndex: index
		});
	}

    render() {
        
        let itemButtons = this.props.sections.map((section, index) => {
            return (
                <li key={index}>
                    <button className={'btnTest'} key={index} onClick={() => this.btnHandler(index)}>{section.title}</button>
					{(this.state.openIndex === index) && <p>{section.content}</p>}
				</li>
            )
        })

		return (
            <ul>
                <li>test</li>
                {itemButtons}
			</ul>

		);
	};
}