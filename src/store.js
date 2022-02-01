import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./Routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    breads: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeBreads(state, breads) {
      state.breads = breads;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getBreads({ commit }) {
      axios.get("/bread").then((aResponse) => {
        console.log("response in /bread", aResponse);
        commit("storeBreads", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/customer/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          localStorage.clear("token");
          localStorage.clear("expiration");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in loging out");
        });
    },
    tryAutoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      if (now >= expirationDate) {
        return;
      }

      axios
        .get("/customers/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((theResponse) => {
          commit("storeUserInApp", theResponse.data);
          commit("storeTokenInApp", token);
          this.dispatch("setLogoutTimer");
        })
        .catch(() => {
          myRoutes.replace("/");
        });
    },
    setLogoutTimer({ dispatch }) {
      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      let timeLeft = expirationDate - now;
      setTimeout(() => {
        dispatch("logout");
      }, timeLeft);
    },
  },
});