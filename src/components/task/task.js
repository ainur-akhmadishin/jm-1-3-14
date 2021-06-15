import React from 'react';
import './task.css';

const  Task = ({ text, addTime, onDelete, onActive, active} ) => {
	

		let liClass ='';
		let checked = false;
		if (!active){
			liClass +='completed';
			checked = !checked;
		}
		
		
		return <li className={liClass} >
				<div className="view">
					<input className="toggle" type="checkbox" checked = {checked} onClick = {onActive} readOnly/>
					<label>
						<span className="description" onClick = {onActive}>{text}</span>		
						<span className="created"> created {addTime} ago </span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy"
					onClick = {onDelete}
					></button>
					
				</div>
				<input type="text" className="edit" value = {text} readOnly/>
          	</li>

}


export default Task;