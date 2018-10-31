"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
    getInitalState: function() {
        return {
            authors: [],
            display: false
        };
    },

    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ 
                authors: AuthorApi.getAllAuthors(),
                display: true
            });
        }
    },

    render: function() {
        if (this.state.display) {
            return (
                <div>
                    <h1>Authors</h1>
                    <AuthorList authors={this.state.authors} />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>No Authors</h1>
                </div>
            );
        }
    }
});

module.exports = Authors;