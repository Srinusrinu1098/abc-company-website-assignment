import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div>
      <Image
        src="/footer.png"
        alt="footer"
        height={100}
        width={100}
        className="h-[200px] w-[1000px]"
      />
    </div>
  );
}

export default Footer;
