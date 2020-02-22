import React from 'react'

const Arsip = (props) => {
    const {match} = props
    
    return (
        <div>
            <h1>{match.params.type !== undefined ? match.params.type : "Arsip" }</h1>
        </div>
    )
}

export default Arsip
