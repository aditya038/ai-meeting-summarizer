// server.ts

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';
import { createRequestHandler } from '@netlify/angular-runtime';

const commonEngine = new CommonEngine();

// Edge-compatible handler for Netlify
export async function netlifyAppEngineHandler(request: Request, context: any): Promise<Response> {
  return await render(commonEngine);
}

// Required export for Netlify Edge Functions
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
