import { FaHandPointRight } from "react-icons/fa";
export default function BreakingNews({latestNews}) {
  
  return (
    <div>
        <h1 className="flex items-center justify-center gap-2 md:gap-5 ml-2 md:ml-5"><FaHandPointRight size={25}/>{latestNews.title}</h1>
    </div>
  )
}
