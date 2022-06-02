<script lang="ts">
export default {
  name: "Layout",
};
</script>
<script setup lang="ts">
const props = defineProps({
  mode: {
    type: String,
    default: "vertical", //'horizontal'
  },
  siderWidth: {
    type: Number,
    default: 200,
  },
  siderCollapseWidth: {
    type: Number,
    default: 64,
  },
  headerHeight: {
    type: Number,
    default: 56,
  },
  tabsHeight: {
    type: Number,
    default: 44,
  },
  footerHeight: {
    type: Number,
    default: 40,
  },
  fixedHeader: {
    type: Boolean,
    default: true,
  },
  fixedFooter: {
    type: Boolean,
    default: true,
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="unlit-admin-layout">
    <div
      class="unlit-admin-header-wrap"
      :style="[
        mode === 'vertical' && collapsed
          ? {
              paddingLeft: siderCollapseWidth + 'px',
            }
          : {},
        mode === 'vertical' && !collapsed
          ? {
              paddingLeft: siderWidth + 'px',
            }
          : {},
        mode === 'horizontal'
          ? {
              paddingLeft: 0,
            }
          : {},

        fixedHeader
          ? {
              position: 'fixed',
              top: 0,
              left: 0,
              height: headerHeight + 'px',
            }
          : {
              position: 'static',
              height: headerHeight + 'px',
            },
      ]"
    >
      <slot name="header"></slot>
    </div>
    <div
      class="unlit-admin-tabs-wrap"
      :style="[
        collapsed
          ? {
              paddingLeft: siderCollapseWidth + 'px',
            }
          : {
              paddingLeft: siderWidth + 'px',
            },
        fixedHeader
          ? {
              position: 'fixed',
              left: 0,
              top: headerHeight + 'px',
              height: tabsHeight + 'px',
            }
          : {
              position: 'static',
              height: tabsHeight + 'px',
            },
      ]"
    >
      <slot name="tabs"></slot>
    </div>
    <div
      class="unlit-admin-aside-wrap"
      :style="[
        collapsed
          ? {
              width: siderCollapseWidth + 'px',
            }
          : {
              width: siderWidth + 'px',
            },
        mode === 'horizontal'
          ? {
              paddingTop: headerHeight + 'px',
            }
          : {
              paddingTop: 0,
            },
      ]"
    >
      <slot name="aside"></slot>
    </div>
    <div
      class="unlit-admin-main-wrap"
      :style="[
        collapsed
          ? {
              paddingLeft: siderCollapseWidth + 'px',
            }
          : {
              paddingLeft: siderWidth + 'px',
            },
        fixedHeader
          ? {
              paddingTop: headerHeight + tabsHeight + 'px',
            }
          : {
              paddingTop: 0,
            },
        fixedFooter
          ? {
              paddingBottom: footerHeight + 'px',
            }
          : {
              paddingTop: 0,
            },
      ]"
    >
      <div class="unlit-admin-main">
        <slot name="main"></slot>
        <slot></slot>
      </div>
    </div>
    <div
      class="unlit-admin-footer-wrap"
      :style="[
        collapsed
          ? {
              paddingLeft: siderCollapseWidth + 'px',
            }
          : {
              paddingLeft: siderWidth + 'px',
            },
        fixedFooter
          ? {
              position: 'fixed',
              right: 0,
              bottom: 0,
              height: footerHeight + 'px',
            }
          : {
              position: 'static',
              height: footerHeight + 'px',
            },
      ]"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped lang="less">
div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.unlit-admin-layout {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  > div {
    transition: all 0.3s;
  }
  .unlit-admin-header-wrap {
    flex-shrink: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-width: 1200px;
  }
  .unlit-admin-tabs-wrap {
    flex-shrink: 0;
    width: 100%;
    min-width: 1200px;
    z-index: 1;
  }

  .unlit-admin-aside-wrap {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
  .unlit-admin-main-wrap {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    flex-grow:1;
    min-width: 1200px;
    z-index: 0;
    .unlit-admin-main {
      position: relative;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  .unlit-admin-footer-wrap {
    flex-shrink: 0;
    width: 100%;
    z-index: 0;
  }
}
</style>
