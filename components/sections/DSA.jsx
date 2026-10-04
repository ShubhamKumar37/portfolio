import {
    ArrowUpRight,
    Code2,
    ExternalLink,
    Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { dsa } from "@/data/dsa";
import { links } from "@/data/links";

export default function DSA() {
    const platforms = [
        {
            label: "LeetCode",
            href: links.leetcode,
        },
        {
            label: "GeeksforGeeks",
            href: links.geeksforgeeks,
        },
    ];

    return (
        <section
            id="dsa"
            className="border-t border-border/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-border bg-card/50">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                        {/* Main metric */}
                        <div className="relative flex flex-col justify-center overflow-hidden border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl"
                            />

                            <div className="relative">
                                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                                    <Trophy className="size-6" />
                                </div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    Problem Solving
                                </p>

                                <div className="mt-4 flex items-baseline gap-3">
                                    <span className="text-6xl font-bold tracking-tight sm:text-7xl">
                                        {dsa.problemsSolved}
                                    </span>

                                    <span className="text-lg text-muted-foreground">
                                        problems
                                    </span>
                                </div>

                                <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                                    Consistent practice in data structures and algorithms,
                                    primarily using C and C++.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {dsa.languages.map((language) => (
                                        <Badge key={language} variant="secondary">
                                            {language}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Supporting information */}
                        <div className="p-8 sm:p-10 lg:p-14">
                            <div className="flex items-center gap-3">
                                <Code2 className="size-5 text-primary" />

                                <h2 className="text-2xl font-bold tracking-tight">
                                    DSA & Problem Solving
                                </h2>
                            </div>

                            <p className="mt-4 leading-7 text-muted-foreground">
                                Problem solving is an important part of my engineering
                                foundation and helps me approach development problems with
                                structured thinking.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {dsa.focusAreas.map((area) => (
                                    <div
                                        key={area}
                                        className="rounded-xl border border-border/70 bg-background/50 px-4 py-3 text-sm"
                                    >
                                        {area}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {platforms.map((platform) => {
                                    if (!platform.href) {
                                        return (
                                            <Button
                                                key={platform.label}
                                                variant="outline"
                                                disabled
                                                className="cursor-not-allowed opacity-50  flex gap-2"
                                            >
                                                {platform.label}
                                                <ExternalLink />
                                            </Button>
                                        );
                                    }

                                    return (
                                        <Button
                                            key={platform.label}
                                            asChild
                                            variant="outline"
                                            className="group"
                                        >
                                            <a
                                                href={platform.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className=" flex "
                                            >
                                                {platform.label}
                                                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </a>
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}