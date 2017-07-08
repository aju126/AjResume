var Recommend = React.createClass({
    displayName: 'Recommend',

    render: function () {
        return React.createElement(
            'div',
            { className: 'reco-main' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'reco-description' },
                    React.createElement(
                        'p',
                        null,
                        this.props.reco.desc
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-4 col-md-4' },
                    React.createElement(Img, { src: this.props.reco.image, style: Img_style, alt: 'logo', className: 'img-circle', id: 'img-circle' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-8 col-md-8' },
                    React.createElement(
                        'p',
                        null,
                        this.props.reco.name
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.props.reco.desi
                    )
                )
            )
        );
    }
});

var Img_style = { width: '4em', height: '4em', 'margin': ' 0 1em 1em 2em' };
