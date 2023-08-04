import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
// import { BsPersonFillCheck } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";

const dashboardNav = [
  {
    _id: "2sss",
    title: "Dashboard",
    link: "/",
    icon: <MdOutlineDashboardCustomize />,
  },

  {
    _id: "2sss",
    title: "Add Products",
    link: "addproducts",
    icon: <HiViewGridAdd />,
  },
  {
    _id: "3",
    title: "Edit Products",
    link: "editproducts",
    icon: <BiEdit />,
  },
  {
    _id: "3990",
    title: "Add Catergory",
    link: "addcatergory",
    icon: <BiCategoryAlt />,
  },
  {
    _id: "3990",
    title: "Edit Catergory",
    link: "editcatergory",
    icon: <BiEdit />,
  },
  {
    _id: "udskksdkd",
    title: "Orders",
    link: "orders",
    icon: <BsCartFill />,
  },
  {
    _id: "uddkdsnbsnsiops,kkdd",
    title: "Customers",
    link: "customers",
    icon: <BsFillPersonCheckFill />,
  },
  {
    _id: "uddkdksdjksjskdd",
    title: "Setting",
    link: "setting",
    icon: <FiSettings />,
  },
];

export default dashboardNav;
