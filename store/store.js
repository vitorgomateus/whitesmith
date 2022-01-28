import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nome: 'Joe',
  options: {
    prints: [],
    frames: [],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fits: []
  },
  shirt: {
    printID: false,
    frameID: false,
    size: false,
    fitID: false
  },
  editor: {
    current: {
      key: 'print',
      title: 'Print'
    },
    phases: {
      print: {
        key: 'print',
        title: 'Choose a Print',
        active: false
      },
      frame: {
        key: 'frame',
        title: 'Choose a Frame',
        active: false
      },
      sizefit: {
        key: 'sizefit',
        title: 'Choose a Size and Fit',
        active: false
      },
      preview: {
        key: 'preview',
        title: 'Preview',
        active: false
      }
    }
  }
}

export default {
  state,
  mutations: {},
  getters: {
    getNome (state) {
      return state.nome
    },
    getCurrent (state) {
      return state.editor.current.title
    }
  }
}
