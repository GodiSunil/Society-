export interface ExecutiveMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
}

export const executiveMembers: ExecutiveMember[] = [
  {
    id: 1,
    name: "Ms. S. Thomasamma",
    position: "President",
    image: "/images/team/thomasamma.jpg",
    bio: "Nurse by profession, Ms. S. Thomasamma leads the organization with compassion and dedication to serving the poor and needy.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 2,
    name: "Mr. A. Sesha Giri Rao",
    position: "Vice-President",
    image: "/images/team/prabhudasu.jpg",
    bio: "Advocate by profession, Mr. A. Sesha Giri Rao brings legal expertise to guide the organization's initiatives and ensure compliance.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 3,
    name: "Mr. S. Nageswara Rao",
    position: "Financial Secretary",
    image: "/images/team/default.jpg",
    bio: "Accountant by profession, Mr. S. Nageswara Rao oversees the financial operations and ensures transparency in all financial matters.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 4,
    name: "Ms. D. Anitha Kumari",
    position: "Secretary",
    image: "/images/team/default.jpg",
    bio: "Coordinator by role, Ms. D. Anitha Kumari manages the day-to-day operations and coordinates various development programs.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 5,
    name: "Ms. K. Sravanthi",
    position: "Executive Member",
    image: "/images/team/default.jpg",
    bio: "Housewife dedicated to social service, Ms. K. Sravanthi contributes to the organization's mission through active participation in community programs.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 6,
    name: "Fr. K. Rayapu Reddy",
    position: "Executive Member",
    image: "/images/team/default.jpg",
    bio: "Priest and Advocate, Fr. K. Rayapu Reddy combines spiritual guidance with legal expertise to support the organization's initiatives.",
    email: "dsociety2005@gmail.com"
  },
  {
    id: 7,
    name: "Ms. P. Jescintha",
    position: "Executive Member",
    image: "/images/team/default.jpg",
    bio: "Housewife committed to social work, Ms. P. Jescintha actively participates in programs aimed at empowering women and children.",
    email: "dsociety2005@gmail.com"
  }
];
