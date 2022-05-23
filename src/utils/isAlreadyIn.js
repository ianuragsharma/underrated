const isAlreadyIn = (playlist) => (id) =>
  playlist.some(({ _id }) => _id === id);

export { isAlreadyIn };
