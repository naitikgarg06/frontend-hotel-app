
import './App.css';
import AddHotelForm from './components/AddHotelForm';
import Hotel from './components/Hotel';
import HotelByName from './components/HotelByName';

function App() {
  return (
    <div className="App">
        <AddHotelForm />
        <Hotel />
        <HotelByName name="Renaissance" />
    </div>
  );
}

export default App;
