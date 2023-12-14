import {Link} from '@nextui-org/link';

export default function Home() {
  return (
    <main className="container mx-auto  h-screen px-4 pt-5 md:container">
      <h1 className="text-center text-3xl font-bold">Some-front</h1>
      <div className="flex flex-col gap-5">
        <Link href="/login">Login</Link>
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
