import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NofFound.vue'
import ProfileView from '../views/ProfileView.vue'
import PostsView from '../views/PostsView.vue'
import LikesView from '../views/LikesView.vue'
import NewsView from '../views/NewsView.vue'
import PeopleYouMayKnow from '../views/PeopleYouMayKnow.vue'
import HomeFooter from '../views/HomeFooter.vue'
import ProfileFooter from '../views/ProfileFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidevar: NewsView,
        Footer: HomeFooter,
      }
    },
    {
      path: '/:id',
      name: 'profile',
      components: {
        default: ProfileView,
        Sidevar: PeopleYouMayKnow,
        Footer: ProfileFooter,
      },
      children: [
        {
          path: 'posts',
          name: 'posts',
          component: PostsView,
        },
        {
          path: 'likes',
          name: 'likes',
          component: LikesView,
        },
      ]
    },
    {
      path: '/about',
      alias: ['/me', '/yoshipi'],
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog/:id*',
      alias: '/article/:id',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      //redirect: { name: 'home' },
      props: true,
      component: NotFound
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition)
        }
        if (to.hash) {
          return resolve({
            top: 20,
            left: 0,
            el: '#blog',
            behavior: 'smooth',
          })
        }
        return resolve({ top: 0, left: 0, behavior: 'smooth' })
      }, 2000);
    });

  }
})
router.beforeEach(async (to, from) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log(to, from);
  console.log('beforeEach');
  //if (to.name === 'blog') return { name: 'home'};
})
export default router
