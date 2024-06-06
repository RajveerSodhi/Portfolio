import FooterNavbar from "../WebsiteComponents/FooterComponents/footer_navbar";
import FooterInfo from "../WebsiteComponents/FooterComponents/footer_info";
import FooterSocial from "../WebsiteComponents/FooterComponents/footer_social";

export default function Footer() {
    return (
        <div className="p-3 mt-4 text-[#777777] d-flex justify-content-between">
            <FooterInfo />
            <FooterSocial />
            <FooterNavbar />
        </div>
    );
}
