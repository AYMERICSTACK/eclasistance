import Image from "next/image";

type Props = {
  white?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function BrandInline({
  white = false,
  size = "md",
  className = "",
}: Props) {
  const sizes = {
    sm: "h-5",
    md: "h-6",
    lg: "h-8",
  };

  return (
    <span className={`inline-flex items-center align-middle ${className}`}>
      <Image
        src={white ? "/logo-texte-blanc.svg" : "/logo-texte.svg"}
        alt="Écla sistance"
        width={140}
        height={40}
        className={`${sizes[size]} w-auto translate-y-[2px]`}
      />
    </span>
  );
}
