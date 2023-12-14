import {BackspaceIcon} from '@heroicons/react/20/solid';
import {Card} from '@nextui-org/card';
import {Link} from '@nextui-org/link';
import {Skeleton} from '@nextui-org/skeleton';
import {Suspense} from 'react';

import {positivePromise} from '@/src/utils/fakePromise';

function NewsCardLoad() {
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

async function NewsCard() {
  const content = await positivePromise();
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <div className="h-24 rounded-lg bg-white"></div>
      <div className="space-y-3">
        <p className="w-3/5 rounded-lg bg-default-200 p-1">{content}</p>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-5">
        <Link href="/">
          <BackspaceIcon className="h-3 w-3" /> <p className="ml-1">Welcome Page</p>
        </Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/users">Users List</Link>
        <Link href="/dashboard/ton">Ton</Link>
      </div>
      <Suspense fallback={<NewsCardLoad />}>
        <NewsCard />
      </Suspense>
    </div>
  );
}
