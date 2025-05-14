
import './App.css';
import Hotel from './components/Hotel';
import HotelByName from './components/HotelByName';

function App() {
  return (
    <div className="App">
        <Hotel />
        <HotelByName name="Renaissance" />
    </div>
  );
}

export default App;
