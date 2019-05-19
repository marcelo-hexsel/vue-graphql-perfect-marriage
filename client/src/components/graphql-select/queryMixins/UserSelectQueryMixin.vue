<script>
import gql from "graphql-tag";

export default {
  apollo: {
    entityList: {
      query: gql`
        query UserSearch($name: String) {
          entityList: users(name: $name) {
            id
            description: name
          }
        }
      `,
      variables() {
        return {
          name: this.search
        };
      },
      skip() {
        return !this.listOpen;
      }
    }
  }
};
</script>
