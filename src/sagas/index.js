import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createTaskAction, updateTaskAction } from './ToDoSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTaskAction);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_ACTION, updateTaskAction);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_ACTION, deleteTaskAction);
}
export default rootSaga;
