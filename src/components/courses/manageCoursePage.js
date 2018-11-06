"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            course: {
                id: '', 
                title: '',
                watchHref: '',
                author: {
                    id: '',
                    name: ''
                },
                category: '',
                length: null,
                errors: {},
                dirty: false
            }
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id; // from the path '/course: id'

        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Course title must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.author.name.length < 3) {
            this.state.errors.author.name = 'Author name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);    
        } else {
            CourseActions.createCourse(this.state.course);
        }
        
        this.setState({dirty: false});
        toastr.success('Course saved.');
        this.transitionTo('course');
    },

    render: function() {
        return (
            <CourseForm 
                title={this.state.course.title}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageCoursePage;