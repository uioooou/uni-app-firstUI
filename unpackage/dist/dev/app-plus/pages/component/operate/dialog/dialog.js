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
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
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
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
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

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/fui-button.js
  var _style_0 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main = {
    name: "fui-button",
    emits: [
      "click",
      "getuserinfo",
      "contact",
      "getphonenumber",
      "error",
      "opensetting",
      "chooseavatar",
      "launchapp",
      "agreeprivacyauthorization",
      "addgroupapp",
      "chooseaddress",
      "chooseinvoicetitle",
      "subscribe",
      "login",
      "im"
    ],
    props: {
      //样式类型：primary，success， warning，danger，link，purple，gray
      type: {
        type: String,
        default: "primary"
      },
      //按钮背景色，当传入值时type失效
      background: {
        type: String,
        default: ""
      },
      //按钮显示文本
      text: {
        type: String,
        default: ""
      },
      //按钮字体颜色
      color: {
        type: String,
        default: ""
      },
      //按钮禁用背景色
      disabledBackground: {
        type: String,
        default: ""
      },
      //按钮禁用字体颜色
      disabledColor: {
        type: String,
        default: ""
      },
      borderWidth: {
        type: String,
        default: "0.5px"
      },
      borderColor: {
        type: String,
        default: ""
      },
      //V1.9.8+ 按钮大小，优先级高于width和height，medium、small、mini
      btnSize: {
        type: String,
        default: ""
      },
      //宽度
      width: {
        type: String,
        default: "100%"
      },
      //高度
      height: {
        type: String,
        default: ""
      },
      //字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: false
      },
      //['20rpx','30rpx','20rpx','30rpx']->[上，右，下，左]
      margin: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      //圆角
      radius: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      //支付宝小程序 
      //当 open-type 为 getAuthorize 时，可以设置 scope 为：phoneNumber、userInfo
      scope: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      //v2.3.0+
      hoverStopPropagation: {
        type: Boolean,
        default: false
      },
      lang: {
        type: String,
        default: "en"
      },
      sessionFrom: {
        type: String,
        default: ""
      },
      sendMessageTitle: {
        type: String,
        default: ""
      },
      sendMessagePath: {
        type: String,
        default: ""
      },
      sendMessageImg: {
        type: String,
        default: ""
      },
      showMessageCard: {
        type: Boolean,
        default: false
      },
      phoneNumberNoQuotaToast: {
        type: Boolean,
        default: true
      },
      groupId: {
        type: String,
        default: ""
      },
      guildId: {
        type: String,
        default: ""
      },
      publicId: {
        type: String,
        default: ""
      },
      dataImId: {
        type: String,
        default: ""
      },
      dataImType: {
        type: String,
        default: ""
      },
      dataGoodsId: {
        type: String,
        default: ""
      },
      dataOrderId: {
        type: String,
        default: ""
      },
      dataBizLine: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTypeColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        let colors = {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          link: "transparent",
          purple: app && app.purple || "#6831FF",
          gray: "#F8F8F8"
        };
        return colors[this.type] || "transparent";
      },
      getBackground() {
        let color = this.getTypeColor;
        if (this.disabled || this.plain) {
          color = "transparent";
        }
        if (!this.disabled && !this.plain && this.background) {
          color = this.background;
        }
        return color;
      },
      getColor() {
        let color = "#fff";
        if (this.color) {
          color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
        } else {
          if (this.disabled && this.disabledBackground) {
            color = this.disabledColor || "#FFFFFF";
          } else {
            const app = uni && uni.$fui && uni.$fui.color;
            const primary = app && app.primary || "#465CFF";
            color = this.type === "gray" ? primary : "#FFFFFF";
          }
        }
        return color;
      },
      getSize() {
        let size = this.size || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.size || 32;
        if (this.btnSize === "small") {
          size = size > 28 ? 28 : size;
        } else if (this.btnSize === "mini") {
          size = size > 28 ? 24 : size;
        }
        return `${size}rpx`;
      },
      getWidth() {
        let width = this.width;
        if (this.btnSize && this.btnSize !== true) {
          width = {
            "medium": "400rpx",
            "small": "200rpx",
            "mini": "120rpx"
          }[this.btnSize] || width;
        }
        return width;
      },
      getHeight() {
        let height = this.height || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.height || "96rpx";
        if (this.btnSize && this.btnSize !== true) {
          height = {
            "medium": "84rpx",
            "small": "72rpx",
            "mini": "64rpx"
          }[this.btnSize] || height;
        }
        return height;
      },
      getRadius() {
        const radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        return this.radius || radius;
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        time: 0,
        trigger: false,
        pc: false
      };
    },
    created() {
    },
    methods: {
      handleStart(e) {
      },
      handleClick() {
        if (this.disabled || !this.trigger)
          return;
        this.time = 0;
      },
      handleTap() {
        if (this.disabled)
          return;
        this.$emit("click", {
          index: Number(this.index)
        });
      },
      handleEnd(e) {
      },
      bindgetuserinfo({
        detail = {}
      } = {}) {
        this.$emit("getuserinfo", detail);
      },
      bindcontact({
        detail = {}
      } = {}) {
        this.$emit("contact", detail);
      },
      bindgetphonenumber({
        detail = {}
      } = {}) {
        this.$emit("getphonenumber", detail);
      },
      binderror({
        detail = {}
      } = {}) {
        this.$emit("error", detail);
      },
      bindopensetting({
        detail = {}
      } = {}) {
        this.$emit("opensetting", detail);
      },
      bindchooseavatar({
        detail = {}
      } = {}) {
        this.$emit("chooseavatar", detail);
      },
      bindlaunchapp({
        detail = {}
      } = {}) {
        this.$emit("launchapp", detail);
      },
      //v2.3.0+
      agreeprivacyauthorization(e) {
        this.$emit("agreeprivacyauthorization", e);
      },
      addgroupapp(e) {
        this.$emit("addgroupapp", e);
      },
      chooseaddress(e) {
        this.$emit("chooseaddress", e);
      },
      chooseinvoicetitle(e) {
        this.$emit("chooseinvoicetitle", e);
      },
      bindsubscribe(e) {
        this.$emit("subscribe", e);
      },
      bindlogin(e) {
        this.$emit("login", e);
      },
      bindim(e) {
        this.$emit("im", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: (0, import_vue2.normalizeStyle)({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
        renderWhole: true
      },
      [
        (0, import_vue2.createVNode)(_component_button, {
          class: (0, import_vue2.normalizeClass)(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: (0, import_vue2.normalizeStyle)({
            width: $options.getWidth,
            height: $options.getHeight,
            lineHeight: $options.getHeight,
            background: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
            borderWidth: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
            borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
            borderRadius: $options.getRadius,
            fontSize: $options.getSize,
            color: $options.getColor
          }),
          loading: $props.loading,
          "form-type": $props.formType,
          "open-type": $props.openType,
          "app-parameter": $props.appParameter,
          hoverStopPropagation: $props.hoverStopPropagation,
          lang: $props.lang,
          sessionFrom: $props.sessionFrom,
          sendMessageTitle: $props.sendMessageTitle,
          sendMessagePath: $props.sendMessagePath,
          sendMessageImg: $props.sendMessageImg,
          showMessageCard: $props.showMessageCard,
          groupId: $props.groupId,
          guildId: $props.guildId,
          publicId: $props.publicId,
          dataImId: $props.dataImId,
          dataImType: $props.dataImType,
          dataGoodsId: $props.dataGoodsId,
          dataOrderId: $props.dataOrderId,
          dataBizLine: $props.dataBizLine,
          phoneNumberNoQuotaToast: $props.phoneNumberNoQuotaToast,
          onGetuserinfo: $options.bindgetuserinfo,
          onGetphonenumber: $options.bindgetphonenumber,
          onContact: $options.bindcontact,
          onError: $options.binderror,
          onOpensetting: $options.bindopensetting,
          onChooseavatar: $options.bindchooseavatar,
          onLaunchapp: $options.bindlaunchapp,
          onAgreeprivacyauthorization: $options.agreeprivacyauthorization,
          onAddgroupapp: $options.addgroupapp,
          onChooseaddress: $options.chooseaddress,
          onChooseinvoicetitle: $options.chooseinvoicetitle,
          onSubscribe: $options.bindsubscribe,
          onLogin: $options.bindlogin,
          onIm: $options.bindim,
          disabled: $props.disabled,
          scope: $props.scope,
          onClick: (0, import_vue2.withModifiers)($options.handleTap, ["stop"])
        }, {
          default: (0, import_vue2.withCtx)(() => [
            $props.text ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue2.normalizeClass)(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
                style: (0, import_vue2.normalizeStyle)({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
              },
              (0, import_vue2.toDisplayString)($props.text),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "hoverStopPropagation", "lang", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "groupId", "guildId", "publicId", "dataImId", "dataImType", "dataGoodsId", "dataOrderId", "dataBizLine", "phoneNumberNoQuotaToast", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "onAgreeprivacyauthorization", "onAddgroupapp", "onChooseaddress", "onChooseinvoicetitle", "onSubscribe", "onLogin", "onIm", "disabled", "scope", "onClick"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue \u7EC4\u4EF6\u5E93/components/firstui/fui-button/fui-button.vue"]]);

  // ../../../../../Documents/HBuilderProjects/FirstUI-nvue 组件库/unpackage/dist/dev/.nvue/pages/component/operate/dialog/dialog.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$1 = { "fui-dialog__wrap": { "": { "position": "fixed", "zIndex": 996, "top": 0, "right": 0, "left": 0, "bottom": 0, "alignItems": "center", "justifyContent": "center", "opacity": 0 } }, "fui-dialog__inner": { "": { "width": "680rpx", "textAlign": "center", "overflow": "hidden", "flexDirection": "column" } }, "fui-dialog__title": { "": { "paddingTop": "64rpx", "paddingRight": "48rpx", "paddingBottom": 0, "paddingLeft": "48rpx", "fontWeight": "700", "fontSize": "34rpx", "textAlign": "center" } }, "fui-dialog__body": { "": { "paddingTop": "32rpx", "paddingRight": "48rpx", "paddingBottom": "32rpx", "paddingLeft": "48rpx", "marginBottom": "32rpx" } }, "fui-dialog__descr": { "": { "fontSize": "30rpx", "fontWeight": "normal", "textAlign": "center" } }, "fui-dialog__mtop": { "": { "marginTop": "32rpx" } }, "fui-dialog__footer": { "": { "flexDirection": "row", "position": "relative", "lineHeight": "112rpx", "height": "112rpx", "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#EEEEEE" } }, "fui-dialog__btn": { "": { "flex": 1, "height": "112rpx", "lineHeight": "112rpx", "fontWeight": "700", "position": "relative", "fontSize": "34rpx", "borderLeftWidth": 0.5, "borderLeftStyle": "solid", "borderLeftColor": "#EEEEEE", "textAlign": "center", "backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-dialog__btn-first": { "": { "borderLeftWidth": 0 } } };
  var animation = requireNativePlugin("animation");
  var primaryColor = uni && uni.$fui && uni.$fui.color && uni.$fui.color.primary || "#465CFF";
  var _sfc_main$1 = {
    name: "fui-dialog",
    emits: ["click", "close"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "\u63D0\u793A"
      },
      color: {
        type: String,
        default: "#333"
      },
      content: {
        type: String,
        default: ""
      },
      contentColor: {
        type: String,
        default: "#7F7F7F"
      },
      buttons: {
        type: Array,
        default() {
          return [{
            text: "\u53D6\u6D88"
          }, {
            text: "\u786E\u5B9A",
            color: primaryColor
          }];
        }
      },
      background: {
        type: String,
        default: "#fff"
      },
      radius: {
        type: [Number, String],
        default: 24
      },
      maskBackground: {
        type: String,
        default: "rgba(0,0,0,.6)"
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        visible: false,
        isNvue
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            this.close();
          }
        },
        immediate: true
      }
    },
    methods: {
      handleClick(index) {
        this.$emit("click", __spreadValues({
          index
        }, this.buttons[index]));
      },
      maskClose() {
        if (!this.maskClosable)
          return;
        this.$emit("close", {});
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this._animation(true);
          }, 50);
        });
      },
      close(type) {
        this._animation(false);
      },
      _animation(type) {
        let styles = {
          opacity: type ? 1 : 0
        };
        if (!this.$refs["fui_dialog_ani"])
          return;
        animation.transition(
          this.$refs["fui_dialog_ani"].ref,
          {
            styles,
            duration: 200,
            //ms
            timingFunction: "ease-in",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
            if (!type) {
              this.visible = false;
            }
          }
        );
      },
      stop() {
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.visible || !$data.isNvue ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        key: 0,
        onClick: _cache[1] || (_cache[1] = (...args) => $options.maskClose && $options.maskClose(...args)),
        style: (0, import_vue3.normalizeStyle)({ background: $props.maskBackground }),
        class: (0, import_vue3.normalizeClass)(["fui-dialog__wrap", { "fui-wrap__show": $props.show }]),
        ref: "fui_dialog_ani",
        renderWhole: true
      },
      [
        (0, import_vue3.createCommentVNode)(' @touchmove.stop.prevent="stop" '),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "fui-dialog__inner",
            style: (0, import_vue3.normalizeStyle)({ background: $props.background, borderRadius: $props.radius + "rpx" }),
            onClick: _cache[0] || (_cache[0] = (0, import_vue3.withModifiers)((...args) => $options.stop && $options.stop(...args), ["stop"]))
          },
          [
            $props.title ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: "fui-dialog__title",
                style: (0, import_vue3.normalizeStyle)({ color: $props.color })
              },
              (0, import_vue3.toDisplayString)($props.title),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            (0, import_vue3.createElementVNode)(
              "view",
              {
                class: (0, import_vue3.normalizeClass)(["fui-dialog__body", { "fui-dialog__mtop": !$props.title }])
              },
              [
                $props.content ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "fui-dialog__descr",
                    style: (0, import_vue3.normalizeStyle)({ color: $props.contentColor })
                  },
                  (0, import_vue3.toDisplayString)($props.content),
                  5
                  /* TEXT, STYLE */
                )) : (0, import_vue3.createCommentVNode)("v-if", true),
                (0, import_vue3.renderSlot)(_ctx.$slots, "default")
              ],
              2
              /* CLASS */
            ),
            (0, import_vue3.createElementVNode)("view", { class: "fui-dialog__footer" }, [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($props.buttons, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                    key: index,
                    style: (0, import_vue3.normalizeStyle)({ color: item.color || "#333333" }),
                    class: (0, import_vue3.normalizeClass)(["fui-dialog__btn", { "fui-dialog__btn-first": index === 0 }]),
                    onClick: ($event) => $options.handleClick(index)
                  }, (0, import_vue3.toDisplayString)(item.text), 15, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          4
          /* STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    )) : (0, import_vue3.createCommentVNode)("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue \u7EC4\u4EF6\u5E93/components/firstui/fui-dialog/fui-dialog.vue"]]);
  var _style_02 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } } };
  var _sfc_main2 = {
    data() {
      return {
        show: false,
        visible: false,
        buttons: [{
          text: "\u786E\u5B9A",
          color: "#FF2B2B"
        }]
      };
    },
    methods: {
      showDialog(type) {
        if (type === 1) {
          this.show = true;
        } else {
          this.visible = true;
        }
      },
      onClick(e) {
        formatAppLog("log", "at pages/component/operate/dialog/dialog.nvue:41", e);
        this.onClose();
      },
      //设置maskClosable为true时（点击遮罩可关闭），需要配合@close事件一起使用，通过控制show来达到关闭效果
      onClose(e) {
        this.show = false;
      },
      onTap(e) {
        formatAppLog("log", "at pages/component/operate/dialog/dialog.nvue:49", e);
        this.visible = false;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-button"), __easycom_0);
    const _component_fui_dialog = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-dialog"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Dialog"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Dialog \u5BF9\u8BDD\u6846\uFF0C\u5728\u6D6E\u5C42\u4E2D\u663E\u793A\uFF0C\u5F15\u5BFC\u7528\u6237\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u57FA\u7840\u4F7F\u7528",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[0] || (_cache[0] = ($event) => $options.showDialog(1))
          }),
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u81EA\u5B9A\u4E49\u6309\u94AE",
            bold: "",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.showDialog(2))
          })
        ]),
        (0, import_vue3.createVNode)(_component_fui_dialog, {
          show: $data.show,
          content: "\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",
          maskClosable: "",
          onClick: $options.onClick,
          onClose: $options.onClose
        }, null, 8, ["show", "onClick", "onClose"]),
        (0, import_vue3.createVNode)(_component_fui_dialog, {
          show: $data.visible,
          title: "\u6211\u662F\u6807\u9898",
          content: "\u6211\u662F\u81EA\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\uFF01",
          buttons: $data.buttons,
          onClick: $options.onTap
        }, null, 8, ["show", "buttons", "onClick"])
      ])
    ]);
  }
  var dialog = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue \u7EC4\u4EF6\u5E93/pages/component/operate/dialog/dialog.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/operate/dialog/dialog";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    dialog.mpType = "page";
    const app = Vue.createPageApp(dialog, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...dialog.styles || []]));
    app.mount("#root");
  }
})();
