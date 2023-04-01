import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Task Sharing System",
    path: "/Task Sharing System",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "Outlet Media",
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
        title: "Showroom List",
        path: "/OutletMedia/Showroom",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Class",
        path: "/Management/Class",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Brand",
        path: "/Management/Brand",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Brand Type",
        path: "/Types/Brand/BrandType",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Vendor List",
        path: "/Management/Vendor",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Advertisement Location",
        path: "/Management/BrandLocation",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Material Type",
        path: "/Management/Material",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Light Type",
        path: "/Types/Light/LightType",
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
    title: "Hoarding",
    path: "/Hoarding",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Hoarding List",
        path: "/Hoarding List",
        icon: <AiIcons.AiOutlineBank />,
      },
    ]
  },
  {
    title: "Job Assign",
    path: "/AssetManagement",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Job List",
        path: "/Job List",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Job For",
        path: "/Job For",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Job Type",
        path: "/Job type",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Design Type",
        path: "/Design Type",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Quick View",
        path: "/Quick View",
        icon: <AiIcons.AiOutlineBank />,
      },
    ]
  },
  {
    title: "User Management",
    path: "/AssetManagement",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Admin Security",
        path: "/Admin Security",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Users",
        path: "/users",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Roles",
        path: "/Roles",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "Role Management",
        path: "/Role Management",
        icon: <AiIcons.AiOutlineBank />,
      },
    ]
  },
  {
    title: "Media Research",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Media Connect",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "View Job",
        path: "/View Job",
        icon: <AiIcons.AiOutlineBank />,
      },
      {
        title: "View Rating",
        path: "/View Rating",
        icon: <AiIcons.AiOutlineBank />,
      },
    ]
  },
  {
    title: "Mobile App",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin />,
  },
];
