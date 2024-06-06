import ImageCard from "../../Components/HomeComponents/Title/title_image_card";
import TitleBottom from "../../Components/HomeComponents/Title/title_bottom";
import TitleTop from "../../Components/HomeComponents/Title/title_top";

export default function HomeHeader() {
    return (
        <section className="h-screen">
            <TitleTop />
            <ImageCard />
            <TitleBottom />
        </section>
    );
}
