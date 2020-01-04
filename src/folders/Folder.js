import React from 'react';
import { Link } from "react-router-dom";

const Folder = (props) => {
	return (
		<li>
			<Link to={`/folders/${props.folder.id}`}>
				{props.folder.name}
			</Link>
		</li>
	)
}
export default Folder;