import { useRef } from 'react'

const Flashcard = ({id, question, options, answer, choice, choose}) => {

    const cardRef = useRef(null);

    return (
        <div className='flashcard' ref={cardRef}>
            <p>{question}</p>
            <ul>
                {options.map((option, index) => {
                    return <li {...(option === choice ? {style = {fontWeight: "bold"}} : {})}
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

//Specify prop types
Flashcard.propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    choose: PropTypes.func.isRequired
}

export default Flashcard