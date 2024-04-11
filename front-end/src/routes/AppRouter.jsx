import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../pages/Header'
import HomePage from '../pages/HomePage'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/login', element: <LoginForm/>},
      { path: '/register', element: <RegisterForm />}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <HomePage to='/'/>}
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}