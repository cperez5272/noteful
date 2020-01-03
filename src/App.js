import React from 'react';
import './App.css';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import FolderContainer from './folders/FolderContainer'
import NoteContainer from './notes/NoteContainer';

class App extends React.Component {
  render() {
    return (
      <>
      <div>
        <nav className='nav'>
          <Link to='/'>Noteful</Link>
        </nav>
      </div>
      <Switch>
        <Route path='/' component={ FolderContainer }/>
      </Switch>
      <Switch>
        <Route path='/' component={ NoteContainer }/>
      </Switch>
      </>
    )
  }
}

export default App;
