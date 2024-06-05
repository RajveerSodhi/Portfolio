import FooterNavbar from "../WebsiteComponents/FooterComponents/FooterNavbar";
import FooterInfo from "../WebsiteComponents/FooterComponents/FooterInfo";

export default function Footer() {
    return (
        <div className="p-3 mt-4 text-[#777777] d-flex justify-content-between">
            <FooterInfo />
            <FooterNavbar />
        </div>
    );
}
