import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

import Promo from "views/admin/promotion/Promotion";
import List from "views/admin/promotion/List";
import DeployCoupon from "views/admin/promotion/DeployCoupon";
import DynamicCoupon from "views/admin/promotion/DynamicCoupon";
import CouponDetails from "views/admin/promotion/CouponDetails";
import CustomerSpecific from "views/admin/promotion/customerSpecific";
import Giftcard from "views/admin/promotion/Giftcard";
import Register from "views/admin/promotion/Register";
import Newsletter from "views/admin/promotion/Newsletter";
import CompanyDetails from "views/admin/promotion/CompanyDetails";
import Documentation from "views/admin/promotion/Documentation";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAnnouncement,
  MdCardGiftcard,
  MdLoyalty,
  MdMarkunreadMailbox,
  MdFireplace,
  MdList,
  MdSupervisedUserCircle,
  MdStackedBarChart,
  MdOutlineFilePresent,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
    // name: "Data Tables",
    // layout: "/admin",
    // icon: <MdBarChart className="h-6 w-6" />,
    // path: "data-tables",
    // component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "Register",
  //   layout: "/admin",
  //   path: "register",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Register />,
  // },
  {
    name: "Create Schedule",
    layout: "/admin",
    path: "create-schedule",
    icon: <MdStackedBarChart className="h-6 w-6" />,
    component: <Promo />,
  },
  // {
  //   name: "Dynamic Coupon",
  //   layout: "/admin",
  //   path: "dynamicCoupon",
  //   icon: <MdLoyalty  className="h-6 w-6" />,
  //   component: <DynamicCoupon />,
  // },
  // {
  //   name: "Create Giftcard",
  //   layout: "/admin",
  //   path: "newGiftcard",
  //   icon: <MdCardGiftcard className="h-6 w-6" />,
  //   component: <Giftcard />,
  // },
  {
    name: "Recommended Exercise",
    layout: "/admin",
    path: "recomendation",
    icon: <MdList className="h-6 w-6" />,
    component: <List />,
  },
  // {
  //   name: "Deploy Coupon",
  //   layout: "/admin",
  //   path: "deployCoupon",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <DeployCoupon />,
  // },
  // {
  //   name: "User Specific Coupon",
  //   layout: "/admin",
  //   path: "userSpecific",
  //   icon: <MdSupervisedUserCircle className="h-6 w-6" />,
  //   component: <CustomerSpecific />,
  // },
  {
    name: "Newsletter",
    layout: "/admin",
    path: "newsletter",
    icon: <MdMarkunreadMailbox className="h-6 w-6" />,
    component: <Newsletter />,
  },
  {
    name: "History",
    layout: "/admin",
    path: "companyData",
    icon: <MdSupervisedUserCircle className="h-6 w-6" />,
    component: <CompanyDetails />,
  },
  // {
  //   name: "Documentation",
  //   layout: "/admin",
  //   path: "docs",
  //   icon: <MdOutlineFilePresent className="h-6 w-6" />,
  //   component: <Documentation />,
  // }
];
export default routes;
