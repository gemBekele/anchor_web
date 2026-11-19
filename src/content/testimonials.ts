/** Sample social proof for demonstration. Replace with approved client quotes. */
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Abebe Girma",
    role: "Manager, Unity Savings & Credit SACCO",
    quote:
      "We replaced a stack of spreadsheets with one system our staff actually trust. Month-end reporting is faster, and our committee sees the same numbers we do.",
    rating: 5,
  },
  {
    name: "Sara Tadesse",
    role: "Head of Operations, Green Valley Microfinance",
    quote:
      "Implementation felt practical from day one. They configured the system around how we work rather than asking us to change everything at once.",
    rating: 5,
  },
  {
    name: "Mekonnen Alemu",
    role: "Board Chair, Abay Multipurpose Cooperative",
    quote:
      "For the first time we can follow member savings, shares, and loan performance in one place — without asking three different people for numbers.",
    rating: 5,
  },
  {
    name: "Hiwot Bekele",
    role: "Managing Director, Sunrise Capital Finance",
    quote:
      "The platform has kept pace with our branch growth. Our processes are standardised and the data we report is finally consistent.",
    rating: 5,
  },
];
