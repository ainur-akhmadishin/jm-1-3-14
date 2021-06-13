
import React from 'react';
import TasksFilter from '../tasks-filter';
import './footer.css';


const Footer  = ({todos,count, btnClear, filter, btnFilter})=>{
	return (

        <footer className="footer">
          <span className="todo-count">{count} items left</span>
         <TasksFilter
			todos = {todos}
		   filter = {filter}
		   btnFilter = {btnFilter}
		/>
          <button className="clear-completed"
			onClick = {btnClear}
			>Clear completed</button>
        </footer>
	)
}




export default Footer;