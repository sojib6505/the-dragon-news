import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";


export default function RightAside() {
  return (
    <div className="space-y-8">
        <SocialLogin/>
        <FindUs/>
        <QZone/>
    </div>
  )
}
