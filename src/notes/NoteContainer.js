import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Note from './Note';

class NoteContainer extends React.Component {
    state = {

    }

    renderNotes = () => {
        return this.props.notes.map( (note) => {
            return <Note key={note.id} name={note.name} content= {note.content} note={note} />
        })
    }

    render() {
        return (
            <div clasName='note_list'>
                <ul>
                    {this.renderNotes()}
                </ul>
            </div>
        )
    }
}

export default withRouter(NoteContainer);