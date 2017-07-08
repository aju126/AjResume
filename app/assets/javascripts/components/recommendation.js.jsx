var Recommendation = React.createClass(
    {
        render() {
            return (
                <div>
                    <div className='container'>
                        <h1 className="heading" id="about_heading">Recommendations</h1>
                        {this.props.recommend.name.map((reco, i) =>
                          <div className="col-sm-4 col-md-4">
                              <Recommend key={i} reco={reco}/>
                          </div>
                        )}
                    </div>
                        <hr />
                </div>
            )
        }
    }
);
