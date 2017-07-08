var Timeline = React.createClass({
	displayName: "Timeline",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					{ className: "heading", id: "about_heading" },
					"Career Path"
				)
			),
			React.createElement(
				"div",
				null,
				this.props.timeline.name.map(function (company, i) {
					return React.createElement(TimelineContent, { key: i, comp: company });
				})
			),
			React.createElement("hr", null)
		);
	}
});
