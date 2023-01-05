import React from "react";
import './Result.css';

class Result extends React.Component {

	constructor(props) {
		console.log('props', props.type)
		super(props);
	}

	highlight(text) {
		const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
		const textArray = text.split(new RegExp(regEscape(this.props.highlight), "ig"));
		return (
		    <span class="highlight">
		      {textArray.map((item, index) => (
		        <>
		          {item}
		          {index !== textArray.length - 1 && (
		            <b>{this.props.highlight}</b>
		          )}
		        </>
		      ))}
		    </span>
		);
	}

	render() {
		return (
			<div class="result-field">
				<div type="text" class="result">
					<div class="command">
						!{this.highlight(this.props.command)}
					</div>
					<div class="description">
						{this.highlight(this.props.description)}
					</div>
				</div>
			</div>
		)
	}
}

export default Result;
