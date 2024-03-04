/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TgAmbulanceWlApp {
        "basePath": string;
    }
    interface TgAmbulanceWlEditor {
        "entryId": string;
    }
    interface TgAmbulanceWlList {
    }
}
export interface TgAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTgAmbulanceWlEditorElement;
}
export interface TgAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTgAmbulanceWlListElement;
}
declare global {
    interface HTMLTgAmbulanceWlAppElement extends Components.TgAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLTgAmbulanceWlAppElement: {
        prototype: HTMLTgAmbulanceWlAppElement;
        new (): HTMLTgAmbulanceWlAppElement;
    };
    interface HTMLTgAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLTgAmbulanceWlEditorElement extends Components.TgAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTgAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLTgAmbulanceWlEditorElement, ev: TgAmbulanceWlEditorCustomEvent<HTMLTgAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTgAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLTgAmbulanceWlEditorElement, ev: TgAmbulanceWlEditorCustomEvent<HTMLTgAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTgAmbulanceWlEditorElement: {
        prototype: HTMLTgAmbulanceWlEditorElement;
        new (): HTMLTgAmbulanceWlEditorElement;
    };
    interface HTMLTgAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLTgAmbulanceWlListElement extends Components.TgAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTgAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLTgAmbulanceWlListElement, ev: TgAmbulanceWlListCustomEvent<HTMLTgAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTgAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLTgAmbulanceWlListElement, ev: TgAmbulanceWlListCustomEvent<HTMLTgAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTgAmbulanceWlListElement: {
        prototype: HTMLTgAmbulanceWlListElement;
        new (): HTMLTgAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "tg-ambulance-wl-app": HTMLTgAmbulanceWlAppElement;
        "tg-ambulance-wl-editor": HTMLTgAmbulanceWlEditorElement;
        "tg-ambulance-wl-list": HTMLTgAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface TgAmbulanceWlApp {
        "basePath"?: string;
    }
    interface TgAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: TgAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface TgAmbulanceWlList {
        "onEntry-clicked"?: (event: TgAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "tg-ambulance-wl-app": TgAmbulanceWlApp;
        "tg-ambulance-wl-editor": TgAmbulanceWlEditor;
        "tg-ambulance-wl-list": TgAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tg-ambulance-wl-app": LocalJSX.TgAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLTgAmbulanceWlAppElement>;
            "tg-ambulance-wl-editor": LocalJSX.TgAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLTgAmbulanceWlEditorElement>;
            "tg-ambulance-wl-list": LocalJSX.TgAmbulanceWlList & JSXBase.HTMLAttributes<HTMLTgAmbulanceWlListElement>;
        }
    }
}
