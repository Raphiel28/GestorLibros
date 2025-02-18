
import './App.css';
import { MainLayout } from './MainLayout/MainLayout';
import { GlobalProvider } from './Contexto/Contexto';

function App() {
  return (
    <div className="App">
    <GlobalProvider>
       <MainLayout/>
       </GlobalProvider>
    </div>
  );
}

export default App;
