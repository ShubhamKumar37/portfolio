"use client";

import Link from "next/link";
import { Menu, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import ThemeToggle from "@/components/theme-toggle";

const navigation = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "DSA",
        href: "#dsa",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold tracking-tight"
                >
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-sm font-bold">
                        SK
                    </span>

                    <span className="hidden sm:inline">
                        Shubham Kumar
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navigation.map((item) => (
                        <Button
                            key={item.href}
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-2 lg:flex">
                    <Button asChild variant="outline" size="sm">
                        <a href="/resume.pdf" download>
                            <Download />
                            Resume
                        </a>
                    </Button>

                    <ThemeToggle />
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Open navigation menu"
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[85%] sm:max-w-sm">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                            </SheetHeader>

                            <nav className="mt-8 flex flex-col gap-2">
                                {navigation.map((item) => (
                                    <Button
                                        key={item.href}
                                        asChild
                                        variant="ghost"
                                        className="justify-start text-base"
                                    >
                                        <Link href={item.href}>{item.label}</Link>
                                    </Button>
                                ))}

                                <div className="my-3 h-px bg-border" />

                                <Button asChild>
                                    <a href="/resume.pdf" download>
                                        <Download />
                                        Download Resume
                                    </a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}