import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Kumar Singh",
  initials: "Aks",
  url: "https://dillion.io",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/S.R.M+UNIVERSITY+-K.T.R+Campus/@12.8231431,80.0413663,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76d4cecae21:0x4ffbf1222ec00611!8m2!3d12.8231431!4d80.0413663!16s%2Fg%2F11c2jyj5gq?entry=ttu",
  description:
    "Web Developer and UI/UX Designer.I love building things and helping people.",
  summary:
    "I am a second year undergraduate student pursuing B.Tech CSE in SRM University, Kattankulathur. I hope to contribute my skills to work upon real time projects that have an impact on the world. Open to all opportunities and learning from real-world professionals.",
  avatarUrl: "/AdityaImag.jpg",
  skills: [
    "Java",
    "C++",
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Express",
    "Python",
    "TailwindCss",
    "Figma",
    "WebFlow",
    "Git",
    "C",
    "AutoCAD",
    "Google Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adityandmb.com",
    tel: "+91 8652884230",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Axestein",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adityakumarsingh2005/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adityasingh7211",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NSCC SRM",
      href: "https://www.nsccsrm.tech/",
      badges: [],
      location: "On-site",
      title: "Web Developer",
      logoUrl: "/nscclogo.jpg",
      start: "Jun 2024",
      end: "Present",
      description:
        "Made the Responsive Recuritment website for the club, used react.js and tailwind css. Also made the Entire Figma design for the website for laptop and mobile screen seprately.",
    },
    {
      company: "TPHxSRMIST",
      badges: [],
      href: "https://0xsrmist.xyz/",
      location: "Hybrid",
      title: "UI/UX Designer",
      logoUrl: "/tphlogo.jpg",
      start: "March 2024",
      end: "Present",
      description:
        "Made the design for the clubs website along with that made marketing post including posters,insta stories and posts. Used Figma and webflow.",
    },
    {
      company: "Buildspace",
      href: "https://buildspace.so/",
      badges: [],
      title: "Web Developer",
      logoUrl: "/buildspace.jpg",
      start: "Jun 2024",
      end: "July 2024",
      description:
        "lead a team of 2 and built SerenitySpace, a website that will reduce your stress and depression.Our Team was among the top 7.6% of 70,000+ teams that participated. Tools used Figma,Reactjs,tailwindcss,api integration,git.",
    },
    {
      company: "Oasis Infobyte",
      href: "https://oasisinfobyte.com/",
      badges: [],
      title: "Data Science Intern",
      logoUrl: "/oasislogo.jpg",
      start: "May 2024",
      end: "June 2024",
      description:
        "Performed Data Analysis and Visualization: Conducted comprehensive data analysis and generatedvisualizations using tools like Python (Pandas, Matplotlib) and Tableau to uncover insights and trends,facilitating data-driven decision-making for the team.",
    },
    {
      company: "AICTE",
      href: "https://www.aicte-india.org/",
      badges: [],
      title: "Machine Learning Intern",
      logoUrl: "/aictelogo.jpg",
      start: "April 2024",
      end: "June 2024",
      description:
        "Developed and Implemented Machine Learning Models including classification and regression tasks, using algorithms such as decision trees, support vector machines, and neural networks",
    },
    {
      company: "Girlscript summer of code",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      title: "Contributor",
      logoUrl: "/gsooclogo.jpg",
      start: "April 2024",
      end: "July 2024",
      description:
        "Contributed to opensource projects made stunning animations for wbeistes.",
    },
  ],
  education: [
    {
      school: "SRM University of science and technology",
      href: "https://www.srmist.edu.in/",
      degree: "Bachelor's in Technology(B.Tech)",
      logoUrl: "/srmlogo.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "New Bombay City School",
      degree: "Intermediate",
      logoUrl: "/nbsclogo.png",
      start: "2023",
      end: "2021",
    },
    {
      school: "Seventh Day adventist Higher Secondary School",
      degree: "Matriculation",
      logoUrl: "/sdalogo.jpg",
      start: "2010",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Serenityspace",
      href: "https://serenityspaceorg.vercel.app/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Serenityspace is a website made for reducing users stress and depression through ai guided support, community support and motivational resources.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Figma",
        "API Integration",
        "Teamwork",
        "Git",
        "Github",
        "Team Leadership",
      ],
      links: [
        {
          type: "Website",
          href: "https://serenityspaceorg.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Arkachau05/Serenityspace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SS.png",
    },
    {
      title: "TravelVista",
      href: "https://traveelvista.vercel.app/",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "TravelVista is a local Maharastra travel guide and webapp which allows users to do tracking/exploring systematically and safely.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Version Control",
        "Restful API",
        "UI design",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://traveelvista.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travelvista2.png",
    },
    {
      title: "CodersHub",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "CodersHub is a premier platform dedicated to empowering individuals embarking on their tech journey. Whether you are a tech enthusiast just starting out, a first-year college student, or a recent high school graduate, CodersHub provides tailored roadmaps and comprehensive resources,ai support and best communities to join.",
      technologies: [
        "React.js",
        "Javascript",
        "Restful API",
        "TailwindCSS",
        "Figma",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Axestein/CodersHub",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://coders-hub-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Codershub.png",
    },
    {
      title: "WearIt",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "WearIt is the ultimate platform for customizing your t-shirt designs in 3D! With WearIt, you can effortlessly personalize your shirts by changing colors, adding custom logos, and even generating unique designs with DALL·E.",
      technologies: [
        "Three.js",
        "MongoDB",
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Restful API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Axestein/WearIt",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://wear-it.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Wearit.png",
   },
  ],
  
} as const;
