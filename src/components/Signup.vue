<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="fname-input" class="form-label">First name</label
        ><input
          type="text"
          class="form-control"
          id="fname-input"
          required=""
          placeholder="First name"
          v-model= "nameFirst"
        />
      </div>
      <div class="mb-3">
        <label for="lname-input" class="form-label">Last name</label
        ><input
          type="text"
          class="form-control"
          id="lname-input"
          required=""
          placeholder="Last name"
          v-model= "nameLast"
        />
      </div>
      <div class="mb-3">
        <label for="email-input" class="form-label">Email</label
        ><input
          type="email"
          class="form-control"
          id="email-input"
          required=""
          placeholder="Enter email"
          v-model= "email"
        />
        <small v-if="dupEmail" class="text-danger"
          >Please chose a different email</small
        >
      </div>
      <div class="mb-3">
        <label for="phone-input" class="form-label">Phone Number</label
        ><input
          type="text"
          class="form-control"
          id="phone-input"
          required=""
          placeholder="Phone"
          v-model= "phone"
        />
      </div>
       <div class="mb-3">
        <label for="address-input" class="form-label">Address</label
        ><input
          type="text"
          class="form-control"
          id="address-input"
          required=""
          placeholder="Address"
          v-model= "address"
        />
      </div>
      <div class="mb-3">
        <label for="zipcode-input" class="form-label">Zipcode</label
        ><input
          type="text"
          class="form-control"
          id="zipcode-input"
          required=""
          placeholder="Zipcode"
          v-model= "zipcode"
        />
      </div>
      <div class="mb-3">
        <label for="password-input" class="form-label">Password</label
        ><input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Password"
          required=""
          v-model= "password"
        />
      </div>
  <div class="mb-3">
    <label for="city-select" class="form-label">City</label>

    <select class="form-select"
      v-model= "city"
      value-field="options"
      text-field="name"
      disabled-field="notEnabled"
     
    > 
    <option v-for="options in options" v-bind:value="options.value" v-bind:key="options.index" >{{ options.text }}</option>
  </select>

    <div class="mt-3">Selected: <strong>{{selected}}</strong></div>
  </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default{
  data(){
    
    return{
      nameFirst:"",
      nameLast:"",
      email:"",
      phone:"",
      zipcode:"",
      password:"",
      city: null,
     
      errorMessage:"",
      dupEmail:false,
       
        options: [
          { value: null, text: 'Please select some item' },
          { value: '1', text: 'Castle Rock' },
          { value: '2', text: 'Castle Pines' },
          { value: '3', text: 'Highlands Ranch'},
          { value: '4', text: 'Colorado Springs', },
          { value: '5', text: 'Parker', }
        ]
    
    }
    
    
  },
  
  methods:{
    created () {
  this.submitted = true
  return this.$v.$touch()
},
computed: {
  isDisabled () {
    return this.$v.$invalid
  }
},
    onSubmit(){
      const myFormData={
        firstName: this.nameFirst,
        lastName: this.nameLast,
        email:this.email,
        phone:this.phone,
        address:this.address,
        zipcode:this.zipcode,
        password:this.password,
        deliveryZone: this.city

      }
      
      console.log(myFormData)
      axios
      .post("/customer",myFormData)
      .then((myResponse)=>{
        console.log("the response", myResponse);
         this.$router.replace("/login?signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage = "Cannot sign you up, please try again later";
          }
        });
    },
  },
  
};

</script>

<style></style>
