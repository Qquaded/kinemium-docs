import { getLLMText, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ class: string }> }
) {
  const { class: className } = await params;
  const page = source.getPage(['instances', className]);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export function generateStaticParams() {
  const pages = source.getPages();
  console.log(pages.map(p => p.slugs));
  return pages
    .filter(page => page.slugs[0] === 'instances' && page.slugs[1] !== undefined)
    .map(page => ({ class: page.slugs[1] }));
}