import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  theme: [],
  isFetching: false,
  error: null,
};

function themeReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_THEME_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.CHANGE_THEME_SUCCESS: {
      const { theme } = action;
      const newTheme = theme;
      return {
        ...state,
        theme: newTheme,
        isFetching: false,
      };
    }
    case ACTION_TYPES.CHANGE_THEME_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
  }
}

export default themeReducer;
