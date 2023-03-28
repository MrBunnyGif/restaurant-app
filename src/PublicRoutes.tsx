import { Navigate, Outlet } from "react-router"
import Auth from "./Auth"

export default () => !Auth.isSectionOn ? <Outlet /> : <Navigate to='/menu' /> 