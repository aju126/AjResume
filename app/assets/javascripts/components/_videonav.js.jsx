var VideoNav = React.createClass({

    render(){
        return(
            <div className="container-fluid move-side">
                <div className="row">
                    <div className="col-md-3 col-sm-3 sidebar1">
                        <h1>Videos</h1>
                        <div className="left-navigation">
                            <ul className="list">
                                {this.props.videos.name.map((video, i) =>
                                    <li class="list">
                                        <div class="dropdown">
                                            <i class="fa fa-list" aria-hidden="true"></i>{video.heading}<i class="fa fa-plus pull-right" aria-hidden="true"></i>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <br />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
});