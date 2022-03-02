import { SET_USERS } from '../actions/types';

const initialState = {
  rolling: [
    { name: '------- Select HouseHold Member -------' }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        rolling: action.payload
      };
        default:
          return state;
      }
}

