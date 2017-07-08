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
