import React, { useRef, useState } from 'react';
import ReactLogo from './react-logo.svg';
import AngularLogo from './angular-logo.svg';
import MarkdownLogo from './markdown-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([
    {name: "ABOUTME.md", icon: MarkdownLogo},
    {name: "Nissan_PQE_Reserve.js", icon: ReactLogo},
    {name: "DormLife.ts", icon: AngularLogo}
  ]);
  const [activeTab, setActiveTab] = useState("ABOUTME.md");
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
    <div className="App">
      <div id="right_panel" ref={rightRef} onMouseDown={mouseDownRight}>
        <h1 style={{userSelect: 'none'}}>Right</h1>
      </div>

      <header>
        {tabs.map((tab) => (
          <div key={tab.name} className={`Tab ${tab.name===activeTab?"Active":""}`} onClick={() => setActiveTab(tab.name)}>
            <img src={tab.icon} className="tab-icon" alt="logo"/>
            <h3>{tab.name}</h3>
          </div>
        ))}
      </header>

      <div className="Sidebar">
          <FontAwesomeIcon className="Icon" icon={faCodeBranch} size="3x"/>
          <FontAwesomeIcon className="Icon" icon={faUserCircle} size="3x"/>
      </div>

      {activeTab==="ABOUTME.md"?
        <div className="Title">
          <h1>Colin Santee</h1>
          <h1 className="cursor">_</h1>
          <h2>Software Engineer</h2>
        </div>:<div/>
      }

      <div id="bottom_panel" ref={bottomRef} onMouseDown={mouseDownBottom}>
        <h1 style={{userSelect: 'none'}}>Bottom</h1>
      </div>

      <footer>
        <p>&copy; Colin Santee 2021 &#124; Website build with React.js</p>
      </footer>
    </div>
  );
}

export default App;