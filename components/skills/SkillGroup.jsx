import {
    BrainCircuit,
    Cloud,
    Code2,
    Database,
    Layers3,
    Server,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const icons = {
    Programming: Code2,
    "Frontend & Backend": Layers3,
    Databases: Database,
    "Cloud & DevOps": Cloud,
    "AI & GenAI": BrainCircuit,
    "Engineering Fundamentals": Server,
};

export default function SkillGroup({ group }) {
    const Icon = icons[group.title] || Code2;

    return (
        <Card className="group h-full border-border/70 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon className="size-5" />
                </div>

                <CardTitle className="text-lg">{group.title}</CardTitle>

                <p className="text-sm leading-6 text-muted-foreground">
                    {group.description}
                </p>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="rounded-md px-2.5 py-1 font-normal"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}