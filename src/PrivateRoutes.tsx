import { Navigate, Outlet } from "react-router"
import Auth from "./Auth"
import BascketFooter from "./components/BascketFooter"
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
  const routes = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <BascketFooter
        inBascket={routes.pathname.includes('/item')}
        onClick={() => routes.pathname.includes('/menu') ? navigate('/bascket') : null}
      />
      {Auth.isSectionOn ? <Outlet /> : <Navigate to='/' />}
    </>
  )
}