import {
    ArrowUpRight,
    Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { links } from "@/data/links";

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
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-border/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-12 text-center sm:px-10 sm:py-16">
                    {/* Background decoration */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
                    />

                    <div className="relative z-10">
                        <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                            <Mail className="size-5" />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Get in touch
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Let&apos;s build something useful.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Whether you have an opportunity, a project idea,
                            or simply want to connect, feel free to reach out.
                        </p>

                        {/* Primary action */}
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="group rounded-full px-6"
                            >
                                <a href={links.email} className="flex gap-1 justify-baseline">
                                    <Mail className="size-4" />
                                    Send me an email
                                    <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </Button>
                        </div>

                        {/* Social links */}
                        <div className="mt-8 flex flex-wrap justify-center gap-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                if (!social.href) {
                                    return (
                                        <Button
                                            key={social.label}
                                            variant="ghost"
                                            size="sm"
                                            disabled
                                            className="cursor-not-allowed opacity-50 flex gap-1"
                                        >
                                            <Icon />
                                            {social.label}
                                        </Button>
                                    );
                                }

                                return (
                                    <Button
                                        key={social.label}
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="group flex gap-1"
                                    >
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex gap-1"
                                        >
                                            <Icon className="transition-transform duration-200 group-hover:scale-110" />
                                            {social.label}
                                        </a>
                                    </Button>
                                );
                            })}
                        </div>

                        <p className="mt-8 text-sm text-muted-foreground">
                            {links.email.replace("mailto:", "")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}