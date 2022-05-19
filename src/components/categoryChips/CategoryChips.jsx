import "./categoryChips.css";
import { useVideo } from "../../context";

const CategoryChips = () => {
  const {
    videoState: { categories },
  } = useVideo();
  const chipsList = categories.map((categorie) => (
    <button key={categorie._id} className="btn m-1 text-base chips-btn">
      {categorie.categoryName}
    </button>
  ));
  return (
    <div>
      <button className="btn mx-1 text-base chips-btn active-chip ">All</button>
      {chipsList}
    </div>
  );
};

export { CategoryChips };
