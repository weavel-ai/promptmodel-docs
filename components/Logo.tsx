import Image from "next/image";

export function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image src="/logo-erasebg.png" alt="Promptmodel" width={52} height={52} />
      <span className="nx-font-mono">Promptmodel</span>
    </div>
  );
}
