"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/pages/component/basics/numbers/numbers.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/pages/component/basics/numbers/numbers.js
  var fuinumbers = "/assets/numbers.59f3f85d.ttf";
  var _style_0$1 = { "fui-digitalnumbers": { "": { "fontFamily": "DigitalNumbers", "textDecoration": "none" } }, "fui-number__highlight": { "": { "opacity": 1, "opacity:active": 0.5 } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "DigitalNumbers",
    "src": "url('" + fuinumbers + "')"
  });
  var _sfc_main$1 = {
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
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        class: (0, import_vue2.normalizeClass)(["fui-digitalnumbers", { "fui-number__highlight": !$props.disabled && $props.highlight, "fui-number__color": !$props.color || $props.color === true }]),
        style: (0, import_vue2.normalizeStyle)({ color: $options.getColor, fontSize: $options.getSize, fontWeight: $props.fontWeight, lineHeight: $props.lineHeight ? $options.getSize : "auto", textDecoration: $props.decoration }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue2.toDisplayString)($props.text),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue \u7EC4\u4EF6\u5E93/components/firstui/fui-number/fui-number.vue"]]);
  var _style_0 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } }, "fui-row": { "": { "alignItems": "center" } } };
  var _sfc_main = {
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
    const _component_fui_number = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-number"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "Number"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "Number \u6570\u5B57\uFF0CDigitalNumbers\u5B57\u4F53\uFF0C\u4EC5\u652F\u6301\u6570\u5B57\u548C\u5C0F\u6570\u70B9\u3002\u9ED8\u8BA4\u5B57\u4F53\u663E\u793A\uFF1A123456789.00")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u57FA\u672C\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_fui_number, { text: "1234567890.00" }),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8C03\u6574\u989C\u8272"),
          (0, import_vue2.createVNode)(_component_fui_number, {
            text: "200",
            color: "#465CFF"
          }),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8C03\u6574\u5B57\u4F53\u5927\u5C0F"),
          (0, import_vue2.createElementVNode)("view", { class: "fui-row" }, [
            (0, import_vue2.createVNode)(_component_fui_number, {
              text: "123",
              color: "#FFB703",
              size: "24"
            }),
            (0, import_vue2.createVNode)(_component_fui_number, {
              text: "678",
              color: "#FFB703",
              size: "48"
            })
          ]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u52A0\u7C97/\u70B9\u51FB\u6548\u679C"),
          (0, import_vue2.createVNode)(_component_fui_number, {
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
  var numbers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue \u7EC4\u4EF6\u5E93/pages/component/basics/numbers/numbers.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/numbers/numbers";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    numbers.mpType = "page";
    const app = Vue.createPageApp(numbers, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...numbers.styles || []]));
    app.mount("#root");
  }
})();
