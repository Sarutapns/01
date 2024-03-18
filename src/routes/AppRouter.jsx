import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import Dresses from '../layout/Dresses'
import DressDetail from '../layout/DressDetail'
import Contact from '../layout/Contact'
import Reviews from'../layout/Reviews'

const guestRouter = createBrowserRouter([
  {
    path: '/',element: <> <Outlet /> </>,
    children: [
      { index: true, element: <Header/> },
      { path: '/register', element: <RegisterForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/dresses', element: <Dresses />},
      { path: '/dresses/:id', element: <DressDetail /> },
      { path: '/contact', element: < Contact/> },
      { path: '/reviews', element:< Reviews/> }

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/', element: <> <Header /></>,
    children : [
      { index: true, element: <Header /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <LoginForm /> },
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
          <Header />
      </>
    ),
    children: [
      { index: true, element: <Header /> },
    
   
    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  let finalRouter;

  if (user?.role === 'admin') {
    finalRouter = adminRouter;
  } else if (user?.id) {
    finalRouter = userRouter;
  } else {
    finalRouter = guestRouter;
  }

  return <RouterProvider router={finalRouter} />;
}
