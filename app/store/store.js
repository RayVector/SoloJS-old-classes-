import sjs_store from "../../sjs/store/Sjs_store";

export default new sjs_store({
  state: {
    mainInfo: 'main info from store'
  },
  actions: {
    editMainInfo(state, data) {
      state.mainInfo = data;
    }
  },
})