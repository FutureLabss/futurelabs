
import Image from "next/image"
import Logo from "../../assets/logo/Futurelabs-logo.png"
import Link from "next/link"

export default function Nav() {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="futurelabs logo"
        width={153}
        // height={29}
        className="h-auto"
      />
    </Link>
  )
}
