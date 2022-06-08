import { useState } from 'react';

function ToDoHooks() {
    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([{text: 'CREATE', completed: true }, {text: 'READ', completed: true }, {text: 'UPDATE', completed: false }]);

    const addToDo = () => {
        if (!toDoInput.trim()) return;

        const newList = [...toDoList, {text: toDoInput, completed: false }];

        setToDoList(newList);
        setToDoInput('');
    };

    const deleteToDo = (index) => {
        const newArray = [...toDoList];

        newArray.splice(index, 1);

        setToDoList(newArray);
    };

    const toggleToDo = (index) => {
        const newArray = [...toDoList];

        newArray[index].completed = !newArray[index].completed;

        setToDoList(newArray);
    };

    return (
        <div>
        <h2>To Do App</h2>
        <input value={toDoInput} onChange={(e) => setToDoInput(e.target.value)} />
        <button onClick={addToDo}>add todo</button>
        <ul>
            {toDoList.map((item, key) => {
                return (
                    <li key={key} style={{textDecoration: item.completed && 'line-through'}}>
                        <span onClick={() => toggleToDo(key)}>{item.text}</span>
                        <button onClick={() => deleteToDo(key)}>delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default ToDoHooks;