import Link from "next/link";



export default function PaymentMethod() {

  const paymentLinks = [
    {
      method: "Pay online",
      url: "",
    },
    {
      method: "Pay in Person",
      url: "",
    }
  ]
  return (
    <div className="max-w-[658px] w-full rounded-[1rem] flex flex-col justify-center p-5 md:p-10  xl:p-20 bg-white text-center max-h-[489px] h-full">
      <div className="flex flex-col gap-[99px] w-full  justify-center">
        <h2 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-medium leading-[2.875rem] text-[#222D4B]">Payment Method</h2>

        <div className="flex flex-col items-center gap-10 text-white w-full">

          {paymentLinks.map((link, index) => (

            <Link href={link.url} key={index} className="py-4 max-w-[482px] w-full  hover:bg-[#222D4B] border-[1px] border-[#222D4B] rounded-lg text-[#222D4B] hover:text-white text-[1.5rem]">{link.method}</Link>
          ))}

        </div>
      </div>
    </div>
  )
}
