import './App.css';
import SlotM from './components/SlotM';

const App = () => {
  return (
    <>
      <h1 className='heading_style'>🎰 Welcome to <span style={{ fontWeight: "bold" , backgroundColor: 'lightgray'}}>Slot Machine Game</span> 🎰</h1>
      <div className='slot-machine'>
        <SlotM x='😄' y='😄' z='😄' />
        <SlotM x='😄' y='🎅' z='😄' />
        <SlotM x='😄' y='😄' z='😆' />
        <SlotM x='😆' y='😆' z='😆' />
      </div>
    </>
  );
}

export default App;
