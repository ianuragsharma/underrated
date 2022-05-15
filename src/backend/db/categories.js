import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hip-Hop",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/videoLibrary/categoryIMG/hiphop.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Indie India",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/videoLibrary/categoryIMG/indie.png",
  },
  {
    _id: uuid(),
    categoryName: "Pop",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/videoLibrary/categoryIMG/pop2.png",
  },
  {
    _id: uuid(),
    categoryName: "Bollywood",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/videoLibrary/categoryIMG/bollywood.jpg",
  },
];
