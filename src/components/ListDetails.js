import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';
import ListItems from './ListItems';
import NewListItem from './NewListItem';

const ListDetails = ({ list }) => {
  const { dispatch } = useContext(WonderItemContext);
  return (
    <div>
      <h4>{list.name}</h4>
      {list.pinned && (
        <span onClick={() => dispatch({ type: 'UNPIN_LIST', id: list.id })}>
          unpin
        </span>
      )}
      {!list.pinned && (
        <span onClick={() => dispatch({ type: 'PIN_LIST', id: list.id })}>
          pin
        </span>
      )}
      <span onClick={() => dispatch({ type: 'REMOVE_LIST', id: list.id })}>
        Delete
      </span>
      <ListItems
        items={list.items}
        onRemove={(e) =>
          dispatch({
            type: 'REMOVE_LIST_ITEM',
            payload: { listId: list.id, itemIndex: e },
          })
        }
        onComplete={(e) =>
          dispatch({
            type: 'MARK_AS_COMPLETE',
            payload: { listId: list.id, itemIndex: e },
          })
        }
      />
      <NewListItem listId={list.id} />
    </div>
  );
};

export default ListDetails;
