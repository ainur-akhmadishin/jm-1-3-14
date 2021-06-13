import React, {Component} from 'react';
import './tasks-filter.css';
 

export default class TasksFilter extends Component{

	button = [
		{name:'all', value:'All'},	
		{name:'active', value:'Active'},	
		{name:'complected', value:'Complected'},	
	
	]


	render() {
		const buttons  = this.button.map(el =>{
			let classNm = ''
			if (this.props.filter === el.name) classNm += 'selected'
			return(
				<li key = {el.name}>
					<button className = {classNm}
					onClick = {() =>this.props.btnFilter(el.name)}
					>{el.value}</button>
				</li>
			)
		})	
		
		
		return (
	 
			<ul className="filters">
				{buttons}
			</ul>
		)
		
	}

	
}

