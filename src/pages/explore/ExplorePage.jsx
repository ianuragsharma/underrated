import { CategoryChips, Navbar, VideoCard } from "../../components";
import { useVideo } from "../../context";
import "./explore.css";
const ExplorePage = () => {
  const {
    videoState: { videos },
  } = useVideo();
  const videoList = videos.map((video) => (
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
