var Header = React.createClass (
{
    showBlog() {
        alert({BASE_URL});
        window.location.href = {BASE_URL} + "/blogs/recent"
    },
	render() {
	return (
      <div>
        <h1>Hello.</h1>
        <h1>I'm <span className="text-primary">{this.props.name}</span>,
         a <span className="text-primary"> {this.props.position}</span> living in {this.props.location}</h1>
        <button onClick={this.showBlog} style={{position: 'absolute',
            right: '2em',
            top: '2em'}}>My Blog</button>

      </div>
	)
	}
}
);
