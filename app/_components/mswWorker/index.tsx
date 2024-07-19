'use client'

import { useEffect } from "react"

export const MswWorker = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return
    }

    import('@/mocks/graphql/browser').then(({ worker }) => {
      worker.start()
    })
  })
  return <></>
}