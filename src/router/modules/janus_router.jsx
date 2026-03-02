import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import LazyLoad from '../utils/lazy_load'
import JanusLayout from '../../janus/layout'
import JanusHomePage from '../../janus/home'
export const JanusRouter = [
  {
    element: <JanusLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <JanusHomePage />,

        meta: {
          requiresAuth: false,
          title: 'home',
          key: 'home',
        },
      },
      {
        path: '/resource',
        element: LazyLoad(
          React.lazy(() => import('../../janus/resource'))
        ),
        meta: {
          requiresAuth: false,
          title: 'resource',
          key: 'resource',
        },
      },
      {
        path: '/paper_preview',
        element: LazyLoad(
          React.lazy(() => import('../../janus/paper_preview'))
        ),
        meta: {
          requiresAuth: false,
          title: 'paper_preview',
          key: 'paper_preview',
        },
      },

      {
        path: '/ipynb_preview',
        element: LazyLoad(
          React.lazy(() => import('../../janus/ipynb_preview'))
        ),
        meta: {
          requiresAuth: false,
          title: 'ipynb_preview',
          key: 'ipynb_preview',
        },
      },
      {
        path: '/test',
        element: LazyLoad(React.lazy(() => import('@/pages/Test'))),
        meta: {
          requiresAuth: false,
          title: 'test',
          key: 'test',
        },
      },
      {
        path: '/404',
        element: LazyLoad(React.lazy(() => import('@/pages/error/404'))),
      },
      // {
      //   path: '*',
      //   element: <Navigate to="/404" />,
      // },
    ],
  },
  {
    path: '/demo/:fileName',
    element: LazyLoad(
      React.lazy(() => import('../../janus/demo/index'))
    ),
    meta: {
      requiresAuth: false,
      title: 'demo_file',
      key: 'demo_file',
    },
  },
  {
    path: '/demo',
    element: LazyLoad(
      React.lazy(() => import('../../janus/demo/index'))
    ),
    meta: {
      requiresAuth: false,
      title: 'demo',
      key: 'demo',
    },
  },
]
