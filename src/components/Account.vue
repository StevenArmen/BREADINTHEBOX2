<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Overview</h3>
    <h4>Your Orders are scheduled for {{ deliveryDay }}s</h4>
    <hr
      style="height: 2px; border-width: 0; color: gray; background-color: gray"
    />
    <div>
      <!-- customer subscription -->
      <h4>Your Subscription</h4>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Active Subscription</label>
</div>
     
    
    </div>
    <form id="subscription-form" @submit.prevent="onSubmit">
      <div class="container">
       
            <component
        v-for="(component, index) in components"
        :key="index"
        :is="component"
      ></component>
         
         
         
        </div>
         <button
            type="submit"
            class="btn btn-primary"
            style="margin-bottom: 5px"
             @click="add"
          >
            Submit
          </button>
    </form>
    <!-- customer order history -->
    <hr
      style="height: 2px; border-width: 0; color: gray; background-color: gray"
    />
    <h4>Your Orders</h4>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>

    <table v-if="checkoutsByUser" class="table">
      <thead>
        <th>Book</th>
        <th>Date Checked out</th>
        <th>Date Due</th>
      </thead>
      <tbody>
        <tr
          v-for="thisCheckout in checkoutsByUser"
          :key="thisCheckout.CheckoutPK"
        >
          <th>
            <router-link :to="`/books/${thisCheckout.CheckoutPK}`">{{
              thisCheckout.Title
            }}</router-link>
          </th>
          <th>{{ thisCheckout.CheckoutDate }}</th>
          <th>{{ thisCheckout.ReturnDate }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import orderline from "./Orderline.vue";
export default {
  data() {
    return {
      components: [orderline],
      bread: "",
      checkoutsByUser: null,
      accountError: false,
      city: null,
      myFormData: null,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
    deliveryDay() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.DeliveryDay;
    },
   
  },

  created() {
    axios

      .get("/checkouts/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.checkoutsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
  methods: {
    add() {
      this.components.push(orderline);
    },
  },
};
</script>

<style></style>