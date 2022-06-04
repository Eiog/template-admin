<script lang="ts">
export default {
  name: "Button",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import {
  NCard,
  NGrid,
  NGi,
  NSpace,
  NButton,
  NButtonGroup,
  useMessage,
  NIcon,
} from "naive-ui";
import {
  CashOutline as CashIcon,
  LogInOutline as LogInIcon,
  TrainOutline as TrainIcon
} from "@vicons/ionicons5";
const message = useMessage();
const loading = ref(false);
const handleClick1 = () => {
  message.info("Button Clicked");
};
const handleClick2 = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
<template>
  <div class="w-full h-full">
    <n-card title="按钮示例" :bordered="false" class="rounded-16px shadow-sm">
      <p>按钮用来触发一些操作。</p>
      <h3>演示</h3>
      <n-grid :x-gap="10" :y-gap="10" :item-responsive="true">
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="基础" size="medium">
            <n-space>
              <p>
                按钮的 type 分别为
                default、tertiary、primary、info、success、warning 和 error。
              </p>
            </n-space>
            <n-space>
              <n-button>Default</n-button>
              <n-button type="tertiary"> Tertiary </n-button>
              <n-button type="primary"> Primary </n-button>
              <n-button type="info"> Info </n-button>
              <n-button type="success"> Success </n-button>
              <n-button type="warning"> Warning </n-button>
              <n-button type="error"> Error </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="次要按钮" size="medium">
            <n-space>
              <n-button strong secondary> Default </n-button>
              <n-button strong secondary type="tertiary"> Tertiary </n-button>
              <n-button strong secondary type="primary"> Primary </n-button>
              <n-button strong secondary type="info"> Info </n-button>
              <n-button strong secondary type="success"> Success </n-button>
              <n-button strong secondary type="warning"> Warning </n-button>
              <n-button strong secondary type="error"> Error </n-button>
              <n-button strong secondary round> Default </n-button>
              <n-button strong secondary round type="primary">
                Primary
              </n-button>
              <n-button strong secondary round type="info"> Info </n-button>
              <n-button strong secondary round type="success">
                Success
              </n-button>
              <n-button strong secondary round type="warning">
                Warning
              </n-button>
              <n-button strong secondary round type="error"> Error </n-button>
              <n-button strong secondary circle>
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button strong secondary circle type="primary">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button strong secondary circle type="info">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button strong secondary circle type="success">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button strong secondary circle type="warning">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button strong secondary circle type="error">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="次次要按钮" size="medium">
            <n-space>
              <n-button tertiary> Default </n-button>
              <n-button tertiary type="primary"> Primary </n-button>
              <n-button tertiary type="info"> Info </n-button>
              <n-button tertiary type="success"> Success </n-button>
              <n-button tertiary type="warning"> Warning </n-button>
              <n-button tertiary type="error"> Error </n-button>
              <n-button tertiary round> Default </n-button>
              <n-button tertiary round type="primary"> Primary </n-button>
              <n-button tertiary round type="info"> Info </n-button>
              <n-button tertiary round type="success"> Success </n-button>
              <n-button tertiary round type="warning"> Warning </n-button>
              <n-button tertiary round type="error"> Error </n-button>
              <n-button tertiary circle>
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button tertiary circle type="primary">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button tertiary circle type="info">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button tertiary circle type="success">
                <n-icon><cash-icon /></n-icon>
              </n-button>
              <n-button tertiary circle type="warning">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button tertiary circle type="error">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="次次次要按钮" size="medium">
            <n-space>
              <n-button quaternary> Default </n-button>
              <n-button quaternary type="primary"> Primary </n-button>
              <n-button quaternary type="info"> Info </n-button>
              <n-button quaternary type="success"> Success </n-button>
              <n-button quaternary type="warning"> Warning </n-button>
              <n-button quaternary type="error"> Error </n-button>
              <n-button quaternary round> Default </n-button>
              <n-button quaternary round type="primary"> Primary </n-button>
              <n-button quaternary round type="info"> Info </n-button>
              <n-button quaternary round type="success"> Success </n-button>
              <n-button quaternary round type="warning"> Warning </n-button>
              <n-button quaternary round type="error"> Error </n-button>
              <n-button quaternary circle>
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="primary">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="info">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="success">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="warning">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button quaternary circle type="error">
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="虚线按钮" size="medium">
            <n-space>
              <p>使用 dashed 来使用虚线按钮。</p>
            </n-space>
            <n-space>
              <n-button dashed> Default </n-button>
              <n-button type="primary" dashed> Primary </n-button>
              <n-button type="info" dashed> Info </n-button>
              <n-button type="success" dashed> Success </n-button>
              <n-button type="warning" dashed> Warning </n-button>
              <n-button type="error" dashed> Error </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="尺寸" size="medium">
            <n-space>
              <p>有 tiny、small、medium 和 large 尺寸。</p>
            </n-space>
            <n-space align="baseline">
              <n-button size="tiny" secondary strong> 小小 </n-button>
              <n-button size="small" secondary strong> 小 </n-button>
              <n-button size="medium" secondary strong> 不小 </n-button>
              <n-button size="large" secondary strong> 不不小 </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="文本按钮" size="medium">
            <p>长得就像文本。</p>
            <n-button text>
              <template #icon>
                <n-icon>
                  <train-icon />
                </n-icon>
              </template>
              那车头依然吐着烟
            </n-button>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="标签" size="medium">
            <p>你可以把按钮渲染成不同的标签，比如 <a />。</p>
            <n-button
              text
              tag="a"
              href="https://anyway.fm/news.php"
              target="_blank"
              type="primary"
            >
              安妮薇时报
            </n-button>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="图标" size="medium">
            <p>在按钮上使用图标。</p>
            <n-space>
              <n-button secondary strong>
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                +100 元
              </n-button>
              <n-button icon-placement="right" secondary strong>
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                +100 元
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="禁用" size="medium">
            <p>按钮可以被禁用。</p>
            <n-button disabled> 不许点 </n-button>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="事件" size="medium">
            <p>处理按钮的事件。</p>
            <n-button @click="handleClick1"> 点它 </n-button>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="形状" size="medium">
            <p>按钮拥有不同的形状。</p>
            <n-space>
              <n-button circle>
                <template #icon>
                  <n-icon><cash-icon /></n-icon>
                </template>
              </n-button>
              <n-button round> 圆角 </n-button>
              <n-button>方</n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="透明背景" size="medium">
            <p>Ghost 按钮有透明的背景。</p>
            <n-space>
              <n-button ghost> Default </n-button>
              <n-button type="primary" ghost> Primary </n-button>
              <n-button type="info" ghost> Info </n-button>
              <n-button type="success" ghost> Success </n-button>
              <n-button type="warning" ghost> Warning </n-button>
              <n-button type="error" ghost> Error </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="加载中" size="medium">
            <p>按钮有加载状态。</p>
            <n-space>
              <n-button :loading="loading" @click="handleClick2">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                点我
              </n-button>
              <n-button :loading="loading" @click="handleClick2">
                点我
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="自定义颜色" size="medium">
            <p>这两个颜色看起来像毒蘑菇。</p>
            <n-space align="center">
              <n-button color="#8a2be2">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #8a2be2
              </n-button>
              <n-button color="#ff69b4">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #ff69b4
              </n-button>
              <n-button ghost color="#8a2be2">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #8a2be2
              </n-button>
              <n-button ghost color="#ff69b4">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #ff69b4
              </n-button>
              <n-button text color="#8a2be2">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #8a2be2
              </n-button>
              <n-button text color="#ff69b4">
                <template #icon>
                  <n-icon>
                    <cash-icon />
                  </n-icon>
                </template>
                #ff69b4
              </n-button>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="按钮组" size="medium">
            <p>可以把几个按钮结合成按钮组。</p>
            <n-space>
              <n-button-group vertical>
                <n-button round>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  活着
                </n-button>
                <n-button ghost>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  不多
                </n-button>
                <n-button>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  不少
                </n-button>
              </n-button-group>
              <n-button-group vertical size="large">
                <n-button>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  幸福
                </n-button>
                <n-button>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  刚好
                </n-button>
                <n-button ghost round>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  够用
                </n-button>
              </n-button-group>
              <n-button-group size="small">
                <n-button type="default" round>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  活着
                </n-button>
                <n-button type="default">
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  其实
                </n-button>
                <n-button type="default">
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  很好
                </n-button>
              </n-button-group>
              <n-button-group>
                <n-button ghost>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  再吃
                </n-button>
                <n-button ghost>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  一颗
                </n-button>
                <n-button round>
                  <template #icon>
                    <n-icon><log-in-icon /></n-icon>
                  </template>
                  苹果
                </n-button>
              </n-button-group>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi span="0:24 640:24 1024:12">
          <n-card title="使用图标作为按钮" size="medium">
            <p>
              有时你可能会想用图标作为按钮并且自定义一些尺寸。这时你可以使用
              text 按钮和 font-size 来进行设定。
            </p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <cash-icon />
              </n-icon>
            </n-button>
          </n-card>
        </n-gi>
      </n-grid>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
