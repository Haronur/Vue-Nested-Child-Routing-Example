<template>
  <div>
    <h1>User page</h1>
    <strong>Select a user</strong>
    <ul class="nav">
      <router-link to="/user/1">User 1</router-link>
      <router-link to="/user/2">User 2</router-link>
      <router-link to="/user/3">User 3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
</script>