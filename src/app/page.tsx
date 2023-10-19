import {Link} from '@nextui-org/link';

export default function Home() {
  return (
    <main>
      <h1>Some</h1>
      <div className="flex flex-col gap-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
