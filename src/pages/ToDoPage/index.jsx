import React from 'react';
import CONSTANTS from '../../constants';
import styles from './ToDoPage.module.scss';
import ToDoForm from './../../components/forms/ToDoForm';
import ToDoList from '../../components/ToDoList';
import { changeThemeAction } from '../../actions';
import { ThemeContext } from '../../contexts';

function ToDoPage (props) {
  const { tasks, theme, changeTheme } = props;

  const styleMap = {
    [CONSTANTS.THEMES.BLACK]: {
      backgroundColor: 'black',
    },
    [CONSTANTS.THEMES.BEIGE]: {
      backgroundColor: '#ffe2d7',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.formContainer} style={styleMap[theme]}>
        <button className={styles.themeButton} onClick={changeTheme}>
          Change theme
        </button>
        <ToDoForm />
        {tasks.length === 0 ? (
          <span className={styles.noTasks}>There are no tasks yet</span>
        ) : (
          <ToDoList />
        )}
      </div>
    </ThemeContext.Provider>
  );
}
const mapStateToProps = state => state.todo;
const mapDispatchToProps = dispatch => {
  return { changeTheme: () => dispatch(changeThemeAction()) };
};
export default ToDoPage;
