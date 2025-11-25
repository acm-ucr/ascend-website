import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="font-playfair text-ascend-red-orange text-5xl">404</h1>
      <p className="font-playfair mt-3 text-4xl font-bold">Page Not Found</p>
      <Link
        href="/"
        className="bg-ascend-red-orange mt-5 rounded-full px-8 py-2 text-xl text-white transition hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
