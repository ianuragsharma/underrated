import { useState, useEffect } from "react";
import { CategoryChips, Navbar, VideoCard } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";
import "./explore.css";
const ExplorePage = () => {
  useDocumentTitle("Explore");
  const { videoState } = useVideo();
  const { videos } = videoState;
  const [filteredVideos, setFilteredVideos] = useState([]);
  useEffect(() => {
    if (videoState.selectedCategory !== "All") {
      const filterrr = videos.filter(
        (video) => video.category === videoState.selectedCategory
      );
      setFilteredVideos(filterrr);
    } else {
      setFilteredVideos(videos);
    }
  }, [videoState.selectedCategory]);
  const videoList = filteredVideos.map((video) => (
    <div key={video._id}>
      <VideoCard video={video} />
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="my-4">
          <CategoryChips />
        </div>

        <div className="flex-row  ml-1 videos-container">{videoList}</div>
      </div>
    </div>
  );
};

export { ExplorePage };
