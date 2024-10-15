export default function HomePage() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <main className='flex-1'>
        <section className='bg-primary py-12 md:py-24 px-6 text-center text-primary-foreground'>
          <div className='max-w-3xl mx-auto space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>
              Stay Organized, Get More Done
            </h1>
            <p className='text-lg md:text-xl'>
              TaskMaster is the ultimate task management app to help you
              streamline your workflow, boost productivity, and achieve your
              goals.
            </p>
            <div className='flex justify-center gap-4'>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>
                Sign Up for Free
              </button>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 px-6'>
          <div className='max-w-5xl mx-auto space-y-8'>
            <div className='text-center'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Powerful Task Management Tools
              </h2>
              <p className='text-muted-foreground text-lg md:text-xl'>
                Streamline your workflow with our suite of productivity
                features.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-muted rounded-lg p-6 space-y-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-12 w-12 text-primary'
                >
                  <path d='M20 6 9 17l-5-5'></path>
                </svg>
                <h3 className='text-2xl font-bold'>To-Do Lists</h3>
                <p className='text-muted-foreground'>
                  Stay on top of your tasks with our intuitive to-do lists.
                  Organize your work, set priorities, and never miss a deadline.
                </p>
              </div>
              <div className='bg-muted rounded-lg p-6 space-y-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-12 w-12 text-primary'
                >
                  <path d='M8 2v4'></path>
                  <path d='M16 2v4'></path>
                  <rect width='18' height='18' x='3' y='4' rx='2'></rect>
                  <path d='M3 10h18'></path>
                </svg>
                <h3 className='text-2xl font-bold'>Calendar</h3>
                <p className='text-muted-foreground'>
                  Visualize your tasks and deadlines with our powerful calendar
                  view. Easily schedule meetings, set reminders, and stay on top
                  of your schedule.
                </p>
              </div>
              <div className='bg-muted rounded-lg p-6 space-y-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-12 w-12 text-primary'
                >
                  <rect width='18' height='18' x='3' y='3' rx='2'></rect>
                  <path d='M11 9h4a2 2 0 0 0 2-2V3'></path>
                  <circle cx='9' cy='9' r='2'></circle>
                  <path d='M7 21v-4a2 2 0 0 1 2-2h4'></path>
                  <circle cx='15' cy='15' r='2'></circle>
                </svg>
                <h3 className='text-2xl font-bold'>Project Boards</h3>
                <p className='text-muted-foreground'>
                  Manage your projects with our intuitive Kanban-style boards.
                  Drag and drop tasks, assign team members, and track progress
                  with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-muted py-12 md:py-24 px-6'>
          <div className='max-w-5xl mx-auto space-y-8'>
            <div className='text-center'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                What Our Users Say
              </h2>
              <p className='text-muted-foreground text-lg md:text-xl'>
                Hear from our satisfied customers.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-background rounded-lg p-6 space-y-4 shadow-md'>
                <div className='flex items-center gap-4'>
                  <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                    <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                      JD
                    </span>
                  </span>
                  <div>
                    <p className='font-bold'>John Doe</p>
                    <p className='text-muted-foreground text-sm'>
                      Project Manager
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground'>
                  "TaskMaster has been a game-changer for our team. The\n
                  intuitive interface and powerful features have helped us\n
                  stay organized and on top of our projects."
                </p>
              </div>
              <div className='bg-background rounded-lg p-6 space-y-4 shadow-md'>
                <div className='flex items-center gap-4'>
                  <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                    <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                      JD
                    </span>
                  </span>
                  <div>
                    <p className='font-bold'>Jane Smith</p>
                    <p className='text-muted-foreground text-sm'>
                      Product Manager
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground'>
                  "I've tried countless task management apps, but TaskMaster\n
                  is by far the best. The calendar and project board features\n
                  have been a game-changer for my team."pps, but TaskMaster is
                  by far the best. The calendar and project board features
                </p>
              </div>
              <div className='bg-background rounded-lg p-6 space-y-4 shadow-md'>
                <div className='flex items-center gap-4'>
                  <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                    <span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                      JD
                    </span>
                  </span>
                  <div>
                    <p className='font-bold'>Michael Johnson</p>
                    <p className='text-muted-foreground text-sm'>
                      Software Engineer
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground'>
                  "TaskMaster has transformed the way my team manages our\n
                  tasks and projects. The app is intuitive, powerful, and has\n
                  helped us become more productive than ever."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-primary text-primary-foreground py-8 px-6'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold'>Features</h3>
            <ul className='space-y-1'>
              <li>
                <a className='hover:underline' href='#'>
                  To-Do Lists
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Calendar
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Project Boards
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Reminders
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold'>Pricing</h3>
            <ul className='space-y-1'>
              <li>
                <a className='hover:underline' href='#'>
                  Individual
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Team
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold'>Support</h3>
            <ul className='space-y-1'>
              <li>
                <a className='hover:underline' href='#'>
                  Help Center
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Contact Us
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold'>Company</h3>
            <ul className='space-y-1'>
              <li>
                <a className='hover:underline' href='#'>
                  About
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Careers
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
