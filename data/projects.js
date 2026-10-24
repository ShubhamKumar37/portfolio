
export const projects = [
    {
        id: "my-gpt",
        title: "My-GPT",
        tagline:
            "A personalized AI chat experience with persistent conversations and streaming responses.",
        category: "Full-Stack AI Application",
        duration: "1 Month",
        featured: true,

        description:
            "A ChatGPT-inspired application for text-based AI conversations, persistent chat history, and AI model selection.",

        technologies: [
            "Next.js",
            "MongoDB",
            "TanStack Query",
            "Zustand",
            "OpenAI",
            "Clerk",
            "Vercel AI SDK",
        ],

        links: {
            github: "https://github.com/ShubhamKumar37/my-gpt",
            live: "https://my-gpt-rust.vercel.app/",
        },

        // HTML content for the project details page.
        // Keep markup authored by you and sanitize it before rendering.
        details: {
            overview: `
        <p>
          <strong>My-GPT</strong> is a full-stack AI chat application
          inspired by ChatGPT. It provides an authenticated workspace
          where users can create conversations and receive
          <strong>AI-generated responses in real time</strong>.
        </p>

        <p>
          Conversations and messages are stored in
          <strong>MongoDB</strong>, allowing users to revisit their chat
          history. The application combines authentication, conversation
          management, and a streaming chat interface.
        </p>

        <p>
          The application uses <strong>Next.js App Router</strong>,
          Clerk authentication, and the <strong>Vercel AI SDK</strong>
          to connect the user interface with the AI response workflow.
        </p>
      `,

            features: `
        <ul>
          <li>
            <strong>Persistent conversations:</strong>
            Create chats and revisit saved message history.
          </li>
          <li>
            <strong>Streaming responses:</strong>
            Display generated answers progressively as they arrive.
          </li>
          <li>
            <strong>Authentication and onboarding:</strong>
            Use Clerk sign-in and create an application user record
            during onboarding.
          </li>
          <li>
            <strong>Conversation management:</strong>
            Create, rename, pin, archive, and delete conversations.
          </li>
          <li>
            <strong>Context-aware messaging:</strong>
            Combine existing conversation history with the latest
            user message and a system prompt.
          </li>
          <li>
            <strong>Client-side caching:</strong>
            Use TanStack Query for conversation-related server data.
          </li>
        </ul>
      `,

            architecture: `
        <h3>1. Authentication and onboarding</h3>
        <p>
          <strong>Clerk</strong> handles authentication. The onboarding
          flow checks whether the authenticated Clerk user already has
          a corresponding MongoDB record and creates one when needed.
          Application routes are protected according to authentication
          and onboarding state.
        </p>

        <h3>2. Conversation creation</h3>
        <p>
          The root page creates a conversation and redirects the user
          to a route associated with that conversation. Each conversation
          stores metadata such as its title, user, selected model,
          system prompt, and timestamps.
        </p>

        <h3>3. Request validation</h3>
        <p>
          The chat API checks authentication, validates the incoming
          request, and verifies the target conversation before
          processing the message.
        </p>

        <h3>4. Context preparation</h3>
        <p>
          The backend retrieves the existing message history, incorporates
          the latest user message, and prepares the conversation context
          for the selected AI model.
        </p>

        <h3>5. Streaming generation</h3>
        <p>
          The <strong>Vercel AI SDK</strong> streams the generated
          response to the frontend, allowing the assistant's answer
          to appear progressively instead of waiting for the entire
          response to finish.
        </p>

        <h3>6. Persistence and caching</h3>
        <p>
          Message updates are saved in MongoDB. TanStack Query manages
          cached conversation-related data on the client.
        </p>
      `,

            challenges: `
        <h3>Building the chat interface</h3>
        <p>
          Creating a chat interface that handles streaming messages
          and their rendering correctly required understanding the
          AI SDK's chat functionality.
        </p>
        <p>
          <strong>Solution:</strong> I used the Vercel AI SDK's
          existing chat integration rather than implementing every
          streaming interaction from scratch.
        </p>

        <h3>MongoDB data serialization</h3>
        <p>
          MongoDB returned objects containing application data and
          additional metadata. Although the data appeared in the console,
          the frontend sometimes accessed the wrong fields.
        </p>
        <p>
          <strong>Solution:</strong> I inspected the returned object
          structure and normalized the data before passing it to the
          frontend so that the UI accessed the expected fields.
        </p>

        <h3>Authentication and route protection</h3>
        <p>
          The onboarding and route-protection flow did not initially
          behave consistently across login and logout states.
        </p>
        <p>
          <strong>Solution:</strong> I created a truth table mapping
          authentication states to accessible routes. This helped
          identify the access-control cases that needed correction.
        </p>
      `,

            contribution: `
        <ul>
          <li>Implemented the chat application and conversation experience.</li>
          <li>Integrated Clerk authentication and application-level onboarding.</li>
          <li>Built request validation, context preparation, and streaming integration.</li>
          <li>Implemented MongoDB-backed conversation and message persistence.</li>
          <li>Integrated client-side caching and state management.</li>
          <li>Investigated and resolved data-shape and authentication-flow issues.</li>
        </ul>
      `,

            // Add real screenshots when available.
            // Each item can contain its own HTML caption.
            gallery: [],
        },
    },

    {
        id: "study-notion",
        title: "Study Notion",
        tagline: "A learning platform for students and educators.",
        category: "Full-Stack Web Application",
        duration: "3 Months",
        featured: true,

        description:
            "A full-stack learning platform with course management, authentication, and payment integration.",

        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Razorpay",
            "JWT",
        ],

        links: {
            github: "",
            live: "",
        },

        details: {
            overview: `
        <p>
          <strong>Study Notion</strong> is a full-stack learning platform
          built around course creation and management for students
          and educators.
        </p>
      `,
            features: "",
            architecture: "",
            challenges: "",
            contribution: "",
            gallery: [],
        },
    },

    {
        id: "online-app-store",
        title: "Online App Store",
        tagline: "A platform for uploading, managing, and distributing applications.",
        category: "Full-Stack Web Application",
        duration: "2 Months",
        featured: false,

        description:
            "A MERN application for application uploads, management, and distribution with cloud storage integrations.",

        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Google Drive API",
            "Cloudinary",
        ],

        links: {
            github: "",
            live: "",
        },

        details: {
            overview: `
        <p>
          <strong>Online App Store</strong> is a full-stack MERN
          application for uploading, managing, and distributing
          applications using cloud storage integrations.
        </p>
      `,
            features: "",
            architecture: "",
            challenges: "",
            contribution: "",
            gallery: [],
        },
    },
];
