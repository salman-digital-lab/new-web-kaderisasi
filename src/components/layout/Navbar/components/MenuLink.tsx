import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  menuData: {
    label: string;
    link: string;
  };
};

export default function MenuLink({ menuData }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={menuData.link}>
      <div
        className={`text-primary-100 transition-colors hover:text-white ${
          pathname === menuData.link ? "text-white" : ""
        }`}
      >
        {menuData.label}
      </div>
    </Link>
  );
}
