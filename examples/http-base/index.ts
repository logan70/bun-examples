import { existsSync } from 'fs';
import { serve, file } from 'bun';

const server = serve({
  port: 3000,
  async fetch(request) {
    const filepath = new URL(request.url).pathname.substring(1)
    const fileExist = filepath && await existsSync(filepath)

    // return file, e.g. http://localhost:3000/README.md
    if (fileExist) {
      return new Response(file(filepath))
    }

    // Stop the server, http://localhost:3000/admin/stop
    if (filepath === 'admin/stop') {
      setTimeout(() => {
        server.stop();
      }, 5000);
      return new Response('Bun server will be stopped 5 seconds later!')
    }

    // Base example, http://localhost:3000
    return new Response('Welcome to Bun!')
  },
})
