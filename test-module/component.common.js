/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external "vue"
var external_vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/EditorJs/component/EditorJs.vue?vue&type=template&id=ba12ea00&ts=true

var _hoisted_1 = { id: "editorjs" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,external_vue_namespaceObject.openBlock)(), (0,external_vue_namespaceObject.createElementBlock)("div", _hoisted_1));
}

;// CONCATENATED MODULE: ./src/components/EditorJs/component/EditorJs.vue?vue&type=template&id=ba12ea00&ts=true

;// CONCATENATED MODULE: external "@editorjs/editorjs"
var editorjs_namespaceObject = require("@editorjs/editorjs");
var editorjs_default = /*#__PURE__*/__webpack_require__.n(editorjs_namespaceObject);
;// CONCATENATED MODULE: external "editorjs-drag-drop"
var external_editorjs_drag_drop_namespaceObject = require("editorjs-drag-drop");
var external_editorjs_drag_drop_default = /*#__PURE__*/__webpack_require__.n(external_editorjs_drag_drop_namespaceObject);
;// CONCATENATED MODULE: ./src/components/EditorJs/component/i18n.ts
var EDITOR_I18N = {
    messages: {
        ui: {
            blockTunes: {
                toggler: {
                    'Click to tune': 'Нажмите, чтобы настроить',
                    'or drag to move': 'или перетащите',
                },
            },
            inlineToolbar: {
                converter: {
                    'Convert to': 'Конвертировать в',
                },
            },
            toolbar: {
                toolbox: {
                    Add: 'Добавить',
                    Filter: 'Поиск',
                },
            },
        },
        toolNames: {
            ImagePlugin: 'Галерея',
            Attachment: 'Файл',
            Text: 'Параграф',
            Heading: 'Заголовок',
            List: 'Список',
            Warning: 'Примечание',
            Checklist: 'Чеклист',
            Quote: 'Цитата',
            Caption: 'Подпись',
            Code: 'Код',
            Delimiter: 'Разделитель',
            'Raw HTML': 'HTML-фрагмент',
            Table: 'Таблица',
            Link: 'Ссылка',
            Marker: 'Маркер',
            Bold: 'Полужирный',
            Italic: 'Курсив',
            InlineCode: 'Моноширинный',
            Image: 'Картинка',
            Odesli: 'Музыка',
        },
        tools: {
            warning: {
                Title: 'Название',
                Message: 'Сообщение',
            },
            link: {
                'Add a link': 'Вставьте ссылку',
            },
            stub: {
                'The block can not be displayed correctly.': 'Блок не может быть отображен',
            },
            embed: {
                'Enter a caption': 'Описание',
            },
            Odesli: {
                'Add a link on Spotify, Apple Music, Yandex Music, YouTube Music': 'Ссылка на трек/альбом/плейлист Spotify, Apple Music, Яндекс Музыку, YouTube Music',
                'Only links': 'Только ссылки',
                'Cover & links': 'Обложка и ссылки',
                'Video & links': 'Видео и ссылки',
            },
        },
        blockTunes: {
            delete: {
                Delete: 'Удалить',
            },
            moveUp: {
                'Move up': 'Переместить вверх',
            },
            moveDown: {
                'Move down': 'Переместить вниз',
            },
        },
    },
};

;// CONCATENATED MODULE: external "@editorjs/header"
var header_namespaceObject = require("@editorjs/header");
var header_default = /*#__PURE__*/__webpack_require__.n(header_namespaceObject);
;// CONCATENATED MODULE: external "@editorjs/list"
var list_namespaceObject = require("@editorjs/list");
var list_default = /*#__PURE__*/__webpack_require__.n(list_namespaceObject);
;// CONCATENATED MODULE: external "@editorjs/image"
var image_namespaceObject = require("@editorjs/image");
var image_default = /*#__PURE__*/__webpack_require__.n(image_namespaceObject);
;// CONCATENATED MODULE: external "@editorjs/embed"
var embed_namespaceObject = require("@editorjs/embed");
var embed_default = /*#__PURE__*/__webpack_require__.n(embed_namespaceObject);
;// CONCATENATED MODULE: external "editorjs-telegram"
var external_editorjs_telegram_namespaceObject = require("editorjs-telegram");
var external_editorjs_telegram_default = /*#__PURE__*/__webpack_require__.n(external_editorjs_telegram_namespaceObject);
;// CONCATENATED MODULE: external "tslib"
var external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Paragraph/consts.ts
var TOOLBOX_ICON = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0.2 -0.3 9 11.4\" width=\"12\" height=\"14\">\n        <path d=\"M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Paragraph/Paragraph.ts


var Paragraph = /** @class */ (function () {
    function Paragraph(_a) {
        var data = _a.data, config = _a.config, api = _a.api, readOnly = _a.readOnly;
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "readOnly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_CSS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_placeholder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_preserveBlank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api = api;
        this.readOnly = readOnly;
        this._CSS = {
            block: this.api.styles.block,
            wrapper: 'ce-paragraph',
        };
        if (!this.readOnly) {
            this.onKeyUp = this.onKeyUp.bind(this);
        }
        var _b = config || {}, _c = _b.preserveBlank, preserveBlank = _c === void 0 ? false : _c, _d = _b.placeholder, placeholder = _d === void 0 ? Paragraph.DEFAULT_PLACEHOLDER : _d;
        this._placeholder = placeholder;
        this._data = {};
        this._element = this.drawView();
        this._preserveBlank = preserveBlank;
        this.data = data;
    }
    Object.defineProperty(Paragraph.prototype, "onKeyUp", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var code = _a.code;
            return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
                var textContent, matches, _b, blocks, caret, index, blockData, blockDataItem;
                return (0,external_tslib_namespaceObject.__generator)(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            textContent = this._element.textContent;
                            if (code === 'Backspace' || code === 'Delete') {
                                if (textContent === '') {
                                    this._element.innerHTML = '';
                                }
                            }
                            matches = textContent === null || textContent === void 0 ? void 0 : textContent.match(/^(1\.)\s/);
                            if (!matches) return [3 /*break*/, 2];
                            _b = this.api, blocks = _b.blocks, caret = _b.caret;
                            index = blocks.getCurrentBlockIndex();
                            return [4 /*yield*/, blocks.composeBlockData('list')];
                        case 1:
                            blockData = _c.sent();
                            blockDataItem = (textContent === null || textContent === void 0 ? void 0 : textContent.replace(matches[0], '')) || '';
                            blockData.items = [blockDataItem];
                            blockData.style = matches[0].match(/\d/) ? 'ordered' : 'unordered';
                            blocks.insert('list', blockData, {}, index, true, true);
                            caret.setToBlock(index);
                            _c.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        }
    });
    Object.defineProperty(Paragraph.prototype, "drawView", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var div = document.createElement('DIV');
            div.classList.add(this._CSS.wrapper, this._CSS.block);
            div.contentEditable = 'false';
            div.dataset.placeholder = this.api.i18n.t(this._placeholder);
            if (!this.readOnly) {
                div.contentEditable = 'true';
                div.addEventListener('keyup', this.onKeyUp);
            }
            return div;
        }
    });
    Object.defineProperty(Paragraph.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._element;
        }
    });
    Object.defineProperty(Paragraph.prototype, "merge", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            this.data = {
                text: this.data.text + data.text,
            };
        }
    });
    Object.defineProperty(Paragraph.prototype, "validate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (savedData) {
            return !(savedData.text.trim() === '' && !this._preserveBlank);
        }
    });
    Object.defineProperty(Paragraph.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (toolsContent) {
            return {
                text: toolsContent.innerHTML,
            };
        }
    });
    Object.defineProperty(Paragraph.prototype, "onPaste", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var detail = _a.detail;
            this.data = {
                text: detail.data.innerHTML,
            };
        }
    });
    Object.defineProperty(Paragraph, "DEFAULT_PLACEHOLDER", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph, "conversionConfig", {
        get: function () {
            return {
                export: 'text',
                import: 'text', // to covert other block's exported string to Paragraph, fill 'text' property of tool data
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph, "sanitize", {
        get: function () {
            return {
                text: {
                    br: true,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph, "isReadOnlySupported", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "data", {
        get: function () {
            this._data.text = this._element.innerHTML;
            return this._data;
        },
        set: function (data) {
            this._data = data || {};
            this._element.innerHTML = this._data.text || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph, "pasteConfig", {
        get: function () {
            return {
                tags: ['P'],
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph, "toolbox", {
        get: function () {
            return {
                icon: TOOLBOX_ICON,
                title: 'Text',
            };
        },
        enumerable: false,
        configurable: true
    });
    return Paragraph;
}());
/* harmony default export */ var Paragraph_Paragraph = (Paragraph);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Paragraph/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/entities/BaseInlineTool.ts
var BaseInlineTool = /** @class */ (function () {
    function BaseInlineTool(_a) {
        var api = _a.api;
        Object.defineProperty(this, "button", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: document.createElement('button')
        });
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.api = api;
    }
    Object.defineProperty(BaseInlineTool, "isInline", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseInlineTool.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
            this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseInlineTool.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.button.type = 'button';
            this.button.innerHTML = this.buttonIcon;
            this.button.classList.add(this.api.styles.inlineToolButton);
            return this.button;
        }
    });
    Object.defineProperty(BaseInlineTool.prototype, "surround", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (range) {
            if (this.state) {
                this.unwrap(range);
                return;
            }
            this.wrap(range);
        }
    });
    Object.defineProperty(BaseInlineTool.prototype, "wrap", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (range) {
            var selectedText = range.extractContents();
            var container = this.createContainer(selectedText.textContent || '');
            range.insertNode(container);
            this.api.selection.expandToTag(container);
        }
    });
    Object.defineProperty(BaseInlineTool.prototype, "unwrap", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (range) {
            var container = this.api.selection.findParentTag(this.tag, this.class);
            if (!container) {
                return;
            }
            var markText = container.textContent || '';
            var markParent = container.parentElement;
            var selectedContent = range.cloneContents();
            var selectedText = selectedContent.textContent || '';
            var isSelectedInsideMark = range.startContainer === range.endContainer;
            var isNotSelectedWholeMark = selectedText.length !== markText.length;
            if (isSelectedInsideMark && isNotSelectedWholeMark) {
                var rangeStart = range.startOffset;
                var rangeEnd = range.endOffset;
                var firstPart = markText.slice(0, rangeStart);
                var secondPart = markText.slice(rangeStart, rangeEnd);
                var thirdPart = markText.slice(rangeEnd);
                var firstMark = firstPart && this.createContainer(firstPart);
                var selectedText_1 = document.createTextNode(secondPart);
                var thirdMark = thirdPart && this.createContainer(thirdPart);
                container.after(firstMark, selectedText_1, thirdMark);
                container.remove();
                range.selectNodeContents(selectedText_1);
                markParent === null || markParent === void 0 ? void 0 : markParent.normalize();
                return;
            }
            range.deleteContents();
            if (!container.textContent) {
                container.remove();
            }
            var newTextNode = document.createTextNode(selectedText);
            range.insertNode(newTextNode);
            markParent === null || markParent === void 0 ? void 0 : markParent.normalize();
        }
    });
    Object.defineProperty(BaseInlineTool.prototype, "createContainer", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            var container = document.createElement(this.tag);
            this.class && container.classList.add(this.class);
            container.innerHTML = text;
            return container;
        }
    });
    Object.defineProperty(BaseInlineTool.prototype, "checkState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var mark = this.api.selection.findParentTag(this.tag);
            this.state = !!mark;
        }
    });
    return BaseInlineTool;
}());
/* harmony default export */ var entities_BaseInlineTool = (BaseInlineTool);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/StrikeTool/consts.ts
var STRIKE_TOOL_ICON = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-type-strikethrough\" viewBox=\"0 0 16 16\">\n        <path d=\"M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/StrikeTool/StrikeTool.ts



