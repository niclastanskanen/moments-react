import { rest } from "msw";

const baseURL = "https://drf-api-1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 4,
        "username": "niclas",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 4,
        "profile_image": "https://res.cloudinary.com/dxte1wckn/image/upload/v1/media/../default_profile_mccjmy"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
