import { defineStore } from "pinia";
import { darkColor } from "@/utils/color";
import {colord} from 'colord'

export const settingStore = defineStore({
    id: 'settingStore',
    state: () => ({
        theme: {
            darkMode: false,
            autoMode: false,
            primaryColor: '#1890ff',
        },
        layout: {
            mode: 'vertical',
            collapsed: false,
            hasTabs: true,
            invertedSide: false,
            fixedSide: false,
            sideWidth: 200,
            sideCollapsedWidth: 64,
            invertedHeader: false,
            fixedHeader: true,
            headerHeight: 56,
            tabsHeight: 44,
            footerHeight: 50,
            fixedFooter: true,
        },
        Interface: {
            animation: true,
        }
    }),
    actions: {

    },
    getters: {
        primaryColorHover(state) {
            return colord(state.theme.primaryColor).darken(.1).toHex()
        }
    }
})