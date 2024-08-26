import ImageCard from "./title_image_card";
import TitleBottom from "./title_bottom";
import TitleTop from "./title_top";

export default function Title() {
    return (
        <section className="h-[100vh] itemse-center justify-center" id="title">
            <TitleTop />
            <ImageCard />
            <TitleBottom />
        </section>
    );
}
