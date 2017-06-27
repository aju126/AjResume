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
