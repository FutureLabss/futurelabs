"use client";
import Button from "@/app/ui/Button";
import { useStateAuthProvider } from "@/app/context";
import { programData } from "@/data/data";

export default function PageContent() {


  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { showForm, setShowForm, linkIndex } = context;

  console.log(linkIndex);


  const selectedProgram = linkIndex !== undefined ? programData?.[linkIndex] : null;

  return (
    <div>
      < div className="flex gap-4">
        <p> {linkIndex && linkIndex}</p>
        <div>
          <h2>{selectedProgram?.skill}</h2>
          <p> {selectedProgram?.description}</p>
        </div>

        <div>
          <h2>Course Outline</h2>
          <ul>
            {
              selectedProgram?.outline?.map((course, index) => (
                <li key={index}>{course}</li>
              ))
            }
          </ul>
        </div>
      </div>



      <div className="w-fit">

        <Button setShowForm={setShowForm} showForm={showForm} />
      </div>
    </div >
  );
}
