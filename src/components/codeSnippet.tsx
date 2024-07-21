"use client"
// components/CodeSnippet.tsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CodeSnippetProps {
  language: string;
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div className="relative">
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button
          className="absolute top-2 right-2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
          title="Copy to Clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={okaidia} className="rounded-lg">
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet