var Contact = React.createClass({

    render(){
        return(
            <div>
                <div>
                    <h1 className="heading" id="about_heading">Contact</h1>
                    <div className="row" style={{padding: '0em 0em 4em 0em'}}>
                        <div className="col-md-5">
                            <Map />
                        </div>
                        <div className="col-md-7">
                            {this.props.contact.name.map((contacts, i) =>
                                components(contacts)
                            )}
                        </div>
                    </div>
                </div>
            </div>

        )

        function components(contacts) {

            if(contacts.download) {
                return <div className={`col-md-4 col-sm-4 text-center ${ contacts.color }`}>
                    <a className="first-box"
                        href={`${contacts.url}`}
                        download={`${contacts.download}`} >
                        <h3><span className={`${ contacts.classname } ${contacts.fcolor}`}></span></h3>
                        <h5>{contacts.name}</h5>
                    </a>
                </div>
            }else {
                return <div className={`col-md-4 col-sm-4 text-center ${ contacts.color }`}>
                    <a className="first-box"
                        href={`${contacts.url}`} >
                        <h3><span className={`${ contacts.classname } ${contacts.fcolor}`}></span></h3>
                        <h5>{contacts.name}</h5>
                    </a>
                </div>
            }

        }

    }
});