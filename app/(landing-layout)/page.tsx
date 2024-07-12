import Link from "next/link";

const RoutePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default RoutePage;
