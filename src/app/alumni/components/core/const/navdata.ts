interface MenuItem {
    name: string;
    href: string;
    submenu?: MenuItem[]; 
  }
export const navigation:MenuItem[] = [
    { name: "Home", href: "/alumni" },
    { name: "About", href: "/alumni/aboutus" },
    { 
      name: "Our Services", 
      href: "",
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
      ]
    },
    { 
      name: "Programmes", 
      href: "",
      submenu: [
        { name: "Tech Training", href: "/programmes/tech-training" },
        { name: "Innovation Hub", href: "/programmes/innovation-hub" },
      ]
    },
    { name: "Events", href: "" },
    { name: "Jobs", href: "" },
    { name: "Blog", href: "" },
]