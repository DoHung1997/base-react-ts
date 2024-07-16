import React from 'react'
import Home from "@/components/Home";

type RouteType = {
    path: string
    component: React.FC<any>
    layout?: React.FC<any>
}

const publicRoutes: RouteType[] = [
    {
        path: '/',
        component: Home
    }
]
const privateRoutes: RouteType[] = [
    {
        path: '/checkout',
        component: Home
    }
]

export {publicRoutes, privateRoutes}