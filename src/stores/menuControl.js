import { defineStore } from "pinia";

export const useMenu = defineStore('menu', {
    state: () => ({
        isLoadMenu: true
    }),

    actions: {
        toggleMenu() {
            this.isLoadMenu = !this.isLoadMenu;
        }
    }
})
