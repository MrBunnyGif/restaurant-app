import { Navigate, Outlet } from "react-router"
import Auth from "./Auth"
import BascketFooter from "./components/BascketFooter"

export default () => (
  <>
    {Auth.isSectionOn ? <Outlet /> : <Navigate to='/' />}
			<BascketFooter />
  </>
)