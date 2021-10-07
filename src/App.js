import React, { useEffect, useState } from 'react';
import ReactLogo from './react-logo.svg';
import AngularLogo from './angular-logo.svg';
import MarkdownLogo from './markdown-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faFile } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import './App.scss';
import Nissan from './Nissan';

function App() {
  const projects = [
    {name: "ABOUTME.md", icon: MarkdownLogo},
    {name: "Nissan_PQE_Reserve.js", icon: ReactLogo},
    {name: "DormLife.ts", icon: AngularLogo},
    {name: "Coffee-Lab.js", icon: ReactLogo}
  ];
  const [tabs, setTabs] = useState(projects);
  const [activeTab, setActiveTab] = useState("ABOUTME.md");
  const [explorerOpen, setExplorerOpen] = useState(false);

  function removeTab(name) {
    if (tabs.length === 1)
      return; // Can't remove all tabs

    setTabs(
      tabs.filter(function(ele){
        return ele.name !== name;
      })
    );
  }

  function openProject(project) {
    if (tabs.some(e => e.name === project.name)) {
      setActiveTab(project.name);
    } else {
      setTabs([...tabs, project]);
    }
  }

  useEffect(() => {
    setActiveTab(tabs[0].name);
  }, [tabs])

  return (
    <div className="App">

      <header style={explorerOpen?{width: "82vw", left: "18vw"}:{width: "96vw", left: "4vw"}}>
        {tabs.map((tab) => (
          <div key={tab.name} className={`Tab ${tab.name===activeTab?"Active":""}`} onClick={() => setActiveTab(tab.name)}>
            <img src={tab.icon} className="tab-icon" alt="logo"/>
            <h3>{tab.name}</h3>
            <FontAwesomeIcon className="close-tab" icon={faTimes} size="1x" onClick={() => removeTab(tab.name)}/>
          </div>
        ))}
      </header>

      <div className="Sidebar">
          <FontAwesomeIcon className="Icon" icon={faFile} size="3x" onClick={() => setExplorerOpen(!explorerOpen)}/>
          <FontAwesomeIcon className="Icon" icon={faCodeBranch} size="3x" onClick={() => window.open("https://github.com/cjsantee/", "_blank")}/>
          <FontAwesomeIcon className="Icon" icon={faUserCircle} size="3x"/>
      </div>

      {explorerOpen?
      <div className="Explorer">
        <h4 style={{borderBottom: "0.5px solid rgb(204,204,204)", margin: "1vw", paddingBottom: "0.5vh"}}>
          PROJECTS
        </h4>
        {projects.map((project) => (
          <div key={project.name} className="Project" style={(project.name === activeTab)?{backgroundColor: "rgb(45, 45, 45)"}:{}} onClick={() => openProject(project)}>
            <img src={project.icon} className="file-icon" alt="logo" />
            <h4>{project.name}</h4>
          </div>
        ))}
      </div>:<div/>}

      {activeTab==="ABOUTME.md"?
        <div className="Title">
          <h1>Colin Santee</h1>
          <h2>Software Engineer</h2>
          <h2 className="cursor">_</h2>
        </div>:<div/>
      }
      {activeTab==="Nissan_PQE_Reserve.js"?
        <Nissan/>:<div/>
      }

      

      <footer>
        <p>&copy; Colin Santee 2021 &#124; Website build with React.js</p>
      </footer>
    </div>
  );
}

export default App;