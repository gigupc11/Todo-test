import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState([])
  const [comment,setComment] = useState('')

  const clickAddHandler = (event) => {
    const list = {
      id: todo.length + 1,
      comment,
    }

    setTodo([...todo,list])
    setComment('')
  }

  const changeHandler = (event) => {
    setComment(event.target.value)
  }

  
  return (
    <div>
      <div className='input'>
        <input value={comment} onChange={changeHandler}/>
      <button onClick={clickAddHandler}>추가하기</button></div>
        <div>
          <h2 className='input'>Todo List</h2>
        </div>
        <div className='box-grp'>
          {todo.map((item) => (
              <div className='box' key={item.id}>
               {item.comment}
              </div>
          ))}
          </div>


    </div>
  );
}

export default App;



 
