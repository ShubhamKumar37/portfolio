import { Briefcase, CalendarDays, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ExperienceCard({ item }) {
    return (
        <Card className="border-border/70 bg-card/80 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <CardHeader className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                            <Briefcase className="size-4" />
                            <span>{item.role}</span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            {item.company}
                        </h3>
                    </div>

                    <Badge variant="secondary" className="w-fit shrink-0">
                        {item.period}
                    </Badge>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-4" />
                        {item.period}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-4" />
                        {item.location}
                    </span>
                </div>
            </CardHeader>

            <Separator />

            <CardContent className="pt-6">
                <ul className="space-y-3">
                    {item.highlights.map((highlight) => (
                        <li
                            key={highlight}
                            className="relative pl-5 text-sm leading-6 text-muted-foreground sm:text-base"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-[0.65rem] size-1.5 rounded-full bg-primary"
                            />

                            {highlight}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                        <Badge
                            key={technology}
                            variant="outline"
                            className="font-normal"
                        >
                            {technology}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}