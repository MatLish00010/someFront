import {Link} from '@nextui-org/link';

export default function Home() {
  return (
    <main className="container mx-auto  h-screen px-4 pt-5 md:container">
      <h1 className="text-center text-3xl font-bold">Some-front</h1>
      <div className="flex flex-col gap-5">
        <Link href="/login">Login</Link>
        <Link href="/dashboard">
          <p className="font-bold">Dashboard</p>
        </Link>
        <Link href="/about">
          <p className="font-bold">About</p>
        </Link>
      </div>
    </main>
  );
}
