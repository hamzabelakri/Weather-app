import {GET_DATA} from "./Types"
const initState = {}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    
    default:
      return state;
  }
};

export default Reducer;
