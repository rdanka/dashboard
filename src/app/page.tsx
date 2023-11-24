import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex-grow'></div>
    </main>
  )
}
