import type { ReactNode } from 'react';

function Box({ children }: { children?: ReactNode }) {
  return (
    <div className='bg-white border border-zinc-100 shadow-xl p-5 rounded-4xl min-h-[100px]'>
      {children}
    </div>
  )
}

export default Box;