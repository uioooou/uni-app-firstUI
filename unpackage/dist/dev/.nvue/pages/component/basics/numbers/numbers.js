import { f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, resolveDynamicComponent, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../../_plugin-vue_export-helper.js";
const fuinumbers = "/assets/numbers.59f3f85d.ttf";
const _style_0$1 = { "fui-digitalnumbers": { "": { "fontFamily": "DigitalNumbers", "textDecoration": "none" } }, "fui-number__highlight": { "": { "opacity": 1, "opacity:active": 0.5 } } };
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "DigitalNumbers",
  "src": "url('" + fuinumbers + "')"
});
const _sfc_main$1 = {
  emits: ["click"],
  name: "fui-number",
  props: {
    //数字值
    text: {
      type: [Number, String],
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    //rpx | px
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333"
    },
    //字重
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      default: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: false
    },
    //none、 underline、line-through
    decoration: {
      type: String,
      default: "none"
    },
    //是否将行高设置与字体大小一致
    lineHeight: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getSize() {
      const size = uni.$fui && uni.$fui.fuiNumber && uni.$fui.fuiNumber.size || 32;
      const unit = uni.$fui && uni.$fui.fuiNumber && uni.$fui.fuiNumber.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    },
    getColor() {
      let color = this.color;
      if (!color && color !== true) {
        color = "#333333";
      }
      return color;
    }
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        text: this.text,
        params: this.params
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "u-text",
    {
      class: normalizeClass(["fui-digitalnumbers", { "fui-number__highlight": !$props.disabled && $props.highlight, "fui-number__color": !$props.color || $props.color === true }]),
      style: normalizeStyle({ color: $options.getColor, fontSize: $options.getSize, fontWeight: $props.fontWeight, lineHeight: $props.lineHeight ? $options.getSize : "auto", textDecoration: $props.decoration }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    },
    toDisplayString($props.text),
    7
    /* TEXT, CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/components/firstui/fui-number/fui-number.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } }, "fui-row": { "": { "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    onTap(e) {
      formatAppLog("log", "at pages/component/basics/numbers/numbers.nvue:32", e);
      uni.fui.toast(String(e.text));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_number = resolveEasycom(resolveDynamicComponent("fui-number"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Number"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Number 数字，DigitalNumbers字体，仅支持数字和小数点。默认字体显示：123456789.00")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title" }, "基本使用"),
        createVNode(_component_fui_number, { text: "1234567890.00" }),
        createElementVNode("u-text", { class: "fui-section__title" }, "调整颜色"),
        createVNode(_component_fui_number, {
          text: "200",
          color: "#465CFF"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "调整字体大小"),
        createElementVNode("view", { class: "fui-row" }, [
          createVNode(_component_fui_number, {
            text: "123",
            color: "#FFB703",
            size: "24"
          }),
          createVNode(_component_fui_number, {
            text: "678",
            color: "#FFB703",
            size: "48"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "加粗/点击效果"),
        createVNode(_component_fui_number, {
          text: 520,
          color: "#09BE4F",
          size: "64",
          fontWeight: "bold",
          highlight: "",
          onClick: $options.onTap
        }, null, 8, ["onClick"])
      ])
    ])
  ]);
}
const numbers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/pages/component/basics/numbers/numbers.nvue"]]);
export {
  numbers as default
};
