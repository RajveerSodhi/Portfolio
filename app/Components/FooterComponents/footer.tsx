import FooterNavbar from "./footer_navbar";
import FooterInfo from "./footer_info";
import FooterSocial from "./footer_social";

export default function Footer() {
    return (
        <div className="p-3 pt-4 mt-64 text-[#777777] flex justify-between flex-col md:flex-row blurry blurry-footer-edge">
            <FooterInfo />
            <FooterSocial />
            <FooterNavbar />
        </div>
    );
}
