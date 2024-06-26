interface SanityBody {
    _createdAt: string;
    _id: string;
    _updatedAt: string;
}
  
interface Image {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
}
  
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    blockImage: Image;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profilePic: Image;
}
  
export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
  
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
  
export interface Project extends SanityBody {
    title: string;
    _type: "project";
    projectImage: Image;
    linkToCode: string;
    linkToDemo: string;
    summary: string;
    technologies: Technology[];
}
  
export interface Experience extends SanityBody {
    icon: string | undefined;
    iconBg: Background<string | number> | undefined;
    date: Date;
    src: Image;
    map(arg0: (experience: any) => import("react").JSX.Element): import("react").ReactNode;
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
  
export interface Social extends SanityBody {
    map(arg0: () => void): import("react").ReactNode | import("framer-motion").MotionValue<number> | import("framer-motion").MotionValue<string>;
    _type: "social";
    title: string;
    url: string;
}
