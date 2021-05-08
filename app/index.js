/*
* This is a JS component that renders the React API through the HTML page.
*/

//React Library
var React = require('react');
var ReactDOM = require('react-dom');

//React Components used
var Header = require('./components/Header');
var Content = require('./components/Content');
var Footer = require('./components/Footer');

//Other imports
import './style.css';
//var nameData = require("../data/names.json");

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);


ReactDOM.render(
    <Content />,
    document.getElementById('content')
);


ReactDOM.render (
    <Footer />,
    document.getElementById('footer')
);
