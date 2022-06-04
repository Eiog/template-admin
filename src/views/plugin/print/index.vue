<script lang="ts">
export default {
  name: "Print",
};
</script>
<script setup lang="ts">
import { h, ref } from "vue";
import { NCard, NButton, NSpace, NDataTable, useMessage } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import print from "print-js";
const message = useMessage();
type Song = {
  no: number;
  title: string;
  length: string;
};
const createColumns = ({
  play,
}: {
  play: (row: Song) => void;
}): DataTableColumns<Song> => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row),
          },
          { default: () => "Play" }
        );
      },
    },
  ];
};
const data: Song[] = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
];
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`);
  },
});
const tableRef = ref();
const handlePrintTable = function () {
  print({
    printable: "tableId",
    type: "html",
  });
};
const handlePrintPicture = function () {
  print({
    printable: "https://unlit.oss-cn-beijing.aliyuncs.com/2022-04-14/1eca803168056c1f49328129c1f57f29.jpg?x-oss-process=style/carousel",
    type: "image",
  });
};

</script>
<template>
  <div class="w-full h-full">
    <n-card title="打印示例" :bordered="false" class="rounded-16px shadow-sm">
      <n-space>
        <n-button type="primary" size="medium" @click="handlePrintTable"
          >打印表格</n-button
        >
        <n-button type="primary" size="medium" @click="handlePrintPicture">打印图片</n-button>
      </n-space>
      <div class="w-full mt-3">
        <n-data-table
          :columns="columns"
          :data="data"
          :bordered="false"
          ref="tableRef"
          id="tableId"
        />
      </div>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
