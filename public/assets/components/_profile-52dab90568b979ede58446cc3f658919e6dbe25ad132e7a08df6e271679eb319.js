var Profile = React.createClass({
	displayName: "Profile",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(Header, { name: this.props.profile.name,
				position: this.props.profile.designation,
				location: this.props.profile.location }),
			React.createElement("hr", null)
		);
	}
});
