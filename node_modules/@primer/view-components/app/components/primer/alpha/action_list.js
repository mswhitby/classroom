var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActionListElement_truncationObserver;
import { controller } from '@github/catalyst';
// eslint-disable-next-line custom-elements/no-exports-with-element
export class ActionListTruncationObserver {
    constructor(el) {
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const action = entry.target;
                if (action instanceof HTMLElement) {
                    this.update(action);
                }
            }
        });
        this.resizeObserver.observe(el);
    }
    unobserve(el) {
        this.resizeObserver.unobserve(el);
    }
    update(el) {
        const items = el.querySelectorAll('li');
        for (const item of items) {
            const label = item.querySelector('.ActionListItem-label');
            if (!label)
                continue;
            const tooltip = item.querySelector('.ActionListItem-truncationTooltip');
            if (!tooltip)
                continue;
            const isTruncated = label.scrollWidth > label.clientWidth;
            if (isTruncated) {
                tooltip.style.display = '';
            }
            else {
                tooltip.style.display = 'none';
            }
        }
    }
}
let ActionListElement = class ActionListElement extends HTMLElement {
    constructor() {
        super(...arguments);
        _ActionListElement_truncationObserver.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _ActionListElement_truncationObserver, new ActionListTruncationObserver(this), "f");
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _ActionListElement_truncationObserver, "f").unobserve(this);
    }
};
_ActionListElement_truncationObserver = new WeakMap();
ActionListElement = __decorate([
    controller
    // eslint-disable-next-line custom-elements/expose-class-on-global
], ActionListElement);
export { ActionListElement };
