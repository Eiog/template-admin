import { onMounted, watch } from "vue";
import { useOsTheme } from "naive-ui";
import { useThemeStore } from "@/store";
import { setThemeColor, addDarkClass, removeDarkClass } from "@/utils";
/**订阅theme */
export function subscribeTheme() {
    const themeStore = useThemeStore();
    const watchThemeColor = watch(
        () => themeStore.themeColor,
        (newKey) => {
            setThemeColor(newKey);
        },
        { immediate: true }
    );
    const watchDarkMode = watch(
        () => themeStore.darkMode,
        (newValue) => {
            if (newValue) addDarkClass();
            else removeDarkClass();
        },
        { immediate: true }
    );
}
