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

interface IAlumni{
    name:string;
    image:StaticImageData;
    linkedin:string;
}
export const alumni:IAlumni[] = [
    {
      name: "Clark Essiet",
      image: clark,
      linkedin: "https://linkedin.com/in/nsikak-thompson"
    },
    {
      name: "Daniel Mendie",
      image: dan,
      linkedin: "https://linkedin.com/in/david-inyang-etoh"
    },
    {
      name: "Usenmfon Uko",
      image: usenmfon,
      linkedin: "https://www.linkedin.com/in/usenmfon-uko/"
    },
    {
      name: "Triumph Anointing",
      image: triumph,
      linkedin: "https://www.linkedin.com/in/mrteee/"
    },
    {
      name: "Peter Ime",
      image: ime,
      linkedin: "https://www.linkedin.com/in/peter-ime-bbb18719b/"
    },
    {
      name: "Bright Awah",
      image: bright,
      linkedin: "https://www.linkedin.com/in/bright-awah-59b707223/"
    },
    {
      name: "Imaobong Elijahe",
      image: imaobong,
      linkedin: "https://www.linkedin.com/in/imaobong-elijah/"
    },
    {
      name: "Utibe Akaninyene",
      image: utibe,
      linkedin: "https://www.linkedin.com/in/utibeabasi-akaninyene-09199722a/"
    },
    {
      name: "John fidelis",
      image: john,
      linkedin: "https://www.linkedin.com/in/jayfidelis/"
    },
    {
      name: "Ekemini Sunday",
      image: ekemini,
      linkedin: "https://www.linkedin.com/in/ekemini-sunday-924b62103/"
    },
    {
      name: "UyaiAbasi Isidore",
      image: uyia,
      linkedin: "https://www.linkedin.com/in/uyaiabasi/"
    },
    {
      name: "Justin Mark",
      image: justine,
      linkedin: "https://www.linkedin.com/in/justin-mark/"
    },
    {
      name: "Gold Nseuwem",
      image: gold,
      linkedin: "https://www.linkedin.com/in/gold-nseuwem-23584a259/"
    },
    {
      name: "Godswill Akpan",
      image: godswill,
      linkedin: "https://www.linkedin.com/in/godswill-akpan-94270422b/"
    },
    {
      name: "Gideon Oquongudo",
      image: gideon,
      linkedin: "https://www.linkedin.com/in/gideon-oquongudo/"
    },
    {
      name: "Abraham Unoinyang",
      image: uiux,
      linkedin: "https://www.linkedin.com/in/abraham-udoinyang-37221424a/"
    },
    {
      name: "Emediong Harrison",
      image: harison,
      linkedin: "https://www.linkedin.com/in/delcyharrison/"
    },
    {
      name: "Ukpono Titus",
      image: ukpono,
      linkedin: "https://www.linkedin.com/in/ukpono-titus-72810b346/"
    },
  ]