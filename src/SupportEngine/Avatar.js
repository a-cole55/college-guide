import React, { useState } from "react";

import { styles } from './styles';

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={props.style}>
            <div 
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' },
                }}
            >
                Have a question? Let's chat! 🤙
            </div>

            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3 chatBtn'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #00ACBA' }
                }}
            />
        </div>
    )
}

export default Avatar; 