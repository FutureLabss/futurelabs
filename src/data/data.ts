import Homeimg1 from "../app/assets/images/hero-1.png"
import Homeimg2 from "../app/assets/images/hero-2.png"
import Homeimg3 from "../app/assets/images/home-image3.png"
import Homeimg4 from "../app/assets/images/hero-3.png"
import Homeimg5 from "../app/assets/images/hero-5.png"
// import Homeimg6 from "../app/assets/images/gold-pic.jpg"


export const pictureData = [
  {
    src: Homeimg1,
    alt: "hero image",
  },
  {
    src: Homeimg2,
    alt: "hero image",
  },
  {
    src: Homeimg3,
    alt: "hero image",
  },
  {
    src: Homeimg4,
    alt: "hero image"

  },
  {
    src: Homeimg5,
    alt: "hero image",
  },
]


export const skillSets = [
  {
    name: "Product Design",
    tools: ['Figma', 'Figjam', 'Maze']
  },

  {
    name: "Front End Development",
    tools: ['HTML', 'CSS', 'Javascript', 'React']
  },

  {
    name: "Backend Development",
    tools: ['Git', 'Node Js', 'PHP', 'Python', 'Github', 'Docker']
  },
  {
    name: "Mobile Development",
    tools: ['React Native', 'Github', 'Git', 'Firebase']
  },
  {
    name: "Data Analytics",
    tools: ['Power BI', 'Microsoft Excel', 'Python', 'Github', 'Git']
  }
]


// Array of questions and answers
export const faqData = [
  {
    question: "What Services does FutureLabs Offer?",
    answer: "FutureLabs offers a range of services including coworking spaces, private offices, networking opportunities, mentorship programs, and access to events tailored for startups and entrepreneurs."
  },
  {
    question: "How Can I Join FutureLabs?",
    answer: "You can join FutureLabs by filling out an application on our website. After reviewing your application, we offer different membership options based on your needs, including flexible desk plans and dedicated office spaces."
  },
  {
    question: "Is FutureLabs open to individuals or only teams?",
    answer: "FutureLabs welcomes both individuals and teams. Whether you're a solo entrepreneur or part of a startup, we have flexible options to support your workspace and growth needs."
  },
  {
    question: "Does FutureLabs Offer Remote Membership?",
    answer: "Yes, FutureLabs offers remote memberships for those who want to access our community and resources without needing a physical workspace. Remote members can still participate in virtual events and network with other members."
  },
  {
    question: "What Kind of Events does FutureLabs Host?",
    answer: "FutureLabs hosts a variety of events including workshops, networking sessions, hackathons, pitch nights, and industry-specific panels designed to foster collaboration and growth within the startup community."
  },
  {
    question: "What Industry does FutureLabs focus on?",
    answer: "FutureLabs is industry-agnostic, meaning we support startups and businesses from a wide range of sectors including technology, healthcare, education, and creative industries."
  }
];



import img1 from "../app/assets/images/image-1.png"
import img2 from "../app/assets/images/Rectangle-98.png"
import img3 from "../app/assets/images/Rectangle-99.png"
import img4 from "../app/assets/images/image-4.png"
import img5 from "../app/assets/images/image-5.png"
import img6 from "../app/assets/images/image-6.png"
import img7 from "../app/assets/images/image-7.png"
import img8 from "../app/assets/images/image-8.png"



export const imageGallery = [
  {
    id: "img-1",
    src: img1,
    alt: "hero image",
  },
  {
    id: "img-2",
    src: img5,
    alt: "hero image",
  },
  {
    id: "img-3",
    src: img2,
    alt: "hero image",
  },
  {
    id: "img-4",
    src: img6,
    alt: "hero image",
  },
  {
    id: "img-5",
    src: img3,
    alt: "hero image",
  },
  {
    id: "img-6",
    src: img7,
    alt: "hero image",
  },
  {
    id: "img-7",
    src: img4,
    alt: "hero image",
  },
  {
    id: "img-8",
    src: img8,
    alt: "hero image",
  },
]


import serviceimg1 from "../app/assets/images/service-img1.png"
import serviceimg2 from "../app/assets/images/service-img2.png"
// import serviceimg3 from "../app/assets/images/service-img3.png"
// import serviceimg4 from "../app/assets/images/service-img4.png"
import serviceimg5 from "../app/assets/images/service-img5.png"
import serviceimg6 from "../app/assets/images/service-img6.png"




export const servicesData = [
  {
    id: "service-2",
    service: "Software Training Programs",
    description: "We offer a 9 months bootcamp designed to take you from zero to hero, you will learn new technologies, join a community of techies, build real world projects and collaborate with teammates in a cross functional environment",
    src: serviceimg2,
    href: "https://futurelabs-lms.vercel.app/",
  },

  {
    id: "service-1",
    service: "Custom Web and Mobile Solutions",
    description: "Our software solution is specially designed for startups looking to build minimum viable products  for their ideas quickly",
    src: serviceimg1,
  },


  {
    id: "service-3",
    service: "Recorded Courses",
    description: "Our pre-recorded courses are designed to take your career to the next level",
    src: img1,
  },
  {
    service: "Talent Pool Access",
    description: "We take the best talents from our training programs and place them in international roles where they contribute and learn new skills. A win win.",
    src: img1,
  },
  {
    service: "Minimum Viable Products",
    description: "We have free and premium products developed to meet specific needs",
    src: serviceimg5,
  },
  {
    service: "Access to Resources",
    description: "We offer resources to guide on your learning path..",
    src: serviceimg6,
  },
]



