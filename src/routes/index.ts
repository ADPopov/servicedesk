import React from "react";
import Main from "../pages/Main";
import Archive from "../pages/Archive";

export interface IRoute {
    path: RouteNames;
    component: React.ComponentType
    exact?: boolean
}

export enum RouteNames {
    MAIN = '/',
    ARCHIVE = '/archive'
}

export const privateRouters: IRoute[] = [
    {
        path: RouteNames.MAIN,
        component: Main,
        exact: true,
    },
    {
        path: RouteNames.ARCHIVE,
        component: Archive,
    }
]