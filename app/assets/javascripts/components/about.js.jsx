var AboutContent = React.createClass({

	render(){

		return(
			<div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6 text-left">
                <p>{ this.props.about }</p>
                <Img src="/assets/pic.png" alt="logo" className="img-circle" id="img-circle"/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
        </div>
      </div>
		)
	}
});