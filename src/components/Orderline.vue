<template>
  <div>
    <h6>Bread</h6>
    <form>
     
        <div class="row justify-content-left">
          <div class="col-sm-4">
            <label for="breadselect" class="form-label"
              >Choose Your First Bread</label
            >
            <select
              class="form-select"
              v-model="city"
              text-field="name"
              disabled-field="notEnabled"
            >
              <option
                v-for="bread in theBreads"
                v-bind:value="bread.value"
                v-bind:key="bread.index"
              >
                {{ bread.Name }}
              </option>
            </select>
          </div>
          <div class="col-sm-1">
            <label for="quantityselect" class="form-label">quantity</label>
            <input
              id="quantityInput"
              type="number"
              class="form-control"
              name="quantity"
              min="1"
              max="10"
              required
            />
          </div>
          <label for="sliced" class="form-label">sliced</label>
          <div class="col-sm-4">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
          </div>
                <button type="submit" class="btn btn-primary" style="margin-bottom :5px">Submit</button>

        </div>
    </form>
</div>
</template>

<script>

export default {
  data() {
    return {
      bread: "",
      checkoutsByUser: null,
      accountError: false,
      city: null,
      myFormData: null,
    };
  },
  computed: {
     theBreads() {
      return this.$store.state.breads;
    },
  },
  methods : {
    addVisa(){
      this.applicants.push({
        previous:'',
        expiration: ''
      })
    },
    deleteVisa(counter){
      this.applicants.splice(counter,1);
}
  },
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
