export interface Course {
  title: string;
  description: string;
  aboutCourse: string;
  applicationFee: string;
  installmentAmount: string;
  programLength: string;
  startDate: string;
  location: string;
  image: unknown; // Or more specific type if known
  bgColor: string;
  textColor: string;
  highlightColor: string;
  order: string;
}