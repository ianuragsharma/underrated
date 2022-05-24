const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOS":
      return { ...videoState, videos: payload };

    case "SET_CATEGORIES":
      return { ...videoState, categories: payload };
    case "UPDATE_HISTORY":
      return { ...videoState, history: [...payload] };
    case "UPDATE_LIKED":
      return { ...videoState, liked: [...payload] };
    case "UPDATE_WATCH_LATER":
      return { ...videoState, watchLater: [...payload] };
    case "UPDATE_PLAYLISTS":
      return {
        ...videoState,
        playlists: [...payload],
      };
    case "UPDATE_PLAYLIST_VIDEOS":
      return {
        ...videoState,
        playlists: videoState.playlists.map((playlist) =>
          playlist._id === payload._id
            ? { ...playlist, videos: [...payload.videos] }
            : playlist
        ),
      };
    default:
      throw new Error("Action type not found");
  }
};
export { videoReducer };
