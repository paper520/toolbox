/**
 * 节点创建
 * @param {string} tagname 节点名称
 * @returns {Element} 返回创建的节点
 */
export default function (tagname) {
    if (['svg', 'circle', 'path', 'rect', 'ellipse', 'line', 'polyline', 'polygon', 'text'].indexOf(tagname) > -1) {
        return {
            type: "svg",
            value: document.createElementNS('http://www.w3.org/2000/svg', tagname)
        };
    } else {
        return {
            type: "html",
            value: document.createElement(tagname)
        };
    }
};
