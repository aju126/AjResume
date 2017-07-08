var Recommendation = React.createClass({
    displayName: "Recommendation",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "h1",
                    { className: "heading", id: "about_heading" },
                    "Recommendations"
                ),
                this.props.recommend.name.map(function (reco, i) {
                    return React.createElement(
                        "div",
                        { className: "col-sm-4 col-md-4" },
                        React.createElement(Recommend, { key: i, reco: reco })
                    );
                })
            ),
            React.createElement("hr", null)
        );
    }
});
