// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SignUp from "./components/signUp/SignUp.jsx";
// import SubCategory from "./pages/subCategory/SubCategory.jsx";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <h1 className="text-3xl font-bold underline">Vite + React</h1> */}
//       <SignUp/>
//       {/* <SubCategory/> */}
//     </>
//   );
// }

// export default App


import './App.css';
import React from "react";
import AuthLayout from "./components/AuthLayout.jsx";
import Login from './components/login/Login.jsx';
import SignUp from './components/signUp/SignUp.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
 import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
 import SellerDashboard from './pages/sellerDashboard/SellerDashboard.jsx';
import TransectionReport from './pages/transectionrp/Transection.jsx';
import StoresReport from './pages/storesreport/Storereport.jsx';
import ExpenseReport from './pages/expensereport/Expensereport.jsx';
import EmployeeRole from './pages/employeerole/Employeerole.jsx';
import AddNewEmployee from './pages/addnewemployee/Addnewemployee.jsx';
import EmployeeList from './pages/employeelist/Employeelist.jsx';
import StoreConfig from './pages/storeconfig/Storeconfig.jsx';
import MyShop from './pages/myshop/Myshop.jsx';
import MyWallet from './pages/mywallet/Mywallet.jsx';
import BankInfo from './pages/bankinfo/Bankinfo.jsx';
import Withdraw from './pages/withdraw_req/Withdraw.jsx';
import CollectCash from './pages/collectedcash/Cashcollect.jsx';
import DeliveryEarn from './pages/deliveryearn/Deliveryearn.jsx';
import Coupons from './pages/coupons/Coupons.jsx';
import Banners from './pages/banners/Banners.jsx';
import AllOrder from './pages/allorders/Allorder.jsx';
import Newsale from './pages/newsale/Newsale.jsx';
import ProductList from "./pages/productlist/Productlist.jsx";
import ProductGallery from "./pages/productgallery/Productgallery.jsx";
import BulkImport from "./pages/bulkimport/Bulkimport.jsx";
import BulkExport from "./pages/bulkexport/Bulkexport.jsx";
import AddItem from "./pages/addNewItem/AddNewItem.jsx";
import Category from "./pages/category/Category.jsx";
import SubCategory from "./pages/subCategory/SubCategory.jsx";
import SubCategoryList from "./pages/subCategoryList/SubCategoryList.jsx";
import useVerifyAuth from "./hooks/useVerifyAuth.jsx";
import HiddenProductList from "./pages/hiddenProductList/HiddenProductList.jsx";
import Review from "./pages/review/Review.jsx"; 
import Chat from "./pages/chat/Chat.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Home />
      </AuthLayout>
    ),
    children: [
      { path: "/dashboard",
         element: <Dashboard />
         },
      { path: "/sellerDashboard",
         element: <SellerDashboard />
         },
      { path: "/transection",
         element: <TransectionReport />
         },
      { path: "/storereport",
         element: <StoresReport />
         },
      { path: "/expensereport",
         element: <ExpenseReport />
         },
      { path: "/employeerole",
         element: <EmployeeRole />
         },
      { path: "/addemployee",
         element: <AddNewEmployee />
         },
      { path: "/employeelist",
         element: <EmployeeList />
         },
      { path: "/storeconfig",
         element: <StoreConfig />
         },
      { path: "/myshop",
         element: <MyShop />
         },
      { path: "/mywallet",
         element: <MyWallet />
         },
      { path: "/bankinfo",
         element: <BankInfo />
         },
      { path: "/withdrawrequest",
         element: <Withdraw /> 
        },
      { path: "/collectcash",
         element: <CollectCash /> 
        },
      { path: "/deliverypayment",
         element: <DeliveryEarn />
         },
      { path: "/coupons",
         element: <Coupons /> 
        },
      { path: "/banners",
         element: <Banners />
         },
      { path: "/allorder", 
        element: <AllOrder /> 
      },
      { path: "/newsale", 
        element: <Newsale /> 
      },
      { path: "/itemList",
         element: <ProductList />
         },
      { path: "/hiddenProductList",
         element: <HiddenProductList /> 
        },
      { path: "/productGallery", 
        element: <ProductGallery />
       },
      { path: "/bulkImport",
         element: <BulkImport />
         },
      { path: "/bulkExport",
         element: <BulkExport />
         },
      { path: "/addItem",
         element: <AddItem /> 
        },
      { path: "/category",
         element: <Category /> 
        },
      { path: "/subCategory", 
        element: <SubCategory />
       },
      { path: "/subCategoryList",
         element: <SubCategoryList />
         },
      { path: "/review",
         element: <Review />
         },
      { path: "/chat", 
        element: <Chat />
       },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout authentication={false}>
        <SignUp />
      </AuthLayout>
    ),
  },
]);

function App() {
  useVerifyAuth();

  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     {/* <h1 className="text-3xl font-bold underline">Vite + React</h1> */}
  //     {/* <SubCategory/> */}
  //     <Category/>
  //   </>
  // );
}

export default App;
