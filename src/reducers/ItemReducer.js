import uuid from 'uuid/dist/v1';

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          name: action.item.name,
          id: uuid(),
        },
      ];
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
