import { Card, CardContent } from '@tth/ui';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-muted px-4'>
      <Card className='w-full max-w-md'>
        <CardContent className='p-6'>{children}</CardContent>
      </Card>
    </div>
  );
}

export default AuthLayout;
