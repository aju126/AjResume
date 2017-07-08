var Signup = React.createClass({

	render() {
		return(
			<div className="wrapper">
    		<form className="form-signin">       
      		<h2 className="form-signin-heading">Sign up</h2>
      		<input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      		<input type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <input type="password" className="form-control" name="password confirmation" placeholder="Confirm Password" required=""/>      
      		<button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
    		</form>
  		</div>
		)
	}
});