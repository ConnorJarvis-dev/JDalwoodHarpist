export default {
  generate: {
    fallback: true,
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Jessica Dalwood",
    titleTemplate: "Jessica Dalwood || %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Global CSS
   */
  css: ["assets/scss/style.scss"],

  router: {
    linkExactActiveClass: "active-link",
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-awesome-swiper.js",
    "~/plugins/vuejs-paginate.js",
    "~/plugins/vue2-google-maps.js",
    "~/plugins/vue-masonry-css.js",
    "~/plugins/Mixitup.client.js",
    "~/plugins/silentbox.js",
    { src: "~/plugins/vue-masonry", ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources"],

  styleResources: {
    scss: ["assets/scss/default/_variables.scss"],
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },  
    extractCSS: true,
    transpile: [/^vue2-google-maps($|\/)/],
  },
};