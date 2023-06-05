'use client'

import MediaLinks from '@/components/MediaLinks'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className='flex flex-col items-center gap-10 w-3/5 h-fit mt-11 animate-slideIn'>
        <MediaLinks />
      </main>
    </QueryClientProvider>
  )
}