var StrikeTool = /** @class */ (function (_super) {
    (0,external_tslib_namespaceObject.__extends)(StrikeTool, _super);
    function StrikeTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        Object.defineProperty(_this, "tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'S'
        });
        Object.defineProperty(_this, "class", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(_this, "buttonIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: STRIKE_TOOL_ICON
        });
        return _this;
    }
    Object.defineProperty(StrikeTool.prototype, "sanitize", {
        get: function () {
            return { s: {} };
        },
        enumerable: false,
        configurable: true
    });
    return StrikeTool;
}(entities_BaseInlineTool));
/* harmony default export */ var StrikeTool_StrikeTool = (StrikeTool);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/StrikeTool/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/MarkerTool/consts.ts
var BUTTON_INNER_HTML = "\n    <svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n        <path fill=\"currentColor\" d=\"M510.7,253.4L308.2,53.8c-1.8-1.8-4.6-1.8-6.4,0l0,0L165.3,188.3c-1.8,1.8-1.8,4.7-0.1,6.5l0.1,0.1l22.9,22.5l-67,65.9c-1.8,1.8-1.8,4.7-0.1,6.5l0.1,0.1l22.6,22.2L35.7,418.8H4.6c-2.5,0-4.6,2.1-4.6,4.6v31.5c0,2.5,2.1,4.6,4.6,4.6h197.1c1.2,0,2.3-0.5,3.2-1.3l43.5-43.2l23.1,22.7c1.8,1.8,4.6,1.8,6.4,0l0,0l66.9-66.1l22.9,22.6c1.8,1.8,4.6,1.8,6.4,0l0,0l136.4-134.4C512.5,258.1,512.5,255.2,510.7,253.4z M186.2,418.5H94.6l76.8-76l45.8,45.1L186.2,418.5z M274.7,383l-98-96.5l39.2-38.6l98,96.5L274.7,383z M371,339.5l-150.2-148l84.2-82.9l150.2,148L371,339.5z\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/MarkerTool/MarkerTool.ts



var MarkerTool = /** @class */ (function (_super) {
    (0,external_tslib_namespaceObject.__extends)(MarkerTool, _super);
    function MarkerTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        Object.defineProperty(_this, "tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MARK'
        });
        Object.defineProperty(_this, "class", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'bg-biege'
        });
        Object.defineProperty(_this, "buttonIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: BUTTON_INNER_HTML
        });
        return _this;
    }
    Object.defineProperty(MarkerTool.prototype, "sanitize", {
        get: function () {
            return { mark: {} };
        },
        enumerable: false,
        configurable: true
    });
    return MarkerTool;
}(entities_BaseInlineTool));
/* harmony default export */ var MarkerTool_MarkerTool = (MarkerTool);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/MarkerTool/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Poll/consts.ts
var consts_TOOLBOX_ICON = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-line-fill\" viewBox=\"0 0 16 16\">\n        <path d=\"M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z\"/>\n    </svg>\n";
var WRAPPER_ELEMENT_CLASSNAMES = [
    'rounded',
    'border',
    'border-gray-200',
    'p-6',
];
var HEADER_ELEMENT_CLASSNAMES = [
    'poll-header',
    'font-bold',
    'mb-4',
];
var INPUT_ELEMENT_CLASSNAMES = [
    'w-full',
    'flex-1',
    'p-1',
    'text-black',
    'border',
    'border-gray-200',
    'rounded',
];

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Poll/Poll.ts

var Poll = /** @class */ (function () {
    function Poll(_a) {
        var data = _a.data;
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        var _b = data || {}, _c = _b.header, header = _c === void 0 ? '' : _c, _d = _b.id, id = _d === void 0 ? 0 : _d, variants = _b.variants;
        this.data = { header: header, id: id, variants: variants };
    }
    Object.defineProperty(Poll, "toolbox", {
        get: function () {
            return {
                title: 'Опрос',
                icon: consts_TOOLBOX_ICON,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Poll.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a, _b;
            this.wrapper = document.createElement('div');
            (_a = this.wrapper.classList).add.apply(_a, WRAPPER_ELEMENT_CLASSNAMES);
            var header = this.createInput();
            (_b = header.classList).add.apply(_b, HEADER_ELEMENT_CLASSNAMES);
            header.placeholder = 'Заголовок опроса';
            header.value = this.data.header;
            this.wrapper.appendChild(header);
            var variants = document.createElement('div');
            variants.classList.add('space-y-3');
            this.fillVariants(variants);
            this.wrapper.appendChild(variants);
            header.addEventListener('keydown', function (event) {
                var _a;
                var which = event.which, keyCode = event.keyCode, preventDefault = event.preventDefault, stopPropagation = event.stopPropagation;
                var charCode = which || keyCode;
                if (charCode === 9 || charCode === 13) {
                    preventDefault();
                    stopPropagation();
                    (_a = variants.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
                    return false;
                }
            });
            return this.wrapper;
        }
    });
    Object.defineProperty(Poll.prototype, "createInput", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var input = document.createElement('input');
            (_a = input.classList).add.apply(_a, INPUT_ELEMENT_CLASSNAMES);
            return input;
        }
    });
    Object.defineProperty(Poll.prototype, "fillVariants", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (variantsElement) {
            var _this = this;
            var container = document.createElement('div');
            container.classList.add('space-y-2');
            variantsElement.appendChild(container);
            if (this.data && this.data.variants) {
                this.data.variants.forEach(function (variant) {
                    var row = _this.getRow(container, variant);
                    container.appendChild(row);
                });
            }
            else {
                for (var i = 0; i < 3; i++) {
                    container.appendChild(this.getRow(container));
                }
            }
            var addButton = document.createElement('button');
            addButton.classList.add('btn', 'btn-sm');
            addButton.innerHTML = 'Добавить вариант ответа';
            addButton.addEventListener('click', function () {
                container.appendChild(_this.getRow(container));
                var inputs = container.querySelectorAll('input');
                var focused = false;
                inputs.forEach(function (input, index) {
                    if (!focused && !input.value) {
                        input.focus();
                        // eslint-disable-next-line no-console
                        console.log("focused ".concat(index));
                        focused = true;
                    }
                });
            });
            container.addEventListener('keydown', function (event) {
                var target = event.target, which = event.which, keyCode = event.keyCode, preventDefault = event.preventDefault, stopPropagation = event.stopPropagation;
                var charCode = which || keyCode;
                if (charCode === 9 || charCode === 13) {
                    var inputs = container.querySelectorAll('input');
                    var index_1 = 0;
                    inputs.forEach(function (inputItem, itemIndex) {
                        if (inputItem === target) {
                            index_1 = itemIndex;
                        }
                    });
                    var nextInput = inputs[index_1 + 1];
                    if (nextInput) {
                        preventDefault();
                        stopPropagation();
                        nextInput.focus();
                        return false;
                    }
                }
            });
            variantsElement.appendChild(addButton);
        }
    });
    Object.defineProperty(Poll.prototype, "getRow", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (container, variant) {
            var _this = this;
            var wrapper = document.createElement('div');
            wrapper.classList.add('flex', 'items-center', 'space-x-2');
            var input = this.createInput();
            var _a = variant || {}, _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? '' : _c;
            input.name = id;
            input.value = label;
            input.classList.add('poll-variant');
            input.placeholder = 'Вариант ответа';
            input.addEventListener('focus', function (_a) {
                var target = _a.target;
                var inputList = container.querySelectorAll('.poll-variant');
                var total = inputList.length;
                var index = 0;
                inputList.forEach(function (listItem, itemIndex) {
                    if (listItem === target) {
                        index = itemIndex;
                    }
                });
                var isLast = index === total - 1;
                isLast && container.appendChild(_this.getRow(container));
            });
            var xButton = document.createElement('button');
            xButton.classList.add('btn', 'btn-sm', 'btn-danger');
            xButton.innerHTML = '&times';
            xButton.addEventListener('click', function () {
                wrapper.remove();
            });
            wrapper.appendChild(input);
            wrapper.appendChild(xButton);
            return wrapper;
        }
    });
    Object.defineProperty(Poll.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (blockContent) {
            var _a;
            var header = (_a = blockContent.querySelector('.poll-header')) === null || _a === void 0 ? void 0 : _a.value;
            var variants = [];
            var pollVariantInputs = blockContent.querySelectorAll('.poll-variant');
            if (pollVariantInputs) {
                pollVariantInputs.forEach(function (_a) {
                    var value = _a.value, name = _a.name;
                    var label = value.trim();
                    label && variants.push({
                        id: name ? Number(name) : 0,
                        label: label,
                    });
                });
            }
            return {
                id: this.data.id,
                header: header,
                variants: variants,
            };
        }
    });
    return Poll;
}());
/* harmony default export */ var Poll_Poll = (Poll);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Poll/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Stream/consts.ts
var Stream_consts_TOOLBOX_ICON = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-view-list\" viewBox=\"0 0 16 16\">\n        <path d=\"M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z\"/>\n    </svg>\n";
var consts_WRAPPER_ELEMENT_CLASSNAMES = [
    'rounded',
    'border',
    'border-gray-200',
    'p-6',
];
var INPUT_CLASSNAMES = [
    'w-full',
    'flex-1',
    'p-1',
    'text-black',
    'border',
    'border-gray-200',
    'rounded',
];

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Stream/Stream.ts

