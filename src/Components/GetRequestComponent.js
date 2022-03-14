import React from 'react';
import $ from 'jquery';

class GetRequestComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: null
		};

	}

	componentDidMount() {
		// GET request using AJAX
		// Should enable CORS when calling localhost
		
		$.ajax({
			url: 'http://localhost:8080/helloWorld',
			type: 'GET',
			success: function(response) {
				const res = JSON.parse(response);
				console.log(res);
				this.setState({
					text: res.text
				});
			}.bind(this),
			error: function() {
				console.log("Error");
			}.bind(this)
	
		});
	}

	render() {
		const { text } = this.state;
		return (
			<div className="card text-center m-3">
				<h5 className="card-header">Simple GET Request</h5>
				<div className="card-body">
					Response text from backend: {text}
				</div>
			</div>
		);
	}
}

export default GetRequestComponent;
