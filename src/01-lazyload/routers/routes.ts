/* eslint-disable @typescript-eslint/ban-types */
// import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { RouteProps } from "react-router-dom";
import { lazy } from "react";
import ShoppingPage from "../../02-component-pattern/pages/ShoppingPage";
 
const Lazy1 = lazy( () => import(/* webpackChunkName: "LazyLoad1" */ "../pages/LazyPage1"))
// const Lazy2 = lazy( () => import(/* webpackChunkName: "LazyLoad2" */ "../pages/LazyPage2"))
const Lazy3 = lazy( () => import(/* webpackChunkName: "LazyLoad3" */ "../pages/LazyPage3"))

type CustomRouteProps = RouteProps & {
    to?: string
}

export const routes : CustomRouteProps[] = [
    {
        to: "Shopping Page",
        path:"/shooping", 
        Component: ShoppingPage
    },
    {
        to: "Lazy 1",
        path:"/lazy1/*", 
        Component: Lazy1
    },
    {
        to: "Lazy 3",
        path:"/lazy3", 
        Component: Lazy3
    }
]