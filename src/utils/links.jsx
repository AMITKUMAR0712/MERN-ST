import { IoFastFoodSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

import {
  MdOutlineCastForEducation,
  MdOutlineFitnessCenter,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GiClothes, GiHealthPotion } from "react-icons/gi";

const links = [
  {
    text: "Automotive",
    path: ".",
    icon: <AiFillCar />,
  },
  {
    text: "Business Services",
    path: "/",
    icon: <MdQueryStats></MdQueryStats>,
  },
  {
    text: "Dealers & Distributors",
    path: "stats",
    icon: <FaHandshake />,
  },
  {
    text: "Beauty & Health",
    path: "profile",
    icon: <GiHealthPotion />,
  },
  {
    text: "Fashion",
    path: "admin",
    icon: <GiClothes />,
  },
  {
    text: "Foods & Beverages",
    path: "foods-Beverages",
    icon: <IoFastFoodSharp></IoFastFoodSharp>,
  },
  {
    text: "Education",
    path: "education",
    icon: <MdOutlineCastForEducation />,
  },
  {
    text: "Sports & Fitness",
    path: "sports-fitness",
    icon: <MdOutlineFitnessCenter />,
  },
];

export default links;
