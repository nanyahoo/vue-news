import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',    //url뒤에 '#'제거시 사용
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      //path: url에 대한 주소
      path: '/news',
      //component: url 주소로 갔을때 표시할 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ]
});