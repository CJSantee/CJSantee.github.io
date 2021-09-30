import React, { useRef } from 'react';
import './App.css';

const Nissan = () => {
    const rightRef = useRef(null);
    const bottomRef = useRef(null);

    const BORDER_SIZE = 4;
    let m_pos;

    function resizeRight(e) {
        const dx = m_pos - e.x;
        m_pos = e.x;
        rightRef.current.style.width = (parseInt(getComputedStyle(rightRef.current, '').width) + dx) + "px";
    }

    function resizeBottom(e) {
        const dy = m_pos - e.y;
        m_pos = e.y;
        bottomRef.current.style.height = (parseInt(getComputedStyle(bottomRef.current, '').height) + dy) + "px";
    }

    function mouseDownRight(e)  {
        if (e.nativeEvent.offsetX < BORDER_SIZE) {
        m_pos = e.nativeEvent.x;
        document.addEventListener("mousemove", resizeRight, false);
        }
    }

    function mouseDownBottom(e) {
        if (e.nativeEvent.offsetY < BORDER_SIZE) {
        m_pos = e.nativeEvent.y;
        document.addEventListener("mousemove", resizeBottom, false);
        }
    }

    document.addEventListener("mouseup", function(){
        document.removeEventListener("mousemove", resizeRight, false);
        document.removeEventListener("mousemove", resizeBottom, false);
    }, false);

    return (
        <div >
            <div id="right_panel" ref={rightRef} onMouseDown={mouseDownRight}>
                <h1 style={{userSelect: 'none'}}>Right</h1>
            </div>
            <div id="bottom_panel" ref={bottomRef} onMouseDown={mouseDownBottom}>
                <h1 style={{userSelect: 'none'}}>Bottom</h1>
            </div>
        </div>
    );
}

export default Nissan;