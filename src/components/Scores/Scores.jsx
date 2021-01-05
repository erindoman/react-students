import React from 'react'

const Scores = (props) => {
    return (
        <div>
            {props.scores.map((student, idx) => 
                <p key={idx}>{student.score}{student.date}</p>
            )}
        </div>
    )
}

export default Scores