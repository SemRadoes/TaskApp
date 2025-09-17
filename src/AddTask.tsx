import './inputbar.css';
import { useState } from 'react';

const [tags, setTags] = useState(['household', 'work', 'garden']);
function AddTask(){
    return(
        <div className='wrapperTask'>
            <div className="inputbar">
                <input type="text" className="inputtaskbar" placeholder="Add task"/>
                <select name="tags[]" id="tags" className="selectTags" multiple>
                    <option value="" disabled selected>
                        <p className="selectTags">select tags</p>
                    </option>
                    <option value="household">household</option>
                    <option value="work">work</option>
                    <option value="garden">garden</option>
                </select>
            </div>
            <button className="inputbutton">Add task</button>
        </div>
    )
}

export default AddTask;