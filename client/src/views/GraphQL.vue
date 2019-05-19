<template>
  <div class="graphql">
    <h1>GraphQL</h1>

    <graphql-select></graphql-select>
  </div>
</template>

<script>
import GraphQLSelectTosquera from "@/components/GraphQLSelectTosquera";

export default {
  components: {
    graphqlSelect: GraphQLSelectTosquera
  }
};
</script>
