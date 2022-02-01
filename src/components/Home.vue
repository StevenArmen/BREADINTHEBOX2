<template>
  <div class="container-fluid p-0">
    <div>
      <br />

      <!-- example 1  -->
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card-body">
              <h1>This Month's Specialty Bread</h1>
              <p style="font-family: sacramento, cursive; color: #c9410c">
                Cinnamon Twist
              </p>
              <p>Ropes of cinnamon and sugar braided to make a loaf of bread</p>
            </div>
          </div>
          <div class="col">
            <div class="col">
              <img
                src="@/assets/images/pan4.jpg"
                class="img-thumbnail float-end"
                alt="Boat on Calm Water"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Example 1 end -->
      <div class="card bg-dark text-white" style="margin-bottom: 5px">
        <img src="@/assets/images/pan4.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay"></div>
      </div>
      <!-- End of image break -->

      <section class="about-cards-section" >
       <!-- section header -->
       <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 >Ways to Order</h1>
      <p class="lead">We have serveral different and convientent ways to order our delicious bread.</p>
    </div>
     <hr
            style="
              height: 2px;
              border-width: 0;
              color: gray;
              background-color: gray;
            "
          />
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 >Sign Up for Bread Delivery</h1>
      <p class="lead">The easiest way to get bread, just sign up, place your order, and select your delivery dates.</p>
    <p class="lead">With our low delivery cost of $1 dollar, no minimuns, no cancellation fees, and no commitments, you can have the freshest possible bread without having to go to the store.</p>
    </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 card-wrapper">
              <div class="card border-0">
                <div
                  class="
                    position-relative
                    rounded-circle
                    overflow-hidden
                    mx-auto
                    custom-circle-image
                  "
                >
                  <img
                    class="w-100 h-100"
                    src="@/assets/images/placeorder.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body text-center mt-4">
                  <h3 class="text-uppercase card-title">Step 1</h3>
                  <p class="card-text">Place an Order.</p>
                </div>
              </div>
            </div>

            <div class="col-sm-4 card-wrapper">
              <div class="card border-0">
                <div
                  class="
                    position-relative
                    rounded-circle
                    overflow-hidden
                    mx-auto
                    custom-circle-image
                  "
                >
                  <img
                    class="w-100 h-100"
                    src="@/assets/images/breadbaking.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body text-center mt-4">
                  <h3 class="text-uppercase card-title">Step 2</h3>
                  <p class="card-text">
                    Wait for you bread to be freshly baked.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-4 card-wrapper">
              <div class="card border-0">
                <div
                  class="
                    position-relative
                    rounded-circle
                    overflow-hidden
                    mx-auto
                    custom-circle-image
                  "
                >
                  <img
                    class="w-100 h-100"
                    src="@/assets/images/delivery.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body text-center mt-4">
                  <h3 class="text-uppercase card-title">Step 3</h3>
                  <p class="card-text">Get your bread delivered.</p>
                </div>
              </div>
            </div>
            
<div class="container">
  <div class="row">
    <div class="col text-center">
                  <button type="button" class="btn btn-primary btn-lg" syle = "margin-bottom: 5px">Sign Up Now</button>
    </div>
  </div>
</div>

          </div>
          


        </div>
        
      </section>
<!-- section for online ordering -->
       <hr
            style="
              height: 2px;
              border-width: 0;
              color: gray;
              background-color: gray;
            "
          />
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Order online</h1>
      <p class="lead">Place an order online and pick up at our store.</p>
    <p class="lead">With options to pick up today or set a date for your pickup, this is the best option for special orders, or when you want bread outside out delivery days.</p>
                  <button type="button" class="btn btn-primary btn-lg" syle = "margin-bottom: 5px">Place an Order</button>

    </div>
     <hr
            style="
              height: 2px;
              border-width: 0;
              color: gray;
              background-color: gray;
            "
          />
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Order Through DoorDash </h1>
      <p class="lead">Have DoorDash manage your order </p>
 
                  <a href="https://www.doordash.com/store/bread-in-the-box-llc-castle-rock-2615819/2589234/?preview=1" type="button" class="btn btn-primary btn-dark" syle = "margin-bottom: 5px"> <img src="@/assets/images/doordash.png" width="200" ></a>

    </div>
    </div>
    
  </div>
</template>
<script>
export default {};

</script>

<style>
.avatar-big {
  height: 100px;
  width: 100px;
}

.avatar-small {
  height: 50px;
  width: 50px;
}

.avatar-med {
  height: 75px;
  width: 75px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50% !important;
}

table.darkTable {
  padding-top: 5px;
  font-family: "Arial Black", Gadget, sans-serif;
  border: 2px solid #000000;
  background-color: #4a4a4a;
  width: 100%;
  height: 200px;
  text-align: center;
  border-collapse: collapse;
}
table.darkTable td,
table.darkTable th {
  border: 1px solid #4a4a4a;
  padding: 3px 2px;
}
table.darkTable tbody td {
  padding-top: 5px;
  font-size: 13px;
  color: #e6e6e6;
}
table.darkTable tr:nth-child(even) {
  background: #888888;
}
table.darkTable thead {
  background: #000000;
  border-bottom: 3px solid #000000;
}
table.darkTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #e6e6e6;
  text-align: center;
  border-left: 2px solid #4a4a4a;
}
table.darkTable thead th:first-child {
  border-left: none;
}
table.darkTable tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #e6e6e6;
  background: #000000;
  background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);
  background: -webkit-linear-gradient(
    top,
    #404040 0%,
    #191919 66%,
    #000000 100%
  );
  background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);
  border-top: 1px solid #4a4a4a;
}
table.darkTable tfoot td {
  font-size: 12px;
}
img.cust {
  float: left;
  width: 150px;
  height: 250px;
  padding-top: 5px;
  padding-right: 5px;
}
.card-wrapper {
  margin: 5% 0;
}

/* You can adjust the image size by increasing/decreasing the width, height */
.custom-circle-image {
    background-color: #c9410c;

  width: 25vw; /* note i used vw not px for better responsive */
  height: 25vw;
}

.custom-circle-image img {
  object-fit: cover;
}

.card-title {
  letter-spacing: 1.1px;
}

.card-text {
  font-family: MerriweatherRegular;
  font-size: 22px;
  line-height: initial;
}
</style>