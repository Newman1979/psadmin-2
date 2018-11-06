"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.Component({
	propTypes: {
		courses: React.PropTypes.array.isRequired
	},

	deleteCourse: function(id, event) {
		event.preventDefault();
		CourseActions.deleteCourse(id);
		toastr.success('Course Deleted');
	},

	render: function() {
		var createCourseRow = function(course) {
			return (
				<tr key={course.id}>
                {/* onClick needs attention. onClick={follow link...}*/}
					<td><a href={this.course.watchHref} onClick={this.watchHref.bind(this, course.id)}>Watch</a></td>
					<td><Link to="manageCourse" params={{id: course.id}}>{course.id}</Link></td>
					<td>{course.title} {course.author.name}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Watch</th>
                        <th>delete</th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
					</thead>
					<tbody>
						{this.props.courses.map(createCourseRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = CourseList;