<template>
  <div>
    <p>ユーザー</p>
    <p v-if="user">{{ user.name }}</p>
    <AddTodo v-on:submit="addTodo" />
    <TodoList v-bind:todos = todos />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'

export default {
  components: {
    AddTodo,
    TodoList
  },
  computed: {
    user () {
      return this.$store.state.currentUser
    }
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (title) {
      this.todos.push({
        title
      })
    }
  }
}
</script>

<style>
</style>
