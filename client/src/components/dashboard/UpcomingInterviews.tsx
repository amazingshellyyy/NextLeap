export function UpcomingInterviews() {
  // Mock data for now
  const interviews = [
    {
      id: 1,
      company: 'Tech Corp',
      type: 'Technical',
      date: '2024-05-02',
      time: '14:00'
    },
    {
      id: 2,
      company: 'Startup Inc',
      type: 'Behavioral',
      date: '2024-05-03',
      time: '10:30'
    }
  ]

  return (
    <div className='space-y-4'>
      {interviews.map((interview) => (
        <div key={interview.id} className='p-4 border rounded-lg space-y-2'>
          <div className='flex justify-between items-start'>
            <h3 className='font-medium'>{interview.company}</h3>
            <span className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
              {interview.type}
            </span>
          </div>
          <div className='text-sm text-gray-500'>
            {interview.date} at {interview.time}
          </div>
        </div>
      ))}
    </div>
  )
}
