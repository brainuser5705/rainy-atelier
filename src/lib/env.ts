var STRAPI_URL = import.meta.env.LOCAL == "true" ? import.meta.env.STRAPI_LOCAL_URL : import.meta.env.STRAPI_CLOUD_URL;
// var BASE_URL = import.meta.env.LOCAL == "true" ? import.meta.env.BASE_LOCAL_URL : import.meta.env.BASE_NETLIFY_URL;

var BASE_URL = import.meta.env.BASE_LOCAL_URL;

export { STRAPI_URL, BASE_URL };