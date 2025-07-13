import { ROUTES } from '@/constants/ROUTES';
import { Button, Sheet, SheetContent, SheetTrigger } from '@tth/ui';
import { Menu } from 'lucide-react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Header */}
      <header className='flex items-center justify-between border-b px-4 py-3 md:px-6'>
        <div className='text-xl font-bold'>MyApp</div>

        {/* Desktop Nav */}
        <nav className='hidden gap-4 md:flex'>
          <a href='#' className='text-sm font-medium text-muted-foreground hover:text-primary'>
            Home
          </a>
          <a href='#' className='text-sm font-medium text-muted-foreground hover:text-primary'>
            About
          </a>
          <a href='#' className='text-sm font-medium text-muted-foreground hover:text-primary'>
            Contact
          </a>
          <a
            href={ROUTES.LOGIN}
            className='text-sm font-medium text-muted-foreground hover:text-primary'
          >
            로그인
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <div className='flex flex-col space-y-4 mt-6'>
                <a href='#' className='text-sm font-medium'>
                  Home
                </a>
                <a href='#' className='text-sm font-medium'>
                  About
                </a>
                <a href='#' className='text-sm font-medium'>
                  Contact
                </a>
                <a href={ROUTES.LOGIN} className='text-sm font-medium'>
                  로그인
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Content */}
      <div className='flex flex-1'>
        {/* Sidebar (Tablet & Up) */}
        <aside className='hidden w-64 border-r p-4 md:block'>
          <nav className='flex flex-col gap-2'>
            <a href='#' className='text-sm text-muted-foreground hover:text-primary'>
              Dashboard
            </a>
            <a href='#' className='text-sm text-muted-foreground hover:text-primary'>
              Settings
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className='flex-1 p-4 md:p-6'>{children}</main>
      </div>

      {/* Footer */}
      <footer className='border-t px-4 py-3 text-sm text-muted-foreground text-center md:px-6'>
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default DefaultLayout;
