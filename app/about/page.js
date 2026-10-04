import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";

export const metadata = {
    title: "About | Shubham Kumar",
    description:
        "Learn more about Shubham Kumar, his background, education, and software engineering journey.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-16">
                <About />
            </div>
        </main>
    );
}