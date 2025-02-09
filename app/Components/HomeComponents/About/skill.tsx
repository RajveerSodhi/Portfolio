export default function Skill(props: { name: string }) {
    const { name } = props;

    return (
        <div className="skill py-2 m-1 md:py-3 px-4 md:m-2 w-auto hover:shadow-xl hover:scale-105 hover:text-white rounded-full transition-all card">
            {name}
        </div>
    );
}
