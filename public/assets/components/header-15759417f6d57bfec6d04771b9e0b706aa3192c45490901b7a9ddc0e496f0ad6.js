var Header = React.createClass({
	displayName: "Header",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Hello."
			),
			React.createElement(
				"h1",
				null,
				"I'm ",
				React.createElement(
					"span",
					{ className: "text-primary" },
					this.props.name
				),
				", a ",
				React.createElement(
					"span",
					{ className: "text-primary" },
					" ",
					this.props.position
				),
				" living in ",
				this.props.location
			)
		);
	}
});
