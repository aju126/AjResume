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
