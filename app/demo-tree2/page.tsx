'use client';

import dynamic from 'next/dynamic';

const StyledTreeExample = dynamic(
  () => import('./StyledTreeExample'),
  { ssr: false }
);
export default function page() {
  return (
    <div>
        <StyledTreeExample/>
    </div>
  )
}
