import { StaticImageData } from "next/image";
import usenmfon from "../../../../assets/alumni/usenmfon.jpeg"
import ime from "../../../../assets/alumni/peterime.jpeg"
import triumph from "../../../../assets/alumni/trimph.jpeg"
import bright from "../../../../assets/alumni/awah.jpg"
import ekemini from "../../../../assets/alumni/mavricks.jpg"
import gideon from "../../../../assets/alumni/gideon.jpeg"
import godswill from "../../../../assets/alumni/godswill.jpeg"
import gold from "../../../../assets/alumni/gold.jpeg"
import harison from "../../../../assets/alumni/harison.jpeg"
import imaobong from "../../../../assets/alumni/elijah.jpg"
import justine from "../../../../assets/alumni/justine.jpeg"
import john from "../../../../assets/alumni/jay.jpg"
import utibe from "../../../../assets/alumni/utibe.jpeg"
import uiux from "../../../../assets/alumni/uiux.jpeg"
import uyia from "../../../../assets/alumni/uyia.jpeg"
import dan from "../../../../assets/alumni/dan.jpg"
import ukpono from "../../../../assets/alumni/mainprofile.jpg"
import clark from "../../../../assets/alumni/clark.jpg"
import raph from "../../../../assets/alumni/Raphael.jpeg"
import ima from "../../../../assets/alumni/ima.jpg"
import imo from "../../../../assets/alumni/imo.jpeg"
import eno from "../../../../assets/alumni/eno.jpg"


interface IAlumni{
    name:string;
    image:StaticImageData;
    linkedin:string;
    role:string;
}
export const alumni:IAlumni[] = [
    {
      name: "Clark Essiet",
      image: clark,
      linkedin: "https://www.linkedin.com/in/clarkessiet/",
      role: "Full Stack Developer"
    },
    {
      name: "Daniel Mendie",
      image: dan,
      linkedin: "https://www.linkedin.com/in/danielmendie/",
      role: "Fullstack .Net Developer"
    },
    {
      name: "Usenmfon Uko",
      image: usenmfon,
      linkedin: "https://www.linkedin.com/in/usenmfon-uko/",
      role: "Full Stack Developer"
    },
    {
      name: "Triumph Anointing",
      image: triumph,
      linkedin: "https://www.linkedin.com/in/mrteee/",
      role: "Senior Motion Designer"
    },
    {
      name: "Ezekiel Simon",
      image: ima,
      linkedin: "https://www.linkedin.com/in//",
      role: "Graphics Designer"
    },
    {
      name: "Peter Ime",
      image: ime,
      linkedin: "https://www.linkedin.com/in/peter-ime-bbb18719b/",
      role: "Software developer"
    },
    {
      name: "Bright Awah",
      image: bright,
      linkedin: "https://www.linkedin.com/in/bright-awah-59b707223/",
      role: "Fullstack developer"
    },
    {
      name: "Imaobong Elijah",
      image: imaobong,
      linkedin: "https://www.linkedin.com/in/imaobong-elijah/",
      role: "Product Designer, UI/UX Designe"
    },
    {
      name: "Utibe Akaninyene",
      image: utibe,
      linkedin: "https://www.linkedin.com/in/utibeabasi-akaninyene-09199722a/",
      role: "Product Designer, UI/UX Designe"
    },
    {
      name: "EnoAbasi Asuquo",
      image: eno,
      linkedin: "https://www.linkedin.com/in/enoabasi-asuquo-effiong-817a22137/",
      role: "Hardware Engineer"
    },
    {
      name: "John fidelis",
      image: john,
      linkedin: "https://www.linkedin.com/in/jayfidelis/",
      role: "Software Developer"
    },
    {
      name: "Ekemini Sunday",
      image: ekemini,
      linkedin: "https://www.linkedin.com/in/ekemini-sunday-924b62103/",
      role: "3D Artist"
    },
    {
      name: "UyaiAbasi Isidore",
      image: uyia,
      linkedin: "https://www.linkedin.com/in/uyaiabasi/",
      role: "Software Developer"
    },
    {
      name: "Justin Mark",
      image: justine,
      linkedin: "https://www.linkedin.com/in/justin-mark/",
      role: "Management"
    },
    {
      name: "Gold Nseuwem",
      image: gold,
      linkedin: "https://www.linkedin.com/in/gold-nseuwem-23584a259/",
      role: "UI/UX Designer"
    },
    {
      name: "Godswill Akpan",
      image: godswill,
      linkedin: "https://www.linkedin.com/in/godswill-akpan-94270422b/",
      role: "UI/UX Designer"
    },
    {
      name: "Gideon Oquongudo",
      image: gideon,
      linkedin: "https://www.linkedin.com/in/gideon-oquongudo/",
      role: "Data Analyst"
    },
    {
      name: "Abraham Unoinyang",
      image: uiux,
      linkedin: "https://www.linkedin.com/in/abraham-udoinyang-37221424a/",
      role: "UI/UX Designer"
    },
    {
      name: "Emediong Harrison",
      image: harison,
      linkedin: "https://www.linkedin.com/in/delcyharrison/",
      role: "Data Analyst"
    },
    {
      name: "Raphael Michael",
      image: raph,
      linkedin: "https://www.linkedin.com/in/raphael-michael-1b60722a8/",
      role: "Frontend Developer"
    },
    {
      name: "Ukpono Titus",
      image: ukpono,
      linkedin: "https://www.linkedin.com/in/ukpono-titus-72810b346/",
      role: "Frontend Developer"
    },
    {
      name: "Imo Udoh",
      image: imo,
      linkedin: "https://www.linkedin.com/in/imo-udoh-747347197/",
      role: "Backend Developer"
    },
  ]