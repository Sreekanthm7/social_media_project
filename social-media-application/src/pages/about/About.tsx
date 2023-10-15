import { ChangeEvent, useEffect, useState } from 'react'
import './About.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

type TodosType = {
   id: number,
   title: string,
   date: Date,
}[]

export function About() {


   const [startDate, setStartDate] = useState(new Date())
   const [title, setTitle] = useState<string>('')
   const [todos, setTodos] = useState<TodosType>([])

   function addTodo() {
      setTodos([...todos, { title: title, date: startDate, id: todos.length }])
      setTitle('')
      setStartDate(new Date())
   }

   function removeTodo(index: number, id: number) {
      const newData = todos.filter(element => id !== element.id)
      setTodos(newData)
   }
   useEffect(() => {
      listTodo()
   }, [todos])

   function getDate(date: Date) {
      setStartDate(date)
      console.log(startDate)
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setTitle(event.target.value)
   }

   function listTodo() {
      return todos.map((i, index) => (
         <div className="todo" key={index}>
            <div onClick={() => removeTodo(index, i.id)}><i className="delete-todo fa-solid fa-trash"></i></div>
            <h3>Title</h3>
            <span>{i.title}</span>
            <h3>Date</h3>
            <span>{`${i.date.getMonth() + 1}/${i.date.getDate()}/${i.date.getFullYear()}`}</span>
         </div>
      ))
   }

   return (
      <div className='about-main'>
         <h1>Todos</h1>
         <div className="add-todo">
            <label htmlFor="">Enter Text</label>
            <input type='text' className='input-todo' value={title} onChange={handleChange} />
            <label htmlFor="">Select Date</label>
            <div className="date-picker">
               <DatePicker selected={startDate} onChange={getDate} className='date' />
            </div>
            <button className='add-todo-btn' onClick={addTodo}>Add Todo</button>
         </div>
         <div className="todo-list">
            {
               listTodo()
            }
         </div>
      </div>
   )
}
// 11
