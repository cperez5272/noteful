import React from 'react';
import { Link } from "react-router-dom";

const Note = (props) => {
	return (
		<li>
			<Link to={`/notes/${props.note.id}`}>
				{props.note.name}
			</Link>
		</li>
	)
}
export default Note;