import {WEEK} from "../../data/week";

const initialState = {
  week:WEEK
};

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    // case TOGGLE_WEEK:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}

export {weekReducer};