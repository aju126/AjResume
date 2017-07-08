var Header = React.createClass({
    displayName: "Header",

    showBlog: function () {
        window.location.href = location.protocol + '//' + location.host + "/blogs/recent";
    },
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
            ),
            React.createElement(
                "button",
                { onClick: this.showBlog, style: { position: 'absolute',
                        right: '2em',
                        top: '2em' } },
                "My Blog"
            )
        );
    }
});
