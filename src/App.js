import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'
import StoreData from "./Dummy.Store";
import FolderContainer from './folders/FolderContainer'
import NoteContainer from './notes/NoteContainer';
import PageNotFound from './PageNotFound';

class App extends Component {

  state = {
    folders: [],
    notes: [],
    foundFolder: []
  }

  componentDidMount() {
    this.setState({
      folders: StoreData.folders,
      notes: StoreData.notes
    });
  }

  filteredNotes = () => {
    return this.state.folders.filter(folder => folder.id === this.state.notes[0].folderId);
  }

  render() {
    // console.log(this.filteredNotes());
    return (
      <>
        <div>
          <nav className='nav'>
            <Link to='/'>Noteful</Link>
            <Link to="/folders"> Folders </Link>
            <Link to="/notes"> Notes </Link>
          </nav>
        </div>
        <Switch>
          <Route path='/folders' render={() => <FolderContainer folders={this.state.folders} />} />
          <Route path='/notes' render={() => <NoteContainer notes={this.state.notes} />} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </>
    )
  }
}

export default withRouter(App);
