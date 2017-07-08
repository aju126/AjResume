var Timeline = React.createClass(
	{ 
		render() { 
			return ( 
				<div>
					<div>
            <h1 className="heading" id="about_heading">Career Path</h1>
          </div>
          <div>
          {this.props.timeline.name.map((company, i) =>
          	<TimelineContent key={i} comp={company} />
          )}
          </div>
					<hr />
				</div>
			) 
		} 
	}
);