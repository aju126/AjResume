var TechContent = React.createClass({
	render(){
		var source = "/assets/"+ this.props.image.logo
		return(
			<div className="col-sm-4 col-md-3" style={{padding:0}}>
				<Img src={source} className="img-responsive" id="img-tech"/>
      </div>
		)
	}
});