// Serves /<key>.txt, the IndexNow key file that proves the site's submissions are its own. See src/lib/indexnow.ts.
import type { APIRoute, GetStaticPaths } from 'astro';
import { indexNowKey } from '../data/indexnow';

export const getStaticPaths: GetStaticPaths = () => [{ params: { key: indexNowKey } }];

export const GET: APIRoute = () =>
  new Response(indexNowKey, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
