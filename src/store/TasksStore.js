import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useMainStore } from "./MainStore";
import Localbase from 'localbase'

let db = new Localbase('db')


export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref([])

  const searchInput = ref(null)

  const isLoading = ref(false)

  const getTasks = computed(() => {
    if (!searchInput.value) return tasks.value
    return tasks.value.filter((task) => task.title.match(new RegExp(searchInput.value, 'i')))
  })

  async function doneTask(taskId) {
    let task = tasks.value.find((task) => task.id === taskId)
    task.done = !task.done
    db.collection("tasks").doc({id: taskId}).update({ done: task.done })
  }

  async function deleteTask(taskId) {
    const mainStore = useMainStore();
    tasks.value = tasks.value.filter((task) => task.id !== taskId)
    await db.collection("tasks").doc({id: taskId}).delete()
    mainStore.showSnackbar("Note deleted")
  }

  async function editTaskTitle(taskId, newTaskTitle) {
    const mainStore = useMainStore();
    tasks.value.find((task) => task.id === taskId).title = newTaskTitle
    await db.collection("tasks").doc({id: taskId}).update({ title: newTaskTitle })
    mainStore.showSnackbar("Note edited")
  }

  async function editTaskDueDate(taskId, dueDate) {
    const mainStore = useMainStore();
    tasks.value.find((task) => task.id === taskId).dueDate = dueDate
    await db.collection("tasks").doc({id: taskId}).update({ dueDate: dueDate })
    mainStore.showSnackbar("Due date set")
  }

  async function addTask(taskTitle) {
    const mainStore = useMainStore();
    const newTask = {
      id: new Date().getTime(),
      title: taskTitle,
      done: false,
      dueDate: null
    }
    await db.collection("tasks").add(newTask)
    tasks.value.push(newTask)
    mainStore.showSnackbar("Note added")
  }

  async function loadTasks() {
    isLoading.value = true
    tasks.value = await db.collection("tasks").get()
    isLoading.value = false
  }

  const draggable = ref(false)

  return {
    tasks,
    getTasks,
    isLoading,
    loadTasks,
    searchInput,
    doneTask,
    deleteTask,
    editTaskTitle,
    editTaskDueDate,
    addTask,
    draggable
  };
});
