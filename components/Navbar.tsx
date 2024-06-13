import Image from "next/image";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto py-5 flex gap-10 items-center justify-between">
      <div className="flex items-center gap-10">
        <div>
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </div>
        <div className="text-gray-300 font-semibold text-sm">
          <ul className="flex gap-4">
            <li>Movies</li>
            <li>Web Series</li>
            <li>Go Pro</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2">
        <Button>Sign in</Button>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Navbar;
