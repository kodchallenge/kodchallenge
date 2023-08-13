const key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
};

const webkit: string[] = [
  "webkitFullscreenEnabled",
  "webkitFullscreenElement",
  "webkitRequestFullscreen",
  "webkitExitFullscreen",
  "webkitfullscreenchange",
  "webkitfullscreenerror",
];

const moz: string[] = [
  "mozFullScreenEnabled",
  "mozFullScreenElement",
  "mozRequestFullScreen",
  "mozCancelFullScreen",
  "mozfullscreenchange",
  "mozfullscreenerror",
];

const ms: string[] = [
  "msFullscreenEnabled",
  "msFullscreenElement",
  "msRequestFullscreen",
  "msExitFullscreen",
  "MSFullscreenChange",
  "MSFullscreenError",
];

export default class FullScreenService {
  private document: Document;
  private vendor: string[];

  constructor() {
      this.document = window.document;
      this.vendor =
          ("fullscreenEnabled" in this.document && Object.keys(key)) ||
          (webkit[0] in this.document && webkit) ||
          (moz[0] in this.document && moz) ||
          (ms[0] in this.document && ms) ||
          [];
      this.document.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "F11") e.preventDefault();
      });
  }

  get exitFullscreen() {
      if (this.fullscreenElement)
          return this.document[this.vendor[key.exitFullscreen]].bind(this.document);
      return () => {};
  }

  get fullscreenEnabled() {
      return Boolean(this.document[this.vendor[key.fullscreenEnabled]]);
  }

  set fullscreenEnabled(val) {}

  get fullscreenElement() {
      return this.document[this.vendor[key.fullscreenElement]];
  }

  set fullscreenElement(val) {}

  get onfullscreenchange() {
      return this.document[
          `on${this.vendor[key.fullscreenchange]}`.toLowerCase()
      ];
  }

  set onfullscreenchange(handler) {
      this.document[
          `on${this.vendor[key.fullscreenchange]}`.toLowerCase()
      ] = handler;
  }

  get onfullscreenerror() {
      return this.document[`on${this.vendor[key.fullscreenerror]}`.toLowerCase()];
  }

  set onfullscreenerror(handler) {
      this.document[
          `on${this.vendor[key.fullscreenerror]}`.toLowerCase()
      ] = handler;
  }

  requestFullscreen(element: Element) {
      element[this.vendor[key.requestFullscreen]]();
  }

  addEventListener(type: keyof typeof key, handler: EventListenerOrEventListenerObject) {
      this.document.addEventListener(this.vendor[key[type]], handler);
  }

  removeEventListener(type: keyof typeof key, handler: EventListenerOrEventListenerObject) {
      this.document.removeEventListener(this.vendor[key[type]], handler);
  }
}
