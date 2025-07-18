var STRAPI_URL = import.meta.env.LOCAL == "true" ? import.meta.env.STRAPI_LOCAL_URL : import.meta.env.STRAPI_CLOUD_URL;

export default STRAPI_URL;