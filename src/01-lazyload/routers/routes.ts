// import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { RouteProps } from "react-router-dom";
import { lazy } from "react";
 
const Lazy1 = lazy( () => import(/* webpackChunkName: "LazyLoad1" */ "../pages/LazyPage1"))
const Lazy2 = lazy( () => import(/* webpackChunkName: "LazyLoad2" */ "../pages/LazyPage2"))
const Lazy3 = lazy( () => import(/* webpackChunkName: "LazyLoad3" */ "../pages/LazyPage3"))

export const routes : RouteProps[] = [
    {
        path:"/lazy1", 
        Component: Lazy1
    },
    {
        path:"/lazy2", 
        Component: Lazy2
    },
    {
        path:"/lazy3", 
        Component: Lazy3
    }
]