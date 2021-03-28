import React, { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children?: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
    },
  },
})

const ReactQueryProvider = ({ children }: Props): ReactElement => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default ReactQueryProvider
