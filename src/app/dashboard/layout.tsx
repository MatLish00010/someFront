import React from 'react';

type Props = {
  children: React.ReactNode;
  visits: React.ReactNode;
  status: React.ReactNode;
};
export default function Layout({children, visits, status}: Props) {
  return (
    <main className="container mx-auto  h-screen px-4 pt-5 md:container">
      <div className="p-2 text-center">
        <h1 className="text-xl font-semibold text-logo">Dashboard</h1>
      </div>
      {children}
      <div className="flex flex-row justify-center gap-2 border-1 border-amber-200">
        {visits}
        {status}
      </div>
    </main>
  );
}
