"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const getCodeText = (): string => {
    // Extract text content from pre > code structure
    if (typeof children === 'string') return children;
    
    const extractText = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (node && typeof node === 'object' && 'props' in node) {
        return extractText((node as { props: { children: React.ReactNode } }).props.children);
      }
      return '';
    };
    
    return extractText(children);
  };

  const handleCopy = async () => {
    const code = getCodeText();
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className={className}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-bg-quaternary/80 text-text-muted hover:text-text-primary hover:bg-bg-quaternary opacity-0 group-hover:opacity-100 transition-all"
        aria-label={copied ? 'Copied!' : 'Copy code'}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
