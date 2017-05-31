var Tech = React.createClass(
	{ 
		render() { 
			return ( 
				<div>
					<div>
            <h1 className="heading" id="about_heading">Intersted to work on</h1>
          </div>
          <div>
          	<h2 className="heading" id="quote-text">{this.props.tech.quote.quote}</h2>
          </div>
          <div className="container-fluid">
          {this.props.tech.logos.map((logo, i) =>
          	<TechContent key={i} image={logo}/>
          )} 
          </div>
					<hr />
				</div>
			) 
		} 
	}
);