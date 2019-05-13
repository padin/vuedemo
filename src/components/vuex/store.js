import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * state 在vuex中主要用于存储数据
 */
var state = {
    count:1,
    list:[]
}
/**
 * mutation 在vuex中主要用于改变state里的数据
 */
var mutations ={
    inccount(){
        state.count++;
    },
    addList(state,data){
        state.list = data;
    }
}

/**
 * 有点类似计算属性
 * 改变state数据的时候会出发getters的方法=>从而获取新的值
 */
var getters ={
    computedCount :(state)=>{
        return state.count * 2;
    }
}
/**
 * Action 类似于 mutation，不同在于：

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
 */
var actions ={
    incMutationCount(context){
        context.commit('inccount');
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store;