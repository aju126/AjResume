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
var Login = React.createClass({
  displayName: "Login",

  render: function () {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "h1",
        null,
        "Hello,, ",
        this.props.wish
      ),
      React.createElement(
        "form",
        { className: "form-signin" },
        React.createElement(
          "h2",
          { className: "form-signin-heading" },
          "Please login"
        ),
        React.createElement("input", { type: "text", className: "form-control", name: "username", placeholder: "Email Address", required: "", autofocus: "" }),
        React.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password", required: "" }),
        React.createElement(
          "button",
          { className: "btn btn-lg btn-primary btn-block", type: "submit" },
          "Login"
        ),
        React.createElement(
          "span",
          null,
          "or"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Sign Up"
        )
      )
    );
  }
});
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
var Recommend = React.createClass({
    displayName: "Recommend",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-6 " },
                    React.createElement(Img, { src: this.props.reco.image, style: Img_style, alt: "logo", className: "img-circle", id: "img-circle" }),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            this.props.reco.desc
                        )
                    )
                )
            )
        );
    }
});

var Img_style = { width: '4em', height: '4em' };
var Signup = React.createClass({
  displayName: "Signup",

  render: function () {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "form",
        { className: "form-signin" },
        React.createElement(
          "h2",
          { className: "form-signin-heading" },
          "Sign up"
        ),
        React.createElement("input", { type: "text", className: "form-control", name: "username", placeholder: "Email Address", required: "", autofocus: "" }),
        React.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password", required: "" }),
        React.createElement("input", { type: "password", className: "form-control", name: "password confirmation", placeholder: "Confirm Password", required: "" }),
        React.createElement(
          "button",
          { className: "btn btn-lg btn-primary btn-block", type: "submit" },
          "Sign up"
        )
      )
    );
  }
});
var Tech = React.createClass({
  displayName: "Tech",

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
          "Intersted to work on"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "heading", id: "quote-text" },
          this.props.tech.quote.quote
        )
      ),
      React.createElement(
        "div",
        { className: "container-fluid" },
        this.props.tech.logos.map(function (logo, i) {
          return React.createElement(TechContent, { key: i, image: logo });
        })
      ),
      React.createElement("hr", null)
    );
  }
});
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
var AboutContent = React.createClass({
  displayName: "AboutContent",

  render: function () {

    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-sm-12" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-sm-6 text-left" },
              React.createElement(
                "p",
                null,
                this.props.about
              ),
              React.createElement(Img, { src: "/assets/pic.png", alt: "logo", className: "img-circle", id: "img-circle" })
            )
          )
        ),
        React.createElement("div", { className: "col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big" })
      )
    );
  }
});
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
var Recommendation = React.createClass({
    displayName: "Recommendation",

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
                    "Recommendations"
                ),
                this.props.recommend.name.map(function (reco, i) {
                    return React.createElement(Recommend, { key: i, reco: reco });
                })
            )
        );
    }
});
var Skill = React.createClass({
  displayName: "Skill",

  render: function () {
    return React.createElement(
      "div",
      { className: "skill-item" },
      React.createElement(
        "div",
        { className: "progress-title" },
        this.props.skills.tech
      ),
      React.createElement(
        "div",
        { className: "progress" },
        React.createElement(
          "div",
          { role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: this.props.skills.value + "%" }, className: "progress-bar progress-bar-skill1" },
          React.createElement(
            "span",
            { className: "sr-only" },
            this.props.skills.value
          )
        )
      )
    );
  }
});
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
var TimelineContent = React.createClass({
  displayName: "TimelineContent",

  render: function () {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "timeline" },
        React.createElement(
          "div",
          { className: "main" },
          React.createElement(
            "h4",
            null,
            this.props.comp.name
          ),
          React.createElement(
            "h5",
            null,
            this.props.comp.designation
          ),
          React.createElement(
            "h5",
            null,
            this.props.comp.duration
          )
        ),
        React.createElement(
          "ul",
          null,
          this.props.comp.projects.map(function (project, i) {
            return React.createElement(
              "li",
              null,
              React.createElement(
                "h5",
                null,
                project.title
              ),
              React.createElement(
                "p",
                null,
                project.description
              ),
              React.createElement(
                "p",
                null,
                project.skills
              ),
              React.createElement(
                "time",
                null,
                project.platform
              )
            );
          })
        )
      )
    );
  }
});
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
