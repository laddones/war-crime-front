<template>
  <div class="dashboard">
    <h1 class="title">Dashboard</h1>
    <div class="content">
      <!-- Ваш контент для панели администратора -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  // Добавьте нужные хуки или методы для работы с данными, запросами и т. д.
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.content {
  max-width: 800px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>