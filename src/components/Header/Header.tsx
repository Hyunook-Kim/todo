import React, { Dispatch, SetStateAction } from "react";
import { TodoStatusFilterType, TodoStatusFilter } from "../../models/Todo";
import styles from "./Header.module.css";

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
    <header className={styles.header}>
      <ul className={styles.filters}>
        {statusFilterTypes.map((statusFilterType, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                statusFiltered === statusFilterType && styles.selected
              }`}
              onClick={() => onStatusFilteredChange(statusFilterType)}
            >
              {statusFilterType}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
