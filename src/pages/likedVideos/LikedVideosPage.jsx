import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";

const LikedVideosPage = () => {
  useDocumentTitle("Liked Videos");
  const { videoState, videoDispatch } = useVideo();
  const { liked } = videoState;
  const likedList = liked.map((video) => <ActionVideoCard video={video} />);
  console.log(liked.length);
  return (
    <div>
      <Navbar />
      <div className="continer">
        <h5 className="text-center fw-500 my-7">
          Liked Videos ({liked.length})
        </h5>
        <div className="flex-row  ml-1 videos-container"> {likedList}</div>
      </div>
    </div>
  );
};

export { LikedVideosPage };
