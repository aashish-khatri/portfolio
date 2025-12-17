"use client";

import { Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [shareUrl, setShareUrl] = useState(url || '');
  
  useEffect(() => {
    if (!url) {
      setShareUrl(window.location.href);
    }
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: shareUrl });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-text-muted font-medium">Share:</span>
      
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-bg-secondary border border-border-primary hover:bg-bg-tertiary hover:border-border-secondary transition-all"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </a>
      
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-bg-secondary border border-border-primary hover:bg-bg-tertiary hover:border-border-secondary transition-all"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-lg bg-bg-secondary border border-border-primary hover:bg-bg-tertiary hover:border-border-secondary transition-all"
        aria-label={copied ? 'Link copied!' : 'Copy link'}
      >
        {copied ? <Check size={18} className="text-green-600" /> : <Link2 size={18} />}
      </button>

      {canShare && (
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-lg bg-primary text-white hover:bg-primary-light transition-all text-sm font-medium px-4"
        >
          Share
        </button>
      )}
    </div>
  );
}

