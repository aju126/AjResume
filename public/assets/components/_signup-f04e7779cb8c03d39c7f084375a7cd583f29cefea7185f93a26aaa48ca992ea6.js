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
