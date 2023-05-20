"use client";

export default function MenuItem({
    onClick,
    label,
} : {
    onClick: () => void;
    label: string;
}) {
    return (
        <button className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
        onClick={onClick}>
            {label}
        </button>
    )
}