var Stream = /** @class */ (function () {
    function Stream(_a) {
        var data = _a.data;
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
    Object.defineProperty(Stream, "toolbox", {
        get: function () {
            return {
                title: 'Трансляция',
                icon: Stream_consts_TOOLBOX_ICON,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var _b;
            this.wrapper = document.createElement('div');
            (_a = this.wrapper.classList).add.apply(_a, consts_WRAPPER_ELEMENT_CLASSNAMES);
            var input = this.createInput();
            input.placeholder = 'Введите айдишник трансляции YaddaStream';
            input.value = (_b = this.data.stream_id) !== null && _b !== void 0 ? _b : '';
            this.wrapper.appendChild(input);
            return this.wrapper;
        }
    });
    Object.defineProperty(Stream.prototype, "createInput", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var input = document.createElement('input');
            (_a = input.classList).add.apply(_a, INPUT_CLASSNAMES);
            return input;
        }
    });
    Object.defineProperty(Stream.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (element) {
            var input = element.querySelector('input');
            return {
                stream_id: input === null || input === void 0 ? void 0 : input.value,
            };
        }
    });
    return Stream;
}());
/* harmony default export */ var Stream_Stream = (Stream);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Stream/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Odesli/consts.ts
/* eslint-disable max-len */
var MUSIC_LINK_REGEX = /^https?\:\/\/[\w\-\_\.]{0,}(?:music\.amazon|music\.apple|podcasts\.apple|audiomack|audius|anghami|bandcamp|boomplay|deezer|song|album|pods|pandora|soundcloud|spinrilla|spotify|tidal|music\.yandex|music\.youtube)\.[\w\.\-\_]{0,10}\/\S+$/i;
var SERVICE_URL_REGEX = /^https?\:\/\/[\w\-\_\.]{0,}(?:music\.amazon|music\.apple|podcasts\.apple|audiomack|audius|anghami|bandcamp|boomplay|deezer|song|album|pods|pandora|soundcloud|spinrilla|spotify|tidal|music\.yandex|music\.youtube)\.[\w\.\-\_]{0,10}\/\S+$/i;
var Odesli_consts_TOOLBOX_ICON = "\n    <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1365.333\" height=\"1365.333\" viewBox=\"0 0 1024 1024\">\n        <path d=\"M477 1C363.6 9.8 262.2 51.7 177 124.9c-15.2 13.1-45 43.5-58 59.1C56.7 259.1 17.3 348.1 4.6 443 1.2 468.3.5 480.2.5 512c0 32.9.7 43.7 4.6 72 15 108.8 66.4 211.4 144.9 290 79.3 79.3 182.7 130.6 293 145.4 25.3 3.4 37.2 4.1 69 4.1 32.9 0 43.7-.7 72-4.6 108.7-15 211.5-66.4 290-144.9 79.3-79.3 130.6-182.7 145.4-293 3.4-25.3 4.1-37.2 4.1-69 0-32.9-.7-43.7-4.6-72-13.4-96.5-54.6-187.2-119.8-263-13.1-15.2-43.5-45-59.1-58-56.1-46.6-119.7-80.3-188-99.5-31.4-8.9-55.1-13.4-89.5-17.1C545.8.6 493.4-.2 477 1zm70.5 76c81.8 7 158.5 35.9 223.3 83.9 18 13.4 28.5 22.4 46.1 39.6 24.6 24.1 40.6 43.3 58.6 70.5 38.2 57.5 60 116.3 69.6 187 2.6 20 3.7 66 2 87.5-10.9 134.7-81.1 254.6-192.6 329-20.7 13.8-34.3 21.6-54 31.1-42.3 20.3-84.8 32.8-134.5 39.5-20 2.6-66 3.7-87.5 2-134.7-10.9-254.6-81.1-329-192.6-13.8-20.7-21.6-34.3-31.1-54-20.3-42.4-32.7-84.7-39.5-134.5-2.6-20-3.7-66-2-87.5 7.5-92.1 41.9-176.3 101-247 10.1-12.1 35.2-37.7 47.6-48.4 58.3-50.8 130.9-86.1 206-100 11.1-2.1 38.8-5.8 48-6.4 12-.8 57-.6 68 .3z\"/>\n        <path d=\"m489.4 214.9-72.1 2.7-4.8 2.4c-2.7 1.4-6.1 4.3-7.8 6.8-6.3 8.7-7.9.3 30.7 159.7 19.1 78.7 34.9 143.6 35.2 144.4.3.9-.1 1.1-1.3.6-5.8-2.2-17.1-3.7-27.8-3.7-15.9.1-101.2 11.9-112.9 15.7-19.3 6.3-36.6 18.9-48.2 35.1-5.4 7.6-12.7 22.8-14.8 30.9-4.1 16.1-4.2 25.7-.5 51.7 3.2 22.4 9.1 37 21.3 52.4 17.9 22.7 49.6 37 78 35.1 10.3-.7 94-12.3 102.4-14.3 21.3-4.8 43.3-20.3 56.1-39.3 8.3-12.2 14.1-27.8 15.7-42.1.6-5.5.5-6-1.2-5.9-1.1 0-11.1 1.2-22.3 2.7l-20.3 2.7-2.3 6.2c-5.5 15.3-18.1 27.4-33 31.8-8.9 2.7-98.4 14.8-104 14.1-12.6-1.6-25.5-8.2-33.3-17.1-7.4-8.5-11-17.1-13.2-32.5-4.2-28.3-1.5-40.7 11.5-54.8 6.5-7.1 12.7-11.2 21-14.1 8.4-2.9 99.1-15.4 105.4-14.5 2.5.3 8 1.7 12.1 3l7.5 2.4 29.3-3.9c16.1-2.1 29.5-4 29.7-4.3.2-.2-12.9-54.3-29.1-120.2-16.1-66-29.2-120.2-28.9-120.4.3-.3 30.1-1.6 66.2-2.9 65.7-2.4 65.8-2.4 70.9-4.8 6.1-3 9.9-8 11.4-15.1 1.1-4.9.7-6.8-8-41-5-19.7-9.8-37.5-10.6-39.6-2-4.6-6.8-9.2-11.6-11.2-4.7-2-6.4-2-96.4 1.3z\"/>\n        <path d=\"M639.9 354.9c-71.3 2.7-71.5 2.7-76.5 5.2-5.9 2.9-11 9.8-11.9 16.3-.6 3.6 3.5 21.2 24.4 106.3 13.8 56 25.1 102.1 25.1 102.4 0 .3-3.3-.3-7.2-1.4-5.7-1.5-10.6-2-21.8-2-12.7 0-20.3.8-60 6.6-26 3.8-48.3 7.5-52 8.7-36.3 11.8-61.6 42.8-66.5 81.7l-.7 5.3 2.9-.5c1.5-.3 11.6-1.7 22.3-3.1 10.7-1.4 19.5-2.6 19.6-2.7.1-.1.9-2.5 1.8-5.4 3.9-11.8 15.2-24.6 26.7-30.1 7.8-3.7 10.9-4.3 65.3-11.8l41.8-5.8 7.8 1.6c16.5 3.4 29.8 13.5 37 28.2 3.5 7 4.3 10 6 22.1 1.1 7.7 2 16.5 2 19.5 0 20.5-14.6 41.1-34.2 48-3.2 1.1-25.5 4.7-53.6 8.6l-48.2 6.7-7.8-1.5c-4.3-.9-9.7-2.5-12.1-3.6l-4.2-2.1-26.2 4.5c-14.4 2.5-26.4 4.7-26.6 4.9-.9 1 5.8 9.2 13 15.9 11.6 10.8 25.8 18.5 41.6 22.7 6 1.7 11 2.2 21.8 2.3 12.2 0 19.7-.8 58-6.2 24.2-3.4 47.6-7.1 51.9-8.2 20.4-5.1 41.3-19.9 53.6-38 10.6-15.7 17-36.1 17-54.5 0-14.3-3.4-29.8-27.9-129.1-13.7-55.5-24.7-101.1-24.5-101.4.3-.2 29.8-1.5 65.7-2.7 71.8-2.6 70.8-2.5 77.3-9.1 4.2-4.3 6.9-12.6 5.9-18-.4-2.1-4.5-18.6-9.2-36.7-9.1-35.5-10.3-38.5-17.5-43.2-3.9-2.6-4.9-2.8-16.2-3-6.7-.1-44.3 1.1-83.7 2.6z\"/>\n    </svg>\n";
var CE_ODESLI_SMALL_ICON = "\n    <svg width=\"13\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M4.9 10.929a3.72 3.72 0 0 0 2.41.558l-.873.873a3.723 3.723 0 1 1-5.264-5.266L3.027 5.24a3.722 3.722 0 0 1 5.256-.008L6.817 6.7a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009L2.656 8.579a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.723 3.723 0 1 1 5.264 5.266L9.539 9.26a3.722 3.722 0 0 1-5.256.008L5.749 7.8a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009L9.91 5.921a1.626 1.626 0 0 0-2.244-2.35z\"/>\n    </svg>\n";
var CE_ODESLI_STANDARD_ICON = "\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n        <path d=\"M36 9.6c-3.6 1.6-8 5.2-8 6.6 0 .4 32.3.8 71.9.8h71.8l3.4 2.3c1.8 1.2 4.4 3.8 5.6 5.6l2.3 3.4v71.8c0 39.6.4 71.9.8 71.9 1.5 0 5.1-4.4 6.7-8.2 1.3-3.3 1.5-12.6 1.5-71.5 0-46.1-.4-69.1-1.1-71.8-1.4-5-6.4-10-11.4-11.4-2.7-.7-25.6-1.1-72-1.1C49 8.1 39 8.3 36 9.6z\"/>\n        <path d=\"M18.5 26.4c-3.9 1.8-7.9 6.3-9.4 10.5-1.5 4.7-1.6 136.9 0 142.6 1.4 5 6.4 10 11.4 11.4 2.7.7 25.7 1.1 72 1.1 64 0 68.2-.2 72-1.9 4.6-2.1 7.9-5.4 9.4-9.4.8-1.9 1.1-25.6 1.1-72.6V38.4l-2.2-4.4c-1.7-3.3-3.5-5.1-6.8-6.8l-4.4-2.2H91.5c-56.3.1-70.6.3-73 1.4zM108.4 44c11.9 3 20.8 8.2 30.1 17.5 13.3 13.3 19.5 28.3 19.5 46.9-.1 26.5-14.2 48.6-38.5 60.2-18 8.6-38.4 8.3-57.5-.8-6.8-3.3-10.1-5.7-17.1-12.7-7-7-9.4-10.3-12.7-17.1-11.4-23.8-8.8-49.7 6.9-70.6 8.2-10.8 23.3-20.6 36.6-23.8 8.8-2.2 23.5-2 32.7.4z\"/>\n        <path d=\"M83 59.1c-7 1.2-18.2 6.5-23.7 11.4-4.4 3.7-5.3 6.1-3.1 8.3 2 2 4.4 1.4 8.7-2.2 6.2-5.2 14.3-8.6 22.3-9.5 8.4-.9 11.1-3.7 7.2-7.5-1.7-1.8-3.2-1.8-11.4-.5zM86.5 83.9C74.4 87 67 96.5 67 108.7c0 7.1 2.4 12.5 7.6 17.5 5 4.8 10 6.8 16.9 6.8 9.8 0 17.3-4.5 22-13.1 6.8-12.5 1.1-29-11.9-34.4-4.2-1.8-11.5-2.5-15.1-1.6zm8.8 17.2c4.9 2.2 6 8.3 2.3 12.5-1.8 2.1-3.2 2.8-6 2.8-7.6 0-11-9-5.2-14 3-2.6 5.3-3 8.9-1.3z\"/>\n    </svg>\n";
var CE_ODESLI_BIG_ICON = "\n    <svg width=\"18\" height=\"18\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n        <path d=\"M18.5 26.4c-3.9 1.8-7.9 6.3-9.4 10.5-1.5 4.6-1.5 87 0 92.6 1.4 5 6.4 10 11.4 11.4 2.7.7 22.2 1.1 59.5 1.1 51.8 0 55.8-.2 59.5-1.9 4.6-2.1 7.9-5.4 9.4-9.4.7-1.9 1.1-18.3 1.1-47.6 0-44.3 0-44.7-2.2-49.1-1.7-3.3-3.5-5.1-6.8-6.8l-4.4-2.2H79c-45.8.1-58.1.4-60.5 1.4zm63.4 44.7c12.2 6.7 22.1 12.2 21.9 12.4-.8.7-44.8 24.5-45.3 24.5-.3 0-.5-11-.5-24.5s.4-24.5.8-24.5c.5 0 10.9 5.5 23.1 12.1z\"/>\n        <path d=\"M167 108v50H42v17h128.5l3.9-2.3c2.2-1.2 4.9-3.5 6-5 2.1-2.8 2.1-3.8 2.4-56.3l.3-53.4H167v50z\"/>\n    </svg>\n";
var ODESLI_SERVICES = {
    amazon: {
        regex: /^https?\:\/\/(?:www\.|)music\.amazon\.[a-z]{1,10}(?:\.[a-z]{1,10})?\/albums\/([\w]{1,})(?:(?:.*)?trackAsin\=([\w]{1,}))?/,
        base_album: 'https://music.amazon.com/albums/<%= album_id %>',
        base_track: 'https://music.amazon.com/albums/<%= album_id %>?trackAsin=<%= track_id %>',
    },
    apple: {
        regex: /^https?\:\/\/(?:.*\.|)music\.apple\.com\/(?:[\w\-\_]{1,10}\/|)album(?:\/[\w\-\_\%]{1,}|)\/([0-9]{1,})(?:(?:\?|\&)i\=([0-9]{1,})|\?[\w\-\_\=\%]+\&i\=([0-9]{1,}))?/,
        base_album: 'https://music.apple.com/album/_/<%= album_id %>',
        base_track: 'https://music.apple.com/album/_/<%= album_id %>?i=<%= track_id %>',
    },
    applepodcast: {
        regex: /^https?\:\/\/(?:www\.|)podcasts\.apple\.com\/(?:[\w\-\_]{1,10}\/)?podcast\/(?:[\w\-\_]{1,}\/)?id([0-9]{1,})/,
        base_url: 'https://podcasts.apple.com/podcast/id<%= item_id %>',
    },
    audiomack: {
        regex: /^https?\:\/\/(?:www\.|)audiomack\.com\/(song|album)?\/?([\w\-\_]+)\/?(song|album)?\/?([\w\-\_]+)/,
        base_album: 'https://audiomack.com/<%= artist %>/album/<%= name %>',
        base_track: 'https://audiomack.com/<%= artist %>/song/<%= name %>',
    },
    audius: {
        regex: /^https?\:\/\/(?:www\.|)audius\.co\/([\w\-\_]+)(?!\/album)\/([\w\-\_]+)/,
        base_track: 'https://audius.co/<%= artist %>/<%= name %>',
    },
    anghami: {
        regex: /^https?\:\/\/(?:www\.|play\.|)anghami\.com\/(song|album)\/([0-9]{1,})/,
        base_album: 'https://play.anghami.com/album/<%= item_id %>',
        base_track: 'https://play.anghami.com/song/<%= item_id %>',
    },
    bandcamp: {
        regex: /^https?\:\/\/(?:www\.|)([\w\-\_]+)\.bandcamp\.com\/(track|album)\/([\w\-\_]+)/,
        base_album: 'https://<%= artist %>.bandcamp.com/album/<%= name %>',
        base_track: 'https://<%= artist %>.bandcamp.com/track/<%= name %>',
    },
    boomplay: {
        regex: /^https?\:\/\/(?:www\.|)boomplay\.com\/(songs|albums|)\/([0-9]{1,})/,
        base_album: 'https://www.boomplay.com/albums/<%= item_id %>',
        base_track: 'https://www.boomplay.com/songs/<%= item_id %>',
    },
    deezer: {
        regex: /^https?\:\/\/(?:www\.|)deezer\.(?:com|page\.link)\/(?:[a-z]{0,4}\/|)((?:track\/|album\/|)[\w]+)/,
        base_album: 'https://www.deezer.com/album/<%= album_id %>',
        base_track: 'https://www.deezer.com/track/<%= track_id %>',
        base_url: 'https://deezer.page.link/<%= item_id %>',
    },
    odesli: {
        regex: /^https?\:\/\/(?:www\.|)(song|album|pods)\.link\/(?:[a-z]{2,}\/)?((?:[a-z]{1,})\/[\w\-\_]{1,})/,
        base_album: 'https://album.link/<%= album_id %>',
        base_track: 'https://song.link/<%= track_id %>',
        base_podcast: 'https://pods.link/<%= podcast_id %>',
    },
    pandora: {
        regex: /^https?:\/\/(?:www\.|)pandora\.com\/(?:(TR|AL)\:([0-9]{1,})|artist\/([\w\-\_]+\/[\w\-\_]+\/(?:[\w\-\_]+\/)?[\w]+))?/,
        base_album: 'http://www.pandora.com/AL:<%= album_id %>',
        base_track: 'http://www.pandora.com/TR:<%= track_id %>',
        base_url: 'https://www.pandora.com/artist/<%= name %>',
    },
    soundcloud: {
        regex: /^https?\:\/\/(?:www\.|)soundcloud\.com\/([\w\-\_]+)\/((?:sets\/|)[\w\-\_]+)?/,
        base_playlist: 'https://soundcloud.com/playlist/sets/<%= name %>',
        base_album: 'https://soundcloud.com/<%= artist %>/sets/<%= name %>',
        base_track: 'https://soundcloud.com/<%= artist %>/<%= name %>',
    },
    spinrilla: {
        regex: /^https?\:\/\/(?:www\.|)spinrilla\.com\/(songs|mixtapes)\/(?:album\/|([\w\-\_]+))?/,
        base_album: 'https://spinrilla.com/mixtapes/<%= album_id %>',
        base_track: 'https://spinrilla.com/songs/<%= track_id %>',
    },
    spotify: {
        regex: /^https?\:\/\/(?:www\.|)open\.spotify\.com\/(album|track)\/([\w\-\_]{1,})/,
        base_album: 'https://open.spotify.com/album/<%= album_id %>',
        base_track: 'https://open.spotify.com/track/<%= track_id %>',
    },
    tidal: {
        regex: /^https?\:\/\/(?:www\.|listen\.|)?tidal\.com\/(?:browse\/)?(?:(album|track))\/([0-9]{1,})/,
        base_album: 'https://listen.tidal.com/album/<%= album_id %>',
        base_track: 'https://listen.tidal.com/track/<%= track_id %>',
    },
    yandex: {
        regex: /^https?\:\/\/(?:www\.|)music\.yandex\.[\w\-\_]{1,10}\/(?:((?:album|track)\/[0-9]{1,})\/?)(?:(track\/[0-9]{1,})|)/,
        base_album: 'https://music.yandex.ru/album/<%= album_id %>',
        base_track: 'https://music.yandex.ru/track/<%= track_id %>',
    },
    youtube: {
        album: {
            regex: /^https?\:\/\/(?:www\.|)music\.youtube\.com\/playlist(?:.*)?list\=([\w\-\_]+)/,
            base: 'https://music.youtube.com/playlist?list=<%= album_id %>',
        },
        track: {
            regex: /^https?\:\/\/(?:www\.|)music\.youtube\.com(?:.*)?v=([\w]+)/,
            base: 'https://music.youtube.com/watch?v=<%= track_id %>',
        },
    },
};

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Odesli/Odesli.ts

