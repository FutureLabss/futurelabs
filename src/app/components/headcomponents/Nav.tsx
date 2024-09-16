
import Image from "next/image"
import Logo from "../../assets/logo/Futurelabs-logo.png"

export default function Nav() {
  return (
    <div>
      <Image
        src={Logo}
        alt="futurelabs logo"
        width={113}
        height={22}
        quality={100}
        priority
      // className="w-auto h-auto"
      />
    </div>
  )
}
