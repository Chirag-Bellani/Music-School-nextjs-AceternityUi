"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link'

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col text-sm space-y-4">
                        <HoveredLink href="/courses">All courses</HoveredLink>
                        <HoveredLink href="/basicMusic">Basic Music</HoveredLink>
                        <HoveredLink href="/basicMusicTheory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced composition</HoveredLink>
                        <HoveredLink href="/courses">SongWriting</HoveredLink>
                        <HoveredLink href="/courses">Music production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar