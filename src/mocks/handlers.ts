import { http, HttpResponse, delay } from "msw";
import { data } from "./data";

export const handlers = [
  http.post("https://api.sailthru.com/templates", async ({ request }) => {
    const body = await request.json();
    const searchQuery = body?.q?.toLowerCase();
    const newData = data.filter((template) =>
      template.name.toLowerCase().includes(searchQuery),
    );

    if (searchQuery === "gold") {
      return new HttpResponse(null, { status: 500 });
    }

    if (searchQuery.length === 1) {
      await delay(2000);
    }
    if (searchQuery === "sa") {
      await delay(1000);
    }

    return HttpResponse.json(newData);
  }),
];
