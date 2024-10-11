import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import ThemedTable from './ThemedTable';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
      <ThemedTable />
    </ThemeProvider>
  );
};

export default App;
