"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
export const navigationItems = [{
    name: 'Home',
    href: '/'
}, {
    name: 'Guestbook',
    href: '/guestbook'
}, {
    name: 'Project',
    href: '/projects'
}]

export function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5  grid grid-cols-12">
            <div className="col-span-6 flex md:col-span-3 ">
                <Link href="/">
                    <h1 className="text-3xl text-blue-500 font-semibold">Salman <span className="text-black">Khan</span></h1>
                </Link>
            </div>
            <div className="hidden sm:flex justify-center items-center col-span-6 ">
                <NavigationMenu className="">
                    <NavigationMenuList>
                        {navigationItems.map((item, index) =>
                            <NavigationMenuItem key={index}>
                                <Link href={item.href} passHref legacyBehavior className="text-black">
                                    <NavigationMenuLink active={pathname == item.href} className="mx-3  text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">
                                        {item.name }
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center justify-end md:col-span-3 col-span-6">
                <Button className="hidden sm:flex" asChild>
                    <a href="mailto:salmankhan.dev@outlook.com">Contact Me</a>
                </Button>
                <div className="sm:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}
