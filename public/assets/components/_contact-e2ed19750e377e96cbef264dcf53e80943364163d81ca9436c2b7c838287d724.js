var Contact = React.createClass({
    displayName: "Contact",

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
                    "Contact"
                ),
                React.createElement(
                    "div",
                    { className: "row", style: { padding: '0em 0em 4em 0em' } },
                    React.createElement(
                        "div",
                        { className: "col-md-5" },
                        React.createElement(Map, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-7" },
                        this.props.contact.name.map(function (contact, i) {
                            return React.createElement(
                                "div",
                                { className: "col-md-4 text-center " + contact.color },
                                React.createElement(
                                    "a",
                                    { className: "first-box",
                                        href: "" + contact.url },
                                    React.createElement(
                                        "h1",
                                        null,
                                        React.createElement("span", { className: contact.classname + " " + contact.fcolor })
                                    ),
                                    React.createElement(
                                        "h5",
                                        null,
                                        contact.name
                                    )
                                )
                            );
                        })
                    )
                )
            )
        );
    }
});
