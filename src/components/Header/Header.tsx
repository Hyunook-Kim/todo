import React, { Dispatch, SetStateAction } from "react";
import { TodoStatusFilterType, TodoStatusFilter } from "../../models/Todo";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../../context/DarkModeContext";

interface IProps {
  statusFiltered: TodoStatusFilterType;
  onStatusFilteredChange: Dispatch<SetStateAction<TodoStatusFilterType>>;
}

const Header: React.FC<IProps> = ({
  statusFiltered,
  onStatusFilteredChange,
}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const statusFilterTypes: TodoStatusFilterType[] =
    Object.values(TodoStatusFilter);

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {isDarkMode ? <HiSun /> : <HiMoon />}
      </button>
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
