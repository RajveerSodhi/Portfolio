export default function Skill(props: { name: string }) {
    const { name } = props;

    return (
        <div className="py-3 px-4 m-2 w-auto hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r from-[#7b27d0] to-[#E8853E] hover:text-white dark:hover:text-black transition-all transition-configuration rounded-full bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite">
            {name}
        </div>
    );
}
