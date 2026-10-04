import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function ProjectDetailsPage({ params }) {
    const { slug } = await params;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-16 sm:px-6 lg:px-8">
                <Button
                    asChild
                    variant="ghost"
                    className="mb-10 w-fit"
                >
                    <Link href="/#projects">
                        <ArrowLeft />
                        Back to Projects
                    </Link>
                </Button>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Project
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    {slug}
                </h1>

                <p className="mt-5 text-muted-foreground">
                    Project details will be added here.
                </p>
            </div>
        </main>
    );
}