function asyncSetState(self, nextState) {
  return new Promise(resolve => {
    self.setState(nextState, () => resolve(self.state));
  });
}

export default asyncSetState;
