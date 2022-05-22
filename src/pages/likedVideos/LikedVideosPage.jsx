import { Navbar } from "../../components";
import ActionVideoCard from "../../components/actionVideoCard/ActionVideoCard";
import { useVideo } from "../../context";

const LikedVideosPage = () => {
  const { videoState, videoDispatch } = useVideo();
  const { liked } = videoState;
  const likedList = liked.map((video) => <ActionVideoCard video={video} />);

  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="flex-row  ml-1 videos-container"> {likedList}</div>
      </div>
    </div>
  );
};

export { LikedVideosPage };
