import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mark Dhel",
  lastName: "Villarama",
  name: `Mark Dhel Villarama`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "markdhel.villarama29@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Asia/Manila'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/markdweb",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/markdhelvillarama",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/markdhelvillarama/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developer</>,
  featured: {
    display: true,
    title: (
    <Row gap="4" vertical="center">
      <Text>
        Recent project:
      </Text>
      <strong>Sample</strong>
  </Row>

    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Mark — software developer in Manila focused on crafting delightful user experiences.{" "} In my downtime,
      <br /> I document my tech and creative journey with an 
      <br /> eye for innovation and sharing what I learn.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/markdweb",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Mark, a software developer based in Philippines passionate about building intuitive,
        user-friendly applications that connect creativity with functionality. Driven by
        curiosity and continuous growth, I enjoy refining my craft, learning new tools, 
        and sharing lessons from my journey to inspire collaboration and innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Software Developer Freelancer",
        timeframe: "2023 - Present",
        role: "",
        achievements: [
          <>
            <strong>Developed multiple systems:</strong> Pharmacy POS + ERP, School Attendance System,
            Library Management System

          </>,
          <>
            <strong>Built features:</strong> sales & inventory tracking, receipt printing, barcode scanning,
            low-stock alerts, daily sales reports

          </>,
          <>
           <strong>Collaborated</strong> directly with clients for requirements, implementation,
          and testing

          </>,
        ],
          // images: [
            // optional: leave the array empty if you don't want to display images
          //   {
          //     src: "/images/projects/project-01/cover-01.jpg",
          //     alt: "Once UI Project",
          //     width: 16,
          //     height: 9,
          //   },
          // ],
      },
      {
        company: "Straive",
        timeframe: "01/23 - 04/23",
        role: "HR Intern",
        achievements: [
          <>
            Handled employee records: organized pre-employment documents, confidentiality agreements,
            and 201 files
          </>,
          <>
            Maintained HR documentation in Microsoft Excel for accurate record-keeping
          </>,
           <>
            Ensured compliance with company policies on confidentiality and documentation
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dr. Filemon C. Aguilar Memorial College Las Piñas - Satellite Campus",
        description: <>Graduated with a Bachelor of Science in Information Systems</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Currently Learning",
        description: (
          <>Power BI</>
        ),
      //  tags: [
       //   {
       //     name: "Figma",
      //      icon: "figma",
      //    },
    //    ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Web Development (Most used)",
        description: (
          <>Javascript, Typescript, Next.js, CSS/Tailwind, HTML5, Once UI, Shadcn, Git, NPM, NodeJS </>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },  
       {
        title: "Software Development",
        description: (
          <>VB.NET, C#, Crystal Report, DevExpress, SQL Server</>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      }, 
      {
        title: "Technologies",
        description: (
          <>Photoshop, Canva, Figma, MySQL, XAMPP, Vercel, Visual Studio Code, Visual Studio Community, Github, Notion, Microsoft Office</>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      }, 



    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
