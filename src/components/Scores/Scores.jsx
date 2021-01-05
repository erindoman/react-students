import React from 'react'

const Scores = (props) => {
    return (
        <div className="App" >
            {props.scores.map((student, idx) => 
                <p key={idx}>
                    Score: {student.score}
                <br/>
                    Date: {student.date}</p>
            )}
        </div>
    )
}

export default Scores