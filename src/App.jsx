import './App.css'
import { ThemeProvider } from './context/ThemeContext' ;
import Navbar from './components/Nav/Navbar';
import Panel from './components/Panel/Panel';

function App() {
 

  return (
    <ThemeProvider value={[]}>
      <Navbar />
      <Panel />
    </ThemeProvider>
  )
}

export default App
