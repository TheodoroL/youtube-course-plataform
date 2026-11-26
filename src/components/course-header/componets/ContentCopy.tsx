"use client";

import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface IContentCopyProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

export function ContentCopy({ title, content, children }: IContentCopyProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
  }, [isCopied]);

  function handleCopyContent() {
    window.navigator.clipboard.writeText(content);
    setIsCopied(true);
  }
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 max-w-sm min-w-72">
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <input
              className="bg-background p-1 px-2"
              value={content}
              readOnly
              autoFocus
              onFocus={(e) => e.target.select()}
            />
            <button className="p-2" onClick={handleCopyContent}>
              {isCopied ? (
                <MdCheck className="text-primary" />
              ) : (
                <MdContentCopy />
              )}
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
