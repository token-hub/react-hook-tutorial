import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import ClassMouseMove from './components/ClassMouseMove';
import HookMouseMove from './components/HookMouseMove';
import HookMouseContainer from './components/HookMouseContainer';
import ClassIntervalCounter from './components/ClassIntervalCounter';
import HookIntervalCounter from './components/HookIntervalCounter';
import HookDataFetching from './components/HookDataFetching';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();

function App() {

  return (
    <div className="App">
        
        <UserContext.Provider value={'john'}>
            <ComponentC />
        </UserContext.Provider>

        {/*
            <HookDataFetching />
            <HookIntervalCounter />
            <ClassIntervalCounter />
            <HookMouseContainer />
            <HookMouseMove />
            <ClassMouseMove />
            <ClassCounterOne />
            <HookCounter4 />
            <HookCounter3 />
            <HookCounter2 />
            <ClassCounter />
            <HookCounter />
        */}
    </div>
  );
}

export default App;
