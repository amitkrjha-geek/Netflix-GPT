export const loginImage = "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const logo =
    "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
export const userAvatar = "https://avatars.githubusercontent.com/u/70425790?v=4"

export const API_OPTIONS = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY,
  },
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY =process.env.REACT_APP_OPENAI_KEY;