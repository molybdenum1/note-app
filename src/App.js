import './App.css';
import NoteList from './components/NoteList/NoteList';
import AchievedList from './components/AchievedList/AchievedList';
import NoteBTN from './components/NoteBtn/NoteBTN';
import Form from './components/Form/Form';


function App(props) {
  return (
    <div className="App">
      <h1>NOTE LIST</h1>
      <NoteList
      notes={props.state.notes}
      />
      <h1>BTN</h1>
      <NoteBTN open={false}>
        <Form type={props.state}/>
      </NoteBTN>
      <h1>ACHIVED</h1>
      <AchievedList
      state={props.state}/>
    </div>
  );
}

export default App;
