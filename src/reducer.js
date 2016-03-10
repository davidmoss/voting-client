import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if(currentPair && currentPair.includes(entry)){
    return state.set('myVote', Map({
      round: state.getIn(['vote', 'round']),
      entry
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const currentRound = state.getIn(['vote', 'round']);
  const votedRound = state.getIn(['myVote', 'round']);
  if (currentRound !== votedRound){
    return state.remove('myVote');
  } else {
    return state;
  }
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}
