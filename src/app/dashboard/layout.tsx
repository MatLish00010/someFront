import React from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="p-2 text-center">
        <h1 className="text-logo text-xl font-semibold">Dashboard</h1>
      </div>
      {children}
    </div>
  );
}