// оставь надежду всяк сюда входящий
var Odesli = /** @class */ (function () {
    function Odesli(_a) {
        var data = _a.data, api = _a.api;
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "services", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api = api;
        this.config = {
            service_url: SERVICE_URL_REGEX,
            placeholder: 'Add a link on Spotify, Apple Music, Yandex Music, YouTube Music',
            sizes: {
                small: 'Only links',
                standard: 'Cover & links',
                big: 'Video & links',
            },
        };
        this.data = data;
        var t = api.i18n.t;
        var _b = this.config.sizes, small = _b.small, standard = _b.standard, big = _b.big;
        this.actions = [
            {
                name: 'ce-odesli-small',
                title: t(small),
                icon: CE_ODESLI_SMALL_ICON,
            },
            {
                name: 'ce-odesli-standart',
                title: t(standard),
                icon: CE_ODESLI_STANDARD_ICON,
            },
            {
                name: 'ce-odesli-big',
                title: t(big),
                icon: CE_ODESLI_BIG_ICON,
            },
        ];
        this.services = ODESLI_SERVICES;
    }
    Object.defineProperty(Odesli, "toolbox", {
        get: function () {
            return {
                title: 'Odesli',
                icon: Odesli_consts_TOOLBOX_ICON,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Odesli, "pasteConfig", {
        get: function () {
            return {
                patterns: {
                    music_link: MUSIC_LINK_REGEX,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Odesli.prototype, "renderSettings", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this;
            // Вывод только если фрейм уже есть
            // if (this.wrapper === 'undefined') return;
            if (!this.wrapper)
                return;
            if (Object.keys(this.data).length !== 4 || !this.validate(this.data))
                return;
            var settings = [];
            this.actions.forEach(function (tune) {
                var button = _this.createTune(tune);
                _this.api.listeners.on(button, 'click', function () {
                    _this.data.size = tune.name.substring(10);
                    _this.setTune(button);
                }, false);
                settings.push(button);
            });
            return settings;
        }
    });
    Object.defineProperty(Odesli.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this;
            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('ce-odesli', 'cdx-block', 'p-4', 'rounded', 'border', 'border-gray-200', 'relative');
            if (Object.keys(this.data).length === 4 && this.validate(this.data)) {
                this.renderIframe(this.data);
            }
            else {
                var input_1 = this.createInput();
                this.wrapper.appendChild(input_1);
                this.api.listeners.on(input_1, 'paste', function (event) {
                    event === null || event === void 0 ? void 0 : event.preventDefault();
                    _this.checkEvent(input_1, event);
                }, false);
                this.api.listeners.on(input_1, 'input', function (event) {
                    _this.checkEvent(input_1, event);
                }, false);
            }
            return this.wrapper;
        }
    });
    /**
   * Валидация всех полей
   * @param {object} data.url Чистая ссылка
   * @param {object} data.type Тип: песня, альбом, плейлист
   * @param {object} data.service Название муз. сервиса
   * @param {object} data.size Размер фрейма Odesli
   */
    Object.defineProperty(Odesli.prototype, "validate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var service = _a.service, size = _a.size, type = _a.type, url = _a.url;
            // Проверка размера
            var sizesName = this.actions.map(function (size) {
                return Object.values(size)[0].substring(10);
            });
            if (!url.trim())
                return;
            if (!Object.keys(this.services).includes(service))
                return;
            if (!['track', 'album', 'playlist', 'podcast'].includes(type))
                return;
            if (!sizesName.includes(size))
                return;
            return true;
        }
    });
    Object.defineProperty(Odesli.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return {
                url: this.data && this.data.url ? this.data.url : '',
                service: this.data && this.data.service ? this.data.service : '',
                type: this.data && this.data.type ? this.data.type : '',
                size: this.data && this.data.size ? this.data.size : '',
            };
        }
    });
    /**
   * Вставка ссылки в параграфе
   * @param {event} event Событие
   */
    Object.defineProperty(Odesli.prototype, "onPaste", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            // switch (type) {
            //     case 'pattern':
            //         const url = detail.data;
            var type = _a.type, detail = _a.detail;
            //         this.prepareOdesliLink(url);
            //         break;
            // }
            if (type === 'pattern') {
                this.prepareOdesliLink(detail.data);
            }
        }
    });
    /**
   * Изменение размера
   * @private
   * @param {HTMLelement} button Выбранный элемент
   */
    Object.defineProperty(Odesli.prototype, "setTune", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (button) {
            var _this = this;
            var _a;
            var parentDiv = (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.querySelectorAll('div');
            parentDiv === null || parentDiv === void 0 ? void 0 : parentDiv.forEach(function (tunes) {
                tunes.classList.remove(_this.api.styles.settingsButtonActive);
            });
            button.classList.add(this.api.styles.settingsButtonActive);
            // Перезагрузка фрейма
            this.renderIframe(this.data);
        }
    });
    /**
   * Event handler
   * @private
   * @param {event} event Событие
   * @param {element} input Поле ввода
   */
    Object.defineProperty(Odesli.prototype, "checkEvent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (input, event) {
            var url = '';
            if ((event === null || event === void 0 ? void 0 : event.type) === 'paste') {
                var windowClipboardData = window;
                var clipBoardData = event.clipboardData || windowClipboardData.clipboardData;
                url = clipBoardData.getData('text').trim();
                input.value = url;
            }
            else if ((event === null || event === void 0 ? void 0 : event.type) === 'input') {
                url = input.value.trim().length > 0 ? input.value.trim() : '';
            }
            if (!url || url.length === 0)
                return;
            return this.prepareOdesliLink(url);
        }
    });
    /**
   * Проверка строки пользователя перед формированием фрейма
   * @private
   * @param {string} text Ссылка от пользователя
   */
    Object.defineProperty(Odesli.prototype, "prepareOdesliLink", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            if (!this.checkLink(text))
                return;
            try {
                var url = new URL(text);
                var service = '';
                var type = '';
                if (url.hostname.includes('music.amazon.')) {
                    service = 'amazon';
                }
                else if (url.hostname.includes('music.apple.')) {
                    service = 'apple';
                }
                else if (url.hostname.includes('podcasts.apple.')) {
                    service = 'applepodcast';
                }
                else if (url.hostname.includes('audiomack.com')) {
                    service = 'audiomack';
                }
                else if (url.hostname.includes('audius.co')) {
                    service = 'audius';
                }
                else if (url.hostname.includes('anghami.com')) {
                    service = 'anghami';
                }
                else if (url.hostname.includes('boomplay.com')) {
                    service = 'boomplay';
                }
                else if (url.hostname.match(/(deezer\.com)|(deezer\.page\.link)/)) {
                    service = 'deezer';
                }
                else if (url.hostname.includes('pandora.com')) {
                    service = 'pandora';
                }
                else if (url.hostname.includes('soundcloud.com')) {
                    service = 'soundcloud';
                }
                else if (url.hostname.includes('spinrilla.com')) {
                    service = 'spinrilla';
                }
                else if (url.hostname.includes('spotify.com')) {
                    service = 'spotify';
                }
                else if (url.hostname.includes('tidal.com')) {
                    service = 'tidal';
                }
                else if (url.hostname.includes('music.yandex.')) {
                    service = 'yandex';
                }
                else if (url.hostname.includes('music.youtube.com') && url.search.includes('list=')) {
                    service = 'youtube';
                    type = 'album';
                }
                else if (url.hostname.includes('music.youtube.com') && !url.search.includes('list=')) {
                    service = 'youtube';
                    type = 'track';
                }
                else if (url.hostname.includes('bandcamp.com')) {
                    service = 'bandcamp';
                }
                else if (url.hostname.match(/(song|album|pods)\.link/ig)) {
                    service = 'odesli';
                }
                if (service.length === 0)
                    return;
                var songData = this.getSongData(service, url.href, 'standart', type);
                this.renderIframe(songData);
            }
            catch (error) {
                // eslint-disable-next-line no-console
                console.log('error', error);
            }
        }
    });
    /**
   * Обработка ссылок разных сервисов
   * @private
   * @param {string} service Название сервиса
   * @param {string} url Ссылка
   * @param {string} item_type Тип элемента (только для YouTube)
   * @returns {object} { имя сервиса, ссылка для фрейма, тип }
   */
    Object.defineProperty(Odesli.prototype, "getSongData", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (service, url, size, item_type) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
            if (!Object.keys(this.services).includes(service))
                return;
            var settings = this.services[service];
            var match;
            if (service !== 'youtube') {
                match = (_b = (_a = settings.regex) === null || _a === void 0 ? void 0 : _a.exec(url)) === null || _b === void 0 ? void 0 : _b.splice(1);
            }
            var renderUrl, type, albumId, trackId, itemId, artist, name;
            var _20 = match || [], firstMatch = _20[0], secondMatch = _20[1], thirdMatch = _20[2], fourthMatch = _20[3];
            switch (service) {
                case 'amazon': // Amazon Music
                    albumId = firstMatch;
                    trackId = secondMatch;
                    if (this.isSet(albumId) && this.isSet(trackId)) {
                        type = 'track';
                        renderUrl = (_c = settings.base_track) === null || _c === void 0 ? void 0 : _c.replace(/<%= album_id %>/g, albumId).replace(/<%= track_id %>/g, trackId);
                    }
                    else if (this.isSet(albumId) && !this.isSet(trackId)) {
                        type = 'album';
                        renderUrl = (_d = settings.base_album) === null || _d === void 0 ? void 0 : _d.replace(/<%= album_id %>/g, albumId);
                    }
                    break;
                case 'apple': // Apple Music
                    albumId = firstMatch;
                    if (typeof thirdMatch !== 'undefined') {
                        trackId = thirdMatch;
                    }
                    if (typeof secondMatch !== 'undefined') {
                        trackId = secondMatch;
                    }
                    if (this.isSet(albumId) && this.isSet(trackId)) {
                        type = 'track';
                        renderUrl = (_e = settings.base_track) === null || _e === void 0 ? void 0 : _e.replace(/<%= album_id %>/g, albumId).replace(/<%= track_id %>/g, trackId);
                    }
                    else if (this.isSet(albumId) && !this.isSet(trackId)) {
                        type = 'album';
                        renderUrl = (_f = settings.base_album) === null || _f === void 0 ? void 0 : _f.replace(/<%= album_id %>/g, albumId);
                    }
                    break;
                case 'applepodcast': // Apple Podcasts
                    itemId = firstMatch;
                    type = 'podcast';
                    if (this.isSet(itemId)) {
                        renderUrl = (_g = settings.base_url) === null || _g === void 0 ? void 0 : _g.replace(/<%= item_id %>/g, itemId);
                    }
                    break;
                case 'audiomack': // Audiomack
                    artist = secondMatch;
                    name = fourthMatch;
                    if (typeof firstMatch !== 'undefined') {
                        type = firstMatch;
                    }
                    if (typeof thirdMatch !== 'undefined') {
                        type = thirdMatch;
                    }
                    if (this.isSet(type) && this.isSet(artist) && this.isSet(name)) {
                        switch (type) {
                            case 'song':
                                type = 'track';
                                renderUrl = (_h = settings.base_track) === null || _h === void 0 ? void 0 : _h.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                                break;
                            case 'album':
                                type = 'album';
                                renderUrl = (_j = settings.base_album) === null || _j === void 0 ? void 0 : _j.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                                break;
                        }
                    }
                    break;
                case 'audius': // Audius
                    artist = firstMatch;
                    name = secondMatch;
                    if (this.isSet(artist) && this.isSet(name)) {
                        type = 'track';
                        renderUrl = (_k = settings.base_track) === null || _k === void 0 ? void 0 : _k.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                    }
                    break;
                case 'anghami': // Anghami
                    type = firstMatch;
                    itemId = secondMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'song':
                                type = 'track';
                                renderUrl = (_l = settings.base_track) === null || _l === void 0 ? void 0 : _l.replace(/<%= item_id %>/g, itemId);
                                break;
                            case 'album':
                                renderUrl = (_m = settings.base_album) === null || _m === void 0 ? void 0 : _m.replace(/<%= item_id %>/g, itemId);
                                break;
                        }
                    }
                    break;
                case 'boomplay': // Boomplay
                    itemId = secondMatch;
                    if (typeof firstMatch !== 'undefined') {
                        type = firstMatch;
                    }
                    if (typeof thirdMatch !== 'undefined') {
                        type = thirdMatch;
                    }
                    if (this.isSet(type) && this.isSet(itemId)) {
                        if (['songs', 'MUSIC'].includes(type)) {
                            type = 'track';
                            renderUrl = (_o = settings.base_track) === null || _o === void 0 ? void 0 : _o.replace(/<%= item_id %>/g, itemId);
                        }
                        else if (['albums', 'COL'].includes(type)) {
                            type = 'album';
                            renderUrl = (_p = settings.base_album) === null || _p === void 0 ? void 0 : _p.replace(/<%= item_id %>/g, itemId);
                        }
                    }
                    break;
                case 'deezer': // Deezer
                    itemId = firstMatch;
                    if (this.isSet(itemId)) {
                        if (itemId.substring(0, 6) === 'track/') {
                            type = 'track';
                            renderUrl = (_q = settings.base_track) === null || _q === void 0 ? void 0 : _q.replace(/<%= track_id %>/g, itemId.substring(5));
                        }
                        else if (itemId.substring(0, 6) === 'album/') {
                            type = 'album';
                            renderUrl = (_r = settings.base_album) === null || _r === void 0 ? void 0 : _r.replace(/<%= album_id %>/g, itemId.substring(6));
                        }
                        else {
                            type = 'track';
                            renderUrl = (_s = settings.base_url) === null || _s === void 0 ? void 0 : _s.replace(/<%= item_id %>/g, itemId);
                        }
                    }
                    break;
                case 'odesli': // Odesli
                    type = firstMatch;
                    itemId = secondMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'song':
                                type = 'track';
                                renderUrl = (_t = settings.base_track) === null || _t === void 0 ? void 0 : _t.replace(/<%= track_id %>/g, itemId);
                                break;
                            case 'album':
                                renderUrl = (_u = settings.base_album) === null || _u === void 0 ? void 0 : _u.replace(/<%= album_id %>/g, itemId);
                                break;
                            case 'pods':
                                type = 'podcast';
                                renderUrl = (_v = settings.base_podcast) === null || _v === void 0 ? void 0 : _v.replace(/<%= podcast_id %>/g, itemId);
                                break;
                        }
                    }
                    break;
                case 'pandora': // Pandora
                    type = firstMatch;
                    itemId = secondMatch;
                    name = thirdMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'TR':
                                type = 'track';
                                renderUrl = (_w = settings.base_track) === null || _w === void 0 ? void 0 : _w.replace(/<%= track_id %>/g, itemId);
                                break;
                            case 'AL':
                                type = 'album';
                                renderUrl = (_x = settings.base_album) === null || _x === void 0 ? void 0 : _x.replace(/<%= album_id %>/g, itemId);
                                break;
                        }
                    }
                    else if (this.isSet(name)) {
                        var count = (_y = name.match(/\//g)) === null || _y === void 0 ? void 0 : _y.length;
                        switch (count) {
                            case 2:
                                type = 'album';
                                break;
                            case 3:
                                type = 'track';
                                break;
                        }
                        renderUrl = (_z = settings.base_url) === null || _z === void 0 ? void 0 : _z.replace(/<%= name %>/g, name);
                    }
                    break;
                case 'soundcloud': // SoundCloud
                    artist = firstMatch;
                    name = secondMatch;
                    if (this.isSet(artist) && this.isSet(name)) {
                        if (name.substring(0, 5) === 'sets/' && artist !== 'playlist') {
                            type = 'album';
                            renderUrl = (_0 = settings.base_album) === null || _0 === void 0 ? void 0 : _0.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name.substring(5));
                        }
                        else if (name.substring(0, 5) === 'sets/' && artist === 'playlist') {
                            type = 'playlist';
                            renderUrl = (_1 = settings.base_playlist) === null || _1 === void 0 ? void 0 : _1.replace(/<%= name %>/g, name.substring(5));
                        }
                        else {
                            type = 'track';
                            renderUrl = (_2 = settings.base_track) === null || _2 === void 0 ? void 0 : _2.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                        }
                    }
                    break;
                case 'spinrilla': // Spinrilla
                    type = firstMatch;
                    itemId = secondMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'songs':
                                type = 'track';
                                renderUrl = (_3 = settings.base_track) === null || _3 === void 0 ? void 0 : _3.replace(/<%= track_id %>/g, itemId);
                                break;
                            case 'mixtapes':
                                type = 'album';
                                renderUrl = (_4 = settings.base_album) === null || _4 === void 0 ? void 0 : _4.replace(/<%= album_id %>/g, itemId);
                                break;
                        }
                    }
                    break;
                case 'spotify': // Spotify
                    itemId = secondMatch;
                    type = firstMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'track':
                                renderUrl = (_5 = settings.base_track) === null || _5 === void 0 ? void 0 : _5.replace(/<%= track_id %>/g, itemId);
                                break;
                            case 'album':
                                renderUrl = (_6 = settings.base_album) === null || _6 === void 0 ? void 0 : _6.replace(/<%= album_id %>/g, itemId);
                                break;
                        }
                    }
                    break;
                case 'tidal': // Tidal
                    type = firstMatch;
                    itemId = secondMatch;
                    if (this.isSet(type) && this.isSet(itemId)) {
                        switch (type) {
                            case 'track':
                                renderUrl = (_7 = settings.base_track) === null || _7 === void 0 ? void 0 : _7.replace(/<%= track_id %>/g, itemId);
                                break;
                            case 'album':
                                renderUrl = (_8 = settings.base_album) === null || _8 === void 0 ? void 0 : _8.replace(/<%= album_id %>/g, itemId);
                                break;
                        }
                    }
                    break;
                case 'bandcamp': // Bandcamp
                    artist = firstMatch;
                    type = secondMatch;
                    name = thirdMatch;
                    if (this.isSet(type) && this.isSet(artist) && this.isSet(name)) {
                        switch (type) {
                            case 'track':
                                renderUrl = (_9 = settings.base_track) === null || _9 === void 0 ? void 0 : _9.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                                break;
                            case 'album':
                                renderUrl = (_10 = settings.base_album) === null || _10 === void 0 ? void 0 : _10.replace(/<%= artist %>/g, artist).replace(/<%= name %>/g, name);
                                break;
                        }
                    }
                    break;
                case 'yandex': // Yandex Music
                    albumId = firstMatch;
                    trackId = secondMatch;
                    if (this.isSet(albumId) && this.isSet(trackId)) {
                        type = 'track';
                        renderUrl = (_11 = settings.base_track) === null || _11 === void 0 ? void 0 : _11.replace(/<%= track_id %>/g, trackId.substring(6));
                    }
                    else if (this.isSet(albumId) && !this.isSet(trackId)) {
                        if (albumId.substring(0, 6) === 'album/') {
                            type = 'album';
                            renderUrl = (_12 = settings.base_album) === null || _12 === void 0 ? void 0 : _12.replace(/<%= album_id %>/g, albumId.substring(6));
                        }
                        else if (albumId.substring(0, 6) === 'track/') {
                            type = 'track';
                            renderUrl = (_13 = settings.base_track) === null || _13 === void 0 ? void 0 : _13.replace(/<%= track_id %>/g, albumId.substring(6));
                        }
                    }
                    break;
                case 'youtube': // YouTube
                    switch (item_type) {
                        case 'album':
                            match = (_15 = (_14 = settings.album) === null || _14 === void 0 ? void 0 : _14.regex.exec(url)) === null || _15 === void 0 ? void 0 : _15.splice(1);
                            albumId = firstMatch;
                            if (this.isSet(albumId)) {
                                type = 'album';
                                renderUrl = (_16 = settings.album) === null || _16 === void 0 ? void 0 : _16.base.replace(/<%= album_id %>/g, albumId);
                            }
                            break;
                        case 'track':
                            match = (_18 = (_17 = settings.track) === null || _17 === void 0 ? void 0 : _17.regex.exec(url)) === null || _18 === void 0 ? void 0 : _18.splice(1);
                            if (this.isSet(firstMatch)) {
                                trackId = firstMatch;
                            }
                            if (this.isSet(secondMatch)) {
                                trackId = secondMatch;
                            }
                            if (this.isSet(thirdMatch)) {
                                trackId = thirdMatch;
                            }
                            if (this.isSet(trackId)) {
                                type = 'track';
                                renderUrl = (_19 = settings.track) === null || _19 === void 0 ? void 0 : _19.base.replace(/<%= track_id %>/g, trackId);
                            }
                            break;
                    }
                    break;
                default:
                    return;
            }
            if (!this.isSet(renderUrl) || !this.isSet(type))
                return;
            return { service: service, url: renderUrl, type: type, size: size };
        }
    });
    /**
   * Вывод фрейма трека
   * @param {string} music_data.url Форматированный URL
   * @param {string} music_data.service Название сервиса
   * @param {string} music_data.type Тип элемента (песня, альбом, плейлист, подкаст)
   * @param {string} music_data.size Размер фрейма Odesli
   */
    Object.defineProperty(Odesli.prototype, "renderIframe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (musicData) {
            var _this = this;
            var _a;
            var func = this;
            this.showLoader(musicData.size);
            var frame = this.createFrame(musicData.size);
            var userTheme = this.getUserTheme();
            if (frame) {
                // Формирование URL фрейма
                var url = "https://odesli.co/embed?url=".concat(musicData.url, "&theme=").concat(userTheme);
                frame.src = url;
                (_a = this.wrapper) === null || _a === void 0 ? void 0 : _a.appendChild(frame);
                frame.onload = function () {
                    func.hideLoader();
                    _this.data.service = musicData.service;
                    _this.data.url = musicData.url;
                    _this.data.size = musicData.size;
                    _this.data.type = musicData.type;
                };
                frame.onerror = function () {
                    frame.remove();
                    func.hideLoader();
                    if (_this.wrapper) {
                        _this.wrapper.innerText = 'Ошибка URL, попробуйте снова.';
                        _this.wrapper.classList.add('rounded', 'h-[150px]', 'text-center', 'bg-slate-300', 'leading-[150px]');
                    }
                };
            }
        }
    });
    /**
   * Создание фрейма Odesli
   * @param {string} defaultSize Размер фрейма
   * @returns HTMLElement
   */
    Object.defineProperty(Odesli.prototype, "createFrame", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (defaultSize) {
            var frame = document.createElement('iframe');
            switch (defaultSize) {
                case 'small':
                    frame.height = '52';
                    break;
                case 'standart':
                    frame.height = '150';
                    break;
                case 'big':
                    frame.height = '412';
                    break;
                default:
                    return;
            }
            frame.style.border = '0';
            frame.width = '100%';
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            frame.loading = 'lazy';
            frame.classList.add('w-full', 'rounded', 'border-0');
            frame.sandbox.add('allow-same-origin', 'allow-scripts', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-presentation');
            return frame;
        }
    });
    /**
   * Создание кнопки изменения размера фрейма
   * @returns HTMLElement
   */
    Object.defineProperty(Odesli.prototype, "createTune", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (tune) {
            var button = document.createElement('div');
            button.innerHTML = tune.icon;
            button.classList.add(this.api.styles.settingsButton, tune.name);
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data.size === tune.name.substring(10));
            this.api.tooltip.onHover(button, tune.title, {
                placement: 'bottom',
            });
            return button;
        }
    });
    /**
   * Создание поля для ввода ссылки
   * @returns HTMLElement
   */
    Object.defineProperty(Odesli.prototype, "createInput", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var input = document.createElement('input');
            input.classList.add('w-full', 'flex-1', 'p-1', 'text-black', 'border', 'border-gray-200', 'rounded');
            input.type = 'url';
            input.placeholder = this.api.i18n.t(this.config.placeholder || '');
            input.autocomplete = 'off';
            input.value = '';
            return input;
        }
    });
    /**
   * Показ прелоадера
   * @param defaultSize Размер фрейма
   */
    Object.defineProperty(Odesli.prototype, "showLoader", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (defaultSize) {
            if (this.wrapper) {
                var themeClass = this.getUserTheme() === 'dark' ? 'bg-[#191919]' : 'bg-white';
                var heightClass = 'h-[150px]';
                switch (defaultSize) {
                    case 'small':
                        heightClass = 'h-[52px]';
                        break;
                    case 'standart':
                        heightClass = 'h-[150px]';
                        break;
                    case 'big':
                        heightClass = 'h-[412px]';
                        break;
                    default:
                        return;
                }
                var loader = document.createElement('div');
                loader.classList.add(heightClass, themeClass, 'absolute', 'rounded', 'w-full', 'top-0', 'cdx-loader', 'z-1', 'border-0');
                this.wrapper.classList.remove('p-4', 'rounded', 'border', 'border-gray-200');
                this.wrapper.innerHTML = '';
                this.wrapper.appendChild(loader);
            }
        }
    });
    /**
   * Скрытие прелоадера
   */
    Object.defineProperty(Odesli.prototype, "hideLoader", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.wrapper) {
                var loader = this.wrapper.querySelector('.cdx-loader');
                if (loader) {
                    this.wrapper.removeChild(loader);
                }
            }
        }
    });
    /**
   * Проверка на действующую ссылку
   * @param {string} text Текст от пользователя
   * @returns (boolean)
   */
    Object.defineProperty(Odesli.prototype, "checkLink", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            var isLink = this.config.service_url;
            if (!text.match(isLink))
                return false;
            return true;
        }
    });
    /**
   * Получение темы пользователя
   * @returns (string) 'dark' | 'light'
   */
    Object.defineProperty(Odesli.prototype, "getUserTheme", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var theme = 'light';
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = 'dark';
            }
            return theme;
        }
    });
    /**
   * Проверка на существование
   * @param {any} item Объект проверки
   * @returns (boolean)
   */
    Object.defineProperty(Odesli.prototype, "isSet", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (item) {
            if (typeof item !== 'undefined')
                return true;
            return false;
        }
    });
    return Odesli;
}());
/* harmony default export */ var Odesli_Odesli = (Odesli);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Odesli/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Preview/consts.ts
var TOGGLER_INNER_HTML = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-star-fill\" viewBox=\"0 0 16 16\">\n        <path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Preview/Preview.ts

