import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.remove('winner')
              .merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if(currentPair && currentPair.includes(entry)){
    return state.set('myVote', Map({
      round: state.get('round'),
      entry
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const currentRound = state.get('round');
  const votedRound = state.getIn(['myVote', 'round']);
  if (currentRound !== votedRound){
    return state.remove('myVote');
  } else {
    return state;
  }
}

function setConnection(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState, connected
  }));
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'SET_CLIENT_ID':
      return state.set('clientId', action.clientId);
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
    case 'SET_CONNECTION_STATUS':
      return setConnection(state, action.state, action.connected);
  }
  return state;
}
