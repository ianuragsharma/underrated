import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";

const LikedVideosPage = () => {
  useDocumentTitle("Liked Videos");
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
