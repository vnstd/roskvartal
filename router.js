import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Info from '~/pages/Info'
import Rules from "~/components/Rules";
import Instruction from "~/components/Instruction";
import Agreement from "~/components/Agreement";

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/info',
        component: Info,
        redirect: '/info/rules',
        children: [
          {
            path: 'rules',
            component: Rules
          },
          {
            path: 'instruction',
            component: Instruction
          },
          {
            path: 'agreement',
            component: Agreement
          }
        ]
      }
    ]
  })
}
