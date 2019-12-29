import React, { useState } from 'react';
import Table from './components/table/Table';
import './assets/css/bootstrap.min.css';
import './assets/css/mystyles.css';

const Tabs = {
  TAB_1: 'upcoming',
  TAB_2: 'live',
  TAB_3: 'past'
}
function App() {
  const [currentTab, setCurrentTab] = useState(Tabs.TAB_1);
  return (
    <div>
      <div className='container-fluid header-wrapper'>

      </div>
      <div className='container content-wrapper'>
        <h1 className='content-heading'>Manage Compaigns</h1>
        <div className='mt-5'>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <div className={`link ${currentTab === Tabs.TAB_1 ? 'active' : ''}`} onClick={() => { setCurrentTab(Tabs.TAB_1) }}>Upcoming Campaigns</div>
            </li>
            <li className="nav-item">
              <div className={`link ${currentTab === Tabs.TAB_2 ? 'active' : ''}`} onClick={() => { setCurrentTab(Tabs.TAB_2) }}>Live Campaigns</div>
            </li>
            <li className="nav-item">
              <div className={`link ${currentTab === Tabs.TAB_3 ? 'active' : ''}`} onClick={() => { setCurrentTab(Tabs.TAB_3) }}>Past Campaigns</div>
            </li>
          </ul>
        </div>
        <div className='mt-5' style={{overflow: 'scroll'}}>
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
