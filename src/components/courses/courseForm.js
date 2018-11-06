"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({
	propTypes: {
		course:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Manage Course</h1>
				<Input
					name="title"
					label="Course Title"
					value={this.props.course.title}
					onChange={this.props.onChange}
					error={this.props.errors.title} />

				<Input
					name="author"
					label="Author Name"
					value={this.props.course.author.name}
					onChange={this.props.onChange}
					error={this.props.errors.course.author.name} />

                <Input
					name="category"
					label="Catagory"
					value={this.props.course.category}
					onChange={this.props.onChange}
					error={this.props.errors.category} />

                <Input
					name="length"
					label="Course Length"
					value={this.props.course.length}
					onChange={this.props.onChange}
					error={this.props.errors.length} />


				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = CourseForm;