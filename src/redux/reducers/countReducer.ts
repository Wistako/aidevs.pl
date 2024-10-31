// selectors
export const countSelector = (state: any) => state.count;
// reducer
const countReducer = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
// action name creator
const actionNameCreator = (name: string) => `app/${name}`;
const INCREMENT = actionNameCreator('INCREMENT');

// action creators
export const increment = () => ({ type: INCREMENT });

// thunks

export default countReducer;
