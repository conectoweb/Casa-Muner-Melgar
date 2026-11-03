import type { ReactNode } from "react";
import { siteConfig } from "@/data/site-content";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
};

export function WhatsAppLink({ children, className }: WhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
