<template>
  <div>
    <div ref="blocklyWarp">
    </div>
    <div ref="toolbox">
    </div>
  </div>
</template>

<script>
import Blockly from "blockly";

export default {
  name: "BlocklyEditor",
  mounted() {
    this.$nextTick(() => {
      // 初始化blockly
      Blockly.inject(this.$refs.blocklyWarp, {
      toolbox: this.$refs.toolbox,
      trashcan: true,
      scrollbars: true,
      zoom:
          {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true
          },
        grid:
          {
            spacing: 20,
            length: 20,
            colour: '#ECF4FF',
            snap: true
          },
    });
    });
  },
  
}
</script>