import React from 'react';

const ListItems = ({ items, onRemove, onComplete }) => {
  return items.length ? (
    <>
      {items.map((item) => {
        return (
          <div className="list-item" key={item.id} onDoubleClick={() => onRemove(item.id)}>
            <input className="inp-cbx" id={'cbx' + item.id} type="checkbox" checked={item.completed} onChange={() => onComplete(item.id)} style={{ display: 'none' }} />
            <label className="cbx" htmlFor={'cbx' + item.id}>
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>{item.name}</span>
            </label>
          </div>);
      })}
    </>
  ) : null;
};

export default ListItems;

