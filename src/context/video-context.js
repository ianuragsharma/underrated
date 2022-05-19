import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { videoReducer } from "../reducers";
const initialState = {
  videos: [],
  categories: [],
  selectedCategory: "All",
};

const VideoContext = createContext();
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  useEffect(
    () =>
      (async () => {
        try {
          const [videoResponse, categoriesResponse] = await Promise.all([
            axios.get("/api/videos"),
            axios.get("api/categories"),
          ]);
          if (videoResponse.status && categoriesResponse.status === 200) {
            videoDispatch({
              type: "SET_VIDEOS",
              payload: [...videoResponse.data.videos],
            });
            videoDispatch({
              type: "SET_CATEGORIES",
              payload: [...categoriesResponse.data.categories],
            });
          }
        } catch (e) {
          console.error(" Error in fetching videos", e);
        }
      })(),
    []
  );
  return (
    <VideoContext.Provider
      value={{
        videoState,
        videoDispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
