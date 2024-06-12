import ScrollingIcons from "@/app/Components/IconsComponents/scrolling_icons";
import IconsDescription from "./description";

export default function Section2() {
    return (
        <section className="flex flex-col md:flex-row justify-evenly appear-animated">
            <IconsDescription />
            <ScrollingIcons />
        </section>
    );
}
