import {combineReducers} from 'redux';

const STATE_FROM_SERVER = {
  init: 'true',
  name: 'lyx'
};
const todoApp = (state = STATE_FROM_SERVER, action) => {
  switch (action.type) {
    case 'test':
      return state = {
        ...state,
        test: action.data
      };
    case 'about':
      return state = {
        ...state,
        name: action.data
      }
    default:
      return state;
  }
}

const test = (state={test:'undefined'},action)=>{
    switch (action.type){
    default:
        return state;        
    }
}

const reducers = combineReducers(
    {
        todoApp,test
    }
)
export default reducers;