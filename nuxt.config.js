module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',rel:"stylesheet"}
    ],
    script: [
      {src:'https://use.fontawesome.com/releases/v5.0.6/js/all.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css:[
    '~/assets/vuetify.min.css',
    { src: '~assets/global/index.scss', lang: 'scss' }
  ],
  plugins:[
    '~/plugins/vuetify',
    '~/plugins/config'
  ],
  // generate: {
  //   routes: [
  //     '/posts/1',
  //     '/posts/2',
  //     '/posts/3'
  //   ]
  // },

  router: {
    // base: '/myblog/'
  },

  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/global/index";'
        }
      })
    }

    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
