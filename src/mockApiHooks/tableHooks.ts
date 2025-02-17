import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"

export interface ThProps {
    name: string;
  }

 export const thItems: ThProps[] = [
    { name: "" },
    { name: "View" },
    { name: "Likes" },
    { name: "Creatives" },
    { name: "Comments" },
    { name: "Shares" },
  ];
  
export interface User {
    id: number;
    image: string;
    name: string;
    country: string;
    clap: boolean;
    score1: number;
    score2: number;
    score3: number;
    score4: number;
    score5: number;
  }



  export const users: User[] = [
    {
      id: 1,
      image: image1,
      name: "Samuel Larry Alimi",
      country: "Nigeria",
      clap: true,
      score1: 100,
      score2: 10001,
      score3: 124,
      score4: 384,
      score5: 456,
    },
    {
      id: 2,
      image: image2,
      name: "Jane Doe",
      country: "Ghana",
      clap: false,
      score1: 95,
      score2: 9850,
      score3: 110,
      score4: 370,
      score5: 440,
    },
    {
      id: 3,
      image: image4,
      name: "John Smith",
      country: "Canada",
      clap: true,
      score1: 105,
      score2: 10120,
      score3: 130,
      score4: 390,
      score5: 460,
    },
    {
      id: 4,
      image: image3,
      name: "Amara Okeke",
      country: "Nigeria",
      clap: false,
      score1: 98,
      score2: 9900,
      score3: 115,
      score4: 360,
      score5: 430,
    },
    {
      id: 5,
      image: image1,
      name: "Muhammed Musa",
      country: "Nigeria",
      clap: true,
      score1: 102,
      score2: 10050,
      score3: 120,
      score4: 380,
      score5: 450,
    },
  ];

  // Define the type for chart data
export interface ChartData {
    name: string;
    value: number;
    color: string; // Add color property for each segment
  }

  // Define the type for the props that will be passed to the component
  export interface PieChartProps {
    data: ChartData[];  // Chart data
    cx?: number;  // X-axis center (optional)
    cy?: number;  // Y-axis center (optional)
    iR?: number;  // Inner radius (optional)
    oR?: number;  // Outer radius (optional)
    centerText?: string; // Text to display in the center of the pie
  }
  
  // Sample data
 export const data: ChartData[] = [
    { name: "Nigeria", value: 90, color: "#1D69D8" },
    { name: "Ghana", value: 20, color: "#3AD4EC" },
    { name: "Ivory Coast", value: 10, color: "#7E49E9" },
    { name: "Cameroon", value: 5, color: "#F18D4A" },
    { name: "others", value: 3, color: "#142467" },
  ];

  export const data1: ChartData[] = [
    { name: "Completion", value: 90, color: "#1D69D8" },
    { name: "Non-completion", value: 20, color: "#E1E8F4" },
  ];
  
  