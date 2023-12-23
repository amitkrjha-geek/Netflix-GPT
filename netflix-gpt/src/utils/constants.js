import { REACT_APP_OPENAI_KEY } from "./env"
import { REACT_APP_TMDB_KEY } from "./env"
export const loginImage = "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const userAvatar = "https://avatars.githubusercontent.com/u/70425790?v=4"

export const API_OPTIONS = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+REACT_APP_TMDB_KEY,
  },
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY =REACT_APP_OPENAI_KEY;