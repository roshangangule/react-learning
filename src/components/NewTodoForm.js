import React, {useState} from "react";

function NewTodoForm (props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    // const descriptionChange = (event) => {
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     console.log(event.target.value);
    //     setAssigned(event.target.value);
    // }

    const onSubmitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description,assigned);
            setAssigned('');
            setDescription('');
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type='text' 
                        className="form-control" 
                        onChange={e => setAssigned(e.target.value)} 
                        value={assigned}
                        required
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        row = {3} 
                        className="form-control" 
                        onChange={e => setDescription(e.target.value)} 
                        value={description}
                        required
                        ></textarea>
                </div>
            </form>
            <button className="btn btn-primary" onClick={onSubmitTodo}>Add Todo</button>
        </div>
    );
}

export default NewTodoForm;