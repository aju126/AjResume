var TimelineContent = React.createClass({

	render(){
		return(
			<div className="container">    
        <div className="timeline">
          <div className='main'>
          <h4>{this.props.comp.name}</h4>
          <h5>{this.props.comp.designation}</h5>
          <h5>{this.props.comp.duration}</h5>
          </div>
          <ul>
          {this.props.comp.projects.map((project, i) => 
            <li>
              <h5>{project.title}</h5>
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