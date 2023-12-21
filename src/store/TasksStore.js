import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref([
    {
    id: "1a",
    title: "Wake up",
    done: false
    }, 
    {
    id: "2a",
    title: "Clean",
    done: false
    }
  ])
  
  function doneTask(taskId) {
    let task = tasks.value.filter((task) => task.id === taskId)[0]
    task.done = !task.done
  }

  function deleteTask(taskId) {
    tasks.value = tasks.value.filter((task) => task.id !== taskId)
  }

  function addTask(taskTitle) {
    tasks.value.push({
      id: new Date().getTime(),
      title: taskTitle,
      done: false
    })
  }

  return {
    tasks,
    doneTask,
    deleteTask,
    addTask
  };
});
