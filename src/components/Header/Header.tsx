import React, { Dispatch, SetStateAction } from "react";
import { TodoStatusFilterType, TodoStatusFilter } from "../../models/Todo";

interface IProps {
  statusFiltered: TodoStatusFilterType;
  onStatusFilteredChange: Dispatch<SetStateAction<TodoStatusFilterType>>;
}

const Header: React.FC<IProps> = ({
  statusFiltered,
  onStatusFilteredChange,
}) => {
  const statusFilterTypes: TodoStatusFilterType[] =
    Object.values(TodoStatusFilter);

  return (
    <header>
      <ul>
        {statusFilterTypes.map((statusFilterType, index) => (
          <li key={index}>
            <button onClick={() => onStatusFilteredChange(statusFilterType)}>
              {statusFilterType}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
