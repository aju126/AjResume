var Header = React.createClass (
	{
		render() {
			return (       
      <div>
        <h1>Hello.</h1>
        <h1>I'm <span className="text-primary">{this.props.name}</span>, 
         a <span className="text-primary"> {this.props.position}</span> living in {this.props.location}</h1>
      </div>
		)		
		}
	}
);