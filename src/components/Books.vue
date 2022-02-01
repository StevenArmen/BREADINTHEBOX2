<template>
  <div>
    <h1>Bread</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Condition</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aBread in theBreads" :key="aBread.BreadID">
          <th>{{ aBread.Name }}</th>
          <th>{{ aBread.FirstName +" "+ aBread.LastName }}</th>
          <th>{{ aBread.Genre }}</th>
          <th>{{ aBread.Condition }}</th>
          <th>
            <router-link :to="`/bread/${aBread.BreadID}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theBreads() {
      return this.$store.state.breads;
    },
  },
};
</script>

<style></style>