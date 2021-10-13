import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function ToDoReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;
      return {
        ...state,
        isFetching: false,
        tasks,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      const newTasks = [...tasks, task];
      return {
        ...state,
        tasks: newTasks,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      const updatedTask = task;
      return {
        ...state,
        isFetching: true,
        tasks: [...tasks, updatedTask],
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { deletedTask } = action;
      const { tasks } = state;
      const newTasks = [...tasks];
      newTasks.splice(
        newTasks.findIndex(t => t.id === deletedTask.id),
        1
      );
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default ToDoReducer;
