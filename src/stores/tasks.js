import { defineStore } from "pinia";
export const useTaskStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [
        {
          id: 1,
          title: "WordPress Theme Development",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi.",
          developer: "Monzur Alam",
          status: "todo",
          deadline: "25-12-2023",
          estimateHour: 100,
          timer: 0,
          comments: [],
        },
      ],
    };
  },
});
