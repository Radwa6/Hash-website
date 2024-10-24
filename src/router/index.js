import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import ThePage from '@/components/common/ThePage.vue'
import ContactPage from '@/components/user/Contact.vue'
import aboutUs from '@/components/pages/aboutUs.vue'
import allProjects from '@/components/pages/allProjects.vue'
import projectDetails from '@/components/pages/projectDetails.vue'
import odooPage from '@/components/odoo/odooPage.vue'
import businessSolutions from '@/components/odoo/businessSolutions.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome,
  },
  {
    path: '/ThePage',
    name: 'ThePage',
    component: ThePage,
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: aboutUs,
  },
  {
    path: '/allProjects',
    name: 'allProjects',
    component: allProjects,
  },
  {
    path: '/projectDetails',
    name: 'projectDetails',
    component: projectDetails,
  },
  {
    path: '/odooPage',
    name: 'odooPage',
    component: odooPage,
  },
  {
    path: '/businessSolutions',
    name: 'businessSolutions',
    component: businessSolutions,
  },
]

const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const activeLinks = document.querySelectorAll('.active-link')
  activeLinks.forEach((link) => {
    link.classList.remove('active-link')
  })

  next()
})

export default router
