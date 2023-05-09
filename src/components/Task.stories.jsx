import React from "react";

import Task from "./Task";

export default {
	component: Task,
	// Name that will appear in the sidebar of the Storybook app
	title: "Task",
};

const Template = (args) => <Task {...args} />;

// Functions for each of our test states.
// Story: a function that returns a rendered element (a component with a set of props) in a given state.

export const Default = Template.bind({});
Default.args = {
	task: {
		id: "1",
		title: "Test Task",
		state: "TASK_INBOX",
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: "TASK_PINNED",
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: "TASK_ARCHIVED",
	},
};
