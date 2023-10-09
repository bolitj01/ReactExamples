import React, { useRef } from 'react'

const Flashcard = ({id, question, options, answer, choose}) => {

    const cardRef = useRef(null);

    return (
        <div className='flashcard' ref={cardRef}>
            <p>{question}</p>
            <ul>
                {options.map((option, index) => {
                    return <li  
                            key={index}    
                            onClick={() => {
                                choose(id, option)
                                if (option === answer) {
                                    cardRef.current.classList.remove('incorrect');
                                    cardRef.current.classList.add('correct');
                                } else {
                                    cardRef.current.classList.remove('correct');
                                    cardRef.current.classList.add('incorrect');
                                }
                            }}
                            >{option}</li>
                })}
            </ul>
        </div>
    )
}

export default Flashcard