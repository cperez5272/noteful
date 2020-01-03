import React from 'react'
import { Link } from 'react-router-dom';

class FolderContainer extends React.Component {
    constructor(){
        super()
        this.sayHello = this.sayHello.bind(this)
    }

    sayHello = () => {
        alert('working')
    }
    render() {
        return (
            <div className='folder_list'>
                <ul>
                    <li onClick= {this.sayHello}>Folder One</li>
                    <li onClick= {this.sayHello}>Folder Two</li>
                    <li>Folder Three</li>
                    <li>Add a Folder</li>
                </ul>
            </div>
        )
    }
}

export default FolderContainer