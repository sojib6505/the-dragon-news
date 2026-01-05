import { useLoaderData, useParams } from "react-router";
import Categories from "../Components/Categories";
import { useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";


export default function CategoryNews() {
    const { id } = useParams()
    const data = useLoaderData();
    const [category, setCategory] = useState([])
  
    useEffect(() => {
        if (id == '0') {
            setCategory(data)
            return
        }else if(id === '1'){
            const filterdata = data.filter(d=> d.others.is_today_pick == true)
            setCategory(filterdata)
            return
        }else{
            const filterdata = data.filter(d => d.category_id == id)
            setCategory(filterdata)
        }
    }, [id, data])
    console.log(category)
    return (
        <div className="grid gap-5">
          {category.map(news => <NewsCard key={news.id} news={news}></NewsCard>)}
        </div>
    )
}
