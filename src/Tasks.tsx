import './taskfield.css';
import './inputbar.css';
import { useState } from 'react';


const [tasks, setTasks] = useState([]);
const [tags, setTags] = useState([]);
const [name, setName] = useState("");
const newTask = (event: any) =>{
    const newTask = {
        name: name,
        tags: tags
    }
    setTasks([...tasks, newTask]);
}


export function AddTask(){
    return(
        <div className='wrapperTask'>
            <div className="inputbar">
                <input type="text" className="inputtaskbar" value={name} onChange={e => setName(e.target.value)} name="task" placeholder="Add task"/>
                <label className='checkbox'>
                    <input type="checkbox" name="tags[]" value="Work" onChange={e => setTags(...tags.concat(e.target.value))}/> Work
                </label>
                <label className='checkbox'>
                    <input type="checkbox" name="tags[]" value="Garden" /> Garden
                </label>
                <label className='checkbox'>
                    <input type="checkbox" name="tags[]" value="Household"/> Household
                </label>
            </div>
            <button className="inputbutton" 
                onClick={() => {
                newTask;
                setTags([
                    ...tags,
                    tags
                ]);
                }}
            >Add task
            </button>
        </div>
    )
}

export function TaskField(){
    return(
        <div className="taskfield">
            <div className='task'>
                <div className='tags'>
                    <p className='tag tagHousehold'>household</p>
                </div>
                <p className='tasktekst'>Clean up my room</p>
            </div>
            <div className='task'>
                <div className='tags'>
                    <p className='tag tagGarden'>garden</p>
                </div>
                <p className='tasktekst'>Cut grass</p>
            </div>
            <div className='task'>
                <div className='tags'>
                    <p className='tag tagWork'>work</p>
                </div>
                <p className='tasktekst'>make instagram reel</p>
            </div>
            
        </div>
    )
}

