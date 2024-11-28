import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, withModifiers, withCtx, toDisplayString, createCommentVNode, renderSlot } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
const _sfc_main = {
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
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
      style: normalizeStyle({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
      onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
      onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
      onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
      renderWhole: true
    },
    [
      createVNode(_component_button, {
        class: normalizeClass(["fui-button", [
          $props.bold ? "fui-text__bold" : "",
          $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
          !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
          !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
          $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
          $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
        ]]),
        style: normalizeStyle({
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
        onClick: withModifiers($options.handleTap, ["stop"])
      }, {
        default: withCtx(() => [
          $props.text ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: normalizeClass(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
              style: normalizeStyle({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
            },
            toDisplayString($props.text),
            7
            /* TEXT, CLASS, STYLE */
          )) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "hoverStopPropagation", "lang", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "groupId", "guildId", "publicId", "dataImId", "dataImType", "dataGoodsId", "dataOrderId", "dataBizLine", "phoneNumberNoQuotaToast", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "onAgreeprivacyauthorization", "onAddgroupapp", "onChooseaddress", "onChooseinvoicetitle", "onSubscribe", "onLogin", "onIm", "disabled", "scope", "onClick"])
    ],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/components/firstui/fui-button/fui-button.vue"]]);
export {
  __easycom_0 as _
};
