
import realEstate from "./src/assests/ride.png"; 
import estate from "./src/assests/estate.png"; 
import charity from "./src/assests/charity.png"; 
import hotel from "./src/assests/hotel.png"; 
import ride from "./src/assests/ride.png";
import fabric from "@/assests/fabric.png"
import fashion from "@/assests/fashion.png"
import  bookRent from "@/assests/book.png"
import dashboard from "@/assests/dashboard.png"
import blog from "@/assests/blog.png"
import Political from "@/assests/political.png"


 export const Categories = [
    { 
      title: "Single Pages", 
      projects: [
      {
        name: "Charity Landing Page", // Project title
        description: "A charity landing page built for a non-profit organization using Next.js and TailwindCSS.",
        link: "https://charitywebsite-drab.vercel.app", // Link to the project
        image: charity, // Import your charity image here
        technologies: "Next.js, TailwindCSS"
        },
        {
            name: "Hotel Booking Landing Page", 
            description: "A hotel booking landing page with a beautiful design and booking form.",
            link: "https://hotelbooking-rust-nine.vercel.app/", 
            image:hotel, 
            technologies: "Next.js, Tailwind CSS"
          },
          {
            name: "Green Ride Website", // Project title
            description: "A website landing page for an upcoming electronic car transit service like UBA, but with electric cars.",
            link: "https://ride-tawny.vercel.app/", // Replace with the real URL of your Green Ride website
            image: ride, // Replace with the correct image
            technologies: "React, Tailwind CSS"
          },
          {
            name: "Fabric Website", // Project title
            description: "A website landing page designed for a fabric business, showcasing fabric products and services.",
            link: "https://fabric-liard.vercel.app/", // Replace with the real URL of your Fabric Website
            image: fabric, // Replace with the correct image
            technologies: "React, Tailwind CSS"
          }
          
      ] 
    },
    { title: "Multiple Pages",
    projects: [
    {
    name: "E-commerce Website",
    description: "A fully functional e-commerce website with shopping cart .",
    link: "fashionwebsie.vercel.app",
    image:fashion, 
    technologies: "React, tailwindcss, Redux, ",
   
    },
    {
        name: "Book Rental Website", // Project title
        description: "A fully functional book rental website where users can browse and rent books online.",
        link: "https://bookrent.vercel.app", // Replace with the link to your book rental website
        image: bookRent, // Image for the book rental website
        technologies: "React, Redux, TailwindCSS"
      },
      {
        name: "Dashboard Website", // Project title
        description: "A modern dashboard website design showcasing user data and analytics in a clean, interactive interface.",
        link: "https://lapo-liart.vercel.app/Dashboard", // Replace with the link to your dashboard website
        image: dashboard, // Image for the dashboard website
        technologies: "React, TailwindCSS, Chart.js"
      }
    ],
},
    { title: "Fullstack", projects: [
      { name: "RealEstate",
        description: "A full-featured real estate platform where users can log in to explore property listings, agents can create and manage house posts, and admins have control over all listings. Built with Next.js, TailwindCSS, and MongoDB.",
        link: "https://realestate-lake-nine.vercel.app",
        image: estate,
        technologies: "React, Node.js, MongoDB" },
        {
          name: "CharityConnect",
          description: "A political charity platform designed to showcase donation causes and campaigns. Built with React for the frontend and powered by a Laravel API for backend data handling and integration.",
          link: "https://blogwebsite-xzzk.vercel.app/",
          image: Political, // Replace 'charity' with your imported image
          technologies: "React, Laravel API"
        },
        {
          name: "BlogSite",
          description: "A simple and clean blog website where users can read blog posts while admins have full control to create and manage blog content. Built with React, Node.js, and MongoDB. Note: Commenting is disabled for users to keep the platform minimal and focused.",
          link: "https://blog-frontend-dusky-pi.vercel.app/",
          image: blog, // Replace `blog` with the actual image import you're using
          technologies: "React, Node.js, MongoDB"
        },
        {
          name: "BlogSite",
          description: "A simple and clean blog website where users can read blog posts while admins have full control to create and manage blog content. Built with React, Node.js, and MongoDB. Note: Commenting is disabled for users to keep the platform minimal and focused.",
          link: "https://blog-frontend-dusky-pi.vercel.app/",
          image: blog, // Replace `blog` with the actual image import you're using
          technologies: "React, Node.js, MongoDB"
        },
        
      ] },
    // { title: "React Native", projects: [{ name: "Mobile Todo App", description: "A mobile todo app built with React Native.", link: "https://example.com/todo-app", image: realEstate, technologies: "React Native, Expo" }] },
  ];