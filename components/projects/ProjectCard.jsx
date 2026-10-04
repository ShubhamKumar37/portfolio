"use client";

import Image from "next/image";

import { ArrowUpRight, ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
    const hasGithub = Boolean(project.github);
    const hasLive = Boolean(project.live);

    const projectUrl = project.live || project.github;

    const handleCardClick = () => {
        if (!projectUrl) return;

        window.open(projectUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <Card
            onClick={handleCardClick}
            className="group flex h-full cursor-pointer flex-col overflow-hidden border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
        >
            {/* Project image */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-muted-foreground">
                            Project Preview
                        </span>
                    </div>
                )}

                {project.featured && (
                    <Badge className="absolute left-4 top-4">
                        Featured
                    </Badge>
                )}

                {projectUrl && (
                    <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="size-4" />
                    </div>
                )}
            </div>

            {/* Project heading */}
            <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                            {project.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {project.duration}
                        </p>
                    </div>

                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
            </CardHeader>

            {/* Project content */}
            <CardContent className="flex-1">
                <p className="text-sm leading-6 text-muted-foreground">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <Badge
                            key={technology}
                            variant="secondary"
                            className="font-normal"
                        >
                            {technology}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            {/* Project links */}
            <CardFooter className="gap-2 border-t border-border/60 pt-5">
                {hasGithub ? (
                    <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="group/github"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="size-4 transition-transform group-hover/github:scale-110" />
                            GitHub
                        </a>
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="cursor-not-allowed"
                    >
                        <FaGithub className="size-4" />
                        GitHub
                    </Button>
                )}

                {hasLive ? (
                    <Button
                        asChild
                        size="sm"
                        className="group/live"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="size-4 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                            Live
                        </a>
                    </Button>
                ) : (
                    <Button
                        size="sm"
                        disabled
                        className="cursor-not-allowed"
                    >
                        <ExternalLink className="size-4" />
                        Live
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}