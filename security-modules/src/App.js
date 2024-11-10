import './App.css';
import AESEncryption from './components/AESEncryption/AESEncryption'; 
import XSSProtection from './components/XSSProtection/XSSProtection';

function App() {
  return (
    <div className="App">

      <AESEncryption />
      <XSSProtection />
      

    </div>
  );
}

export default App;
