import { defineStore } from "pinia";

export const Language = {
    en: "English",
    kh: "Khmer",
};
export const useLanguageStore = defineStore("language", {
    state: () => ({
        langMode: localStorage.getItem("langMode") || Language.en,
        isShow: false,
    }),
    getters: {
        getLanguage: (state) => state.langMode, 
    },

    actions: {
        toggleShow() {
            this.isShow = !this.isShow;
            
        },
        toggleLanguageMode(langMode) {
            this.langMode = langMode;
            this.saveToLocalStorage();
            this.initializeLanguageMode();
            this.toggleShow();
        },

        saveToLocalStorage() {
            localStorage.setItem("langMode", this.langMode);
        },
        initializeLanguageMode() {
            if (this.langMode === Language.en) {
                this.enModeInit();
            } else {
                this.khModeInit();
            } 
            // if (this.langMode === LanguageMode.kh) 

            // else {
            //     this.systemModeInit();
            // }
        },
        // systemModeInit() {
        //     if (window.matchMedia) {
        //         const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        //         mediaQuery.addEventListener("change", (e) => {
        //             e.matches ? this.enModeInit() : this.khModeInit();
        //         });
        //     }
        // },
        enModeInit() {
            document.documentElement.classList.add("en");
            document.documentElement.classList.remove("kh");
        },
        khModeInit() {
            document.documentElement.classList.add("kh");
            document.documentElement.classList.remove("en");
        }
    }
});