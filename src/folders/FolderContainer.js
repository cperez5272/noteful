import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Folder from './Folder';

class FolderContainer extends React.Component {
    
    state = {

    }

    renderFolders = () => {
        return this.props.folders.map( (folder) => {
            return <Folder key={folder.id} folder={folder}/>
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className='folder_list'>
                <ul>
                   {this.renderFolders()}
                </ul>
            </div>
        )
    }
}

export default withRouter(FolderContainer);