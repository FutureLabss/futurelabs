import Image from "next/image";

const sponsors = [
  { src: "/sponsors/nanocodes.png", width: 210, height: 45, alt: "Nanocodes" },
  { src: "/sponsors/Zenith.png", width: 67, height: 45, alt: "Zenith" },
  { src: "/sponsors/abemx.png", width: 108, height: 45, alt: "Abemx" },
  { src: "/sponsors/Alphapay.png", width: 162, height: 45, alt: "Alphapay" },
  { src: "/sponsors/CodeRigi.png", width: 154, height: 45, alt: "CodeRigi" },
];

const SponsorsList = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full max-w-full">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image
            src={sponsor.src}
            width={sponsor.width}
            height={sponsor.height}
            alt={sponsor.alt}
            className=""
            priority={index === 0} // Only set priority for the first image
          />
        </div>
      ))}
    </div>
  );
};

export default SponsorsList;
