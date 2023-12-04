import './App.css'
import { ThemeProvider } from './context/ThemeContext' ;
import Navbar from './components/Nav/Navbar';
import Panel from './components/Panel/Panel';
import Header from './components/Header/Header';

function App() {
 

  return (
   /* <ThemeProvider value={[]}>
      <Navbar />
      <Panel />
    </ThemeProvider>
    */

    <Header />
  )
}

export default App
