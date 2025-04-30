import { Card } from '@/components/ui/card'

export function ApplicationStatusChart() {
  // Mock data for now
  const data = [
    { status: 'Applied', count: 10 },
    { status: 'Interview', count: 5 },
    { status: 'Offer', count: 2 },
    { status: 'Rejected', count: 7 }
  ]

  const total = data.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className='space-y-4'>
      {data.map((item) => (
        <div key={item.status} className='space-y-2'>
          <div className='flex justify-between text-sm'>
            <span>{item.status}</span>
            <span className='text-gray-500'>{item.count}</span>
          </div>
          <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
            <div
              className='h-full bg-blue-500'
              style={{ width: `${(item.count / total) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
