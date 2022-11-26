import React, {useState} from 'react';


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
 // imported form React, useState is a built in function that targets the specific element you want to change the state of (props.title). this is an array, that takes two elements, the first will always be the name we give the variable(props.title = title), and the second will be the function of changing the state (setTitle)// these are good naming practices, but the names of the elements are up to you. the functionality is important, the first element will be what is changing, the second will be the function to change it. 
  const [title, setTitle] = useState(props.title);
  
  
  //function for onclick// we call the useState function in the clickHandler function. the parameter we are passing through is whatever the function is changing the element to. in this instance, the static message is being altered to 'updated in the Dom'
  const clickHandler = () => {
    setTitle('Updated!');
  };
   return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className= "expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* how to add "event listener" with react. in the JSX just like html you would add a button, but instead with the button you can add the event being listened for, in this instance onClick (click). then in curly braces you put in the function */}
      <button onClick={clickHandler}> Change title</button>
    </Card>
  );
}

export default ExpenseItem;
