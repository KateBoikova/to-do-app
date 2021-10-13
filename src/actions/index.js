import ACTION_TYPES from './actionTypes';

export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = tasks => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks: tasks,
});

export const getTasksError = e => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error: e,
});

export const createTaskAction = task => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  task: task,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = task => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task: task,
});

export const createTaskError = e => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error: e,
});

export const updateTaskAction = task => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  task,
});

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = updatedTask => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  updatedTask,
});

export const updateTaskError = error => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error,
});

export const deleteTaskAction = task => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  task,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = deletedTask => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
});

export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error,
});

export const changeThemeAction = theme => ({
  type: ACTION_TYPES.CHANGE_THEME_ACTION,
  theme,
});
