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

    default:
      throw new Error("Action type not found");
  }
};
export { videoReducer };
