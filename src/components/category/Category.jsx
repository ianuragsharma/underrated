import "./category.css";
import { useVideo } from "../../context";
const Category = () => {
  const {
    videoState: { categories },
    videoDispatch,
  } = useVideo();
  const categoryHandler = (item) => {
    videoDispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: item.categoryName,
    });
  };
  const cateogoryList = categories.map((item) => (
    <div
      key={item._id}
      className="category-item"
      onClick={() => categoryHandler(item)}
    >
      <img
        loading="lazy"
        className="image-responsive category-img"
        src={item.imgURL}
        alt="headphones"
      />
      <h4 className=" fw-300 cateogy-title text-center">{item.categoryName}</h4>
    </div>
  ));
  return <>{cateogoryList}</>;
};

export { Category };
