import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.svg" width={150} height={40} alt="" />
    </Link>
  );
};

export default Logo;
