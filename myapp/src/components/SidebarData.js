import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Class",
        path: "/class",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "MyClass",
        path: "/myclass",
        icon: <AiIcons.AiOutlineBank />,
      },
    ],
  },
  {
    title: "Dashboard",
    path: "/dashboard/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Class",
        path: "/dashboard/class",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "MYClass",
        path: "/dashboard/myclass",
        icon: <AiIcons.AiOutlineBank />,
      },
    ],
  },
  {
    title: "Outlet Media",
    path: "/OutletMedia",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Asset List",
        path: "/OutletMedia/Asset",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Floor Diagram",
        path: "/OutletMedia/myclass",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "360 Degree Diagram",
        path: "/OutletMedia/class",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Showroom Details List",
        path: "/OutletMedia/Showroom",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Advertisement Location",
        path: "/OutletMedia/class",
        icon: <AiIcons.AiOutlineBank />,
      },
    ],
  },
  {
    title: "Type",
    path: "/Type",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Brand Type",
        path: "/Type/BrandType",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Material Type",
        path: "/Type/MaterialType",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Light Type",
        path: "/Type/LightType",
        icon: <AiIcons.AiOutlineBank />,
      },
    ],
  },
  {
    title: "Management",
    path: "/Management",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Class",
        path: "/Management/class",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Brand",
        path: "/Management/Brand",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Brand Location",
        path: "/Management/BrandLocation",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "MaterialManagement",
        path: "/Management/Material",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Vendor",
        path: "/Management/Vendor",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Status",
        path: "/Management/Status",
        icon: <AiIcons.AiOutlineBank />,
      },
    ],
  },
  {
    title: "Asset Management",
    path: "/AssetManagement",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "ShowRoom Details",
    path: "/ShowroomDetails",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin />,
  },
];
