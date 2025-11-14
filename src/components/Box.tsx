import type { ReactNode } from 'react';

function Box({ title, children }: { title?: string, children?: ReactNode }) {
  return (
    <div className='bg-white border border-zinc-100 shadow-xl p-7 rounded-4xl min-h-[200px] space-y-3'>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  )
}

export default Box;