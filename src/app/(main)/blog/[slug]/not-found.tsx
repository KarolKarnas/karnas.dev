import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="">
      <h2 className="">404 Not Found</h2>
      <p>Could not find the requested post.</p>
      <Link
        href="/blog"
        className=""
      >
        Go Back
      </Link>
    </main>
  );
}