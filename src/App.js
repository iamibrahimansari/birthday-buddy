import './App.css';
import './index.css';
import './components/style.css';
import './components/media-query.css';
import users from './data/data';
import Header from './components/Header';
import PeopleList from './components/PeopleList';
import Footer from './components/Footer';
import {useState} from 'react';

const App = () => {
  const [list, setList] = useState(users);
  const clearAll = () =>{
    setList([]);
  }
  return (
    <div className="App">
      <Header numOfPeople={list.length && 5} />
      <ul>
        {
          list.map(user => <PeopleList {...user} />)
        }
      </ul>
      <Footer text='Clear All' onClick={clearAll} />
    </div>
  );
}

export default App;
