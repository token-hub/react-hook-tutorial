import React, {useReducer} from 'react';
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
import HookReducerCounterOne from './components/HookReducerCounterOne';
import HookReducerCounterTwo from './components/HookReducerCounterTwo';
import HookReducerCounterThree from './components/HookReducerCounterThree';
import HookReducerComponentA from './components/HookReduceComponentA';
import HookReducerComponentB from './components/HookReduceComponentB';
import HookReducerComponentC from './components/HookReduceComponentC';
import HookFetching from './components/HookFetching';
import HookFetchingReducer from './components/HookFetchingReducer';
import HookParentComponent from './components/HookParentComponent';
import HookCounterMemo from './components/HookCounterMemo';
import HookRefInput from './components/HookRefInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

export const UserContext = React.createContext();
export const ReducerContext = React.createContext();

// const initialState = {
//     firstCounter: 0
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {...state, firstCounter: state.firstCounter + 1 }
//             break;
//         case 'decrement':
//             return {...state, firstCounter: state.firstCounter - 1}
//             break;
//         case 'reset':
//             return initialState;
//         default:
//             return state
//     }
// }

function App() {

    // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
        
       <HookTimer />
        
        {/* ----- [ React Ref hook ] -----
            <HookRefInput />
            <ClassTimer />
        */}

        {/*
            <HookCounterMemo />
            <HookParentComponent />
            <HookFetchingReducer />
            <HookFetching />
            <p>Parent Counter :  {count.firstCounter} </p>
            <ReducerContext.Provider value={ { reducerCount: count.firstCounter, reducerDispatch: dispatch  } }>
                <HookReducerComponentA />
                <HookReducerComponentB />
                <HookReducerComponentC />
            </ReducerContext.Provider>

            <HookReducerCounterThree />
            <HookReducerCounterTwo />
            <HookReducerCounterOne />
            <UserContext.Provider value={'john'}>
                <ComponentC />
            </UserContext.Provider>
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
