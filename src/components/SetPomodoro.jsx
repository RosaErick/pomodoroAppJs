import React from 'react'
import Button from './Button'
import { useState } from 'react'

const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        longbreak: 1,
        active:'work',


    });

    const handleChange = input => {
        const { name, value } = input.target

        console.log(name)       
        console.log(value);
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                  work: parseInt(value) 
                })
                break;
        
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value) 
                })
                break;
                    case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    longbreak: parseInt(value) 
                })
                break;
            
            default:
                break;
        }
        console.log(newTimer);

    }

    const handleSubmit = e => {
        
        e.preventDefault();
        updateExecute(newTimer)
    }

    return (
        <div className="form-container">
            <form noValidate>
                <div className="inputwrapper">
                    <input className='input' name="work" onChange={handleChange} value={newTimer.work} />
                    <input className='input' name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className='input' name="longBreak" onChange={handleChange} value={newTimer.longbreak} />
                  
                </div>
                <Button title="Set Time" callback={handleSubmit} />
            </form>

        </div>
    )
}

export default SetPomodoro