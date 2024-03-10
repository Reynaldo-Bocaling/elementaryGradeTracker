import React, { Suspense, useState } from "react";
import Login from "./Login";

// admin
import Admin_Overview from "../pages/admin/Overview";

const Admin_Teacher = React.lazy(() => import("../pages/admin/Teacher"));
const Admin_Student = React.lazy(() => import("../pages/admin/Student"));
const Admin_Grades = React.lazy(() => import("../pages/admin/Grades"));
const Admin_Settings = React.lazy(() => import("../pages/admin/Settings"));
const Admin_MyProfile = React.lazy(() => import("../pages/admin/MyProfile"));
const Admin_Subjext = React.lazy(() => import("../pages/admin/Subject"));

//teacher
const Teacher_Overview = React.lazy(() => import("../pages/teacher/Overview"));
const Teacher_Student = React.lazy(() => import("../pages/teacher/Student"));
const Teacher_Grade = React.lazy(() => import("../pages/teacher/Grade"));
const Teacher_Settings = React.lazy(() => import("../pages/teacher/Settings"));
const Teacher_MyProfile = React.lazy(
  () => import("../pages/teacher/MyProfile")
);
const Teacher_Subject = React.lazy(() => import("../pages/teacher/Subject"));

import { Route, Routes } from "react-router-dom";
import Rootlayout from "../layout/Rootlayout";
import Spinners from "../components/loading/Spinners";

const PrivateRoutes = () => {
  const [isLogged, setIslogged] = useState<boolean>(false);

  const userRoutes = {
    admin: [
      {
        path: "/",
        element: <Admin_Overview />,
      },
      {
        path: "/teacher-list",
        element: <Admin_Teacher />,
      },
      {
        path: "/student-list",
        element: <Admin_Student />,
      },
      {
        path: "/grades",
        element: <Admin_Grades />,
      },
      {
        path: "/subjects",
        element: <Admin_Subjext />,
      },
      {
        path: "/settings",
        element: <Admin_Settings />,
      },
      {
        path: "/profile",
        element: <Admin_MyProfile />,
      },
    ],
    teacher: [
      {
        path: "/",
        element: <Teacher_Overview />,
      },
      {
        path: "/student-list",
        element: <Teacher_Student />,
      },
      {
        path: "/student-list",
        element: <Teacher_Grade />,
      },
      {
        path: "/grades",
        element: <Teacher_Grade />,
      },
      {
        path: "/subjects",
        element: <Teacher_Subject />,
      },
      {
        path: "/settings",
        element: <Teacher_Settings />,
      },
      {
        path: "/profile",
        element: <Teacher_MyProfile />,
      },
    ],
  };

  const role = userRoutes["admin"];

  return (
    <>
      <Routes>
        {isLogged ? (
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinners />}>
                <Login />
              </Suspense>
            }
          />
        ) : (
          <Route path="/" element={<Rootlayout />}>
            {role.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Route>
        )}
      </Routes>
    </>
  );
};

export default PrivateRoutes;