var Preview = /** @class */ (function () {
    function Preview(_a) {
        var api = _a.api, block = _a.block, _b = _a.data, data = _b === void 0 ? false : _b;
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "block", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api = api;
        this.block = block;
        this.enabled = data;
    }
    Object.defineProperty(Preview, "isTune", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Preview.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.enabled;
        }
    });
    Object.defineProperty(Preview.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this;
            var _a = this.api, styles = _a.styles, tooltip = _a.tooltip, listeners = _a.listeners;
            var toggler = document.createElement('div');
            toggler.classList.add(styles.settingsButton);
            toggler.innerHTML = TOGGLER_INNER_HTML;
            this.enabled && toggler.classList.toggle(styles.settingsButtonActive, true);
            tooltip.onHover(toggler, 'Вывести в ленте', {
                placement: 'top', hidingDelay: 500,
            });
            listeners.on(toggler, 'click', function (event) {
                event && _this.tuneClicked(event);
            });
            return toggler;
        }
    });
    Object.defineProperty(Preview.prototype, "wrap", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (blockContent) {
            this.wrapper = document.createElement('div');
            this.wrapper.append(blockContent);
            if (this.enabled) {
                this.wrapper.classList.add('ce-preview');
            }
            return this.wrapper;
        }
    });
    Object.defineProperty(Preview.prototype, "tuneClicked", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var _b, _c;
            var target = _a.target;
            var _d = this.api.styles, settingsButton = _d.settingsButton, settingsButtonActive = _d.settingsButtonActive;
            var eventTarget = target;
            var tune = eventTarget.closest(".".concat(settingsButton));
            var isEnabled = tune === null || tune === void 0 ? void 0 : tune.classList.contains(settingsButtonActive);
            tune === null || tune === void 0 ? void 0 : tune.classList.toggle(settingsButtonActive, !isEnabled);
            this.enabled = !isEnabled;
            this.enabled
                ? (_b = this.wrapper) === null || _b === void 0 ? void 0 : _b.classList.add('ce-preview')
                : (_c = this.wrapper) === null || _c === void 0 ? void 0 : _c.classList.remove('ce-preview');
        }
    });
    return Preview;
}());
/* harmony default export */ var Preview_Preview = (Preview);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Preview/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/ImageGallery/entities/FileItem/FileItem.ts
var FileItem = /** @class */ (function () {
    function FileItem(file) {
        Object.defineProperty(this, "imageContent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chunkStart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file = file;
    }
    Object.defineProperty(FileItem.prototype, "isImage", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.type.match('image/*');
        }
    });
    Object.defineProperty(FileItem.prototype, "type", {
        get: function () {
            return this.file.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileItem.prototype, "name", {
        get: function () {
            return this.file.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileItem.prototype, "lastModified", {
        get: function () {
            return this.file.lastModified;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileItem.prototype, "size", {
        get: function () {
            return this.file.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileItem.prototype, "isValid", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.isValidFileSize() && this.isValidFileType();
        }
    });
    Object.defineProperty(FileItem.prototype, "isValidFileSize", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var maxFileSize = ((_a = FileItem.options) === null || _a === void 0 ? void 0 : _a.maxFileSize) || 4;
            return !maxFileSize || this.size < (maxFileSize * 1024 * 1024);
        }
    });
    Object.defineProperty(FileItem.prototype, "isValidFileType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var fileTypes = (_a = FileItem.options) === null || _a === void 0 ? void 0 : _a.acceptedFileTypes;
            if (!fileTypes || fileTypes === '*') {
                return true;
            }
            if (Array.isArray(fileTypes)) {
                for (var _i = 0, fileTypes_1 = fileTypes; _i < fileTypes_1.length; _i++) {
                    var fileType = fileTypes_1[_i];
                    if (fileType === '*' || this.type.match(fileType)) {
                        return true;
                    }
                }
                return false;
            }
            return this.type.match(fileTypes);
        }
    });
    Object.defineProperty(FileItem.prototype, "onLoadImage", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (onLoad) {
            var _this = this;
            if (this.isImage()) {
                if (!this.imageContent) {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.file);
                    reader.onloadend = function (event) {
                        var _a;
                        _this.imageContent = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                        onLoad(_this.imageContent);
                    };
                }
                else {
                    onLoad(this.imageContent);
                }
            }
        }
    });
    return FileItem;
}());
/* harmony default export */ var FileItem_FileItem = (FileItem);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/ImageGallery/entities/FileItem/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/ImageGallery/consts.ts
var CLASSNAMES = {
    IMAGE_LABEL: [
        'rounded',
        'flex',
        'items-center',
        'justify-center',
        'h-40',
        'border',
        'bg-gray-100',
        'dark:bg-slate-700',
        'cursor-pointer',
    ],
    GRID_COLS: [
        '',
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
    ],
    GALLERY: [
        'rounded',
        'grid',
        'gap-4',
        'p-4',
        'border',
        'border-gray-100',
    ],
    IMAGE_ITEM: [
        'pb-100p',
        'rounded',
        'overflow-hidden',
        'bg-contain',
        'bg-gray-200',
        'bg-center',
        'bg-no-repeat',
        'relative',
    ],
    DELETE_ELEMENT: [
        'w-5',
        'h-5',
        'absolute',
        'right-0',
        'top-0',
        'cursor-pointer',
        'bg-red-500',
        'text-white',
        'flex',
        'items-center',
        'justify-center',
        'font-medium',
        'rounded-full',
    ],
    LOADER: [
        'absolute',
        'inset-0',
        'bg-white/50',
        'flex',
        'items-center',
        'justify-center',
    ],
};
var LABEL_ICON_INNER_HTML = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z\" fill=\"currentColor\"/>\n        <path d=\"M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z\" fill=\"currentColor\"/>\n        <path d=\"M2.67002 19.7C2.43002 19.7 2.19002 19.58 2.05002 19.37C1.82002 19.03 1.91002 18.56 2.26002 18.33L7.19002 15.02C8.27002 14.29 9.76002 14.38 10.74 15.21L11.07 15.5C11.57 15.93 12.42 15.93 12.91 15.5L17.07 11.93C18.13 11.02 19.8 11.02 20.87 11.93L22.5 13.33C22.81 13.6 22.85 14.07 22.58 14.39C22.31 14.7 21.84 14.74 21.52 14.47L19.89 13.07C19.39 12.64 18.54 12.64 18.04 13.07L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.75002 16.35C9.29002 15.96 8.53002 15.92 8.02002 16.27L3.09002 19.58C2.96002 19.66 2.81002 19.7 2.67002 19.7Z\" fill=\"currentColor\"/>\n    </svg>\n";
var ImageGallery_consts_TOOLBOX_ICON = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z\" fill=\"currentColor\"/>\n        <path d=\"M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z\" fill=\"currentColor\"/>\n        <path d=\"M2.67002 19.7C2.43002 19.7 2.19002 19.58 2.05002 19.37C1.82002 19.03 1.91002 18.56 2.26002 18.33L7.19002 15.02C8.27002 14.29 9.76002 14.38 10.74 15.21L11.07 15.5C11.57 15.93 12.42 15.93 12.91 15.5L17.07 11.93C18.13 11.02 19.8 11.02 20.87 11.93L22.5 13.33C22.81 13.6 22.85 14.07 22.58 14.39C22.31 14.7 21.84 14.74 21.52 14.47L19.89 13.07C19.39 12.64 18.54 12.64 18.04 13.07L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.75002 16.35C9.29002 15.96 8.53002 15.92 8.02002 16.27L3.09002 19.58C2.96002 19.66 2.81002 19.7 2.67002 19.7Z\" fill=\"currentColor\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/ImageGallery/ImageGallery.ts



