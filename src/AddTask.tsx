import './inputbar.css';

function AddTask(){
    return(
        <div class="inputbar">
            <input type="text" class="inputtaskbar" placeholder="Add task"/>
            <button class="inputbutton">Add task</button>
        </div>
    )
}

export default AddTask;