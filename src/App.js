import React from "react"
import './App.css';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";
import { redirect,matchRoutes, useLocation } from "react-router-dom";
import store from "./redux/store";
import ErrorBoundary from "./container/error-boundary";
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/employee/list",
    element: <EmployeeList/>,
  },
  {
    path: "/",
    redirect: "/employee/list",
    element: <EmployeeList/>,
  },
  {
    path: "/employee/add",
    element: <EmployeeCreate/>,
  },
  {
    path: "/employee/edit/:id",
    element: <EmployeeCreate/>,
  },
]);
redirect('/employee/list')
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary onReset={() => window.location.reload()}>
          {/* <EmployeeList /> */}
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
    
    
  );
}

export default App;
