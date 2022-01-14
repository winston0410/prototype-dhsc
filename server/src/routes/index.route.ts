import fetch from "node-fetch";

type IRequest = {
  name: string;
  email: string;
  mobile: string;
  location_id: number;
  site: number;
  // NOTE Ignoring unmappable fields for now
  severity: string;
  short_description: string;
  asset_id: number;
  date: string;
};

type IMaximoServiceRequest = {
  reportedbyname: string;
  reportedemail: string;
  affectedphone: string;
  location: number;
  assetsiteID: number;
  reportedprioritydescription: string;
  globalticketclass_description: string;
  assetnum: number;
  affecteddate: string;
};

// NOTE Only a dummy right now, routing back to this server at the moment
const MAXIMO_URL = "http://localhost:8000/dummy";

export default function indexRoute(server, options, next) {
  server.post("/", { schema }, async (req, res) => {
    try {
      const body: IRequest = req.body;

      const maximoReqBody: IMaximoServiceRequest = {
        reportedbyname: body.name,
        reportedemail: body.email,
        affectedphone: body.mobile,
        location: body.location_id,
        assetsiteID: body.site,
        reportedprioritydescription: body.severity,
        globalticketclass_description: body.short_description,
        assetnum: body.asset_id,
        affecteddate: body.date,
      };

      const request = await fetch(MAXIMO_URL, {
        method: "POST",
        body: JSON.stringify(maximoReqBody),
      });

      if (!request.ok) {
        res.code(500).send({ message: "Something wrong with upstream server" });
      }

      res
        .code(200)
        .send({
          message: "Request created",
          upstream_received_body: maximoReqBody,
        });
    } catch (error) {
      res.code(500).send({ message: "Something unexpected happened" });
    }
  });

  next();
}
