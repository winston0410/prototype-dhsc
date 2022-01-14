export default function indexRoute(server, options, next) {
  server.post("/", async (req, res) => {
    res.send(200);
  });

  next();
}
