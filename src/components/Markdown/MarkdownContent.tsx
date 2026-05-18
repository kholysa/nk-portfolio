import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownBody } from "./Markdown.css.tsx";

type MarkdownContentProps = {
  children: string;
  className?: string;
};

export const MarkdownContent = ({
  children,
  className,
}: MarkdownContentProps) => {
  return (
    <MarkdownBody className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children: linkChildren }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {linkChildren}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </MarkdownBody>
  );
};
