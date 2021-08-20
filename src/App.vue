<template>
  <div class="todos">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    // 'todo-list':TodoList
    TodoList,
  }
}
</script>

<style>


</style>
