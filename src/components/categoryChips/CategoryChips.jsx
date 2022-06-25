import "./categoryChips.css";
import { useVideo } from "../../context";

const CategoryChips = () => {
  const { videoState, videoDispatch } = useVideo();
  const { categories, selectedCategory } = videoState;
  const categoryHandler = (item) => {
    videoDispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: item.categoryName,
    });
  };
  const getActiveClass = (categorie) => {
    if (selectedCategory === categorie.categoryName) return "active-chip";
    else return "";
  };
  const chipsList = categories.map((categorie) => (
    <button
      key={categorie._id}
      className={`btn m-1 text-base chips-btn ${getActiveClass(categorie)}`}
      onClick={() => categoryHandler(categorie)}
    >
      {categorie.categoryName}
    </button>
  ));
  return (
    <div>
      <button
        className={`btn mx-1 text-base chips-btn  ${
          selectedCategory === "All" ? "active-chip" : ""
        }`}
        onClick={() =>
          videoDispatch({
            type: "SET_SELECTED_CATEGORY",
            payload: "All",
          })
        }
      >
        All
      </button>
      {chipsList}
    </div>
  );
};

export { CategoryChips };