var ImageGallery = /** @class */ (function () {
    function ImageGallery(_a) {
        var data = _a.data, config = _a.config;
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "images", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "files", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "readOnly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.data = data;
        this.options = {
            endpoint: (config === null || config === void 0 ? void 0 : config.endpoint) || '/api/v1.1/image/upload',
            additionalRequestHeaders: {},
        };
    }
    Object.defineProperty(ImageGallery.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var content = null;
            var _a = this.data, images = _a.images, caption = _a.caption;
            if (images) {
                content = this.renderGrid();
            }
            else {
                content = this.renderLabel();
            }
            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('relative');
            this.wrapper.appendChild(content);
            if (caption) {
                var imageCaption = this.wrapper.querySelector('.ce-image-caption');
                if (imageCaption) {
                    imageCaption.innerHTML = caption;
                }
            }
            return this.wrapper;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a, _b;
            return {
                images: this.images,
                caption: (_b = (_a = this.wrapper) === null || _a === void 0 ? void 0 : _a.querySelector('.ce-image-caption')) === null || _b === void 0 ? void 0 : _b.innerHTML.trim(),
            };
        }
    });
    Object.defineProperty(ImageGallery.prototype, "validate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (savedData) {
            savedData.images = savedData.images.filter(function (item) { return item.trim().length; });
            return savedData.images.length > 0;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "renderLabel", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var wrapper = document.createElement('div');
            wrapper.classList.add('space-y-6');
            var imageLabel = document.createElement('label');
            (_a = imageLabel.classList).add.apply(_a, CLASSNAMES.IMAGE_LABEL);
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.classList.add('hidden');
            fileInput.addEventListener('change', this.processInputFiles.bind(this));
            imageLabel.appendChild(fileInput);
            this.input = fileInput;
            var labelItem = document.createElement('div');
            labelItem.classList.add('flex', 'items-center', 'space-x-4');
            imageLabel.appendChild(labelItem);
            var icon = document.createElement('div');
            icon.innerHTML = LABEL_ICON_INNER_HTML;
            labelItem.appendChild(icon);
            var labelText = document.createElement('div');
            labelText.innerText = 'Выберите одно или несколько изображений';
            labelItem.appendChild(labelText);
            wrapper.appendChild(imageLabel);
            wrapper.appendChild(this.renderCaption());
            return wrapper;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "renderCaption", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var caption = document.createElement('span');
            caption.classList.add('input', 'block', 'ce-image-caption', 'editable');
            caption.dataset.placeholder = 'Подпись';
            var isContentEditable = (!this.readOnly).toString();
            caption.contentEditable = isContentEditable;
            caption.addEventListener('focusout', function () {
                if (!caption.innerHTML.trim().length) {
                    caption.innerHTML = '';
                }
            });
            return caption;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "renderGrid", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            var _this = this;
            var wrapper = document.createElement('div');
            wrapper.classList.add('space-y-4');
            var gallery = document.createElement('div');
            var maxGridCols = this.images.length > 3 ? 3 : this.images.length;
            var gridClass = CLASSNAMES.GRID_COLS[maxGridCols];
            (_a = gallery.classList).add.apply(_a, (0,external_tslib_namespaceObject.__spreadArray)((0,external_tslib_namespaceObject.__spreadArray)([], CLASSNAMES.GALLERY, false), [gridClass], false));
            this.images.forEach(function (url) {
                gallery.appendChild(_this.renderImageItem(url));
            });
            wrapper.appendChild(gallery);
            wrapper.appendChild(this.renderCaption());
            return wrapper;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "renderImageItem", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (url) {
            var _a, _b;
            var _this = this;
            var image = document.createElement('div');
            (_a = image.classList).add.apply(_a, CLASSNAMES.IMAGE_ITEM);
            image.style.backgroundImage = "url(\"".concat(url, "\")");
            image.dataset.url = url;
            var deleteElement = document.createElement('div');
            deleteElement.innerHTML = '&times;';
            (_b = deleteElement.classList).add.apply(_b, CLASSNAMES.DELETE_ELEMENT);
            image.appendChild(deleteElement);
            deleteElement.addEventListener('click', function () {
                _this.images = _this.images.filter(function (elUrl) { return elUrl !== url; });
                if (_this.images.length === 0 && _this.wrapper) {
                    _this.wrapper.innerHTML = '';
                    _this.wrapper.appendChild(_this.renderLabel());
                }
                image.remove();
            });
            return image;
        }
    });
    Object.defineProperty(ImageGallery.prototype, "processInputFiles", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var files = (this.input || {}).files;
            files && this.handleFiles(files);
        }
    });
    Object.defineProperty(ImageGallery.prototype, "handleFiles", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (files) {
            var _a;
            var _this = this;
            Array.from(files).forEach(function (file) {
                var fupFile = new FileItem_FileItem(file);
                _this.files.push(fupFile);
            });
            if (this.files.length) {
                var loader_1 = document.createElement('div');
                (_a = loader_1.classList).add.apply(_a, CLASSNAMES.LOADER);
                loader_1.innerHTML = '<div class="h-40">Подождите</div>';
                var onLoaded_1 = function () {
                    var file = _this.files[_this.index];
                    _this.uploadFile(file, _this.index, onLoaded_1);
                    if (_this.wrapper) {
                        _this.wrapper.innerHTML = '';
                        var grid = _this.renderGrid();
                        _this.wrapper.appendChild(grid);
                        if (file) {
                            _this.wrapper.appendChild(loader_1);
                        }
                    }
                };
                var file = this.files[this.index];
                this.uploadFile(file, this.index, onLoaded_1);
            }
        }
    });
    Object.defineProperty(ImageGallery.prototype, "uploadFile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (file, index, onLoaded) {
            var _this = this;
            var fileElement = this.files[index];
            if (!file || !fileElement) {
                return;
            }
            var loaded = function () {
                _this.index++;
                if (onLoaded) {
                    onLoaded.call(_this);
                }
            };
            if (!file.isValid()) {
                loaded();
                return;
            }
            var formData = new FormData();
            formData.append('image', file.file);
            formData = this.buildFormData(formData, {});
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var _a;
                var status = Number(xhr.status);
                if (status === 200) {
                    // statusContainer.innerHTML = Status.success(this.locale.uploaded);
                }
                else {
                    // statusContainer.innerHTML = Status.error(this.locale.error);
                }
                var jsonResponse = xhr.response;
                var response = JSON.parse(jsonResponse);
                var url = (_a = response === null || response === void 0 ? void 0 : response.file) === null || _a === void 0 ? void 0 : _a.url;
                _this.images.push(url);
                loaded();
            };
            xhr.open('POST', this.options.endpoint, true);
            var headers = this.options.additionalRequestHeaders;
            for (var headerName in headers) {
                var headerValue = headers[headerName];
                if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }
            xhr.send(formData);
        }
    });
    Object.defineProperty(ImageGallery.prototype, "buildFormData", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (formData, data, parentKey) {
            var _this = this;
            if (typeof data === 'function') {
                data = data();
            }
            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
                Object.keys(data).forEach(function (key) {
                    _this.buildFormData(formData, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
                });
            }
            else {
                var value = data === null ? '' : data;
                parentKey && formData.append(parentKey, value);
            }
            return formData;
        }
    });
    Object.defineProperty(ImageGallery, "toolbox", {
        get: function () {
            return {
                title: 'ImagePlugin',
                icon: ImageGallery_consts_TOOLBOX_ICON,
            };
        },
        enumerable: false,
        configurable: true
    });
    return ImageGallery;
}());
/* harmony default export */ var ImageGallery_ImageGallery = (ImageGallery);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/ImageGallery/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/AlertTune/consts.ts
var VARIANTS = [
    {
        name: 'danger',
        icon: "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-triangle-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/>\n            </svg>\n        ",
        className: 'alert-danger',
        title: 'Ахтунг',
    },
    {
        name: 'warning',
        icon: "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-circle-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n            </svg>\n        ",
        className: 'alert-warning',
        title: 'Важно',
    },
    {
        name: 'info',
        icon: "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-square-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n            </svg>\n        ",
        className: 'alert-info',
        title: 'NB',
    },
];

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/AlertTune/AlertTune.ts

