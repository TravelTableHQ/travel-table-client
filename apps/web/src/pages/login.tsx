import { ROUTES } from '@/constants/ROUTES';
import { Button, Input, Label } from '@tth/ui';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>로그인</h1>
          <p className='text-sm text-muted-foreground'>계정에 로그인하세요</p>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>이메일</Label>
          <Input id='email' type='email' placeholder='you@example.com' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='password'>비밀번호</Label>
          <Input id='password' type='password' placeholder='******' />
        </div>

        <Button className='w-full' onClick={() => navigate(ROUTES.HOME)}>
          로그인
        </Button>
      </div>
    </>
  );
}

export default LoginPage;
