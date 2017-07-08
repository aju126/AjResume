var Tools = React.createClass(
	{ 
		render() { 
			return ( 
				<div>
					<div>
            <h1 className="heading" id="about_heading">Tools</h1>
          </div>
          <div className="container-fluid">
          {this.props.tools.logos.map((logo, i) =>
          	<ToolsContent key={i} image={logo}/>
          )} 
          </div>
					<hr />
				</div>
			) 
		} 
	}
);