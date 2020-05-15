import uuid from 'uuid/dist/v1';

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_LIST':
      return [
        ...state,
        {
          ...action.list,
          id: uuid(),
        },
      ];
    case 'RENAME_LIST':
      return state.map((list) =>
        list.id === action.payload.id
          ? { ...list, name: action.payload.name }
          : list
      );
    case 'PIN_LIST':
      return state.map((list) =>
        list.id === action.id ? { ...list, pinned: true } : list
      );
    case 'UNPIN_LIST':
      return state.map((list) =>
        list.id === action.id ? { ...list, pinned: false } : list
      );
    case 'REMOVE_LIST':
      return state.filter((list) => list.id !== action.id);
    case 'ADD_LIST_ITEM':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              items: [
                ...list.items,
                {
                  name: action.payload.itemName,
                  completed: action.payload.completed,
                },
              ],
            }
          : list
      );
    case 'MARK_AS_COMPLETE':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              items: list.items.map((item) => {
                list.items[action.payload.itemIndex].completed = true;
                return item;
              }),
            }
          : list
      );
    case 'REMOVE_LIST_ITEM':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              items: list.items.filter(
                (item, i) => i !== action.payload.itemIndex
              ),
            }
          : list
      );
    default:
      return state;
  }
};
