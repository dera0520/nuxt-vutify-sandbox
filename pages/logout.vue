<template>
</template>

<script>
export default {
  async created() {
    // ログアウト
    await this.$store.dispatch('user/logout')
    await this.$router.push('/')
  },
}

</script>
