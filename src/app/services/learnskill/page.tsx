import ReusableForm from "../components/ReusableForm";

export default function page() {
  return (
    <div className="">
      <div className="flex w-full justify-between mt-[7px] mb-[40px]">
        <div className="xl:max-w-[302px] w-full">
          <h2 className="text-[1.5rem] sm:text-[2rem] xl:text-[3rem]">Be a Pro in a <span className="text-[#F57F20]">Tech</span> Skill</h2>
          <p className="text-[1rem] xl:text-[1.5rem] text-[#000000B2]">Fill in these details correctly</p>
        </div>
        <div className="w-full text-end">
          <p className="text-[1.5rem] sm:text-[2rem] xl:text-[3rem]"><span className="text-[#F57F20] ">1 </span>out of 2</p>
        </div>
      </div>
      <ReusableForm />
    </div>
  )
}
