import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createCommentVNode, createElementVNode, renderSlot, resolveDynamicComponent, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { a as requireNativePlugin, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../../_plugin-vue_export-helper.js";
import { _ as __easycom_1$1 } from "../../../../fui-icon.js";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
const _style_0$1 = { "fui-bottom__popup-wrap": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "bottom": 0, "zIndex": 1001, "flexDirection": "row", "alignItems": "flex-end", "justifyContent": "center", "opacity": 1e-3 } }, "fui-bottom__popup-border": { "": { "position": "absolute", "left": 0, "right": 0, "bottom": 0 } }, "fui-bottom__popup": { "": { "flex": 1, "transform": "translateY(100%)", "flexDirection": "row" } }, "fui-bp__safe-weex": { "": { "paddingBottom": 34 } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-bottom-popup",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //背景颜色
    background: {
      type: String,
      default: "#fff"
    },
    //圆角
    radius: {
      type: [Number, String],
      default: 24
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    //是否适配底部安全区
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isAndroid = false;
    let isNvue = false;
    isNvue = true;
    const res = uni.getSystemInfoSync();
    isAndroid = res.platform.toLocaleLowerCase() == "android";
    return {
      iphoneX: false,
      isNvue,
      isShow: false,
      isAndroid
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
  created() {
    this.iphoneX = this.isPhoneX();
  },
  methods: {
    handleClose(e) {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    isPhoneX() {
      if (!this.safeArea)
        return false;
      const res = uni.getSystemInfoSync();
      let iphonex = false;
      let models = [
        "iphonex",
        "iphonexr",
        "iphonexsmax",
        "iphone11",
        "iphone11pro",
        "iphone11promax",
        "iphone12",
        "iphone12mini",
        "iphone12pro",
        "iphone12promax",
        "iphone13",
        "iphone13mini",
        "iphone13pro",
        "iphone13promax",
        "iphone14",
        "iphone14mini",
        "iphone14pro",
        "iphone14promax"
      ];
      const model = res.model.replace(/\s/g, "").toLowerCase();
      const newModel = model.split("<")[0];
      if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
        iphonex = true;
      }
      return iphonex;
    },
    open() {
      this.isShow = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    },
    close() {
      this._animation(false);
    },
    _animation(type) {
      if (!this.$refs["fui_bp_ani"] || !this.$refs["fui_bp_mk_ani"])
        return;
      animation.transition(
        this.$refs["fui_bp_mk_ani"].ref,
        {
          styles: {
            opacity: type ? 1 : 0
          },
          duration: 250,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.isShow = false;
          }
        }
      );
      animation.transition(
        this.$refs["fui_bp_ani"].ref,
        {
          styles: {
            transform: `translateY(${type ? "0" : "100%"})`
          },
          duration: !type && this.isAndroid ? 20 : 250,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
        }
      );
    },
    stop(e, tap) {
      tap && e.stopPropagation();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["fui-bottom__popup-wrap", { "fui-bottom__popwrap-show": $props.show }]),
      style: normalizeStyle({ zIndex: $props.zIndex, background: $props.maskBackground }),
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.handleClose && $options.handleClose(...args), ["stop"])),
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
      ref: "fui_bp_mk_ani",
      renderWhole: true
    },
    [
      $props.radius ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "fui-bottom__popup-border",
          style: normalizeStyle({ height: $props.radius + "rpx", background: $props.background })
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          ref: "fui_bp_ani",
          class: normalizeClass(["fui-bottom__popup", { "fui-bottom__popup-show": $props.show, "fui-bp__safe-weex": $data.iphoneX && $props.safeArea }]),
          style: normalizeStyle({ borderTopLeftRadius: $props.radius + "rpx", borderTopRightRadius: $props.radius + "rpx", background: $props.background }),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.stop($event, true), ["stop"]))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/components/firstui/fui-bottom-popup/fui-bottom-popup.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-custom__wrap": { "": { "width": "750rpx", "height": "520rpx", "alignItems": "center", "justifyContent": "center" } }, "fui-popup__container": { "": { "width": "750rpx", "position": "relative", "justifyContent": "center", "flexDirection": "column", "paddingTop": "24rpx", "paddingRight": "32rpx", "paddingBottom": "24rpx", "paddingLeft": "32rpx" } }, "fui-title": { "": { "fontSize": "30rpx", "fontWeight": "bold", "textAlign": "center" } }, "fui-sub__title": { "": { "textAlign": "center", "fontSize": "24rpx", "color": "#7F7F7F", "transform": "scale(.9)" } }, "fui-descr": { "": { "fontWeight": "bold", "paddingTop": "64rpx" } }, "fui-sub__descr": { "": { "fontSize": "26rpx", "color": "#B2B2B2", "paddingTop": "32rpx", "paddingRight": 0, "paddingBottom": "32rpx", "paddingLeft": 0 } }, "fui-btn__box": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": "32rpx", "paddingRight": 0, "paddingBottom": "32rpx", "paddingLeft": 0, "height": "144rpx" } }, "fui-icon__close": { "": { "position": "absolute", "top": "24rpx", "left": "24rpx" } }, "fui-scroll__wrap": { "": { "paddingTop": "30rpx", "position": "relative" } }, "fui-scroll__view": { "": { "width": "750rpx", "height": "600rpx" } }, "fui-title__pb": { "": { "paddingBottom": "24rpx" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      itemList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    };
  },
  methods: {
    showPopup(type) {
      if (type === 1) {
        this.show = true;
      } else if (type === 2) {
        this.show2 = true;
      } else {
        this.show3 = true;
      }
    },
    closePopup(type) {
      if (type === 1) {
        this.show = false;
      } else if (type === 2) {
        this.show2 = false;
      } else {
        this.show3 = false;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_bottom_popup = resolveEasycom(resolveDynamicComponent("fui-bottom-popup"), __easycom_1);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1$1);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "BottomPopup"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "BottomPopup 底部弹出层，从底部弹出的浮层，引导用户进行相关操作。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "基础使用",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showPopup(1))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "案例一",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.showPopup(2))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "内容可滚动",
          margin: ["24rpx"],
          bold: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.showPopup(3))
        })
      ]),
      createVNode(_component_fui_bottom_popup, {
        show: $data.show,
        onClose: _cache[3] || (_cache[3] = ($event) => $options.closePopup(1))
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "fui-custom__wrap" }, [
            createElementVNode("u-text", { class: "fui-text" }, "这是自定义内容区")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createCommentVNode("案例一"),
      createVNode(_component_fui_bottom_popup, {
        show: $data.show2,
        maskClosable: false
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "fui-popup__container" }, [
            createElementVNode("u-text", { class: "fui-title" }, "测试标题一"),
            createElementVNode("u-text", { class: "fui-sub__title" }, "测试标题一的副标题"),
            createElementVNode("u-text", { class: "fui-descr" }, "辅助描述内容，可根据实际需要安排"),
            createElementVNode("u-text", { class: "fui-sub__descr" }, "辅助提示内容，可根据实际需要安排"),
            createElementVNode("view", { class: "fui-btn__box" }, [
              createVNode(_component_fui_button, {
                type: "gray",
                width: "240rpx",
                height: "80rpx",
                text: "辅助操作",
                margin: ["0", "16rpx"]
              }),
              createVNode(_component_fui_button, {
                width: "240rpx",
                height: "80rpx",
                text: "主操作",
                margin: ["0", "16rpx"]
              })
            ]),
            createElementVNode("view", {
              class: "fui-icon__close",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.closePopup(2))
            }, [
              createVNode(_component_fui_icon, {
                name: "close",
                size: 48
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createVNode(_component_fui_bottom_popup, {
        show: $data.show3,
        onClose: _cache[6] || (_cache[6] = ($event) => $options.closePopup(3))
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "fui-scroll__wrap" }, [
            createElementVNode("u-text", { class: "fui-title fui-title__pb" }, "测试标题二"),
            createElementVNode("scroll-view", {
              scrollY: true,
              showScrollbar: false,
              class: "fui-scroll__view"
            }, [
              createElementVNode("view", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.itemList, (item, index) => {
                    return openBlock(), createBlock(
                      _component_fui_list_cell,
                      { key: index },
                      {
                        default: withCtx(() => [
                          createElementVNode(
                            "u-text",
                            { class: "fui-text" },
                            "item" + toDisplayString(index + 1),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            createElementVNode("view", {
              class: "fui-icon__close",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.closePopup(3))
            }, [
              createVNode(_component_fui_icon, {
                name: "close",
                size: 48
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"])
    ])
  ]);
}
const bottomPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/pages/component/nav/bottomPopup/bottomPopup.nvue"]]);
export {
  bottomPopup as default
};
