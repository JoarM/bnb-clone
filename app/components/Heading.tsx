"use client";

interface HeadingProps {
    title: string;
    subtitel?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitel,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <p className="text-2xl font-bold">
                {title}
            </p>
            <p className="font-light text-neutral-500 mt-2">{subtitel}</p>
        </div>
    )
}

export default Heading;