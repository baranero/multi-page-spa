import { Fragment } from "react"
import { Outlet } from "react-router"
import MainNavigation from "../components/MainNavigation"
import classes from './Root.module.css'

function Root() {
  return <Fragment>
    <MainNavigation/>
    <main className={classes.content}>
    <Outlet/>
    </main>
  </Fragment>
}

export default Root