'use client';

import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error('error222', error);
  }, [error]);

  return (
    <main className="container mx-auto flex h-screen flex-1 flex-col items-center justify-center gap-5 px-4 pt-5 md:container">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
