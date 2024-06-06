import ImageCard from "../../WebsiteComponents/HomeComponents/Title/title_image_card";
import TitleBottom from "../../WebsiteComponents/HomeComponents/Title/title_bottom";
import TitleTop from "../../WebsiteComponents/HomeComponents/Title/title_top";

export default function HomeHeader() {
    return (
        <section className="flex justify-center flex-col items-center h-screen">
            <TitleTop />
            <ImageCard />
            <TitleBottom />
        </section>
    );
}
