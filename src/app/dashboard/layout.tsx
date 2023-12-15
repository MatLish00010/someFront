import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function Layout({children}: Props) {
  return (
    <main className="container mx-auto flex-1 px-4 pt-5 md:container">
      <div className="p-2 text-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      {children}
    </main>
  );
}
