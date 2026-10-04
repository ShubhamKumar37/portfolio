import { experience } from "@/data/experience";
import ExperienceCard from "@/components/experience/ExperienceCard";

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-border/60 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 max-w-2xl sm:mb-14">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Experience
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Where I&apos;ve worked
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        Experience across production support, full-stack development,
                        backend engineering, APIs, cloud infrastructure, and modern web
                        applications.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Desktop timeline line */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-5 top-0 hidden w-px bg-border lg:block"
                    />

                    <div className="space-y-8 lg:space-y-10">
                        {experience.map((item) => (
                            <div
                                key={item.id}
                                className="relative lg:grid lg:grid-cols-[2.5rem_1fr]"
                            >
                                {/* Timeline node */}
                                <div className="relative hidden lg:block">
                                    <div className="absolute left-1/2 top-8 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10" />
                                </div>

                                <ExperienceCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}