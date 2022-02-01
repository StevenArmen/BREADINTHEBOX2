<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Checkout {{}} </h4>
            <form id="review-form" @submit.prevent="submitReview">
              <div class="mb-3">
                <label for="checkoutLength" style="padding-right: 5px;">Chekout Length: </label>
  <select name="checkoutLength" id="checkoutLength" v-model="daysLength">
    <option value="15" >15</option>
    <option value="30">30</option>
    <option value="45">45</option>
  </select>
              </div>
             
              <button type="submit" class="btn btn-primary">
                Submit Review</button
              ><button
                v-on:click="cancelReview"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  data() {
    return {
      checkoutDate: null,
      daysLength: null,
      errorMessage: null,
    };
  },
  methods: {
    getTodaysDate(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm+ '-' + dd;
return today;

},
 addDays(addDays) {
   var returnDate = new Date();
 var someDate = new Date();

someDate.setDate(someDate.getDate() + parseInt(addDays)); 
console.log(addDays);
var dd = someDate.getDate();
var mm = someDate.getMonth() + 1;
var yyyy = someDate.getFullYear();

returnDate = yyyy + '-' + mm+ '-' + dd;

  return returnDate;
},
    submitReview() {
      
      let myCheckout = {
         bookID: this.$route.params.pk,
    checkoutDate:  this.getTodaysDate(),
    returnDate: this.addDays(this.daysLength),


      };
      axios
        .post("/checkouts", myCheckout, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create a review, please try again later" + this.getTodaysDate() + " " + this.$route.params.pk + " return on" + this.addDays(this.getTodaysDate(), 15);
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
  },
};

</script>

<style>
button {
  margin-right: 5px;
}
</style>