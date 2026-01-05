import { FaFacebook,FaTwitter,FaInstagram   } from "react-icons/fa";

export default function FindUs() {
    return (
        <div>
            <h2 className="font-bold text-xl">
                Find Us On
            </h2>
            <div className="join join-vertical w-full mt-5">
                <button className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaFacebook size={18}></FaFacebook> 
                    Facebook</button>
                <button className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaTwitter size={18}></FaTwitter>
                    Twitter</button>
                <button className="btn justify-start bg-base-100 p-6 join-item hover:bg-base-200">
                    <FaInstagram  size={18}></FaInstagram >
                    Instagram</button>
            </div>
        </div>
    )
}
