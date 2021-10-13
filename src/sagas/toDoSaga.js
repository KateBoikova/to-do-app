import { put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../api';

export function * createTaskAction () {
  yield put({ type: ACTION_TYPES.CREATE_TASK_ACTION });
  try {
    const { data: tasks } = yield API.createTask();
  } catch (e) {
    yield put({ type: ACTION_TYPES.CREATE_TASK_ERROR });
  }
}

export function * updateTaskAction () {
  yield put({type: ACTION_TYPES.UPDATE_TASK_ACTION});
  try {
    const 
  } catch (e) {
    yield put({type: ACTION_TYPES.UPDATE_TASK_ERROR});
  }
}

export function * deleteTaskAction () {
  yield put({type: ACTION_TYPES.DELETE_TASK_ACTION});
  try {
    const
  } catch (e) {
    yield put({type: ACTION_TYPES.DELETE_TASK_ERROR})
  }

}
