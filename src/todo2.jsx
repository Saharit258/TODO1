import React, { useState } from 'react';

function Todo2() {
    const [todo, setTodo] = useState([]);
    const [news, setNews] = useState('');
    const [edits, setEdits] = useState({ id: null, text: '' });

    const submit = () => {
        if (edits.id) {
            const editTodo = todo.map((item) => {
                if (item.id === edits.id)return { ...item, text: news }
                return item;
            });
            setTodo(editTodo);
            setNews('');
            setEdits(undefined);
        } else {
            setTodo([...todo, { id: Date.now(), text: news }]);
            setNews('');
        }
    };

    const edit = (id) => {
        const edits = todo.find((todo) => todo.id === id);
        setEdits({ id: edits.id, text: edits.text });
        setNews(edits.text);
    };

    const remove = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
        // const remove = ((todo) => todo.id === id);
        // const removeid = todo.findIndex(todo => todo.id === id)
        // console.log("todo.id",todo.id)
        // setTodo(todo.splice(removeid, 1));
        // console.log("id",removeid)
        // return true;
    };

    return (
        <>
            <div>
                <input type="text" value={news} onChange={(event) => setNews(event.target.value)} />
                <button onClick={submit}>ตกลง</button>
            </div>
            <div>
                {todo.map((todo, item) => (
                    <tr key={item}>
                        <span>{todo.text}</span>
                        <button onClick={() => edit(todo.id)}>แก้ไข</button>
                        <button onClick={() => remove(todo.id)}>ลบ</button>
                    </tr>
                ))}
            </div>
        </>
    );
}

export default Todo2;
