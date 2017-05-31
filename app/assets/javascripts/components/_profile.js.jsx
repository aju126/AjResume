var Profile = React.createClass(
	{ 
		render() { 
			return ( 
				<div>
					<Header name={this.props.profile.name}
                         position={this.props.profile.designation}
                         location={this.props.profile.location}/>
					<hr />
				</div>
			) 
		} 
	}
);
