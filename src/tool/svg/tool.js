import { XLINK_ATTRIBUTE } from "./config.js";

// 新建节点
export function toNode(tagname) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagname);
};

// 设置属性
export function setAttribute(el, key, value) {

    // 需要使用xlink命名空间的xml属性
    if (XLINK_ATTRIBUTE.indexOf(key) > -1) {
        el.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:' + key, value);
    }

    // 否则
    else {
        el.setAttribute(key, value);
    }
};

// 获取属性
export function getAttribute(el, key) {
    if (XLINK_ATTRIBUTE.indexOf(key) > -1) key = 'xlink:' + key;
    return el.getAttribute(key);
};

export function full(el, config) {
    setAttribute(el, "stroke", config.strokeStyle);
    setAttribute(el, "fill", config.fillStyle);
    setAttribute(el, "stroke-dasharray", config.lineDash.join(','));
};

export function fill(el, config) {
    setAttribute(el, "fill", config.fillStyle);
};

export function stroke(el, config) {
    setAttribute(el, "stroke", config.strokeStyle);
    setAttribute(el, "fill", "none");
    setAttribute(el, "stroke-dasharray", config.lineDash.join(','));
};