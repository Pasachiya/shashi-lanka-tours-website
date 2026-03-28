import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-jungle-50 dark:bg-jungle-950">
      <div className="text-7xl mb-6">🌿</div>
      <h1 className="font-display text-5xl text-jungle-900 dark:text-jungle-100 font-light mb-4">
        Lost in the Jungle?
      </h1>
      <p className="font-sans text-jungle-600 dark:text-jungle-400 text-lg max-w-md mb-8">
        This page seems to have wandered off the trail. Let us guide you back to paradise.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          ← Back to Home
        </Link>
        <Link href="/booking" className="btn-outline">
          Book a Tour
        </Link>
      </div>
    </div>
  );
}
