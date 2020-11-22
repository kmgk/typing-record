import { FC } from 'react';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <div className='px-10 py-3 border-b border-gray flex items-center'>
      <div className='flex-auto'>
        <Link href='/'>
          <a className='font-bold text-4xl'>Typing Record</a>
        </Link>
      </div>
      <div className='flex-auto font-gray-400 text-lg text-center'>
        <Link href='/new-record'>
          <a className='px-3'>記録する</a>
        </Link>
        <Link href='/'>
          <a className='px-3'>プロフィール</a>
        </Link>
        <Link href='/'>
          <a className='px-3'>タイムライン</a>
        </Link>
      </div>
    </div>
  );
};
