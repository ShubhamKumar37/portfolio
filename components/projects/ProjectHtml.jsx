
import DOMPurify from "isomorphic-dompurify";

export default function ProjectHtml({ html }) {
    if (!html?.trim()) return null;

    const sanitizedHtml = DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
        FORBID_TAGS: [
            "style",
            "script",
            "iframe",
            "object",
            "embed",
            "form",
        ],
        FORBID_ATTR: ["style"],
    });

    return (
        <div
            className="project-rich-content space-y-5 text-base leading-8 text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
}
