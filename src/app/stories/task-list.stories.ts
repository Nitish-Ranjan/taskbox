// // src/app/components/task-list.stories.ts

// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule } from '@angular/common';
// import { TaskListComponent } from '../components/task-list.component';
// import { TaskComponent } from '../components/task.component';
// import { taskData, actionsData } from './task.stories';

// export default {
//   title: 'TaskList',
//   excludeStories: /.*Data$/,
//   decorators: [
//     moduleMetadata({
//       // imports both components to allow component composition with storybook
//       declarations: [TaskListComponent, TaskComponent],
//       imports: [CommonModule],
//     }),
//   ],
// };

// export const defaultTasksData = [
//   { ...taskData, id: '1', title: 'Task 1' },
//   { ...taskData, id: '2', title: 'Task 2' },
//   { ...taskData, id: '3', title: 'Task 3' },
//   { ...taskData, id: '4', title: 'Task 4' },
//   { ...taskData, id: '5', title: 'Task 5' },
//   { ...taskData, id: '6', title: 'Task 6' },
// ];
// export const withPinnedTasksData = [
//   ...defaultTasksData.slice(0, 5),
//   { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
// ];
// // default TaskList state
// export const Default = () => ({
//   component: TaskListComponent,
//   template: `
//     <app-task-list></app-task-list>
// `
// });
// // tasklist with pinned tasks
// export const WithPinnedTasks = () => ({
//   component: TaskListComponent,
//   template: `    
//   <app-task-list></app-task-list>
//   `
// });
// // tasklist in loading state
// export const Loading = () => ({
//   template: `
//           <app-task-list></app-task-list>
//       `,
// });
// // tasklist no tasks
// export const Empty = () => ({
//   template: `
//           <app-task-list></app-task-list>
//       `,
// });