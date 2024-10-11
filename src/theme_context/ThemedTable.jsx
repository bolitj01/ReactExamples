import styles from './ThemedTable.module.css';
import {useTheme} from './ThemeContext'; // Import the ThemeContext

const ThemedTable = () => {
  const { theme } = useTheme(); // Get the current theme from ThemeContext

  const tableClasses = theme === 'dark' ? styles.darkTable : styles.lightTable;

  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, index) => (
          <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td>Data {index + 1}.1</td>
            <td>Data {index + 1}.2</td>
            <td>Data {index + 1}.3</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ThemedTable;
