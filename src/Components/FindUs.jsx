import { FaFacebook, FaTwitter, FaInstagram, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function FindUs() {
    const navigate = useNavigate()

  const scrollToTop = () => {
       navigate("/");  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2 className="font-bold text-xl hidden md:block mb-3">
        Find Us On
      </h2>

      <div
        className="
          fixed -bottom-6 left-1/2 -translate-x-1/2
          w-[95%]
          z-50
          md:static md:translate-x-0 md:w-full
          bg-base-100/90 backdrop-blur
          rounded-2xl
          md:rounded-sm
          shadow-lg
          md:shadow-sm
          border
          md:border-none
          p-2
          md:p-0
        "
      >
        <div className="flex justify-between md:flex-col md:gap-2">

          {/* Home icon Mobile only */}
          <button
            onClick={scrollToTop}
            className="btn btn-ghost flex-1 flex-col gap-1 md:hidden hover:bg-base-200"
            aria-label="Go to top"
          >
            <FaHome size={20} />
            <span className="text-xs">Home</span>
          </button>

          <a
            href="https://www.facebook.com/sojib.mamud.52"
            className="btn btn-ghost flex-1 flex-col md:flex-row gap-1 md:gap-3 hover:bg-base-200"
          >
            <FaFacebook size={20} />
            <span className="text-xs md:text-base">Facebook</span>
          </a>

          <button className="btn btn-ghost flex-1 flex-col md:flex-row gap-1 md:gap-3 hover:bg-base-200">
            <FaTwitter size={20} />
            <span className="text-xs md:text-base">Twitter</span>
          </button>

          <a
            href="https://www.instagram.com/sojib.dev.26/"
            className="btn btn-ghost flex-1 flex-col md:flex-row gap-1 md:gap-3 hover:bg-base-200"
          >
            <FaInstagram size={20} />
            <span className="text-xs md:text-base">Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
}
