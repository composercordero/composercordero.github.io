import coroDashboard from "../../assets/CORO-Programming-Dashboard.png"
import coroUser from "../../assets/CORO-user-dashboard.png"
import portfolioHome from "../../assets/Portfolio-Home.png"

const featuredProjects = [
    {
        summary:'Full Stack Dev',
        title:'CORO: Programming App',
        content: `CORO is a music programming app for church choirs that allows staff to have a solid management on the music of the church. Conductors will have an easier access to the hymn database, including automation for smooth planning.
        
        To create this first iteration of CORO, I used React.js (Vite, TypeScript) for the Front-End, Flask for the Back-End. SQLite and Postman to manage the DataBase.

        `,
        tech: ['React.js', 'Vite', 'TypeScript', 'Python', 'Flask', 'MySQL'],
        image: [[coroDashboard, 'CORO dashboard'], [coroUser, 'CORO user']]
    },
    {
        summary:'Portfolio',
        title:'Carlos Cordero\'s Diary',
        content: `Come with me to my deepest secret about my new relationship with JavaScript. We've been dating for a while and I can't wait to tell you about it.
        
        This portfolio site aims to showcase a few of my projects while showing my care for consistency, clear communication, as well as my passion for creating fun concepts. I treasure meaningful connections, professionalism (with a touch of silliness when appropriate), and hard work, and would like to find a place where I can explore my love for JS under passionate mentorship.`,
        tech: ['React.js', 'Vite', 'TypeScript', 'Styled Components'],
        image: [[portfolioHome, 'Carlos Cordero Web Dev'], [portfolioHome, 'CORO user']]
    }
]

export default featuredProjects