import Frame from "../app/assets/images/Frame-testimonial.png"
import Frame1 from "@/app/assets/testimonials/Frame-one.png"
import Frame2 from "@/app/assets/testimonials/Frame-two.png"
import Frame3 from "@/app/assets/testimonials/Frame-three.png"
import Frame4 from "@/app/assets/testimonials/Frame-four.png"

export const blogData = [
  {

    content: "My experience at Future Labs, coupled with the opportunity to collaborate with an incredible community of talented innovators, has propelled my career to new heights. It gave me global exposure, led to an invaluable role at one of Nigeria’s top talent accelerators, and ultimately, to my current position as a manager at a leading UK EdTech firm.",
    name: "Justin Mark",
    title: "Business Development Manager",
    src: Frame
  },
  {
    content: "Every day, I am grateful for the people and opportunities that have made my tech journey a breeze. Especially when I took a leap of faith by quitting my teaching job as a classroom teacher to start a tech career with little savings. My strategy? It's either it works or it works.",
    name: "Usenmfon Uko",
    title: "Developer",
    src: Frame1
  },
  {
    content: "Futurelabs provided me with the perfect platform to grow as a software developer.  Their guidance and support helped me transition to Alphapay, where I now develop enterprise software solutions.",
    name: "Ukpono Titus",
    title: "Developer",
    src: Frame2
  },
  {
    content: "Futurelabs provided me with the perfect platform to grow as a software developer.  Their guidance and support helped me transition to Alphapay, where I now develop enterprise software solutions.",
    name: "Akpan Iniobong",
    title: "UI/UX",
    src: Frame3
  },
  {
    content: "The journey has not been smooth but I had a good start on the shoulder of @FutureLabsNG So if you are looking for a tech hub, community to join, visit them, their physical location is in Ikot Ekpene, Akwa Ibom State.",
    name: "Awah Bright",
    title: "Developer",
    src: Frame4
  },
]



export const programData = [
  {
    skill: "UI/UX DESIGN",
    description: `We offer a 9 months bootcamp designed to take you from zero to hero, you will learn new technologies, join a community of techies, build real world projects and collaborate with teammates in a cross functional environment
    We offer a 9 months bootcamp designed to take you from zero to hero, you will learn new technologies, join a community of techies, build real world projects and collaborate with teammates in a cross functional environment`,
    outline: ["Foundations of User Interface(UI) and User Experience(UX) Design", "Start the UX Process: Empathize, Define and Ideate", "Build Wireframes and Low-Fidelity Prototypes", "Create High-Fidelity Designs in Figma", "Prototypes in Figma", "Responsive Web Design in Adobe XD", "Capstone Projects for your Portfolio"],
  },

  {
    skill: "Graphics Design",
    description: "This course prepares you to master typography, imagery, composition, and colour ti solve visualcommunication problems in everyday products, and build capstone projects that culminate into hiring  visibility.",
    outline: ["Fundamentals of Graphic Design", "Introduction to Typography", "The Colour Theory", "Photoshop", "Introduction to Image Making", "Portfolio Building"],
  },
  {
    skill: "Website Development",
    description: "Master the art of web development with our comprehensive training programs. From front-end design to back-end architecture, you’ll learn how to create dynamic, responsive and user-centric websites. Whether you're just starting or looking to advance your skills, our courses cover essential technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js. With hands-on projects and mentorship from industry experts, you'll be equipped to build cutting-edge web applications that meet the demands of today’s digital world.",
    outline: ["Introduction to CMS (Content Management Systems)", "Responsive Design and Layout with Elementor", "Plugins and Integrations", "PhotoshopMotion Effects and Popups", "Web Optimization (SEO)", "Building a landing page", 'Building an online store', 'Building a blog'],
  },
  {
    skill: "Motion Design",
    description: "Master the art of web development with our comprehensive training programs. From front-end design to back-end architecture, you’ll learn how to create dynamic, responsive and user-centric websites. Whether you're just starting or looking to advance your skills, our courses cover essential technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js. With hands-on projects and mentorship from industry experts, you'll be equipped to build cutting-edge web applications that meet the demands of today’s digital world.",
    outline: ["Introduction to CMS (Content Management Systems)", "Responsive Design and Layout with Elementor", "Plugins and Integrations", "PhotoshopMotion Effects and Popups", "Web Optimization (SEO)", "Building a landing page", 'Building an online store', 'Building a blog'],
  },
  {
    skill: "Digital Marketing",
    description: "Master the art of web development with our comprehensive training programs. From front-end design to back-end architecture, you’ll learn how to create dynamic, responsive and user-centric websites. Whether you're just starting or looking to advance your skills, our courses cover essential technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js. With hands-on projects and mentorship from industry experts, you'll be equipped to build cutting-edge web applications that meet the demands of today’s digital world.",
    outline: ["Introduction to CMS (Content Management Systems)", "Responsive Design and Layout with Elementor", "Plugins and Integrations", "PhotoshopMotion Effects and Popups", "Web Optimization (SEO)", "Building a landing page", 'Building an online store', 'Building a blog'],
  },


]


import Hero1 from "@/app/assets/images/hero--1.jpg"
import Hero2 from "@/app/assets/images/hero--2.jpg"
import Hero3 from "@/app/assets/images/hero--3.jpg"
import Hero4 from "@/app/assets/images/hero--4.jpg"
import Hero5 from "@/app/assets/images/hero--5.jpg"

export const mobileImages = [
  {
    id: "img-1",
    src: Hero1
  },
  {
    id: "img-2",
    src: Hero2
  },
  {
    id: "img-3",
    src: Hero3
  },
  {
    id: "img-4",
    src: Hero4
  },
  {
    id: "img-5",
    src: Hero5
  },
]