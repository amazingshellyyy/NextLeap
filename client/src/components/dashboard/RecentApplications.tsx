export function RecentApplications() {
  // Mock data for now
  const applications = [
    {
      id: 1,
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      status: 'Interview',
      date: '2024-04-30'
    },
    {
      id: 2,
      company: 'Startup Inc',
      position: 'Frontend Developer',
      status: 'Applied',
      date: '2024-04-29'
    },
    {
      id: 3,
      company: 'Enterprise Solutions',
      position: 'Full Stack Developer',
      status: 'Rejected',
      date: '2024-04-28'
    }
  ]

  return (
    <div className='space-y-4'>
      {applications.map((app) => (
        <div
          key={app.id}
          className='flex items-center justify-between p-4 border rounded-lg'
        >
          <div>
            <h3 className='font-medium'>{app.position}</h3>
            <p className='text-sm text-gray-500'>{app.company}</p>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-gray-500'>{app.date}</span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                app.status === 'Interview'
                  ? 'bg-blue-100 text-blue-800'
                  : app.status === 'Applied'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {app.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
