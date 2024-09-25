import ProceedBtn from "../ui/ProceedBtn";


export default function ReusableForm() {
  return (
    <div>
      <form
        className="grid grid-cols-2 gap-[3rem]">

        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            First Name
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" type="text" name="firstName" placeholder="Enter your first name" />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Last Name
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" type="text" name="lastName" placeholder="Enter your first name" />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Email
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" type="email" name="email" placeholder="Enter your first name" />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Gender
          </label>
          <select className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" name="geder" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Contact Address
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" type="email" name="email" placeholder="Enter your first name" />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Choose Skill
          </label>
          <select className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] text-[#222D4BB2]" name="skill" id="">
            <option value="design">UI/UX Design</option>
            <option value="development">Web Development</option>
            <option value="marketing">Marketing</option>
            <option value="management">Management</option>
            <option value="data-analysis">Data Analytics</option>
          </select>
        </div>

        <ProceedBtn />
      </form>
    </div>
  )
}
