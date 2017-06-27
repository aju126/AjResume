var About = React.createClass({
	displayName: "About",

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
					"About me"
				)
			),
			React.createElement(
				"div",
				{ className: "col-sm-6" },
				React.createElement(AboutContent, { about: this.props.about.about })
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-sm-3" },
					this.props.about.skill.map(function (skill, i) {
						return React.createElement(Skill, { key: i, skills: skill });
					})
				)
			),
			React.createElement("hr", null)
		);
	}
});
