import { GraduationCap, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { about, education } from "@/data/about";
import { profile } from "@/data/profile";

export default function About() {
    return (
        <section
            id="about"
            className="border-t border-border/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* About */}
                    <div>
                        <Badge variant="secondary" className="rounded-full">
                            About Me
                        </Badge>

                        <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                            {about.title}
                        </h2>

                        <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-muted-foreground sm:text-lg">
                            {about.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="size-4 text-primary" />
                            <span>{profile.location}</span>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-card">
                                <GraduationCap className="size-5 text-primary" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                                    Education
                                </p>
                                <h3 className="text-xl font-bold">Academic Background</h3>
                            </div>
                        </div>

                        <div className="mt-8">
                            {education.map((item, index) => (
                                <div key={item.institution}>
                                    <div className="py-5 first:pt-0 last:pb-0">
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                                            <div>
                                                <h4 className="font-semibold">
                                                    {item.institution}
                                                </h4>

                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {item.degree}
                                                </p>
                                            </div>

                                            <span className="shrink-0 text-sm text-muted-foreground">
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>

                                    {index < education.length - 1 && <Separator />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}