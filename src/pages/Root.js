import { Fragment } from "react"
import { Outlet } from "react-router"
import MainNavigation from "../components/MainNavigation"

function Root() {
  return <Fragment>
    <MainNavigation/>
    <Outlet/>
  </Fragment>
}

export default Root