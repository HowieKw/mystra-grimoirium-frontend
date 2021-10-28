import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {

    return (
        <span>
            <input
            value={filter || ''}
            placeholder="Call upon a spell..."
            onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
}
