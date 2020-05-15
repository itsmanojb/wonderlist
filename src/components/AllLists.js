import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';
import ListDetails from './ListDetails';

const AllList = () => {
  const { lists } = useContext(WonderItemContext);
  return lists.length ? (
    <div className="itemlist">
      {lists.map((list) => {
        return <ListDetails list={list} key={list.id} />;
      })}
    </div>
  ) : (
    <div className="empty">Nothing's here</div>
  );
};

export default AllList;
