import { FaFacebook,FaTwitter,FaInstagram   } from "react-icons/fa";
import { Link } from "react-router";
export default function FindUs() {
    return (
        <div>
            <h2 className="font-bold text-xl">
                Find Us On
            </h2>
            <div className="join join-vertical w-full mt-5">
                <a href="https://www.facebook.com/sojib.mamud.52" className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaFacebook size={18}></FaFacebook> 
                    Facebook</a>
                <button className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaTwitter size={18}></FaTwitter>
                    Twitter</button>
                <a href="https://www.instagram.com/sojib.dev.26/" className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaInstagram  size={18}></FaInstagram >
                    Instagram</a>
            </div>
        </div>
    )
}
