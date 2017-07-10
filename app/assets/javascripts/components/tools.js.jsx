var ToolsContent = React.createClass({

	render(){
		var source = "/assets/"+ this.props.image.logo
		return(
			<div className="col-md-1 col-sm-1" >
				<Img src={source} className="img-circle" id="img-tech"/>
      </div>
		)
	}
});