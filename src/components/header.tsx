import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from "next/link";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const its = "It's";
  return (
    <nav className="p-10">
      <div className="float-left">
        <p className="text-xl font-md text-white/60">{name}</p>
        <p>A group bidding mechanism for <Link href="https://purple.construction">Purple DAO</Link></p>
      </div>
      <div className="float-right">
        <ConnectButton />
      </div>
    </nav>
  );
}