import React from 'react';

const ListItems = ({ items, onRemove, onComplete }) => {
  return items.length ? (
    <div>
      <div>
        {items.map((item, i) => {
          return (
            <div key={i}>
              {item.name}
              {!item.completed && (
                <span onClick={() => onComplete(i)}>Complete</span>
              )}
              <span onClick={() => onRemove(i)}>Delete</span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="empty">Empty list</div>
  );
};

export default ListItems;
