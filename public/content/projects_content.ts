export const projects = [
    {
        title: "FlightBar",
        subtitle: "Flight Tracker Menubar App",
        link: "FlightBar",
        openLink: "apps.apple.com/ca/app/flightbar/id6743351003?mt=12",
        tech: "SwiftUI, Redis, FastAPI",
        tag: "iOS and macOS",
        showGit: false,
        description: [
            "Developed a macOS menubar app using Swift that displays real-time flight data.",
            "Utilized the Aviation-Edge API to fetch flight data and display it in the menubar.",
            "Implemented a FastAPI server for the backend with Redis cacheing."
        ]
    },
    {
        title: "Aura Desktop",
        subtitle: "Weather Viz App",
        link: "Aura-Desktop",
        openLink: "rajveer87.gumroad.com/l/aura-desktop",
        tech: "FastAPI, SwiftUI, Redis",
        tag: "iOS and macOS",
        showGit: false,
        description: [
            "Developed a macOS app that displays live weather animations on the desktop.",
            "Features customizable weather effects including rain and snow, using data from the Open-Meteo API.",
            "Implemented a FastAPI server for the backend with Redis cacheing."
        ]
    },
    {
        title: "OriginalFlix",
        subtitle: "Database REST API",
        link: "OriginalFlix",
        openLink: "www.originalflix.dev",
        tech: "FastAPI, React, Azure Postgres",
        tag: "web",
        showGit: true,
        description: [
            "Built a FastAPI-powered REST API backed by a PostgreSQL database (SQLAlchemy) containing streaming-platform originals scraped from Wikipedia with BeautifulSoup4.",
            "Deployed via a React frontend on Vercel and the API on Heroku, ensuring scalability and ease of maintenance."
        ]
    },
    {
        title: "PocketPause",
        subtitle: "Chrome Extension",
        link: "spending-tracker",
        openLink: "chromewebstore.google.com/detail/pocketpause/hnnpejadlkpchlfhifnkaboflaaogphg",
        tech: "JavaScript, HTML5, Manifest V3",
        tag: "web",
        showGit: true,
        description: [
            "Developed an extension that helps users with budgeting by tracking their spending and blocking webstores based on a daily spending limit",
            "Implemented a user-friendly interface to set favourite stores and spending limits using the Chrome Storage API",
        ]
    },
    {
        title: "Custom Tudum",
        subtitle: "Chrome Extension",
        link: "Custom-Tudum",
        openLink: "chromewebstore.google.com/detail/custom-tudum/plkcjhmgcploglmdgbalngcnjholcamm",
        tech: "JavaScript, HTML5, Manifest V3",
        tag: "web",
        showGit: true,
        description: [
            "Developed a Chrome extension with MV3 that allows users to customize the Netflix Tudum sound with their own audio files.",
            "Implemented a user-friendly interface for uploading and managing audio files using the Chrome Storage and Offscreen API."
        ]
    },
    {
        title: "EduPool",
        subtitle: "E-Learning Platform",
        link: "EduPool",
        openLink: "",
        tech: "Flask, HTML5, JavaScript, MySQL",
        tag: "web",
        showGit: true,
        description: [
            "Collaborated in developing a Flask-based full-stack e-learning platform, employing Agile methodologies, CI/CD practices, UML for system design, and Test-Driven Development (TDD) with Selenium automated testing and deployment to ensure quality.",
            "Implemented core features like user authentication, course management, discussion portals, assignment submissions, and grading using jQuery."
        ]
    },
    {
        title: "Gestura",
        subtitle: "ASL to English Converter",
        link: "Gestura",
        openLink: "",
        tech: "Python, HTML5, Node.js",
        tag: "ML",
        showGit: true,
        description: [
            "BC Hacks 5.0 Hackathon Winner",
            "Led a cross-functional team in developing a full-stack website, using Node.js to translate American Sign Language into English, integrating a gesture-recognition machine learning model developed with Keras and OpenCV.",
            "Implemented the Google Translate and Text-to-Speech API to enhance the project's capabilities by generating multilingual text and speech outputs for the translations."
        ]
    },
    {
        title: "TransitMate",
        subtitle: "Ride-Share App Prototype",
        link: "TransitMate",
        openLink: "",
        tech: "Java, XML",
        tag: "android",
        showGit: true,
        description: [
            "Engineered a high-fidelity prototype for a ride-sharing app in Android Studio, seamlessly integrating the Google Maps API.",
            "Applied HCI fundamentals by conducting multiple rounds of requirements gathering and user testing to refine the user experience.",
            "Utilized object-oriented principles to ensure efficient code organization, enhancing maintainability and scalability of the app."
        ]
    },
    {
        title: "Cancer Data Analysis",
        subtitle: "Dataset Analysis",
        link: "Breast-Cancer-Diagnosis-in-the-State-of-Wisconsin",
        openLink: "",
        tech: "Python, Tableau",
        tag: "data",
        showGit: true,
        description: [
            "Investigated the relationships between diverse features of breast cancers and their corresponding diagnoses in a data set.",
            "Produced a graph-rich report using the Pandas, Seaborn, MatPlotLib, and NumPy Python libraries and a robust dashboard on Tableau."
        ]
    }
];