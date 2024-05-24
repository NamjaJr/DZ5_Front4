import React, { useState, useRef } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [names, setNames] = useState([])
    const inputRef = useRef(null)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue.trim()])
            setInputValue('')
        }
    }

    const handleChangeName = (index) => {
        const newName = inputRef.current.value.trim()
        if (newName !== '') {
            const updatedNames = [...names]
            updatedNames[index] = newName
            setNames(updatedNames)
        }
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button onClick={handleAddName} disabled={!inputValue.trim()}>
                Добавить
            </button>
            {names.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>
                            {name}
                            <button onClick={() => handleChangeName(index)}>Поменять</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default App;
