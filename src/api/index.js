import axios from 'axios';

const axiosOptions = {
  baseUrl: 'http://127.0.0.1:3000/api',
};

const apiInstance = axios.create({ axiosOptions });

const tasks = [
  {
    id: Date.now(),
    body: 'First task',
    isDone: false,
  },
];

export const getTasks = () => {
  return Promise.resolve({ data: tasks });
};

export const createTask = task => {
  const newTask = { ...task, id: Date.now() };
  tasks.push(newTask);
  return Promise.resolve({ data: newTask });
};

export const deleteTask = id => {
  const index = tasks.findIndex(t => t.id === id);
  const deleteTask = tasks[index];
  return Promise.resolve({ data: tasks.splice(index, 1) });
};

export const updateTask = id => {
  const index = tasks.findIndex(t => id === t.id);
};
