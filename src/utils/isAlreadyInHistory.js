const isAlreadyInHistory = (id, history) =>
  history.some(({ _id }) => _id === id);
export { isAlreadyInHistory };
