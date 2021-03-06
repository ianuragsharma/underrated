import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";

const WatchLaterPage = () => {
  useDocumentTitle("Watch Later");
  const { videoState, videoDispatch } = useVideo();
  const { watchLater } = videoState;
  const watchLaterList = watchLater.map((video) => (
    <ActionVideoCard video={video} />
  ));
  return (
    <div>
      <Navbar />
      <div className="continer">
        <h5 className="text-center fw-500 my-7">
          Watch Later ({watchLater.length})
        </h5>
        <div className="flex-row  ml-1 videos-container"> {watchLaterList}</div>
      </div>
    </div>
  );
};

export { WatchLaterPage };
