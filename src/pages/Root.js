import { Fragment } from "react"
import { Outlet } from "react-router"
import MainNavigation from "../components/MainNavigation"

function Root() {
  return <Fragment>
    <MainNavigation/>
    <main>
      <Outlet/>
    </main>
  </Fragment>
}

export default Root