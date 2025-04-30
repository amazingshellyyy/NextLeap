import { Card } from '@/components/ui/card'
import { ApplicationStatusChart } from '@/components/dashboard/ApplicationStatusChart'
import { RecentApplications } from '@/components/dashboard/RecentApplications'
import { UpcomingInterviews } from '@/components/dashboard/UpcomingInterviews'

export default function DashboardPage() {
  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>

      {/* Stats Overview */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card className='p-6'>
          <h3 className='text-sm font-medium text-gray-500'>
            Total Applications
          </h3>
          <p className='text-2xl font-bold'>24</p>
        </Card>
        <Card className='p-6'>
          <h3 className='text-sm font-medium text-gray-500'>
            Active Applications
          </h3>
          <p className='text-2xl font-bold'>12</p>
        </Card>
        <Card className='p-6'>
          <h3 className='text-sm font-medium text-gray-500'>
            Upcoming Interviews
          </h3>
          <p className='text-2xl font-bold'>3</p>
        </Card>
        <Card className='p-6'>
          <h3 className='text-sm font-medium text-gray-500'>Offer Rate</h3>
          <p className='text-2xl font-bold'>8%</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Application Status Chart */}
        <Card className='p-6 lg:col-span-2'>
          <h2 className='text-xl font-semibold mb-4'>Application Status</h2>
          <ApplicationStatusChart />
        </Card>

        {/* Upcoming Interviews */}
        <Card className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Upcoming Interviews</h2>
          <UpcomingInterviews />
        </Card>

        {/* Recent Applications */}
        <Card className='p-6 lg:col-span-3'>
          <h2 className='text-xl font-semibold mb-4'>Recent Applications</h2>
          <RecentApplications />
        </Card>
      </div>
    </div>
  )
}
