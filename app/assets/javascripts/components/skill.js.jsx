var Skill = React.createClass({

	render(){
		return (
		<div className="skill-item">
      <div className="progress-title">{this.props.skills.tech}</div>
        <div className="progress">
            <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
                style={{width:this.props.skills.value + "%"}} className="progress-bar progress-bar-skill1">
                <span className="sr-only">{this.props.skills.value}
                </span>
            </div>
        </div>
      </div>
    )
	}
});