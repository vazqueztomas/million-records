
import './App.css';
import Header from './components/Header';
import Section1 from './sections/Sec1';
import Section2 from './sections/Sec2'
import ButtonPlus from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Section1/>
        <ButtonPlus text = 'Ver más'></ButtonPlus>
        <Section2/>
      </header>
    </div>
  );
}

export default App;
