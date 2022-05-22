const isAlreadyInWatchLater = (id, watchLater) =>
  watchLater.some(({ _id }) => _id === id);
export { isAlreadyInWatchLater };
