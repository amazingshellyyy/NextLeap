import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      {/* Navigation */}
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/logo.svg'
              alt='NextLeap Logo'
              width={40}
              height={40}
              className='h-10 w-10'
            />
            <div className='text-2xl font-bold text-blue-600'>NextLeap</div>
          </div>
          <div className='flex gap-4'>
            <Link
              href='/login'
              className='px-4 py-2 text-gray-600 hover:text-gray-900'
            >
              Sign In
            </Link>
            <Link
              href='/register'
              className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Take the Next Leap in Your Career
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Stay organized, never miss an opportunity, and land your dream job
              with our comprehensive job application tracking system.
            </p>
            <div className='flex gap-4'>
              <Link
                href='/register'
                className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-medium'
              >
                Start Free Trial
              </Link>
              <Link
                href='/demo'
                className='px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-lg font-medium'
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className='relative h-[400px]'>
            <Image
              src='/images/hero-image.svg'
              alt='Job Search Dashboard'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Everything You Need to Manage Your Job Search
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 rounded-lg border border-gray-200'>
              <div className='h-12 w-12 mb-4 relative'>
                <Image
                  src='/images/tracking-icon.svg'
                  alt='Application Tracking'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                Application Tracking
              </h3>
              <p className='text-gray-600'>
                Keep track of all your job applications in one place. Never lose
                track of where you&apos;ve applied.
              </p>
            </div>
            <div className='p-6 rounded-lg border border-gray-200'>
              <div className='h-12 w-12 mb-4 relative'>
                <Image
                  src='/images/interview-icon.svg'
                  alt='Interview Management'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                Interview Management
              </h3>
              <p className='text-gray-600'>
                Schedule and prepare for interviews with our built-in calendar
                and preparation tools.
              </p>
            </div>
            <div className='p-6 rounded-lg border border-gray-200'>
              <div className='h-12 w-12 mb-4 relative'>
                <Image
                  src='/images/analytics-icon.svg'
                  alt='Analytics Dashboard'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                Analytics Dashboard
              </h3>
              <p className='text-gray-600'>
                Get insights into your job search progress with detailed
                analytics and reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            What Our Users Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-6 bg-white rounded-lg shadow-sm'>
              <div className='flex items-center mb-4'>
                <div className='h-12 w-12 relative mr-4'>
                  <Image
                    src='/images/testimonial-1.jpg'
                    alt='User testimonial'
                    fill
                    className='rounded-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='font-semibold'>Sarah Johnson</h4>
                  <p className='text-gray-600'>Software Engineer</p>
                </div>
              </div>
              <p className='text-gray-600'>
                &quot;NextLeap helped me organize my job search and land my
                dream role. The interview tracking feature was a
                game-changer!&quot;
              </p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-sm'>
              <div className='flex items-center mb-4'>
                <div className='h-12 w-12 relative mr-4'>
                  <Image
                    src='/images/testimonial-2.jpg'
                    alt='User testimonial'
                    fill
                    className='rounded-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='font-semibold'>Michael Chen</h4>
                  <p className='text-gray-600'>Product Manager</p>
                </div>
              </div>
              <p className='text-gray-600'>
                &quot;The analytics dashboard gave me insights I never had
                before. It&apos;s like having a personal job search
                assistant!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white py-8 border-t'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/logo.svg'
                alt='NextLeap Logo'
                width={32}
                height={32}
                className='h-8 w-8'
              />
              <div className='text-gray-600'>
                © 2024 NextLeap. All rights reserved.
              </div>
            </div>
            <div className='flex gap-6'>
              <Link
                href='/privacy'
                className='text-gray-600 hover:text-gray-900'
              >
                Privacy
              </Link>
              <Link href='/terms' className='text-gray-600 hover:text-gray-900'>
                Terms
              </Link>
              <Link
                href='/contact'
                className='text-gray-600 hover:text-gray-900'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
