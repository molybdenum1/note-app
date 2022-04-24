import './App.css';
import NoteList from './components/NoteList/NoteList';
import AchievedList from './components/AchievedList/AchievedList';

function App(props) {
  return (
    <div className="App">
      <h1>NOTE LIST</h1>
      <NoteList
      notes={props.state}
      />
      <h1>BTN</h1>
      <div className="note-btn">
        <button>Add a Note</button>
      </div>
      <h1>ACHIVED</h1>
      <AchievedList
      notes={props.state}/>
    </div>
  );
}

export default App;
