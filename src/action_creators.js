export function setConnectionStatus(state, connected) {
  return {
    type: 'SET_CONNECTION_STATUS',
    state,
    connected
  };
}

export function setClientId(clientId) {
  return {
    type: 'SET_CLIENT_ID',
    clientId
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry,
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}

export function restart() {
  return {
    meta: {remote: true},
    type: 'RESTART'
  };
}
