/*
* This is a JS component that renders the display for the footer section of the HTML page.
*/

var React = require('react');
var ReactDOM = require('react-dom');

class Footer extends React.Component {
    render() {
        return <p>This chart is property of Scholastic Publishing Corp., written by Dav Pilkey and published
                  by Scholastic Publishing &copy; 2000
        </p>;
    }
}

module.exports = Footer;