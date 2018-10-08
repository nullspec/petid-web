import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Home from '@/components/Home';
import Login from '@/components/Login';

/* Workspaces */
// import TheWorkspace from '@/components/TheWorkspace';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/forgot',
    //   name: 'Forgot',
    //   component: TheForgotPassword,
    // },
    // {
    //   path: '/info',
    //   name: 'Info',
    //   component: Info,
    // },
    // {
    //   path: '/',
    //   component: TheWorkspace,
    //   children: [
    //     {
    //       path: 'users/',
    //       name: 'WorkspaceUsers',
    //       component: WorkspaceUsers,
    //       name: 'WorkspacePerformance',
    //       component: WorkspacePerformance,
    //       components: {
    //         workspace: WorkspacePerformance,
    //       },
    //       meta: {
    //         requiresAuth: true,
    //       },
    //     },
    //   ],
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['authentication/isAuthenticated']) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      /* Reset timeouts */
      store.dispatch('timeout/startLogoutTimer');
      next();
    }
  } else {
    next();
  }
});

export default router;
