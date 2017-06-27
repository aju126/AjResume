var TechContent = React.createClass({
	displayName: "TechContent",

	render: function () {
		var source = "/assets/" + this.props.image.logo;
		return React.createElement(
			"div",
			{ className: "col-sm-4 col-md-3", style: { padding: 0 } },
			React.createElement(Img, { src: source, className: "img-responsive", id: "img-tech" })
		);
	}
});
