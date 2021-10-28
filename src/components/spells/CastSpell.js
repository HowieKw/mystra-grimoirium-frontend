import React from 'react'

function CastSpell(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() => props.setTrigger(false)} className="close-btn">✖</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default CastSpell;
