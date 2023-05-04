import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const its = "It's";
  return (
    <nav className="p-10">
      <div className="float-left">
        <p className="text-xl font-md text-white/60">{name}</p>
        <p>{its} like PartyBid, but for PurpleDAO</p>
      </div>
      <div className="float-right">
        <ConnectButton />
      </div>
    </nav>
  );
}