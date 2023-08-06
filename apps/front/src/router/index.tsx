import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/App'
import { Index } from '@/pages/index'
import { Chat } from '@/pages/chat'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
])
