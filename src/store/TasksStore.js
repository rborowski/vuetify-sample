import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useMainStore } from "./MainStore";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref([
    {
    id: "1a",
    title: "Wake up",
    done: false,
    dueDate: "2024-05-21"
    }, 
    {
    id: "2a",
    title: "Clean",
    done: false,
    dueDate: null
    }
  ])

  const searchInput = ref(null)

  const getTasks = computed(() => {
    if (!searchInput.value) return tasks.value
    return tasks.value.filter((task) => task.title.match(new RegExp(searchInput.value, 'i')))
  })

  function doneTask(taskId) {
    let task = tasks.value.filter((task) => task.id === taskId)[0]
    task.done = !task.done
  }

  function deleteTask(taskId) {
    const mainStore = useMainStore();
    tasks.value = tasks.value.filter((task) => task.id !== taskId)
    mainStore.showSnackbar("Note deleted")
  }

  function editTaskTitle(taskId, newTaskTitle) {
    const mainStore = useMainStore();
    tasks.value.find((task) => task.id === taskId).title = newTaskTitle
    mainStore.showSnackbar("Note edited")
  }

  function editTaskDueDate(taskId, dueDate) {
    const mainStore = useMainStore();
    tasks.value.find((task) => task.id === taskId).dueDate = dueDate
    mainStore.showSnackbar("Due date set")
  }

  function addTask(taskTitle) {
    const mainStore = useMainStore();
    tasks.value.push({
      id: new Date().getTime(),
      title: taskTitle,
      done: false,
      dueDate: null
    })
    mainStore.showSnackbar("Note added")
  }

  const draggable = ref(false)

  return {
    tasks,
    getTasks,
    searchInput,
    doneTask,
    deleteTask,
    editTaskTitle,
    editTaskDueDate,
    addTask,
    draggable
  };
});
