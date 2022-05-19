const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOS":
      return { ...videoState, videos: payload };

    case "SET_CATEGORIES":
      return { ...videoState, categories: payload };

    default:
      throw new Error("Action type not found");
  }
};
export { videoReducer };
