var About = React.createClass(
	{ 
		render() { 
			return ( 
				<div>
				<div>
            <h1 className="heading" id="about_heading">About me</h1>
          </div>
				<div className="col-sm-6">
					<AboutContent about={this.props.about.about}/>
					</div>
					<div className="row">
						<div className="col-sm-3">
          
          { this.props.about.skill.map((skill, i)=>
          	<Skill key={i} skills={skill} />
          )}
          </div>
					</div>
					<hr />
				</div>
			) 
		} 
	}
);
