// src/stores/darkMode.js

// Enum for Dark Mode
export const DarkMode = {
  light: 'Light',
  dark: 'Dark',
  system: 'System'
};

// Pinia store for managing dark mode
import { defineStore } from 'pinia';

export const useDarkStore = defineStore('dark', {
  state: () => ({
    darkMode: localStorage.getItem('darkMode') || DarkMode.system,
    isShow: false,
  }),

  actions: {
    toggleShow() {
      this.isShow = !this.isShow;
    },

    // Toggle between dark, light, and system modes
    toggleDarkMode(darkModes) {
      this.darkMode = darkModes;
      this.saveToLocalStorage();
      this.initializeDarkMode();
      this.toggleShow();
    },

    // Save the current theme to localStorage
    saveToLocalStorage() {
      localStorage.setItem('darkMode', this.darkMode);
    },

    // Initialize dark mode based on the current setting
    initializeDarkMode() {
      if (this.darkMode === DarkMode.dark) {
        this.darkModeInit();
      } else if (this.darkMode === DarkMode.light) {
        this.lightModeInit();
      } else {
        this.systemModeInit();
        // this.addSystemListener();
      }
    },

    // Add listener for system color scheme changes
    addSystemListener() {
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
          e.matches ? this.darkModeInit() : this.lightModeInit();
        });
      }
    },

    // Initialize dark mode
    darkModeInit() {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    },

    // Initialize light mode
    lightModeInit() {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    },

    // Initialize system mode
    systemModeInit() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.darkModeInit();
      } else {
        this.lightModeInit();
      }
    },
  },
});
