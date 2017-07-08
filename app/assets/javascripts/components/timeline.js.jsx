var TimelineContent = React.createClass({

	render(){
		return(
			<div className="container">    
        <div className="timeline">
          <div className='main'>
          <h3>{this.props.comp.name}</h3>
          <h5>{this.props.comp.designation}</h5>
          <h5>{this.props.comp.duration}</h5>
          </div>
          <ul>
          {this.props.comp.projects.map((project, i) => 
            <li>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p>{project.skills}</p>
              <time>{project.platform}</time>
            </li>
          )}
          </ul>
      </div>
    </div>
		)
	}
});