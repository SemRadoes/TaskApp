import './taskfield.css';

function TaskField(){
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

export default TaskField;