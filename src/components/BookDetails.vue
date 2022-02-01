<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ book.Title }}</h2>
        <br />

        <p>
          Author: <br /><strong>{{book.FirstName +" "+ book.LastName }}</strong>
        </p>
       
        <p>
          Condition: <br /><strong>{{ book.Condition }}</strong>
        </p>
         <p>
          Date Aquired: <br /><strong>{{ book.DayAquired }}</strong>
        </p>
        <p>
          Genre: <br /><strong>{{ book.Genre }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/books/${this.$route.params.pk}/checkout`"
      ><button class="btn btn-success">Checkout this Book</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Checkout a Book
      </button></router-link
    >
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      let allBooks = this.$store.state.books;
      let thisBook = allBooks.find((aBook) => {
        return aBook.BookID == this.$route.params.pk;
      });
      return thisBook;
    },
    formattedBudget() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.movie.Budget);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>