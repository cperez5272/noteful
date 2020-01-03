import React from 'react'

class NoteContainer extends React.Component {
    render() {
        return (
            <div className='note_list'>
                <li>
                <h2>Note One</h2>
                <p>date published: Jan 8th 2020</p> 
                <button>delete here</button>
                </li>
                <li>
                <h2>Note Two</h2>
                <p>date published: Jan 8th 2020</p> 
                <button>delete here</button>
                </li>
            </div>
        )
    }
}

export default NoteContainer