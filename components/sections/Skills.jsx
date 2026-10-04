import { skillGroups } from "@/data/skills";

import SkillGroup from "@/components/skills/SkillGroup";

export default function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-border/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Skills
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Technologies I work with
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        A practical stack built through professional experience,
                        internships, projects, and continuous problem solving.
                    </p>
                </div>

                {/* Skill groups */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <SkillGroup key={group.title} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
}