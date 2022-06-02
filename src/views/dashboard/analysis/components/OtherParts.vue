<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { h } from "vue";
import {
  NGrid,
  NGi,
  NCard,
  NTimeline,
  NTimelineItem,
  NDataTable,
  DataTableColumns,
  NButton,
  useMessage
} from "naive-ui";
const message = useMessage()
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
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
]
const columns = createColumns({
        play (row: Song) {
          message.info(`Play ${row.title}`)
        }
      })
</script>
<template>
  <n-grid :x-gap="10" :y-gap="10" :item-responsive="true" class="mt-3">
    <n-gi span="0:24 640:24 1024:8">
      <n-card :bordered="false" class="rounded-16px shadow-sm" title="时间线">
        <div class="w-full h-400px">
          <n-timeline>
            <n-timeline-item content="啊" />
            <n-timeline-item
              type="success"
              title="成功"
              content="哪里成功"
              time="2018-04-03 20:46"
            />
            <n-timeline-item
              type="error"
              content="哪里错误"
              time="2018-04-03 20:46"
            />
            <n-timeline-item
              type="warning"
              title="警告"
              content="哪里警告"
              time="2018-04-03 20:46"
            />
            <n-timeline-item
              type="info"
              title="信息"
              content="是的"
              time="2018-04-03 20:46"
              line-type="dashed"
            />
            <n-timeline-item content="啊" />
          </n-timeline>
        </div>
      </n-card>
    </n-gi>
    <n-gi span="0:24 640:24 1024:16">
      <n-card :bordered="false" class="rounded-16px shadow-sm" title="表格">
        <div class="w-full h-400px overflow-y-auto">
          <n-data-table
            :columns="columns"
            :data="data"
            :pagination="false"
            :bordered="false"
          />
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<style scoped lang="less"></style>