var AlertTune = /** @class */ (function () {
    function AlertTune(_a) {
        var api = _a.api, data = _a.data;
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "block", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tuneWrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "variants", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        this.api = api;
        this.data = data;
        this.variants = VARIANTS;
    }
    Object.defineProperty(AlertTune, "isTune", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlertTune.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this;
            var _a = this.api.styles, settingsButton = _a.settingsButton, settingsButtonActive = _a.settingsButtonActive;
            this.tuneWrapper = document.createElement('div');
            this.variants.forEach(function (_a) {
                var _b;
                var name = _a.name, icon = _a.icon, title = _a.title;
                var toggler = document.createElement('div');
                toggler.classList.add(settingsButton);
                toggler.innerHTML = icon;
                toggler.dataset.name = name;
                _this.api.tooltip.onHover(toggler, title, {
                    placement: 'top', hidingDelay: 500,
                });
                if (_this.data === name) {
                    toggler.classList.add(settingsButtonActive);
                }
                (_b = _this.tuneWrapper) === null || _b === void 0 ? void 0 : _b.appendChild(toggler);
            });
            this.api.listeners.on(this.tuneWrapper, 'click', function (event) {
                event && _this.tuneClicked(event);
            });
            return this.tuneWrapper;
        }
    });
    Object.defineProperty(AlertTune.prototype, "tuneClicked", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var _b;
            var target = _a.target;
            var _c = this.api.styles, settingsButton = _c.settingsButton, settingsButtonActive = _c.settingsButtonActive;
            var eventTarget = target;
            var tune = eventTarget.closest(".".concat(settingsButton));
            var isEnabled = tune === null || tune === void 0 ? void 0 : tune.classList.contains(settingsButtonActive);
            var settingsButtonsList = (_b = this.tuneWrapper) === null || _b === void 0 ? void 0 : _b.querySelectorAll(".".concat(settingsButton));
            settingsButtonsList === null || settingsButtonsList === void 0 ? void 0 : settingsButtonsList.forEach(function (button) {
                button.classList.toggle(settingsButtonActive, false);
            });
            tune === null || tune === void 0 ? void 0 : tune.classList.toggle(settingsButtonActive, !isEnabled);
            this.variant = !isEnabled ? tune === null || tune === void 0 ? void 0 : tune.dataset.name : '';
        }
    });
    Object.defineProperty(AlertTune.prototype, "wrap", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (blockContent) {
            this.wrapper = document.createElement('div');
            this.variant = this.data;
            this.wrapper.appendChild(blockContent);
            return this.wrapper;
        }
    });
    Object.defineProperty(AlertTune.prototype, "variant", {
        // eslint-disable-next-line accessor-pairs
        set: function (name) {
            var _this = this;
            var _a;
            this.data = name;
            (_a = this.wrapper) === null || _a === void 0 ? void 0 : _a.classList.toggle('alert', !!name);
            this.variants.forEach(function (variant) {
                var _a;
                var enabled = variant.name === _this.data;
                (_a = _this.wrapper) === null || _a === void 0 ? void 0 : _a.classList.toggle(variant.className, enabled);
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlertTune.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.data;
        }
    });
    return AlertTune;
}());
/* harmony default export */ var AlertTune_AlertTune = (AlertTune);

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/AlertTune/index.ts


