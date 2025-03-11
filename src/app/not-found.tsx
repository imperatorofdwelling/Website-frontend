import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-4'>
      <h2 className='text-4xl font-bold'>Not Found</h2>
      <p className='text-lg'>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 hover:underline'>
        Return Home
      </Link>
    </div>
  )
}
