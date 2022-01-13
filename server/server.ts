import { Application } from "https://deno.land/x/oak@v10.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";

const app = new Application();

app.use(logger.logger)
app.use(logger.responseTime)

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
