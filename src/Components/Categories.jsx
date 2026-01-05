import { use } from "react"
import { NavLink } from "react-router"
 const categoryPromise = fetch('/categories.json').then((res) => res.json())
export default function Categories() {
    const categories = use(categoryPromise)
  return (
    <div>
       <h2 className="font-bold">All Categories {categories.length} </h2>
       <div className="grid gap-2 mt-3">
        {categories.map(category =>
             <NavLink 
             className='btn bg-base-100 border-0 hover:bg-base-200'
             to={`/category/${category.id}`}
             >{category.name}</NavLink>)}
       </div>
    </div>
  )
}
