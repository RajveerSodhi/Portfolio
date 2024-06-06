import { Card } from "react-bootstrap";

export default function Skill(props: { name: string }) {
    return (
        <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">{props.name}</Card>
    );
}