'use client';

import {NextUIProvider} from '@nextui-org/react';

import {cn} from '@/src/utils/mergeClasses';

export function Providers({children, className}: {children: React.ReactNode; className?: string}) {
  return <NextUIProvider className={cn(className)}>{children}</NextUIProvider>;
}
