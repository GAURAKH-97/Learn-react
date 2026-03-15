import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./Layout";
import Home from "./Pages/Home";

import Dashboard from "./pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Phone from "./Pages/Phone";
import Laptop from './Pages/Laptop'
import User from './Pages/User'
 const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={
          <Suspense fallback={<h2>Loading Home...</h2>}>
            <Home />
          </Suspense>
        }/>
            <Route path='/Dashboard' element={<Dashboard/>}>
                <Route path="phone" element={<Phone />} />
                <Route path="laptop" element={<Laptop />} />
            </Route>
            <Route path='/user/:id' element={<User/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
 );
export default router;

// [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "dashboard", element: <Dashboard /> }
//     ]
//   }
// ]