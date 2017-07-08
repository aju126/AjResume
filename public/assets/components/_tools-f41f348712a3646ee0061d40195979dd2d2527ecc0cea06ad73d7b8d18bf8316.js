var Tools = React.createClass({
	displayName: "Tools",

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
					"Tools"
				)
			),
			React.createElement(
				"div",
				{ className: "container-fluid" },
				this.props.tools.logos.map(function (logo, i) {
					return React.createElement(ToolsContent, { key: i, image: logo });
				})
			),
			React.createElement("hr", null)
		);
	}
});
