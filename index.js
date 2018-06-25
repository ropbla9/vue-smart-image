import index from './index.vue'

const install = (Vue) => {
    Vue.mixin({
        components: {
            vueSmartImage: index
        }
    })
}

export default { install }