var Recommend = React.createClass({

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6 ">
                        <Img src={ this.props.reco.image } style={Img_style} alt="logo" className="img-circle" id="img-circle"/>
                        <div>
                            <p>{ this.props.reco.desc }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Img_style = { width: '4em', height: '4em'}
