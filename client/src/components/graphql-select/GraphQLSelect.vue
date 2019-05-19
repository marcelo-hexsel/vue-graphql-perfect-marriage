<template>
  <el-select
    v-model="v"
    filterable
    clearable
    remote
    :remoteMethod="remoteMethod"
    @clear="clear"
    @visible-change="visibleChange"
  >
    <el-option
      v-for="item in entityOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    value: {}
  },
  data() {
    return {
      v: this.ensureEmptyValue(this.value),
      entityList: [],
      search: "",
      listOpen: false
    };
  },
  watch: {
    value() {
      this.v = this.ensureEmptyValue(this.value);
    },
    v() {
      this.$emit("input", !this.v ? null : this.v);
    }
  },
  computed: {
    entityOptions() {
      return this.entityList.map(e => {
        return {
          value: e.id,
          label: e.description
        };
      });
    }
  },
  methods: {
    remoteMethod(query) {
      this.search = query;
    },
    clear() {
      this.search = "";
    },
    visibleChange(isOpen) {
      this.listOpen = isOpen;
      if (!isOpen) this.clear();
    },
    ensureEmptyValue(val) {
      return !val ? "" : val;
    }
  }
};
</script>
