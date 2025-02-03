'use client'
import { BeakerIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"


export default function NavLink({ruta, texto}) {
    
    const path= usePathname();

    return (
        <Link href={ruta} className={clsx(
            "flex gap-2 hover:bg-gray-200 py-1 ps-4",
            {"font-bold": path === ruta}
        )}
        >
            <BeakerIcon className="w-6 h-6" />
            <span className="hidden lg:inline">{texto}</span>
        </Link>
    )
}
