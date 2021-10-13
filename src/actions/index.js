import ACTION_TYPES from './actionTypes';

export const createTaskAction = newTask => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  newTask,
});

export const updateTaskAction = id => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  id,
});

export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id,
});

export const changeThemeAction = () => ({
  type: ACTION_TYPES.CHANGE_THEME_ACTION,
});
