import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e2ee5a6 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _cc1e0c90 = () => interopDefault(import('../pages/chavo.vue' /* webpackChunkName: "pages/chavo" */))
const _62ad3268 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _d5ee995e = () => interopDefault(import('../pages/recover-password.vue' /* webpackChunkName: "pages/recover-password" */))
const _31c2ae90 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _0501c3b5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _69706e94 = () => interopDefault(import('../pages/users/user-details.vue' /* webpackChunkName: "pages/users/user-details" */))
const _dbcf7c7e = () => interopDefault(import('../pages/users/user-settings.vue' /* webpackChunkName: "pages/users/user-settings" */))
const _0b5859d2 = () => interopDefault(import('../pages/categories/_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _febccc44 = () => interopDefault(import('../pages/products/_product.vue' /* webpackChunkName: "pages/products/_product" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cases",
    component: _5e2ee5a6,
    name: "cases___ua"
  }, {
    path: "/chavo",
    component: _cc1e0c90,
    name: "chavo___ua"
  }, {
    path: "/login",
    component: _62ad3268,
    name: "login___ua"
  }, {
    path: "/recover-password",
    component: _d5ee995e,
    name: "recover-password___ua"
  }, {
    path: "/register",
    component: _31c2ae90,
    name: "register___ua"
  }, {
    path: "/ru",
    component: _0501c3b5,
    name: "index___ru"
  }, {
    path: "/ru/cases",
    component: _5e2ee5a6,
    name: "cases___ru"
  }, {
    path: "/ru/chavo",
    component: _cc1e0c90,
    name: "chavo___ru"
  }, {
    path: "/ru/login",
    component: _62ad3268,
    name: "login___ru"
  }, {
    path: "/ru/recover-password",
    component: _d5ee995e,
    name: "recover-password___ru"
  }, {
    path: "/ru/register",
    component: _31c2ae90,
    name: "register___ru"
  }, {
    path: "/users/user-details",
    component: _69706e94,
    name: "users-user-details___ua"
  }, {
    path: "/users/user-settings",
    component: _dbcf7c7e,
    name: "users-user-settings___ua"
  }, {
    path: "/ru/users/user-details",
    component: _69706e94,
    name: "users-user-details___ru"
  }, {
    path: "/ru/users/user-settings",
    component: _dbcf7c7e,
    name: "users-user-settings___ru"
  }, {
    path: "/ru/categories/:category?",
    component: _0b5859d2,
    name: "categories-category___ru"
  }, {
    path: "/ru/products/:product?",
    component: _febccc44,
    name: "products-product___ru"
  }, {
    path: "/categories/:category?",
    component: _0b5859d2,
    name: "categories-category___ua"
  }, {
    path: "/products/:product?",
    component: _febccc44,
    name: "products-product___ua"
  }, {
    path: "/",
    component: _0501c3b5,
    name: "index___ua"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
