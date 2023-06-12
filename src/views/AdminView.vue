<template>
  <div>
    <h1>Admin</h1>
    <router-link to="/admin/login">Go to Login</router-link>
    <router-link to="/admin/dashboard">Go to Dashboard</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
}
</script>

<style scoped>
</style>