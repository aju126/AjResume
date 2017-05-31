var Recommendation = React.createClass(
    {
        render() {
            return (
                <div>
                    <div>
                        <h1 className="heading" id="about_heading">Recommendations</h1>
                        {this.props.recommend.name.map((reco, i) =>
                          <Recommend key={i} reco={reco}/>
                        )}
                    </div>
                </div>
            )
        }
    }
);