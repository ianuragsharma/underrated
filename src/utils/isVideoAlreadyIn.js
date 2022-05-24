const isVideoAlreadyInPlaylist = (playlist) => (id) =>
  playlist.some((video) => video._id === id);

export { isVideoAlreadyInPlaylist };
