import { f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-button.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../../_plugin-vue_export-helper.js";
/*!
 * 工具类：常用数据处理工具
 * Utils - v1.0.0 (2021/7/9, 11:07:14 AM)
 * https://github.com/FirstUI/FirstUI | Released under Apache License 2.0
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
const utils$1 = {
  /**
   * @desc 英文首字母大写：english=>English
   * @param {String}  value 需要处理的英文字符串
   **/
  titleCase(value) {
    if (value == null || value.length === 0)
      return value;
    return value.replace(/^[a-z]/, (matchStr) => {
      return matchStr.toLocaleUpperCase();
    });
  },
  /**
   * 把连续出现多次的字母字符串进行压缩。aaabbbbcccccd=>3a4b5cd
   * @param {String} value 需要压缩的字符串
   * @param {Boolean} ignoreCase 是否忽略大小写
   */
  compressLetter(value, ignoreCase) {
    let pattern = new RegExp("([a-zA-Z])\\1+", ignoreCase ? "ig" : "g");
    return value.replace(pattern, (matchStr, group_1) => {
      return matchStr.length + group_1;
    });
  },
  /**
   * @desc 等待多少毫秒再执行 ，同步阻塞
   * @param {String} millisecond 毫秒
   **/
  sleep(millisecond) {
    let now = /* @__PURE__ */ new Date();
    let exitTime = now.getTime() + millisecond;
    while (true) {
      now = /* @__PURE__ */ new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },
  /**
   * @desc 去左右空格
   * @param {String} value 需要处理的字符串
   **/
  trim(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
  },
  /**
   * @desc 去所有空格
   * @param {String} value 需要处理的字符串
   **/
  trimAll(value) {
    return value.replace(/\s+/g, "");
  },
  /**
   * @desc 替换所有相同字符串
   * @param {String} text 需要处理的字符串
   * @param {String} repstr 被替换的字符
   * @param {String} newstr 替换后的字符
   **/
  replaceAll(text, repstr, newstr) {
    return text.replace(new RegExp(repstr, "gm"), newstr);
  },
  /**
   * @desc 格式化手机号码
   * @param {String} num 手机号码
   **/
  numberFormatter(num) {
    return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
  },
  /**
   * @desc 金额格式化，保留两位小数
   * @param {String | Number} money 金额值
   **/
  moneyFormatter(money) {
    return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
      /\,$/,
      ""
    ).split("").reverse().join("");
  },
  /**
   * @desc 日期时间格式化
   * @param date 需要格式化的日期
   * @param format 格式化字符串(y-m-d h:i:s)
   * @param type  date的格式类型：1-日期字符串(2017/12/04 12:12:12) 2-时间戳(1603676514690) 3-日期字符串，无连接符(20171204121212) 
   * 4-new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))
   * @param isMs  时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
   **/
  dateFormatter(date, format, type = 1, isMs = true) {
    let formatDate = "";
    if (type === 3) {
      formatDate = utils$1._formatTimeStr(date, format);
    } else {
      formatDate = utils$1._formatDate(format, date, type, isMs);
    }
    return formatDate;
  },
  _formatDate(formatStr, fdate, type = 1, isMs) {
    if (!fdate)
      return "";
    let fTime, fStr = "ymdhis";
    if (type === 4) {
      fTime = fdate;
    } else {
      fdate = fdate.toString();
      if (~fdate.indexOf(".")) {
        fdate = fdate.substring(0, fdate.indexOf("."));
      }
      fdate = fdate.replace("T", " ").replace(/\-/g, "/");
      if (!formatStr)
        formatStr = "y-m-d h:i:s";
      if (fdate) {
        if (type === 2) {
          fdate = isMs ? Number(fdate) : Number(fdate) * 1e3;
        }
        fTime = new Date(fdate);
      } else {
        fTime = /* @__PURE__ */ new Date();
      }
    }
    let month = fTime.getMonth() + 1;
    let day = fTime.getDate();
    let hours = fTime.getHours();
    let minu = fTime.getMinutes();
    let second = fTime.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minu = minu < 10 ? "0" + minu : minu;
    second = second < 10 ? "0" + second : second;
    let formatArr = [
      fTime.getFullYear().toString(),
      month.toString(),
      day.toString(),
      hours.toString(),
      minu.toString(),
      second.toString()
    ];
    for (let i = 0; i < formatArr.length; i++) {
      formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
    }
    return formatStr;
  },
  /**
   * @desc 格式化时间
   * @param timeStr 时间字符串 20191212162001
   * @param formatStr 需要的格式 如 y-m-d h:i:s | y/m/d h:i:s | y/m/d | y年m月d日 等
   **/
  _formatTimeStr(timeStr, formatStr) {
    if (!timeStr)
      return;
    timeStr = timeStr.toString();
    if (timeStr.length === 14) {
      let timeArr = timeStr.split("");
      let fStr = "ymdhis";
      if (!formatStr) {
        formatStr = "y-m-d h:i:s";
      }
      let formatArr = [
        [...timeArr].splice(0, 4).join(""),
        [...timeArr].splice(4, 2).join(""),
        [...timeArr].splice(6, 2).join(""),
        [...timeArr].splice(8, 2).join(""),
        [...timeArr].splice(10, 2).join(""),
        [...timeArr].splice(12, 2).join("")
      ];
      for (let i = 0; i < formatArr.length; i++) {
        formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
      }
      return formatStr;
    }
    return timeStr;
  },
  /**
   * @desc RGB颜色转十六进制颜色
   * @param r
   * @param g
   * @param b
   **/
  rgbToHex(r, g, b) {
    return "#" + utils$1._toHex(r) + utils$1._toHex(g) + utils$1._toHex(b);
  },
  _toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n))
      return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
  },
  /**
   * @desc 十六进制颜色转RGB颜色
   * @param hex 颜色值 #333 或 #333333
   **/
  hexToRGB(hex) {
    if (hex.length === 4) {
      let text = hex.substring(1, 4);
      hex = "#" + text + text;
    }
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  /**
   * @desc 唯一标识，随机数
   * @param n 随机数位数
   **/
  unique(n) {
    n = n || 6;
    let rnd = "";
    for (let i = 0; i < n; i++)
      rnd += Math.floor(Math.random() * 10);
    return "firstui_" + (/* @__PURE__ */ new Date()).getTime() + rnd;
  },
  /**
   * @desc 获取uuid
   */
  getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      return (c === "x" ? Math.random() * 16 | 0 : "r&0x3" | "0x8").toString(16);
    });
  },
  /**
   * @desc 简单数组合并去重
   * @param arr1 数组1
   * @param arr2 数组2 可不传
   **/
  distinctArray(arr1, arr2) {
    arr1 = arr1 || [];
    arr2 = arr2 || [];
    return [.../* @__PURE__ */ new Set([...arr1, ...arr2])];
  },
  /**
   * @desc 获取日期时间段
   * @param type 1-今天 2-昨天 3-本周 4-本月 5-本年
   **/
  getDateTimeSlot(type) {
    let now = /* @__PURE__ */ new Date();
    let start = now.toDateString();
    let end = now.toDateString();
    switch (type) {
      case 1:
        start = `${start} 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 2:
        now.setTime(now.getTime() - 3600 * 1e3 * 24 * 1);
        start = `${now.toDateString()} 00:00:00`;
        end = `${now.toDateString()} 23:59:59`;
        break;
      case 3:
        let weekday = now.getDay() || 7;
        now.setDate(now.getDate() - weekday + 1);
        start = `${now.toDateString()} 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 4:
        start = `${now.getFullYear()}-${now.getMonth() + 1}-01 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 5:
        start = `${now.getFullYear()}-01-01 00:00:00`;
        end = `${end} 23:59:59`;
        break;
    }
    return {
      start: new Date(start.replace(/\-/g, "/")),
      end: new Date(end.replace(/\-/g, "/"))
    };
  },
  /*
   * @desc 获取Url参数，返回一个对象
   * @param url url地址
   * ?a=1&b=2 ==> {a: "1", b: "2"}
   */
  getUrlParam(url) {
    let arrObj = url.split("?");
    let params = {};
    if (arrObj.length > 1) {
      arrObj = arrObj[1].split("&");
      arrObj.forEach((item) => {
        item = item.split("=");
        params[item[0]] = item[1];
      });
    }
    return params;
  },
  /**
   * @method 函数防抖
   * @desc 短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
  debounce(func, wait = 1e3, immediate = true) {
    let timer;
    return function() {
      let context = this, args = arguments;
      if (timer)
        clearTimeout(timer);
      if (immediate) {
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        if (callNow)
          func.apply(context, args);
      } else {
        timer = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      }
    };
  },
  /**
   * @method 函数节流
   * @desc 指连续触发事件，但是在 n 秒内只执行一次函数。即 2n 秒内执行 2 次... 。会稀释函数的执行频率。
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param type 1 在时间段开始的时候触发 2 在时间段结束的时候触发
   */
  throttle(func, wait = 1e3, type = 1) {
    let previous = 0;
    let timeout;
    return function() {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      }
    };
  },
  /**
   * @desc 日期时间格式化为多久之前 如:1分钟前
   * @param date 需要格式化的日期
   * @param type  date的格式类型：1-日期字符串(2017/12/04 12:12:12) 2-时间戳(1603676514690) 3-日期字符串，无连接符(20171204121212) 
   * 4-new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))
   * @param isMs  时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
   * @param suffix 后缀，如：30小时+ 后缀。[刚刚、昨天、前天 等为固定文本，后缀无效]
   * @param endUnit 转化截止单位，1-秒 2-分钟 3-小时 4-天 5-月 6-年，如传3（小时），则天，月，年不做转化直接返回空
   * @param seconds 多少秒之前显示为刚刚，不可超过60
   * @param fixedDay 是否需要天的固定文本，如昨天、前天
   **/
  formatTimeAgo(date, type = 1, isMs = true, suffix = "前", endUnit = 6, seconds = 10, fixedDay = true) {
    const formatDate = utils$1.dateFormatter(date, "y/m/d h:i:s", type, isMs);
    const beforeStamp = new Date(formatDate).getTime();
    const nowStamp = (/* @__PURE__ */ new Date()).getTime();
    let res = "";
    const diff = nowStamp - beforeStamp;
    if (diff > 0) {
      const _minute = 1e3 * 60;
      const _hour = _minute * 60;
      const _day = _hour * 24;
      const _month = _day * 30;
      const _year = _month * 12;
      const year = Math.floor(diff / _year);
      const month = Math.floor(diff / _month);
      const day = Math.floor(diff / _day);
      const hour = Math.floor(diff / _hour);
      const minute = Math.floor(diff / _minute);
      const second = Math.floor(diff / 1e3);
      let isEmpty = false;
      switch (endUnit) {
        case 1:
          isEmpty = minute || hour || day || month || year ? true : false;
          break;
        case 2:
          isEmpty = hour || day || month || year ? true : false;
          break;
        case 3:
          isEmpty = day || month || year ? true : false;
          break;
        case 4:
          isEmpty = month || year ? true : false;
          break;
        case 5:
          isEmpty = year ? true : false;
          break;
      }
      if (!isEmpty) {
        if (year) {
          res = `${year}年${suffix}`;
        } else if (month) {
          res = `${month}个月${suffix}`;
        } else if (day) {
          if (day === 1 && fixedDay) {
            res = "昨天";
          } else if (day === 2 && fixedDay) {
            res = "前天";
          } else {
            res = `${day}天${suffix}`;
          }
        } else if (hour) {
          res = `${hour}小时${suffix}`;
        } else if (minute) {
          res = `${minute}分钟${suffix}`;
        } else {
          seconds = seconds < 60 ? seconds : 59;
          res = second < seconds ? "刚刚" : `${second}秒${suffix}`;
        }
      }
    }
    return res;
  },
  /**
   * @description 获取随机颜色
   **/
  getRandomHexColor() {
    const arr = ["0", "1", "2", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    const a = Math.floor(Math.random() * arr.length);
    const b = Math.floor(Math.random() * arr.length);
    const c = Math.floor(Math.random() * arr.length);
    const d = Math.floor(Math.random() * arr.length);
    const e = Math.floor(Math.random() * arr.length);
    const f = Math.floor(Math.random() * arr.length);
    return `#${arr[a] + arr[b] + arr[c] + arr[d] + arr[e] + arr[f]}`;
  },
  /**
   * @description 人名币转大写
   * @param {Number | String} money 金额
   **/
  convertCurrency(money) {
    const amount = utils$1.trimAll(money.toString()).replace("￥", "").replace(",", "");
    if (amount == "")
      return "";
    const cny = parseFloat(amount);
    const cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
    const cnIntRadice = new Array("", "拾", "佰", "仟");
    const cnIntUnits = new Array("", "万", "亿", "兆");
    const cnDecUnits = new Array("角", "分", "毫", "厘");
    const cnInteger = "整";
    const cnIntLast = "元";
    const maxNum = 1e15;
    let integerNum = "";
    let decimalNum = "";
    let chineseStr = "";
    let parts = [];
    if (cny >= maxNum)
      return "";
    if (cny == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    if (amount.indexOf(".") == -1) {
      integerNum = amount;
      decimalNum = "";
    } else {
      parts = amount.split(".");
      integerNum = parts[0];
      decimalNum = parts[1].substring(0, 4);
    }
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      let IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        let n = integerNum.substring(i, i + 1);
        let p = IntLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n == "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    if (decimalNum != "") {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substring(i, i + 1);
        if (n != "0") {
          chineseStr += cnNums[parseInt(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr == "") {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == "") {
      chineseStr += cnInteger;
    }
    return chineseStr;
  }
};
const utils$2 = {
  titleCase: utils$1.titleCase,
  compressLetter: utils$1.compressLetter,
  sleep: utils$1.sleep,
  trim: utils$1.trim,
  trimAll: utils$1.trimAll,
  replaceAll: utils$1.replaceAll,
  numberFormatter: utils$1.numberFormatter,
  moneyFormatter: utils$1.moneyFormatter,
  dateFormatter: utils$1.dateFormatter,
  rgbToHex: utils$1.rgbToHex,
  hexToRGB: utils$1.hexToRGB,
  unique: utils$1.unique,
  distinctArray: utils$1.distinctArray,
  getDateTimeSlot: utils$1.getDateTimeSlot,
  getUrlParam: utils$1.getUrlParam,
  getUUID: utils$1.getUUID,
  debounce: utils$1.debounce,
  throttle: utils$1.throttle,
  formatTimeAgo: utils$1.formatTimeAgo,
  getRandomHexColor: utils$1.getRandomHexColor,
  convertCurrency: utils$1.convertCurrency
};
const _style_0 = { "fui-btn__flex-center": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-section__title": { "": { "marginTop": "72rpx" } } };
const _sfc_main = {
  data() {
    return {
      num: 0
    };
  },
  onLoad() {
    this.throttle = utils$2.throttle(() => {
      this.num++;
    }, 3e3);
  },
  methods: {
    titleCase() {
      const text = "english";
      const val = utils$2.titleCase(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:107", val);
      uni.fui.toast(val);
    },
    compressLetter() {
      const text = "aabbbcddddddddd";
      const val = utils$2.compressLetter(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:113", val);
      uni.fui.toast(val);
    },
    sleep() {
      utils$2.sleep(1e3);
      uni.fui.toast("1000ms后执行！");
    },
    trim() {
      const text = " abcd ";
      const val = utils$2.trim(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:123", val);
      uni.fui.toast(`字符串${val}`);
    },
    trimAll() {
      const text = " a b c d ";
      const val = utils$2.trimAll(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:129", val);
      uni.fui.toast(`字符串${val}`);
    },
    replaceAll() {
      const text = "##a###b#######c#";
      const val = utils$2.replaceAll(text, "#", "");
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:135", val);
      uni.fui.toast(val);
    },
    numberFormatter() {
      const text = "15715600012";
      const val = utils$2.numberFormatter(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:141", val);
      uni.fui.toast(val);
    },
    moneyFormatter() {
      const text = "2021";
      const val = utils$2.moneyFormatter(text);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:147", val);
      uni.fui.toast(val);
    },
    dateFormatter(type) {
      const date = "2023-10-30 22:36:15";
      const format = ["y-m-d h:i", "y/m/d", "m-d", "h:i", "i:s", "y年m月d日 h时i分s秒"][type - 1];
      const val = utils$2.dateFormatter(date, format);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:155", val);
      uni.fui.toast(val);
    },
    dateFormatAgo() {
      const date = "2023-10-15 22:56:15";
      const val = utils$2.formatTimeAgo(date);
      formatAppLog("log", "at pages/component/js/utils/utils.nvue:161", val);
      uni.fui.toast(val);
    },
    btnThrottle() {
      this.throttle();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Utils"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Utils 工具类，更多使用请查看文档。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "英文首字母大写"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "转换：english"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "首字母转大写",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.titleCase
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "压缩连续的字母字符串"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "压缩：aabbbcddddddddd"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "压缩",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.compressLetter
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "等待多少毫秒再执行 ，同步阻塞"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "等待 1000毫秒",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.sleep
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "去字符串左右空格"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "字符串 abcd "),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "去左右空格",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.trim
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "去字符串所有空格"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "字符串 a b c d "),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "去所有空格",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.trimAll
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "替换所有相同字符串"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "将字符串：##a###b#######c# 中#替换为空"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "替换",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.replaceAll
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "格式化手机号码"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "手机号：15715600012"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "格式化",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.numberFormatter
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "格式化金额，保留两位小数"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "金额：2021"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "格式化",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.moneyFormatter
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "格式化日期"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "日期原数据：2023-10-30 22:36:15"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "年-月-日 时:分",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[0] || (_cache[0] = ($event) => $options.dateFormatter(1))
          }),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "年/月/日",
            bold: "",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.dateFormatter(2))
          }),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "月-日",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[2] || (_cache[2] = ($event) => $options.dateFormatter(3))
          }),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "时:分",
            bold: "",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.dateFormatter(4))
          }),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "分:秒",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[4] || (_cache[4] = ($event) => $options.dateFormatter(5))
          }),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "*年*月*日 *时*分*秒",
            bold: "",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.dateFormatter(6))
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "日期格式化为多久之前"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode("u-text", { class: "fui-page__desc" }, "之前日期：2023-10-15 22:56:15"),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "格式化",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.dateFormatAgo
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "函数节流，连续触发事件"),
        createElementVNode("view", { class: "fui-btn__flex-center" }, [
          createElementVNode(
            "u-text",
            { class: "fui-page__desc" },
            "3s执行一次，6s执行2次...：" + toDisplayString($data.num),
            1
            /* TEXT */
          ),
          createVNode(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "执行 +1",
            bold: "",
            margin: ["24rpx"],
            onClick: $options.btnThrottle
          }, null, 8, ["onClick"])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "其他功能"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "除以上功能以外，还有：日期时间格式化，RGB颜色转十六进制颜色，十六进制颜色转RGB颜色，获取唯一标识，获取uuid，简单数组合并去重，获取日期时间段，获取Url参数，函数防抖，函数节流等功能，具体使用请查看文档。")
      ])
    ])
  ]);
}
const utils = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/ROG G513RW-HF224W/Documents/HBuilderProjects/FirstUI-nvue 组件库/pages/component/js/utils/utils.nvue"]]);
export {
  utils as default
};