;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Quote/consts.ts
var Quote_consts_TOOLBOX_ICON = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M22.0001 12.4H16.2001C14.3001 12.4 12.8701 10.97 12.8701 9.07001V5.84998C12.8701 3.94998 14.3001 2.52002 16.2001 2.52002H19.4201C21.2501 2.52002 22.7501 4.00998 22.7501 5.84998V11.65C22.7501 12.07 22.4101 12.4 22.0001 12.4ZM16.2001 4.03003C15.1401 4.03003 14.3701 4.79999 14.3701 5.85999V9.08002C14.3701 10.14 15.1401 10.91 16.2001 10.91H21.2501V5.85999C21.2501 4.84999 20.4301 4.03003 19.4201 4.03003H16.2001Z\" fill=\"currentColor\"/>\n        <path d=\"M17.47 21.47C17.21 21.47 16.96 21.34 16.82 21.1C16.61 20.74 16.73 20.28 17.08 20.07C20.31 18.15 21.25 17.35 21.25 11.65C21.25 11.24 21.59 10.9 22 10.9C22.41 10.9 22.75 11.24 22.75 11.65C22.75 17.9 21.48 19.21 17.85 21.36C17.73 21.44 17.6 21.47 17.47 21.47Z\" fill=\"currentColor\"/>\n        <path d=\"M10.3702 12.4H4.57023C2.67023 12.4 1.24023 10.97 1.24023 9.07001V5.84998C1.24023 3.94998 2.67023 2.52002 4.57023 2.52002H7.80023C9.63023 2.52002 11.1302 4.00998 11.1302 5.84998V11.65C11.1202 12.07 10.7902 12.4 10.3702 12.4ZM4.58023 4.03003C3.52023 4.03003 2.75023 4.79999 2.75023 5.85999V9.08002C2.75023 10.14 3.52023 10.91 4.58023 10.91H9.63023V5.85999C9.63023 4.84999 8.81024 4.03003 7.80023 4.03003H4.58023Z\" fill=\"currentColor\"/>\n        <path d=\"M5.84013 21.47C5.58013 21.47 5.33013 21.34 5.19013 21.1C4.98013 20.74 5.10013 20.28 5.45013 20.07C8.68013 18.15 9.62013 17.35 9.62013 11.65C9.62013 11.24 9.96013 10.9 10.3701 10.9C10.7801 10.9 11.1201 11.24 11.1201 11.65C11.1201 17.9 9.85013 19.21 6.22013 21.36C6.10013 21.44 5.97013 21.47 5.84013 21.47Z\" fill=\"currentColor\"/>\n    </svg>\n";

;// CONCATENATED MODULE: ./src/components/EditorJs/plugins/Quote/Quote.ts

var Quote = /** @class */ (function () {
    function Quote(_a) {
        var readOnly = _a.readOnly;
        Object.defineProperty(this, "readOnly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wrapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.readOnly = readOnly;
        this.wrapper = this.renderContent();
    }
    Object.defineProperty(Quote.prototype, "renderContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var div = document.createElement('DIV');
            div.classList.add('ce-quote');
            var textarea = document.createElement('p');
            textarea.classList.add('input', 'h-40', 'ce-quote-textarea', 'editable', 'overflow-hidden', 'overflow-y-auto');
            var isContentEditable = (!this.readOnly).toString();
            textarea.contentEditable = isContentEditable;
            textarea.dataset.placeholder = 'Цитата';
            textarea.ariaReadOnly = this.readOnly.toString();
            div.appendChild(textarea);
            var caption = document.createElement('span');
            caption.classList.add('input', 'block', 'ce-quote-caption', 'editable');
            caption.dataset.placeholder = 'Подпись';
            caption.contentEditable = isContentEditable;
            caption.addEventListener('focusout', function () {
                if (!caption.innerHTML.trim().length) {
                    caption.innerHTML = '';
                }
            });
            div.appendChild(caption);
            textarea.addEventListener('keydown', function (event) {
                var key = event.key;
                if (key === 'Tab') {
                    event.preventDefault();
                    event.stopPropagation();
                    caption.focus();
                    return false;
                }
                if (key === 'Enter') {
                    event.stopPropagation();
                    return true;
                }
            });
            return div;
        }
    });
    Object.defineProperty(Quote.prototype, "render", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.wrapper;
        }
    });
    Object.defineProperty(Quote.prototype, "validate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var quote = _a.quote;
            return (quote === null || quote === void 0 ? void 0 : quote.trim()) !== '';
        }
    });
    Object.defineProperty(Quote.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (element) {
            var _a, _b;
            return {
                quote: (_a = element.querySelector('.ce-quote-textarea')) === null || _a === void 0 ? void 0 : _a.innerHTML.trim(),
                caption: (_b = element.querySelector('.ce-quote-caption')) === null || _b === void 0 ? void 0 : _b.innerHTML.trim(),
            };
        }
    });
    Object.defineProperty(Quote, "sanitize", {
        get: function () {
            return {
                quote: {
                    br: true,
                },
                caption: {},
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote, "isReadOnlySupported", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote.prototype, "data", {
        get: function () {
            var _a, _b, _c, _d;
            return {
                quote: (_b = (_a = this.wrapper) === null || _a === void 0 ? void 0 : _a.querySelector('.ce-quote-textarea')) === null || _b === void 0 ? void 0 : _b.innerHTML,
                caption: (_d = (_c = this.wrapper) === null || _c === void 0 ? void 0 : _c.querySelector('.ce-quote-caption')) === null || _d === void 0 ? void 0 : _d.innerHTML,
            };
        },
        set: function (_a) {
            var _b, _c;
            var _d = _a.quote, quote = _d === void 0 ? '' : _d, _e = _a.caption, caption = _e === void 0 ? '' : _e;
            var quoteTextarea = (_b = this.wrapper) === null || _b === void 0 ? void 0 : _b.querySelector('.ce-quote-textarea');
            var quoteCaption = (_c = this.wrapper) === null || _c === void 0 ? void 0 : _c.querySelector('.ce-quote-caption');
            if (quoteTextarea) {
                quoteTextarea.innerHTML = quote;
            }
            if (quoteCaption) {
                quoteCaption.innerHTML = caption;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote, "pasteConfig", {
        get: function () {
            return {
                tags: ['BLOCKQUOTE'],
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote, "toolbox", {
        get: function () {
            return {
                icon: Quote_consts_TOOLBOX_ICON,
                title: 'Quote',
            };
        },
        enumerable: false,
        configurable: true
    });
    return Quote;
}());
/* harmony default export */ var Quote_Quote = (Quote);

;// CONCATENATED MODULE: ./src/components/EditorJs/utils/convertToToolConstructable.ts
// у editorjs поломаны типы, такое дело брат
var convertToToolConstructable = function (classElement) { return classElement; };

;// CONCATENATED MODULE: ./src/components/EditorJs/consts.ts
var TIKTOK_DATA = {
    HTML: "\n        <iframe\n            class='adjust-height'\n            width='100%'\n            height='720'\n            scrolling='no'\n            frameborder='no'\n            allowtransparency='true'\n            allowfullscreen='true'\n        >\n        </iframe>\n    ",
    REGEX: /https?:\/\/www\.tiktok\.com\/\@[^/]+\/video\/(\d+)\/?(\?.*)$/i,
    EMBED_URL: 'https://www.tiktok.com/embed/v2/<%= remote_id %>',
};
var YOUTUBE_DATA = {
    REGEX: /(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed|shorts\/|v\/)?)([\w\-]+)(\S+)?$/,
    EMBED_URL: 'https://www.youtube.com/embed/<%= remote_id %>',
    HTML: "\n        <iframe\n            class='adjust-height'\n            width='100%'\n            height='380'\n            scrolling='no'\n            frameborder='no'\n            allowtransparency='true'\n            allowfullscreen\n        >\n        </iframe>\n    ",
};
var VIDEO_DATA = {
    REGEX: /((?:(?:https?:)?\/\/)?(?:.*?)\.(?:mp4|ogg|webm))$/,
    EMBED_URL: '<%= remote_id %>',
    HTML: '<video width="320" height="240" controls>',
};

;// CONCATENATED MODULE: ./src/components/EditorJs/utils/initializeTools.ts

















var initializeTools = function (csrf, token) { return ({
    poll: Poll_Poll,
    stream: Stream_Stream,
    telegram: (external_editorjs_telegram_default()),
    StrikeTool: StrikeTool_StrikeTool,
    MarkerTool: MarkerTool_MarkerTool,
    Odesli: Odesli_Odesli,
    preview: convertToToolConstructable(Preview_Preview),
    alert: AlertTune_AlertTune,
    header: {
        class: convertToToolConstructable((header_default())),
        config: {
            placeholder: 'Введите заголовок',
            levels: [2, 3],
            defaultLevel: 2,
            allowAnchor: true,
            anchorLength: 32,
        },
    },
    quote: {
        class: convertToToolConstructable(Quote_Quote),
        inlineToolbar: true,
    },
    list: {
        class: (list_default()),
        inlineToolbar: true,
    },
    paragraph: {
        class: convertToToolConstructable(Paragraph_Paragraph),
        inlineToolbar: true,
    },
    image: {
        class: (image_default()),
        config: {
            endpoints: {
                byFile: '/api/v1.1/image/upload',
                byUrl: '/api/v1.1/image/fetch',
            },
            additionalRequestHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrf,
                Authorization: "Bearer ".concat(token),
            },
        },
    },
    ImagePlugin: {
        class: convertToToolConstructable(ImageGallery_ImageGallery),
        inlineToolbar: true,
        config: {
            endpoints: '/api/v1.1/image/upload',
            additionalRequestHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrf,
                Authorization: "Bearer ".concat(token),
            },
        },
    },
    embed: {
        class: (embed_default()),
        config: {
            services: {
                youtube: {
                    regex: YOUTUBE_DATA.REGEX,
                    embedUrl: YOUTUBE_DATA.EMBED_URL,
                    html: YOUTUBE_DATA.HTML,
                },
                coub: true,
                twitter: true,
                tiktok: {
                    regex: TIKTOK_DATA.REGEX,
                    embedUrl: TIKTOK_DATA.EMBED_URL,
                    html: TIKTOK_DATA.HTML,
                },
                video: {
                    regex: VIDEO_DATA.REGEX,
                    embedUrl: VIDEO_DATA.EMBED_URL,
                    html: VIDEO_DATA.HTML,
                },
            },
        },
    },
}); };

;// CONCATENATED MODULE: ./src/components/EditorJs/utils/types.ts
var typedObject = function () { return Object; };

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./src/components/EditorJs/component/script.ts?vue&type=script&lang=ts







/* harmony default export */ var scriptvue_type_script_lang_ts = ((0,external_vue_namespaceObject.defineComponent)({
    name: 'EditorJs',
    props: {
        csrf: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        modelValue: typedObject(),
    },
    emits: { 'update:modelValue': null },
    data: function () {
        return {};
    },
    mounted: function () {
        this.initializeEditor();
    },
    methods: {
        initializeEditor: function () {
            var _this = this;
            try {
                var tools = initializeTools(this.csrf, this.token);
                this.editor = new (editorjs_default())({
                    holder: this.$refs.editorjs,
                    data: this.modelValue,
                    minHeight: 50,
                    tools: tools,
                    tunes: ['preview', 'alert'],
                    i18n: EDITOR_I18N,
                    onReady: function () { return new (external_editorjs_drag_drop_default())(_this.editor); },
                    onChange: this.onEditorChange,
                });
            }
            catch (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        },
        onEditorChange: function () {
            var _this = this;
            this.saveTimeout && clearTimeout(this.saveTimeout);
            this.saveTimeout = setTimeout(function () {
                var _a;
                (_a = _this.editor) === null || _a === void 0 ? void 0 : _a.save().then(function (outputData) {
                    _this.$emit('update:modelValue', outputData);
                }).catch(function (error) {
                    // eslint-disable-next-line no-console
                    console.log('error on save: ', error);
                });
            }, 500);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/EditorJs/component/script.ts?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/EditorJs/component/EditorJs.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(scriptvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var EditorJs = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (EditorJs);


}();
module.exports = __webpack_exports__["default"];
/******/ })()
;