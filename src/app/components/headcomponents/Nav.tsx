
import Image from "next/image"
import Logo from "../../assets/logo/Futurelabs-logo.png"
import Link from "next/link"

export default function Nav() {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="futurelabs logo"
        width={113}
        height={22}
        quality={100}
        priority
      // className="w-auto h-auto"
      />
    </Link>
  )
}
