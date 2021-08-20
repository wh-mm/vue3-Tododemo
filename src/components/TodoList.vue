<template>

  <div class="todolist">
    <header>
      <div class="inner">
        <h1>ToDoList</h1>
        <form @submit.prevent action="">
          <input class="new-todo" autofocus autocomplete="off" @keyup.enter="addTodo" type="text"
                 name="addTodo" id="addTodo" placeholder="添加ToDo" v-model="newTodo">
        </form>
      </div>
    </header>

    <section>
      <div class="inner">
        <h3>正在进行 <span>{{ mydoing.length }}</span></h3>
        <todo-item @tg="change($event)" @del="removeData($event)" :todos="mydoing"></todo-item>
        <h3>已经完成 <span>{{ myfinished.length }}</span></h3>
        <todo-item @tg="change($event)" @del="removeData($event)" :todos="myfinished"></todo-item>
      </div>
    </section>

    <footer>
      <div class="inner">
        <p>Copyright &copy; 2021 www.cvit.com.cn.
          <button @click="clear">clear</button>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue"
import LS from "../lib/storage.js"

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: "",
      todos: [],
    }
  },
  mounted() {
    // this.todos = JSON.parse(localStorage.getItem('todos'));
    // let td = localStorage.getItem('todos') || [];
    // if(td.length){
    // 	this.todos = JSON.parse(td);
    // }
    this.todos = LS.get('todos') || [];

  },
  computed: {
    mydoing() {
      return this.todos.filter(val => val.complete === false);
    },
    myfinished() {
      return this.todos.filter(val => val.complete === true);
    }
  },
  methods: {
    addTodo() {
      let value = this.newTodo;
      // let id=this.todos.length+1;
      let arrId = this.todos.map(value => value.id);

      let _id = Math.max(...arrId) + 1;
      if (_id <= 0) {
        _id = 1;
      }
      this.todos.unshift({
        id: _id,
        title: value,
        complete: false
      });
      this.newTodo = "";
      // localStorage.setItem('todos', JSON.stringify(this.todos));
      LS.save('todos', this.todos);
    },
    removeData($event) {
      // console.log($event);
      let id = $event;
      let delId = this.todos.findIndex(val => val.id === id);
      this.todos.splice(delId, 1);
      // localStorage.setItem('todos', JSON.stringify(this.todos));
      LS.save('todos', this.todos);
    },
    change($event) {
      // console.log(i);
      let i = this.todos.findIndex(val => val.id === $event);
      this.todos[i].complete = !this.todos[i].complete;
      // console.log(this.todos);
      // localStorage.setItem('todos', JSON.stringify(this.todos));
      LS.save('todos', this.todos);

    },
    clear() {
      // localStorage.clear();
      LS.clear();
      this.todos = [];
    }
  }

}
</script>

<style>
header,
section,
footer {
  display: block;
}

.inner {
  width: 600px;
  margin: 0 auto;
}

body {
  background: rgb(205, 205, 205);
  padding: 0;
  margin: 0;
}

header {
  position: relative;
  width: 100%;
  height: 60px;
  background: #333;
  color: #fff;
}

header > .inner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

header form > input {
  width: 366px;
  height: 26px;
  line-height: 26px;
  border-radius: 8px;
  outline: none;
  font-size: 1.2rem;
  padding: 0 8px;
}

section > .inner > h3 {
  position: relative;
  font-size: 1.8rem;
  margin: 30px 0;
}

h1 {
  font-weight: 400;
}

section h3 > span {
  position: absolute;
  display: inline-block;
  width: 28px;
  height: 28px;
  top: 10px;
  right: 4px;
  background-color: #999;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  line-height: 28px;
  color: #FFFFFF;
}
</style>
