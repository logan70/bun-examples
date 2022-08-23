import { renderToReadableStream } from 'react-dom/server'

const dt = new Intl.DateTimeFormat()

export default {
  port: 3000,
  async fetch(request: Request) {
    let controller = new AbortController()
    let didError = false
    try {
      let stream = await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <h1>Hello from React SSR!</h1>
            <p>The date is {dt.format(new Date())}</p>
          </body>
        </html>,
        {
          signal: controller.signal,
          onError(error) {
            didError = true;
            console.error(error);
          }
        }
      )

      // This is to wait for all Suspense boundaries to be ready. You can uncomment
      // this line if you want to buffer the entire HTML instead of streaming it.
      // You can use this for crawlers or static generation:

      // await stream.allReady;

      return new Response(stream, {
        status: didError ? 500 : 200,
        headers: { 'Content-Type': 'text/html' },
      })
    } catch (error) {
      return new Response('<!doctype html><p>Server error!</p>', {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      })
    }
  },
}
