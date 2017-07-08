var Map = React.createClass({
    displayName: 'Map',

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement('iframe', {
                src: 'https://www.google.com/maps/embed/v1/search?&q=bangalore+girinagar&key=AIzaSyA9aEUMENNHP2Z3Rk4Ia_XgQtAUcg3uLKU',
                style: Frame_Style
            })
        );
    }
});

var Frame_Style = {

    width: '100%',
    height: '20em',
    border: '2px solid black'
};
