import passwordGeneratorImage from "@/media/image/passwordGenerator.png"
import todoAppImage from "@/media/image/todoApp.png"
import truefeedbackImage from "@/media/image/truefeedback.png"
import tweetAppImage from "@/media/image/tweetAppImage.png"

export const cardData = [
    {
        title: "Password Generator",
        src: passwordGeneratorImage.src,
        liveSiteUrl: "",
        githubUrl: "https://github.com/Klnishant/ChaiAurReact/tree/main/passwordGenerator",
        description: "A sleek, responsive Password Generator web app built with React that generates secure, random passwords based on user-defined criteria like length, uppercase, lowercase, numbers, and special characters. Features include a simple UI, and a copy-to-clipboard button for convenience."
    },
    {
        title: "Todo App",
        src: todoAppImage.src,
        liveSiteUrl: "",
        githubUrl: "https://github.com/Klnishant/ChaiAurReact/tree/main/ToDoApp",
        description: "A user-friendly To-Do web app built with React that allows users to add, edit, and delete tasks effortlessly. It features a clean interface, task categorization, and the ability to mark tasks as completed. The app is responsive, providing a seamless experience across all devices."
        
    },
    {
        title: "Mystery Message",
        src: truefeedbackImage.src,
        liveSiteUrl: "https://mystery-message-three.vercel.app/",    
        githubUrl: "https://github.com/Klnishant/MysteryMessage",
        description: "An anonymous messaging app built with Next.js, TypeScript, and MongoDB, featuring Zod for schema validation, JWT and NextAuth for secure user sessions, and open ai Generative AI for message generation. Hosted on Vercel, this app ensures user privacy and encourages honest feedback."
    },
    {
        title: "Tweet App",
        src: tweetAppImage.src,
        liveSiteUrl: "",
        githubUrl: "https://github.com/Klnishant/TweetApp",
        description: "A Tweet web app built with Django, allowing users to post, edits, and delete tweets in real time. Features include user authentication, timeline display, and responsive design for a smooth experience. The app ensures secure interactions and efficient handling of tweets for an engaging social platform."
    }
]