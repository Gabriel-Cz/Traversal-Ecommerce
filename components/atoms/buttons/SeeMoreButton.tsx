import Link from "next/link";

export const SeeMoreButton: React.FC = () => {
  return (
    <Link href="/about" passHref>
      <a>
        <span>See More</span>
      </a>
    </Link>
  );
}