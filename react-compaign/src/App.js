import React, { useState } from 'react';
import Table from './components/table/Table';
import { loadDataFromLocal, updateTabs } from './helpers/methods';
import './assets/css/bootstrap.min.css';
import './assets/css/mystyles.css';

let TabsInitial = loadDataFromLocal();

function App() {
  const [Tabs, setTabs] = useState(TabsInitial);
  const [currentTab, setCurrentTab] = useState(Tabs[0]);
  const handleChangeDate = (hash, newStamp) => {
    setTabs(updateTabs(hash, newStamp, currentTab, Tabs))
  }
  return (
    <div>
      <div className='container-fluid header-wrapper'>

      </div>
      <div className='container content-wrapper'>
        <h1 className='content-heading'>Manage Compaigns</h1>
        <div className='mt-5'>
          <ul className="nav nav-tabs">
            {
              Tabs.map((tab, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <div className={`link ${currentTab.name === tab.name ? 'active' : ''}`} onClick={() => { setCurrentTab(tab) }}>{tab.name} Campaigns</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='mt-5' style={{ overflow: 'scroll', boxShadow: '1px 1px 10px 2px #f3f3f3' }}>
          <Table events={currentTab.data} onChangeDate={handleChangeDate} currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
}

export default App;
