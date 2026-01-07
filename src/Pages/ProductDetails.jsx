import { Link, useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(data)
    const [findData,setFindData] = useState('')
    console.log(findData)
    useEffect(()=>{
        const findNews = data.find(news => news.id == id)
        setFindData(findNews)
    },[data,id])
     
  return (
    <div className="space-y-5">
        <Header/>
        <div className="w-11/12 mx-auto grid md:grid-cols-12 gap-5">
            <div className="md:col-span-9 space-y-5">
               <div className="p-4 border border-base-200">
                <img className="w-full" src={findData.thumbnail_url} alt="" />
               </div>
               <h2 className="text-2xl font-semibold">{findData.title}</h2>
               <p>{findData.details}</p>
               <Link to={`/category/${findData.category_id}`} className="btn btn-secondary">
                 All news in this category
               </Link>
            </div>
            <div className="md:col-span-3">
                <RightAside/>
            </div>
        </div>
    </div>
  )
}
