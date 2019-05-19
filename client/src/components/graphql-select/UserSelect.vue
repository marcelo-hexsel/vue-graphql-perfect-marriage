<script>
import GraphQLSelect from "@/components/graphql-select/GraphQLSelect";
import UserSelectQueryMixin from "@/components/graphql-select/queryMixins/UserSelectQueryMixin";

export default {
  extends: GraphQLSelect,
  mixins: [UserSelectQueryMixin]
};
</script>
