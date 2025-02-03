import Image
 from "next/image"
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default () => {
    return (
        <div className="max-w-ms flex flex-col gap-2">
            <div className="flex gap-6">
                <Image src="/avatar.jpeg" className="rounded-full" width={24} height={24}></Image>
            <span>Samira</span>
            </div>
            <div><Image src="/samiraaaa.webp" width={640} height={640}></Image></div>
            <div className="flex">
                <HeartIcon className="w-8"/>
                <ChatBubbleLeftIcon className="w-8"/>
            </div>
            <div><span>10M Me gusta</span></div>
            <div><span className="font-bold">Samira</span><span>Lorem maku maku fieston</span></div>
            <div><Link href="#">Ver los 50K comentarios</Link></div>
            <div>
                <input className="dark:bg-neutral-950 w-full outline-0" type="text" placeholder="Añade un comentario..."/>
            </div>

            
        </div>
    )
}