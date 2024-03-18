'use client'
import React, { useState } from 'react';

interface InputComponentProps {
    goalValue: number;
  }

  const InputBar: React.FC<InputComponentProps> = ({ goalValue }) => {
    const [inputValue, setInputValue] = useState('');   //The value of the input box
    const [isActive, setIsActive] = useState(false);    //If the input bar is being used
    const [evalValue, setEvalValue] = useState('0');  // The value the user has guessed
    const [isLocked, setIsLocked] = useState(false); // Responsible for locking input/submit button
    const [isMatch, setIsMatch] = useState(false);  //Checks if ysers guess and goal value are the same

    //When the input bar is clicked switch to active to true
    const handleInputClick = () => {
        setIsActive(true);
    };

    // Handle when someone clicks off the input bar
    const handleInputBlur = () => {
        setIsActive(false);
    }

    //Update the input values to line up with the input box
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Check the input bar is active
        if (isActive) {
            // Regular expression to match numbers and specific mathematical operators
            const value = e.target.value;
            const isValidInput = /^[0-9+\-*\/\(\)\s]*$/.test(value);
            if (isValidInput) {
                setInputValue(value);
            }
        }
    };

    // when enter is clicked
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handlePrintButtonClick()
        }
    };

    const handlePrintButtonClick = () => {
        // Logic to do the calculation
        const result = eval(inputValue);
        //Check eval value is target
        if (result === goalValue) {
            setIsMatch(true);
            setIsLocked(true);
        } else {
            setIsMatch(false);
        }
        //Update eval value
        setEvalValue(eval(inputValue));
    };


  return (
        <div className="flex items-center">
            <div className="bg-blue-500  text-white font-bold py-2 px-4 rounded btn mr-2">
                {goalValue}
            </div>
            <div className={`rounded-lg py-2 px-4 mr-2 ${isMatch ? 'bg-green-500' : 'bg-red-500'} text-white font-bold`}>
                {evalValue}
            </div>
            <input
                className={`border ${isActive ? 'border-blue-500' : 'border-gray-300'} rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500`}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
                placeholder="Enter Your Calculation"
                disabled={isLocked} // Disable input box when locked
            />
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn border border-blue-900"
                disabled={isLocked} // Disable input box when locked
                onClick={handlePrintButtonClick}
            >
                {isLocked ? 'Completed!' : 'Submit'}
            </button>
        </div>
    );
};

export default InputBar;