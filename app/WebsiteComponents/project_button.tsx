import { MdOpenInNew } from "react-icons/md";

export default function ProjectButton(props: { link: string }) {
    return (
        <a className="btn btn-light project-link mt-3 p-2" rel="noopener noreferrer" target="_blank" href={`https://github.com/RajveerSodhi/${props.link}`}> View on GitHub <MdOpenInNew /></a >
    );
}