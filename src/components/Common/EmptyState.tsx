'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import Heading from './Heading';

interface EmptyStateProps {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = '일치하는 게 없습니다.',
  subTitle = '일부 필터를 변경하거나 제거해 보십시오.',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading center title={title} subtitle={subTitle} />
      <div className="mt-4 w-48">
        {showReset && <Button outline label="모든 필터 제거" onClick={() => router.push('/')} />}
      </div>
    </div>
  );
};

export default EmptyState;
