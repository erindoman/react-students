import React from 'react'
import Scores from '../Scores/Scores'

const Students = (props) => {
    return (
        <div>
            {props.students.map((student, idx) => 
            <p key={idx}>{student.name}{student.bio}< Scores scores={student.scores} /></p>
            )}
        </div>
    )
}

export default Students