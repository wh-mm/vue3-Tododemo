<template>
  <div class="todoitem">
    <ul>
      <li v-for="item in todos" :key="item.id" class="lbd" :class="{
					'lbd_finished':item.complete,
					'lbd':!item.complete
				}">
        <input @click="toggle(item.id)" type="checkbox" name="" id="" v-model="item.complete">
        {{ item.title }}
        <button @click="remove(item.id)" class="del">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  data() {
    return {
      value: false,

    }
  },
  methods: {
    remove(id) {
      this.$emit("del", id);
    },
    toggle(id) {
      this.$emit("tg", id);
    }
  }
}
</script>

<style>
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todoitem li {
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 46px;
  margin: 8px 0;
}

.lbd {
  border-left: 6px solid rgb(98, 154, 156);
  border-radius: 4px 0 0 4px;
  background: #fff;

}

.lbd_finished {
  border-left: 6px solid rgb(179, 179, 179);
  border-radius: 4px 0 0 4px;
  background: #ddd;
}

.todoitem li > input[type=checkbox] {
  position: absolute;
  width: 22px;
  height: 22px;
  top: 7px;
  left: 10px;
}

.todoitem .del {
  position: absolute;
  right: 4px;
  top: 10px;
}

footer p {
  text-align: center;

}

.del {
  background-color: blueviolet;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
}
</style>
