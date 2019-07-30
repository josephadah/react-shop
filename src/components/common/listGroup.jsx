import React from "react";

const ListGroup = props => {
  const {
    items,
    selectedItem,
    textProperty,
    valueProperty,
    onItemSelected
  } = props;

  const listClass = item => {
    let classes = "list-group-item cursor-pointer ";
    if (selectedItem[valueProperty] === item[valueProperty]) {
      classes += "active";
    }
    return classes;
  };

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={listClass(item)}
          onClick={() => props.onSelectItem(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "category_id"
};

// ListGroup.propTypes = {
//   items: propTypes.array.isRequired,
//   selectedItem: propTypes.object.isRequired
// };

export default ListGroup;
