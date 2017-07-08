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
                    { role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100",
                        style: { width: this.props.skills.value + "%" }, className: "progress-bar progress-bar-skill1" },
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
