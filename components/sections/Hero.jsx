import Image from "next/image";
import Link from "next/link";

import {
    ArrowDown,
    ArrowUpRight,
    Download,
    Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { links } from "@/data/links";
import { profile } from "@/data/profile";

const socialLinks = [
    {
        label: "GitHub",
        href: links.github,
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: links.linkedin,
        icon: FaLinkedin,
    },
    {
        label: "LeetCode",
        href: links.leetcode,
    },
    {
        label: "GFG",
        href: links.geeksforgeeks,
    },
    {
        label: "Email",
        href: links.email,
        icon: Mail,
    },
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Subtle background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />
            </div>

            <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8 lg:py-24">
                {/* Content */}
                <div className="order-2 max-w-3xl lg:order-1">
                    <Badge
                        variant="secondary"
                        className="mb-6 rounded-full px-4 py-1.5 text-sm"
                    >
                        {profile.eyebrow}
                    </Badge>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="text-primary">{profile.name}</span>
                    </h1>

                    <p className="mt-5 text-xl font-medium text-muted-foreground sm:text-2xl">
                        {profile.role}
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        {profile.introduction}
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg" className="group">
                            <Link href="#projects">
                                View Projects
                                <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <a href={links.resume} download>
                                <Download />
                                Download Resume
                            </a>
                        </Button>
                    </div>

                    {/* Social links */}
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            if (!social.href) {
                                return (
                                    <Button
                                        key={social.label}
                                        variant="ghost"
                                        size="sm"
                                        disabled
                                        className="cursor-not-allowed opacity-50"
                                    >
                                        {Icon && <Icon />}
                                        {social.label}
                                    </Button>
                                );
                            }

                            const isExternal = social.href.startsWith("http");

                            return (
                                <Button
                                    key={social.label}
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="group"
                                >
                                    <a
                                        href={social.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={`Visit ${social.label} `}
                                    >
                                        {Icon && (
                                            <Icon className="transition-transform duration-200 group-hover:scale-110" />
                                        )}

                                        <span>{social.label}</span>
                                    </a>
                                </Button>
                            );
                        })}
                    </div>

                    {/* Scroll indicator */}
                    <Link
                        href="#projects"
                        className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowDown className="size-4 animate-bounce" />
                        <span>Explore my work</span>
                    </Link>
                </div>

                {/* Profile */}
                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <div className="relative">
                        {/* Decorative glow */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-5 rounded-[2.25rem] bg-primary/10 blur-2xl"
                        />

                        {/* Decorative border */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-4 rounded-[2rem] border border-primary/10"
                        />

                        {/* Image card */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-2xl">
                            <div className="relative aspect-square w-64 overflow-hidden rounded-[1.5rem] sm:w-80 lg:w-[26rem]">
                                <Image
                                    src="/profile/profile-1.jpg"
                                    alt={`${profile.name} profile`}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 416px"
                                />

                                {/* Image overlay */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                                />
                            </div>
                        </div>

                        {/* Availability card */}
                        <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur">
                            <p className="text-xs text-muted-foreground">Currently</p>

                            <p className="text-sm font-semibold">
                                {profile.availability}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
