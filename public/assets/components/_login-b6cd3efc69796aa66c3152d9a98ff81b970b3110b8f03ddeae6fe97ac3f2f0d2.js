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
