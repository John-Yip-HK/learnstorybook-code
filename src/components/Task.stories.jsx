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

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
	task: {
		...Default.args.task,
		title: longTitleString,
	},
};
