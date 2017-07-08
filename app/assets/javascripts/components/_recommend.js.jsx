var Recommend = React.createClass({

    render(){
        return(
            <div className= 'reco-main'>
                <div className= 'row'>
                    <div className='reco-description'>
                        <p>{ this.props.reco.desc }</p>
                    </div>
                        <div className="col-sm-4 col-md-4">
                            <Img src={ this.props.reco.image } style={Img_style} alt="logo" className="img-circle" id="img-circle"/>
                        </div>
                        <div className="col-sm-8 col-md-8">
                            <p>{ this.props.reco.name }</p>
                            <p>{ this.props.reco.desi }</p>
                        </div>
                </div>
            </div>
        )
    }
});

var Img_style = { width: '4em', height: '4em', 'margin': ' 0 1em 1em 2em'}
