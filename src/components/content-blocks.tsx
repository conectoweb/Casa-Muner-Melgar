import Image from "next/image";
import type { ContentBlock } from "@/data/content-types";
import { IconStrip } from "@/components/icon-strip";
import { renderInline } from "@/components/inline-text";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Renderiza bloques de contenido definidos en los archivos de datos. */
export function ContentBlocks({ blocks }: { blocks: readonly ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{renderInline(block.text)}</p>;
          case "heading": {
            const Tag = block.level === 3 ? "h3" : "h2";
            return (
              <Tag key={index} id={slugify(block.text)}>
                {renderInline(block.text)}
              </Tag>
            );
          }
          case "list": {
            const items = block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{renderInline(item)}</li>
            ));
            return block.style === "numbers" ? (
              <ol key={index}>{items}</ol>
            ) : (
              <ul key={index}>{items}</ul>
            );
          }
          case "image":
            return (
              <figure
                key={index}
                className={
                  block.narrow
                    ? "content-image content-image-narrow"
                    : "content-image"
                }
              >
                <Image
                  src={block.image.src}
                  width={block.image.width}
                  height={block.image.height}
                  alt={block.image.alt}
                  sizes="(max-width: 760px) 100vw, 760px"
                />
                {block.caption ? (
                  <figcaption>{block.caption}</figcaption>
                ) : null}
              </figure>
            );
          case "note":
            return (
              <p key={index} className="content-note">
                {renderInline(block.text)}
              </p>
            );
          case "icons":
            return <IconStrip key={index} items={block.items} />;
        }
      })}
    </>
  );
}
