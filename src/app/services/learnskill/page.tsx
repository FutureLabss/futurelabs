import ReusableForm from "../components/ReusableForm";

export default function page() {
  return (
    <div className="">
      <div className="flex w-full justify-between border mt-[7px] mb-[40px] ">
        <div className="max-w-[302px] w-full border border-purple-800">
          <h2 className="text-[3rem]">Be a Pro in a <span className="text-[#F57F20]">Tech</span> Skill</h2>
          <p className="text-[1.5rem] text-[#000000B2]">Fill in these details correctly</p>
        </div>
        <div>
          <p className="text-[2rem]"><span className="text-[#F57F20]">1</span> out of 2</p>
        </div>
      </div>
      <ReusableForm />
    </div>
  )
}
