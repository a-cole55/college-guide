import React, { useRef, useEffect, useState } from "react";


import SupportWindow from './Support Window';
import Avatar from './Avatar'

const SupportEngine = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    //determine whether or not button has been clicked and then make chat window visible
    const [visible, setVisible] = useState(false)

    //determine if user clicked outside of support window
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                //unmount eventListener to reduce unnecessary use of memory
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div ref={wrapperRef}>
            <SupportWindow visible={visible} />

            <Avatar 
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '50px',
                }}
            />
        </div>
    )
}
export default SupportEngine;
