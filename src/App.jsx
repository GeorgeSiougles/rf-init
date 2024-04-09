import './App.css';
import CharacterInput from './components/CharacterInput';
import OrderedCharacters from './components/OrderedCharacters';

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <CharacterInput />
        <CharacterInput />
        <CharacterInput />
        <CharacterInput />
        <CharacterInput />
      </div>
      <div>
        <button className="btn btn-active btn-accent">Add new Character</button>
        <button className="btn btn-active btn-neutral">Done rolling</button>
      </div>
      <div>
        <div className="badge">Current Character:</div>
        <div className="badge">Round Number #</div>
        <button className="btn btn-active btn-neutral">End turn</button>
        <OrderedCharacters />
      </div>
    </div>
  );
}

export default App;
