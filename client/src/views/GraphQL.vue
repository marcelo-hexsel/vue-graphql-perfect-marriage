<template>
  <div class="graphql">
    <h1>GraphQL</h1>
    <div class="component-line">
      <graphql-select></graphql-select>
    </div>
    <div class="component-line">
      <user-select></user-select>
    </div>
  </div>
</template>

<script>
import GraphQLSelectTosquera from "@/components/GraphQLSelectTosquera";
import UserSelect from "@/components/graphql-select/UserSelect";

export default {
  components: {
    GraphqlSelect: GraphQLSelectTosquera,
    UserSelect
  }
};
</script>
<style scoped>
.component-line {
  margin-bottom: 10px;
}
</style>

