var ToolsContent = React.createClass({
	displayName: "ToolsContent",

	render: function () {
		var source = "/assets/" + this.props.image.logo;
		return React.createElement(
			"div",
			{ className: "col-md-1 col-md-1" },
			React.createElement(Img, { src: source, className: "img-circle", id: "img-tech" })
		);
	}
});
