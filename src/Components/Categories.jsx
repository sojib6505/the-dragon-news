import { use, useState } from "react"
import { NavLink } from "react-router"

const categoryPromise = fetch('/categories.json').then(res => res.json())

export default function Categories() {
  const categories = use(categoryPromise)
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-sm mb-3 md:hidden"
      >
        {open ? "Hide Categories" : "Show Categories"}
      </button>

      {/* Categories */}
      <div
        className={`
          ${open ? "block" : "hidden"}
          md:block
        `}
      >
        <h2 className="font-bold text-xl">All Categories</h2>

        <div className="grid md:gap-2 mt-3">
          {categories.map(category => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              onClick={() => setOpen(false)} 
              className="btn bg-base-100 border-0 hover:bg-base-200"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}
