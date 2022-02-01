<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/images/pan10.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/images/pan1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/images/pan4.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4" style="text-align: center; margin-top: 5px">
            Our Daily Bread
          </h1>
          <p class="lead" style="text-align: center">
            These are our breads that we make everyday no matter the season
          </p>
        </div>
        <!-- Start daily bread list -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card border-0" style="padding: 10px">
                <div class="shadow p-3 mb-5 rounded">
                  <img
                    class="card-img-top"
                    src="@/assets/images/pan6.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4
                      style="
                        text-align: center;
                        font-family: sacramento, cursive;
                        color: #c9410c;
                      "
                    >
                      Country White
                    </h4>
                    <hr
                      style="
                        height: 2px;
                        border-width: 0;
                        color: gray;
                        background-color: gray;
                      "
                    />
                    <p class="card-text" style="text-align: center">
                      The Traditional Light Fluffy White Bread Grandma Made
                    </p>
                    <p class="card-text" style="text-align: center">
                      Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                      Barley, Niacin, Reduced Iron, Thiamine Mononitrate,
                      Riboflavin, Folic Acid), Water, Sugar, Butter (Cream,
                      Salt), Yeast, Salt. Contains: Wheat, Dairy, Eggs
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card border-0" style="padding: 10px">
                <div class="shadow p-3 mb-5 rounded">
                  <img
                    class="card-img-top"
                    src="@/assets/images/bread/_DSC3133.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 style="text-align: center">Multi-Grain Honey</h4>
                    <hr
                      style="
                        height: 2px;
                        border-width: 0;
                        color: gray;
                        background-color: gray;
                      "
                    />
                    <p class="card-text" style="text-align: center">
                      A Light Non-Crunchy Multi-Grain Bread That Your Family
                      Will Love
                    </p>
                    <p class="card-text" style="text-align: center">
                      Whole White Wheat Flour, Water, Honey, Butter (Cream,
                      Salt), Rolled Oats, Golden Flax Seeds, Sesame Seeds, Oat
                      Bran, Wheat Germ, Vital Wheat Gluten, Yeast, Soy Lecithin,
                      Salt, Citric Acid. Contains: Wheat, Dairy, Eggs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card border-0" style="padding: 10px">
                <div class="shadow p-3 mb-5 rounded">
                  <img
                    class="card-img-top"
                    src="@/assets/images/bread/_DSC2937R.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 style="text-align: center">Whole Wheat Honey</h4>

                    <hr
                      style="
                        height: 2px;
                        border-width: 0;
                        color: gray;
                        background-color: gray;
                      "
                    />
                    <p class="card-text" style="text-align: center">
                      A Semi Sweet Whole Wheat Bread Your Kids Will Love
                    </p>
                    <p class="card-text" style="text-align: center">
                      Whole White Wheat Flour, Water, Honey, Butter (Cream,
                      Salt), Rolled Oats, Golden Flax Seeds, Sesame Seeds, Oat
                      Bran, Wheat Germ, Vital Wheat Gluten, Yeast, Soy Lecithin,
                      Salt, Citric Acid. Contains: Wheat, Dairy, Eggs, Soy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card border-0" style="padding: 10px">
                <div class="shadow p-3 mb-5 rounded">
                  <img
                    class="card-img-top"
                    src="@/assets/images/bread/_DSC3059.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 style="text-align: center">Banana Bread</h4>
                    <hr
                      style="
                        height: 2px;
                        boder-width: 0;
                        color: gray;
                        background-color: gray;
                      "
                    />
                    <p class="card-text" style="text-align: center">
                      A local favorite subtly sweet banana bread
                    </p>
                    <p class="card-text" style="text-align: center">
                      Enriched Flour (Bleached Wheat Flour, Malted Barley,
                      Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                      Folic Acid), Bananas, Sugar, Eggs, Butter, Butter Milk,
                      Vanilla, Baking Soda, Salt. Contains: Wheat, Dairy, Eggs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- end of daily bread -->
          <hr
            style="
              height: 2px;
              border-width: 0;
              color: gray;
              background-color: gray;
            "
          />
        </div>
        <!-- Start of monthly specials -->
        <!-- JumboTron -->

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4" style="text-align: center; margin-top: 5px">
              Our Monthly Specials
            </h1>
            <p class="lead" style="text-align: center">
              Each month we feature a different sweet specialty bread to go with
              the season. Try them all, you will love the variety.
            </p>
          </div>
        </div>

        <!-- monthly specials cards -->

        <div class="row justify-content-center">
          <div
            class="card border-0"
            style="width: 25rem; margin: 10px; padding: 5px"
          >
            <div class="shadow p-3 mb-5 rounded">
              <img
                class="card-img-top"
                src="@/assets/images/bread/_DSC3055.jpg"
                alt="Card image cap"
              />

              <div class="card-body">
                <h4 style="text-align: center">Orange Cranberry</h4>
                <h6 style="text-align: center">January</h6>
                <hr
                  style="
                    height: 2px;
                    border-width: 0;
                    color: gray;
                    background-color: gray;
                  "
                />
                <p class="card-text" style="text-align: center">
                  A subtly sweet quick bread with a tangy twist.
                </p>

                <p class="card-text" style="text-align: center">
                  Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                  Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                  Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                  Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                  Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                  Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
                </p>
              </div>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3073.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Chocolate Chip Brownie Bread</h4>
              <h6 style="text-align: center">Feburary</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                An indulgent bread made for chocolate lovers.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3055.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Snickerdoodle</h4>
              <h6 style="text-align: center">March</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                The classic cookie in a moist and sweet bread.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3079.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">White Chocolate Blueberry</h4>
              <h6 style="text-align: center">April</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                White chocolate and blueberries in a delicious sweet bread.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3077.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Banana Chocolate Chip</h4>
              <h6 style="text-align: center">May</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                Everyones favorite banana bread, now with chocolate chips
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3081.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Lemon Bread</h4>
              <h6 style="text-align: center">June</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                This is a customer favorite, the flavor of lemon in time for
                summer.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3059.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">White Chocolate Raspberry</h4>
              <h6 style="text-align: center">July</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                White chocolate and raspberry in a delicious sweet bread.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3068.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Cinnamon Peach Cobler</h4>
              <h6 style="text-align: center">August</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                The classic summer desert flavor in a bread. Try it a la mode!
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3097.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Zucchini Bread</h4>
              <h6 style="text-align: center">September</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                A seasonal classic of cinnamon and nut meg to kick off fall.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3089.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Cinnamon Caramel Apple</h4>
              <h6 style="text-align: center">October</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                Caramel and apples wrapped up in a sweet bread.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/bread/_DSC3086.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Pumpkin Chocolate Chip</h4>
              <h6 style="text-align: center">November</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                A moist pumpkin bread perfected with chocolate chips.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <div class="card" style="width: 25rem; margin: 10px; padding: 5px">
            <img
              class="card-img-top"
              src="@/assets/images/pan4.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 style="text-align: center">Cinnamon Bread</h4>
              <h6 style="text-align: center">December</h6>
              <hr
                style="
                  height: 2px;
                  border-width: 0;
                  color: gray;
                  background-color: gray;
                "
              />
              <p class="card-text" style="text-align: center">
                Ropes of cinnamon and sugar braided to make a loaf of bread.
              </p>
              <p class="card-text" style="text-align: center">
                Ingredients: Enriched Flour (Bleached Wheat Flour, Malted
                Barley, Niacin Reduced Iron, Thiamine Mononitrate, Riboflavin,
                Folic Acid), Sugar, Milk, White Chocolate Chips (Sugar, Palm
                Kernel Oil, Whole Milk Powder, Nonfat Dry Milk, Palm Oil, Soy
                Lecithin, Vanilla), Eggs, Canola Oil, Cocoa Powder, Baking
                Powder, Vanilla, Salt. Contains: Wheat, Dairy, Eggs
              </p>
            </div>
          </div>
          <!-- end of monthly specials-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import DemoComponent from "./components/DemoComponent.vue"

export default {};
</script>