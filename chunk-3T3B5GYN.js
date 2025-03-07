import {
  BlankIcon,
  ChevronDownIcon,
  FirebaseService,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  Overlay,
  OverlayModule,
  PlusIcon,
  RadioButton,
  RadioButtonModule,
  Scroller,
  SearchIcon,
  Select,
  SelectModule,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule,
  Tooltip,
  TooltipModule,
  TrackingMapComponent,
  Trips
} from "./chunk-N4SNI4ET.js";
import {
  ActivatedRoute,
  AutoFocus,
  AutoFocusModule,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonDirective,
  ButtonModule,
  CheckIcon,
  ConfirmEventType,
  ConfirmationService,
  DefaultValueAccessor,
  DomHandler,
  DomSanitizer,
  FilterService,
  Footer,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HttpClient,
  HttpEventType,
  InputText,
  InputTextModule,
  MessageService,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  PrimeTemplate,
  ReactiveFormsModule,
  RequiredValidator,
  Ripple,
  RippleModule,
  Router,
  SharedModule,
  TimesIcon,
  TranslationKeys,
  Validators,
  addClass,
  appendChild,
  blockBodyScroll,
  createElement,
  deepEquals,
  equals,
  findLastIndex,
  findSingle,
  focus,
  getFirstFocusableElement,
  getFocusableElements,
  getLastFocusableElement,
  getOuterHeight,
  getOuterWidth,
  getViewport,
  hasClass,
  isEmpty,
  isNotEmpty,
  isPrintableCharacter,
  removeClass,
  resolveFieldData,
  scrollInView,
  setAttribute,
  unblockBodyScroll,
  uuid,
  zindexutils,
  ɵNgNoValidate
} from "./chunk-PIMK5T3Y.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DOCUMENT,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  animate,
  animateChild,
  animation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  query,
  setClassMetadata,
  signal,
  state,
  style,
  transition,
  trigger,
  useAnimation,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5I55Z35Z.js";

// src/app/pages/documentation/documentation.ts
var Documentation = class _Documentation {
  static \u0275fac = function Documentation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Documentation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Documentation, selectors: [["app-documentation"]], decls: 68, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-2xl", "mb-4"], [1, "font-semibold", "text-xl", "mb-4"], [1, "text-lg", "mb-4"], [1, "app-code"], [1, "bg-highlight", "px-2", "py-1", "rounded-border", "not-italic", "text-base"], [1, "leading-normal", "list-disc", "pl-8", "text-lg", "mb-4"], [1, "text-primary", "font-medium"]], template: function Documentation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, "Get Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v19 with PrimeNG v19. In case CLI is not installed already, use the command below to set it up.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "pre", 4)(8, "code");
      \u0275\u0275text(9, "npm install -g @angular/cli");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 3);
      \u0275\u0275text(11, ' Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "pre", 4)(13, "code");
      \u0275\u0275text(14, "git clone https://github.com/primefaces/sakai-ng\nnpm install\nng serve");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 3);
      \u0275\u0275text(16, "The application should run at ");
      \u0275\u0275elementStart(17, "i", 5);
      \u0275\u0275text(18, "http://localhost:4200/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " to view the application in your local environment.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 2);
      \u0275\u0275text(21, "Structure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 3);
      \u0275\u0275text(23, "Templates consists of a couple folders, demos and layout have been separated so that you can easily identify what is necessary for your application.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul", 6)(25, "li")(26, "span", 7);
      \u0275\u0275text(27, "src/app/layout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, ": Main layout files, needs to be present.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "span", 7);
      \u0275\u0275text(31, "src/app/pages");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, ": Demo content like Dashboard.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li")(34, "span", 7);
      \u0275\u0275text(35, "src/assets/demo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, ": Assets used in demos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "li")(38, "span", 7);
      \u0275\u0275text(39, "src/assets/layout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, ": SCSS files of the main layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 2);
      \u0275\u0275text(42, "Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 3);
      \u0275\u0275text(44, " Main menu is defined at ");
      \u0275\u0275elementStart(45, "span", 5);
      \u0275\u0275text(46, "src/app/layout/component/app.menu.ts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " file. Update the ");
      \u0275\u0275elementStart(48, "i", 5);
      \u0275\u0275text(49, "model");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " property to define your own menu items. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 2);
      \u0275\u0275text(52, "Layout Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 3)(54, "span", 5);
      \u0275\u0275text(55, "src/app/layout/service/layout.service.ts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 2);
      \u0275\u0275text(58, "Tailwind CSS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 3);
      \u0275\u0275text(60, "The demo pages are developed with Tailwind CSS however the core application shell uses custom CSS.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 2);
      \u0275\u0275text(62, "Variables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 3);
      \u0275\u0275text(64, " CSS variables used in the template are derived from the applied PrimeNG theme. Customize them through the CSS variables in ");
      \u0275\u0275elementStart(65, "span", 5);
      \u0275\u0275text(66, "src/assets/layout/variables");
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, ". ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n@media screen and (max-width: 991px) {\n  .video-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n  }\n  .video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=documentation.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Documentation, { className: "Documentation", filePath: "src/app/pages/documentation/documentation.ts", lineNumber: 73 });
})();

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["ExclamationTriangleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1)(3, "path", 2)(4, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "defs")(6, "clipPath", 4);
        \u0275\u0275element(7, "rect", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: "ExclamationTriangleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["InfoCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: "InfoCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-star.mjs
var StarIcon = class _StarIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarIcon_BaseFactory;
    return function StarIcon_Factory(__ngFactoryType__) {
      return (\u0275StarIcon_BaseFactory || (\u0275StarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarIcon)))(__ngFactoryType__ || _StarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarIcon,
    selectors: [["StarIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarIcon, [{
    type: Component,
    args: [{
      selector: "StarIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-starfill.mjs
var StarFillIcon = class _StarFillIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarFillIcon_BaseFactory;
    return function StarFillIcon_Factory(__ngFactoryType__) {
      return (\u0275StarFillIcon_BaseFactory || (\u0275StarFillIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarFillIcon)))(__ngFactoryType__ || _StarFillIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarFillIcon,
    selectors: [["StarFillIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarFillIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarFillIcon, [{
    type: Component,
    args: [{
      selector: "StarFillIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["TimesCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: "TimesCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-upload.mjs
var UploadIcon = class _UploadIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UploadIcon_BaseFactory;
    return function UploadIcon_Factory(__ngFactoryType__) {
      return (\u0275UploadIcon_BaseFactory || (\u0275UploadIcon_BaseFactory = \u0275\u0275getInheritedFactory(_UploadIcon)))(__ngFactoryType__ || _UploadIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UploadIcon,
    selectors: [["UploadIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UploadIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadIcon, [{
    type: Component,
    args: [{
      selector: "UploadIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMaximizeIcon_BaseFactory;
    return function WindowMaximizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMaximizeIcon_BaseFactory || (\u0275WindowMaximizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMaximizeIcon)))(__ngFactoryType__ || _WindowMaximizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMaximizeIcon,
    selectors: [["WindowMaximizeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMaximizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMaximizeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMinimizeIcon_BaseFactory;
    return function WindowMinimizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMinimizeIcon_BaseFactory || (\u0275WindowMinimizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMinimizeIcon)))(__ngFactoryType__ || _WindowMinimizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMinimizeIcon,
    selectors: [["WindowMinimizeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMinimizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMinimizeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c0 = ["container"];
var _c1 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c2 = (a0) => ({
  value: "visible",
  params: a0
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c4 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template, 1, 2, "CheckIcon")(2, ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template, 1, 2, "InfoCircleIcon")(3, ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template, 1, 2, "TimesCircleIcon")(4, ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template, 1, 2, "ExclamationTriangleIcon")(5, ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template, 1, 2, "InfoCircleIcon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.message.severity) === "success" ? 1 : tmp_7_0 === "info" ? 2 : tmp_7_0 === "error" ? 3 : tmp_7_0 === "warn" ? 4 : 5);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_1_Template, 1, 1, "span", 6)(2, ToastItem_Conditional_3_ng_container_1_span_2_Template, 6, 4, "span", 6);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("messageText"));
    \u0275\u0275attribute("data-pc-section", "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("summary"));
    \u0275\u0275attribute("data-pc-section", "summary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("detail"));
    \u0275\u0275attribute("data-pc-section", "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 1, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 7);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    });
    \u0275\u0275template(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 4)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 3, "TimesIcon", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ariaLabel", ctx_r1.closeAriaLabel);
    \u0275\u0275attribute("class", ctx_r1.cx("closeButton"))("data-pc-section", "closebutton");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 10, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3)(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageContent"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c4, ctx_r1.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c5 = ["message"];
var _c6 = ["headless"];
function Toast_p_toastItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 3);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var theme = ({
  dt
}) => `
.p-toast {
    width: ${dt("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${dt("toast.icon.size")};
    width: ${dt("toast.icon.size")};
    height: ${dt("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${dt("toast.content.padding")};
    gap: ${dt("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${dt("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${dt("toast.summary.font.weight")};
    font-size: ${dt("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${dt("toast.detail.font.weight")};
    font-size: ${dt("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${dt("toast.transition.duration")}, color ${dt("toast.transition.duration")}, outline-color ${dt("toast.transition.duration")}, box-shadow ${dt("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${dt("toast.close.button.width")};
    height: ${dt("toast.close.button.height")};
    border-radius: ${dt("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${dt("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${dt("toast.blur")});
    border-radius: ${dt("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${dt("toast.close.icon.size")};
    width: ${dt("toast.close.icon.size")};
    height: ${dt("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${dt("focus.ring.width")};
    outline-style: ${dt("focus.ring.style")};
    outline-offset: ${dt("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${dt("toast.info.background")};
    border-color: ${dt("toast.info.border.color")};
    color: ${dt("toast.info.color")};
    box-shadow: ${dt("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.info.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${dt("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${dt("toast.success.background")};
    border-color: ${dt("toast.success.border.color")};
    color: ${dt("toast.success.color")};
    box-shadow: ${dt("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.success.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${dt("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${dt("toast.warn.background")};
    border-color: ${dt("toast.warn.border.color")};
    color: ${dt("toast.warn.color")};
    box-shadow: ${dt("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${dt("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${dt("toast.error.background")};
    border-color: ${dt("toast.error.border.color")};
    color: ${dt("toast.error.color")};
    box-shadow: ${dt("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.error.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${dt("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${dt("toast.secondary.background")};
    border-color: ${dt("toast.secondary.border.color")};
    color: ${dt("toast.secondary.color")};
    box-shadow: ${dt("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${dt("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${dt("toast.contrast.background")};
    border-color: ${dt("toast.contrast.border.color")};
    color: ${dt("toast.contrast.color")};
    box-shadow: ${dt("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${dt("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-toast p-component": true,
    [`p-toast-${instance._position}`]: !!instance._position
  }),
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  containerViewChild;
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
    super.ngOnDestroy();
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    viewQuery: function ToastItem_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 15,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "ngClass"], [3, "ngClass", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "ariaLabel"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseLeave());
        });
        \u0275\u0275template(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 10, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.message == null ? null : ctx.message.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("message"))("@messageState", \u0275\u0275pureFunction1(13, _c2, \u0275\u0275pureFunction4(8, _c1, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="message?.styleClass"
            [ngClass]="cx('message')"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [ngClass]="cx('messageContent')" [class]="message?.contentStyleClass" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        <span *ngIf="message.icon" [ngClass]="cx('messageIcon')"></span>
                        <span [ngClass]="cx('messageIcon')" *ngIf="!message.icon" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'">
                            @switch (message.severity) {
                                @case ('success') {
                                    <CheckIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <TimesCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <ExclamationTriangleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        </span>
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [ariaLabel]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [ngClass]="cx('closeIcon')"></span>
                                } @else {
                                    <TimesIcon [ngClass]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  containerViewChild;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = uuid("pn_id_");
  templates;
  ngOnInit() {
    super.ngOnInit();
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.containerViewChild?.nativeElement, this.id, "");
      if (this.autoZIndex && this.containerViewChild?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.containerViewChild?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && isEmpty(this.messages)) {
        zindexutils.clear(this.containerViewChild?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.containerViewChild && this.autoZIndex) {
      zindexutils.clear(this.containerViewChild.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = \u0275\u0275getInheritedFactory(_Toast)))(__ngFactoryType__ || _Toast);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c5, 5);
        \u0275\u0275contentQuery(dirIndex, _c6, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Toast_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 7,
    consts: [["container", ""], [3, "ngClass", "ngStyle"], [3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, Toast_p_toastItem_2_Template, 1, 10, "p-toastItem", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("root"))("ngStyle", ctx.sx("root"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgStyle, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <div #container [ngClass]="cx('root')" [ngStyle]="sx('root')" [style]="style" [class]="styleClass">
            <p-toastItem
                *ngFor="let msg of messages; let i = index"
                [message]="msg"
                [index]="i"
                [life]="life"
                (onClose)="onMessageClose($event)"
                [template]="template || _template"
                [headlessTemplate]="headlessTemplate || _headlessTemplate"
                @toastAnimation
                (@toastAnimation.start)="onAnimationStart($event)"
                (@toastAnimation.done)="onAnimationEnd($event)"
                [showTransformOptions]="showTransformOptions"
                [hideTransformOptions]="hideTransformOptions"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
            ></p-toastItem>
        </div>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle]
    }]
  }], null, {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c02 = ["start"];
var _c12 = ["end"];
var _c22 = ["center"];
var _c32 = ["*"];
function Toolbar_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.startTemplate || ctx_r0._startTemplate);
  }
}
function Toolbar_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.centerTemplate || ctx_r0._centerTemplate);
  }
}
function Toolbar_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, Toolbar_div_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.endTemplate || ctx_r0._endTemplate);
  }
}
var theme2 = ({
  dt
}) => `
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${dt("toolbar.padding")};
    background: ${dt("toolbar.background")};
    border: 1px solid ${dt("toolbar.border.color")};
    color: ${dt("toolbar.color")};
    border-radius: ${dt("toolbar.border.radius")};
    gap: ${dt("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`;
var classes2 = {
  root: "p-toolbar p-component",
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var ToolbarStyle = class _ToolbarStyle extends BaseStyle {
  name = "toolbar";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToolbarStyle_BaseFactory;
    return function ToolbarStyle_Factory(__ngFactoryType__) {
      return (\u0275ToolbarStyle_BaseFactory || (\u0275ToolbarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToolbarStyle)))(__ngFactoryType__ || _ToolbarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToolbarStyle,
    factory: _ToolbarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarStyle, [{
    type: Injectable
  }], null, null);
})();
var ToolbarClasses;
(function(ToolbarClasses2) {
  ToolbarClasses2["root"] = "p-toolbar";
  ToolbarClasses2["start"] = "p-toolbar-start";
  ToolbarClasses2["center"] = "p-toolbar-center";
  ToolbarClasses2["end"] = "p-toolbar-end";
})(ToolbarClasses || (ToolbarClasses = {}));
var Toolbar = class _Toolbar extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabelledBy;
  _componentStyle = inject(ToolbarStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  /**
   * Defines template option for center.
   * @group Templates
   */
  centerTemplate;
  templates;
  _startTemplate;
  _endTemplate;
  _centerTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
        case "left":
          this._startTemplate = item.template;
          break;
        case "end":
        case "right":
          this._endTemplate = item.template;
          break;
        case "center":
          this._centerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toolbar_BaseFactory;
    return function Toolbar_Factory(__ngFactoryType__) {
      return (\u0275Toolbar_BaseFactory || (\u0275Toolbar_BaseFactory = \u0275\u0275getInheritedFactory(_Toolbar)))(__ngFactoryType__ || _Toolbar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toolbar,
    selectors: [["p-toolbar"]],
    contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.centerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy"
    },
    features: [\u0275\u0275ProvidersFeature([ToolbarStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c32,
    decls: 5,
    vars: 9,
    consts: [["role", "toolbar", 3, "ngClass", "ngStyle"], ["class", "p-toolbar-start", 4, "ngIf"], ["class", "p-toolbar-center", 4, "ngIf"], ["class", "p-toolbar-end", 4, "ngIf"], [1, "p-toolbar-start"], [4, "ngTemplateOutlet"], [1, "p-toolbar-center"], [1, "p-toolbar-end"]],
    template: function Toolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Toolbar_div_2_Template, 2, 2, "div", 1)(3, Toolbar_div_3_Template, 2, 2, "div", 2)(4, Toolbar_div_4_Template, 2, 2, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-toolbar p-component")("ngStyle", ctx.style);
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "toolbar");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.startTemplate || ctx._startTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.centerTemplate || ctx._centerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.endTemplate || ctx._endTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div [ngClass]="'p-toolbar p-component'" [attr.aria-labelledby]="ariaLabelledBy" [ngStyle]="style" [class]="styleClass" role="toolbar" [attr.data-pc-name]="'toolbar'">
            <ng-content></ng-content>
            <div class="p-toolbar-start" *ngIf="startTemplate || _startTemplate" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
            </div>
            <div class="p-toolbar-center" *ngIf="centerTemplate || _centerTemplate" [attr.data-pc-section]="'center'">
                <ng-container *ngTemplateOutlet="centerTemplate || _centerTemplate"></ng-container>
            </div>
            <div class="p-toolbar-end" *ngIf="endTemplate || _endTemplate" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: ["center", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToolbarModule = class _ToolbarModule {
  static \u0275fac = function ToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToolbarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toolbar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [Toolbar, SharedModule],
      exports: [Toolbar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c03 = ["onicon"];
var _c13 = ["officon"];
var _c23 = ["cancelicon"];
var _c33 = (a0, a1) => ({
  "p-rating-option-active": a0,
  "p-focus-visible": a1
});
function Rating_ng_container_0_ng_template_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle)("ngClass", ctx_r2.iconOffClass);
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_3_StarIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "StarIcon", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle)("styleClass", "p-rating-icon");
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_0_ng_template_1_ng_container_3_span_1_Template, 1, 3, "span", 7)(2, Rating_ng_container_0_ng_template_1_ng_container_3_StarIcon_2_Template, 1, 3, "StarIcon", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.iconOffClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOffClass);
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle)("ngClass", ctx_r2.iconOnClass);
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_StarFillIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "StarFillIcon", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle)("styleClass", "p-rating-icon p-rating-icon-active");
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_0_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_0_ng_template_1_ng_container_4_span_1_Template, 1, 3, "span", 11)(2, Rating_ng_container_0_ng_template_1_ng_container_4_StarFillIcon_2_Template, 1, 3, "StarFillIcon", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.iconOnClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOnClass);
  }
}
function Rating_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function Rating_ng_container_0_ng_template_1_Template_div_click_0_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionClick($event, star_r2 + 1));
    });
    \u0275\u0275elementStart(1, "span", 4)(2, "input", 5);
    \u0275\u0275listener("focus", function Rating_ng_container_0_ng_template_1_Template_input_focus_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event, star_r2 + 1));
    })("blur", function Rating_ng_container_0_ng_template_1_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("change", function Rating_ng_container_0_ng_template_1_Template_input_change_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onChange($event, star_r2 + 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, Rating_ng_container_0_ng_template_1_ng_container_3_Template, 3, 2, "ng-container", 6)(4, Rating_ng_container_0_ng_template_1_ng_container_4_Template, 3, 2, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c33, star_r2 + 1 <= ctx_r2.value, star_r2 + 1 === ctx_r2.focusedOptionIndex() && ctx_r2.isFocusVisibleItem));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.nameattr)("checked", ctx_r2.value === 0)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("aria-label", ctx_r2.starAriaLabel(star_r2 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.value || i_r4 >= ctx_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.value && i_r4 < ctx_r2.value);
  }
}
function Rating_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_0_ng_template_1_Template, 5, 13, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.starsArray);
  }
}
function Rating_ng_template_1_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function Rating_ng_template_1_span_0_Template_span_click_0_listener($event) {
      const star_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionClick($event, star_r6 + 1));
    });
    \u0275\u0275template(1, Rating_ng_template_1_span_0_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "onIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.getIconTemplate(i_r7));
  }
}
function Rating_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_1_span_0_Template, 2, 2, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r2.starsArray);
  }
}
var theme3 = ({
  dt
}) => `
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${dt("rating.gap")};
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background ${dt("rating.transition.duration")}, color ${dt("rating.transition.duration")}, border-color ${dt("rating.transition.duration")}, outline-color ${dt("rating.transition.duration")}, box-shadow ${dt("rating.transition.duration")};
}

.p-rating-option.p-focus-visible {
    box-shadow: ${dt("rating.focus.ring.shadow")};
    outline: ${dt("rating.focus.ring.width")} ${dt("rating.focus.ring.style")} ${dt("rating.focus.ring.color")};
    outline-offset: ${dt("rating.focus.ring.offset")};
}

.p-rating-icon {
    color: ${dt("rating.icon.color")};
    transition: background ${dt("rating.transition.duration")}, color ${dt("rating.transition.duration")}, border-color ${dt("rating.transition.duration")}, outline-color ${dt("rating.transition.duration")}, box-shadow ${dt("rating.transition.duration")};
    font-size: ${dt("rating.icon.size")};
    width: ${dt("rating.icon.size")};
    height: ${dt("rating.icon.size")};
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: ${dt("rating.icon.hover.color")};
}

.p-rating-option-active .p-rating-icon {
    color: ${dt("rating.icon.active.color")};
}

/* For PrimeNG */
p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
    stroke: ${dt("rating.invalid.icon.color")};
}`;
var classes3 = {
  root: ({
    props
  }) => ["p-rating", {
    "p-readonly": props.readonly,
    "p-disabled": props.disabled
  }],
  option: ({
    instance,
    props,
    value
  }) => ["p-rating-option", {
    "p-rating-option-active": value <= props.modelValue,
    "p-focus-visible": value === instance.focusedOptionIndex() && instance.isFocusVisibleItem
  }],
  onIcon: "p-rating-icon p-rating-on-icon",
  offIcon: "p-rating-icon p-rating-off-icon"
};
var RatingStyle = class _RatingStyle extends BaseStyle {
  name = "rating";
  theme = theme3;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RatingStyle_BaseFactory;
    return function RatingStyle_Factory(__ngFactoryType__) {
      return (\u0275RatingStyle_BaseFactory || (\u0275RatingStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RatingStyle)))(__ngFactoryType__ || _RatingStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RatingStyle,
    factory: _RatingStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStyle, [{
    type: Injectable
  }], null, null);
})();
var RatingClasses;
(function(RatingClasses2) {
  RatingClasses2["root"] = "p-rating";
  RatingClasses2["option"] = "p-rating-option";
  RatingClasses2["onIcon"] = "p-rating-on-icon";
  RatingClasses2["offIcon"] = "p-rating-off-icon";
})(RatingClasses || (RatingClasses = {}));
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating extends BaseComponent {
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating is cancelled.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onCancel = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  /**
   * Custom cancel icon template.
   * @group Templates
   */
  cancelIconTemplate;
  templates;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1);
  nameattr;
  _componentStyle = inject(RatingStyle);
  _onIconTemplate;
  _offIconTemplate;
  _cancelIconTemplate;
  ngOnInit() {
    super.ngOnInit();
    this.nameattr = this.nameattr || uuid("pn_id_");
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.disabled) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = getFirstFocusableElement(event.currentTarget, "");
      firstFocusableEl && focus(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    if (!this.readonly && !this.disabled) {
      if (this.focusedOptionIndex() === value || value === this.value) {
        this.focusedOptionIndex.set(-1);
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
      }
    }
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    if (!this.readonly && !this.disabled) {
      this.focusedOptionIndex.set(value);
      this.onFocus.emit(event);
    }
  }
  updateModel(event, value) {
    this.value = value;
    this.onModelChange(this.value);
    this.onModelTouched();
    if (!value) {
      this.onCancel.emit();
    } else {
      this.onRate.emit({
        originalEvent: event,
        value
      });
    }
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria.star : this.config.translation.aria.stars.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate || this._offIconTemplate : this.onIconTemplate || this.offIconTemplate;
  }
  writeValue(value) {
    this.value = value;
    this.cd.detectChanges();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get isCustomIcon() {
    return !!(this.onIconTemplate || this._onIconTemplate || this.offIconTemplate || this._offIconTemplate || this.cancelIconTemplate || this._cancelIconTemplate);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Rating_BaseFactory;
    return function Rating_Factory(__ngFactoryType__) {
      return (\u0275Rating_BaseFactory || (\u0275Rating_BaseFactory = \u0275\u0275getInheritedFactory(_Rating)))(__ngFactoryType__ || _Rating);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c13, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.onIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.offIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancelIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-rating"],
    hostVars: 6,
    hostBindings: function Rating_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "rating")("data-pc-section", "root");
        \u0275\u0275classProp("p-readonly", ctx.readonly)("p-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onCancel: "onCancel",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RATING_VALUE_ACCESSOR, RatingStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 2,
    consts: [["customTemplate", ""], [4, "ngIf", "ngIfElse"], ["ngFor", "", 3, "ngForOf"], [1, "p-rating-option", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "value", "0", 3, "focus", "blur", "change", "name", "checked", "disabled", "readonly", "pAutoFocus"], [4, "ngIf"], ["class", "p-rating-icon", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "styleClass", 4, "ngIf"], [1, "p-rating-icon", 3, "ngStyle", "ngClass"], [3, "ngStyle", "styleClass"], ["class", "p-rating-icon p-rating-icon-active", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "p-rating-icon", "p-rating-icon-active", 3, "ngStyle", "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngTemplateOutlet"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Rating_ng_container_0_Template, 2, 1, "ng-container", 1)(1, Rating_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const customTemplate_r8 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.isCustomIcon)("ngIfElse", customTemplate_r8);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      imports: [CommonModule, AutoFocus, StarFillIcon, StarIcon, SharedModule],
      standalone: true,
      template: `
        <ng-container *ngIf="!isCustomIcon; else customTemplate">
            <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
                <div
                    class="p-rating-option"
                    [ngClass]="{
                        'p-rating-option-active': star + 1 <= value,
                        'p-focus-visible': star + 1 === focusedOptionIndex() && isFocusVisibleItem
                    }"
                    (click)="onOptionClick($event, star + 1)"
                >
                    <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            type="radio"
                            value="0"
                            [name]="nameattr"
                            [checked]="value === 0"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [attr.aria-label]="starAriaLabel(star + 1)"
                            (focus)="onInputFocus($event, star + 1)"
                            (blur)="onInputBlur($event)"
                            (change)="onChange($event, star + 1)"
                            [pAutoFocus]="autofocus"
                        />
                    </span>
                    <ng-container *ngIf="!value || i >= value">
                        <span class="p-rating-icon" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                        <StarIcon *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [styleClass]="'p-rating-icon'" [attr.data-pc-section]="'offIcon'" />
                    </ng-container>
                    <ng-container *ngIf="value && i < value">
                        <span class="p-rating-icon p-rating-icon-active" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                        <StarFillIcon *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [styleClass]="'p-rating-icon p-rating-icon-active'" [attr.data-pc-section]="'onIcon'" />
                    </ng-container>
                </div>
            </ng-template>
        </ng-container>
        <ng-template #customTemplate>
            <span *ngFor="let star of starsArray; let i = index" (click)="onOptionClick($event, star + 1)" [attr.data-pc-section]="'onIcon'">
                <ng-container *ngTemplateOutlet="getIconTemplate(i)"></ng-container>
            </span>
        </ng-template>
    `,
      providers: [RATING_VALUE_ACCESSOR, RatingStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "p-rating",
        "[attr.data-pc-name]": '"rating"',
        "[attr.data-pc-section]": '"root"',
        "[class.p-readonly]": "readonly",
        "[class.p-disabled]": "disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static \u0275fac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RatingModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Rating, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [Rating, SharedModule],
      exports: [Rating, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-textarea.mjs
var theme4 = ({
  dt
}) => `
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt("textarea.color")};
    background: ${dt("textarea.background")};
    padding: ${dt("textarea.padding.y")} ${dt("textarea.padding.x")};
    border: 1px solid ${dt("textarea.border.color")};
    transition: background ${dt("textarea.transition.duration")}, color ${dt("textarea.transition.duration")}, border-color ${dt("textarea.transition.duration")}, outline-color ${dt("textarea.transition.duration")}, box-shadow ${dt("textarea.transition.duration")};
    appearance: none;
    border-radius: ${dt("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${dt("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${dt("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${dt("textarea.focus.border.color")};
    box-shadow: ${dt("textarea.focus.ring.shadow")};
    outline: ${dt("textarea.focus.ring.width")} ${dt("textarea.focus.ring.style")} ${dt("textarea.focus.ring.color")};
    outline-offset: ${dt("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${dt("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${dt("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${dt("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${dt("textarea.disabled.background")};
    color: ${dt("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${dt("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${dt("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${dt("textarea.sm.font.size")};
    padding-block: ${dt("textarea.sm.padding.y")};
    padding-inline: ${dt("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${dt("textarea.lg.font.size")};
    padding-block: ${dt("textarea.lg.padding.y")};
    padding-inline: ${dt("textarea.lg.padding.x")};
}
`;
var classes4 = {
  root: ({
    instance,
    props
  }) => ["p-textarea p-component", {
    "p-filled": instance.filled,
    "p-textarea-resizable ": props.autoResize,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled",
    "p-textarea-fluid": props.fluid
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  theme = theme4;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var Textarea = class _Textarea extends BaseComponent {
  ngModel;
  control;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  constructor(ngModel, control) {
    super();
    this.ngModel = ngModel;
    this.control = control;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function Textarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Textarea)(\u0275\u0275directiveInject(NgModel, 8), \u0275\u0275directiveInject(NgControl, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Textarea,
    selectors: [["", "pTextarea", ""]],
    hostAttrs: [1, "p-textarea", "p-component"],
    hostVars: 16,
    hostBindings: function Textarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function Textarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-filled", ctx.filled)("p-textarea-resizable", ctx.autoResize)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-textarea-fluid", ctx.hasFluid)("p-textarea-sm", ctx.pSize === "small")("p-inputfield-sm", ctx.pSize === "small")("p-textarea-lg", ctx.pSize === "large")("p-inputfield-lg", ctx.pSize === "large");
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      pSize: "pSize"
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea, [{
    type: Directive,
    args: [{
      selector: "[pTextarea]",
      standalone: true,
      host: {
        class: "p-textarea p-component",
        "[class.p-filled]": "filled",
        "[class.p-textarea-resizable]": "autoResize",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-textarea-fluid]": "hasFluid",
        "[class.p-textarea-sm]": 'pSize === "small"',
        "[class.p-inputfield-sm]": 'pSize === "small"',
        "[class.p-textarea-lg]": 'pSize === "large"',
        "[class.p-inputfield-lg]": 'pSize === "large"'
      },
      providers: [TextareaStyle]
    }]
  }], () => [{
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }], {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var TextareaModule = class _TextareaModule {
  static \u0275fac = function TextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextareaModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaModule, [{
    type: NgModule,
    args: [{
      imports: [Textarea],
      exports: [Textarea]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  ngOnInit() {
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return createElement("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? getFirstFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    focus(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? getLastFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    focus(focusableElement);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FocusTrap_BaseFactory;
    return function FocusTrap_Factory(__ngFactoryType__) {
      return (\u0275FocusTrap_BaseFactory || (\u0275FocusTrap_BaseFactory = \u0275\u0275getInheritedFactory(_FocusTrap)))(__ngFactoryType__ || _FocusTrap);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c04 = ["header"];
var _c14 = ["content"];
var _c24 = ["footer"];
var _c34 = ["closeicon"];
var _c42 = ["maximizeicon"];
var _c52 = ["minimizeicon"];
var _c62 = ["headless"];
var _c7 = ["titlebar"];
var _c8 = ["*", [["p-footer"]]];
var _c9 = ["*", "p-footer"];
var _c10 = (a0, a1, a2) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  display: "flex",
  "justify-content": a0,
  "align-items": a1,
  "pointer-events": a2
});
var _c11 = (a0) => ({
  "p-dialog p-component": true,
  "p-dialog-maximized": a0
});
var _c122 = () => ({
  display: "flex",
  "flex-direction": "column",
  "pointer-events": "auto"
});
var _c132 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c142 = (a0) => ({
  value: "visible",
  params: a0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initResize($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("resizeHandle"));
  }
}
function Dialog_div_0_div_1_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy)("ngClass", ctx_r1.cx("title"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMaximizeIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMinimizeIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 0, "WindowMaximizeIcon", 22)(2, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 0, "WindowMinimizeIcon", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized && !ctx_r1._maximizeiconTemplate && !ctx_r1.maximizeIconTemplate && !ctx_r1.maximizeIconT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized && !ctx_r1._minimizeiconTemplate && !ctx_r1.minimizeIconTemplate && !ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._maximizeiconTemplate || ctx_r1.maximizeIconTemplate || ctx_r1.maximizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._minimizeiconTemplate || ctx_r1.minimizeIconTemplate || ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_p_button_6_Template_p_button_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.maximize());
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_span_1_Template, 1, 1, "span", 18)(2, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_Template, 3, 2, "ng-container", 22)(3, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_Template, 2, 1, "ng-container", 22)(4, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_Template, 2, 1, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r1.cx("pcMaximizeButton"))("tabindex", ctx_r1.maximizable ? "0" : "-1")("ariaLabel", ctx_r1.maximizeLabel)("buttonProps", ctx_r1.maximizeButtonProps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizeIcon && !ctx_r1._maximizeiconTemplate && !ctx_r1._minimizeiconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximizeIcon && !(ctx_r1.maximizeButtonProps == null ? null : ctx_r1.maximizeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 18)(2, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_TimesIcon_2_Template, 1, 0, "TimesIcon", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 22)(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_Template, 2, 1, "span", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1._closeiconTemplate && !ctx_r1.closeIconTemplate && !ctx_r1.closeIconT && !(ctx_r1.closeButtonProps == null ? null : ctx_r1.closeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_p_button_7_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_p_button_7_Template_p_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r1.cx("pcCloseButton"))("ariaLabel", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex)("buttonProps", ctx_r1.closeButtonProps);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 5);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_div_12_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("footer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 1, "div", 12);
    \u0275\u0275elementStart(1, "div", 13, 2);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.initDrag($event));
    });
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_span_3_Template, 2, 3, "span", 14)(4, Dialog_div_0_div_1_ng_template_3_ng_container_4_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275template(6, Dialog_div_0_div_1_ng_template_3_p_button_6_Template, 5, 8, "p-button", 16)(7, Dialog_div_0_div_1_ng_template_3_p_button_7_Template, 3, 4, "p-button", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7, 3);
    \u0275\u0275projection(10);
    \u0275\u0275template(11, Dialog_div_0_div_1_ng_template_3_ng_container_11_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Dialog_div_0_div_1_ng_template_3_div_12_Template, 4, 2, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.resizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1._headerTemplate && !ctx_r1.headerTemplate && !ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headerTemplate || ctx_r1.headerTemplate || ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.contentStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.cx("content"))("ngStyle", ctx_r1.contentStyle);
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._contentTemplate || ctx_r1.contentTemplate || ctx_r1.contentT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9, 0);
    \u0275\u0275listener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 10)(3, Dialog_div_0_div_1_ng_template_3_Template, 13, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r7 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c11, ctx_r1.maximizable && ctx_r1.maximized))("ngStyle", \u0275\u0275pureFunction0(15, _c122))("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", \u0275\u0275pureFunction1(19, _c142, \u0275\u0275pureFunction2(16, _c132, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    \u0275\u0275attribute("role", ctx_r1.role)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, Dialog_div_0_div_1_Template, 5, 21, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.maskStyle);
    \u0275\u0275classMap(ctx_r1.maskStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.maskClass)("ngStyle", \u0275\u0275pureFunction3(7, _c10, ctx_r1.position === "left" || ctx_r1.position === "topleft" || ctx_r1.position === "bottomleft" ? "flex-start" : ctx_r1.position === "right" || ctx_r1.position === "topright" || ctx_r1.position === "bottomright" ? "flex-end" : "center", ctx_r1.position === "top" || ctx_r1.position === "topleft" || ctx_r1.position === "topright" ? "flex-start" : ctx_r1.position === "bottom" || ctx_r1.position === "bottomleft" || ctx_r1.position === "bottomright" ? "flex-end" : "center", ctx_r1.modal ? "auto" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var theme5 = ({
  dt
}) => `
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${dt("dialog.border.radius")};
    box-shadow: ${dt("dialog.shadow")};
    background: ${dt("dialog.background")};
    border: 1px solid ${dt("dialog.border.color")};
    color: ${dt("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${dt("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${dt("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${dt("dialog.title.font.weight")};
    font-size: ${dt("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${dt("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${dt("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${dt("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;
var inlineStyles2 = {
  mask: ({
    instance
  }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: instance.position === "left" || instance.position === "topleft" || instance.position === "bottomleft" ? "flex-start" : instance.position === "right" || instance.position === "topright" || instance.position === "bottomright" ? "flex-end" : "center",
    alignItems: instance.position === "top" || instance.position === "topleft" || instance.position === "topright" ? "flex-start" : instance.position === "bottom" || instance.position === "bottomleft" || instance.position === "bottomright" ? "flex-end" : "center",
    pointerEvents: instance.modal ? "auto" : "none"
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
var classes5 = {
  mask: ({
    instance
  }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === instance.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask p-overlay-mask-enter": instance.modal,
      [`p-dialog-${pos}`]: pos
    };
  },
  root: ({
    instance
  }) => ({
    "p-dialog p-component": true,
    "p-dialog-maximized": instance.maximizable && instance.maximized
  }),
  header: "p-dialog-header",
  title: "p-dialog-title",
  resizeHandle: "p-resizable-handle",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
};
var DialogStyle = class _DialogStyle extends BaseStyle {
  name = "dialog";
  theme = theme5;
  classes = classes5;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DialogStyle_BaseFactory;
    return function DialogStyle_Factory(__ngFactoryType__) {
      return (\u0275DialogStyle_BaseFactory || (\u0275DialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DialogStyle)))(__ngFactoryType__ || _DialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DialogStyle,
    factory: _DialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DialogClasses;
(function(DialogClasses2) {
  DialogClasses2["mask"] = "p-dialog-mask";
  DialogClasses2["root"] = "p-dialog";
  DialogClasses2["header"] = "p-dialog-header";
  DialogClasses2["title"] = "p-dialog-title";
  DialogClasses2["headerActions"] = "p-dialog-header-actions";
  DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DialogClasses2["content"] = "p-dialog-content";
  DialogClasses2["footer"] = "p-dialog-footer";
})(DialogClasses || (DialogClasses = {}));
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Dialog = class _Dialog extends BaseComponent {
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = true;
  /**
   * Defines the left offset of dialog.
   * @group Props
   * @deprecated positionLeft property is deprecated.
   */
  get positionLeft() {
    return 0;
  }
  set positionLeft(_positionLeft) {
    console.log("positionLeft property is deprecated.");
  }
  /**
   * Defines the top offset of dialog.
   * @group Props
   * @deprecated positionTop property is deprecated.
   */
  get positionTop() {
    return 0;
  }
  set positionTop(_positionTop) {
    console.log("positionTop property is deprecated.");
  }
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   * Defines if the component is responsive.
   * @group Props
   * @deprecated Responsive property is deprecated.
   */
  get responsive() {
    return false;
  }
  set responsive(_responsive) {
    console.log("Responsive property is deprecated.");
  }
  /**
   * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = true;
  /**
   * Defines the breakpoint of the component responsive.
   * @group Props
   * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
   */
  get breakpoint() {
    return 649;
  }
  set breakpoint(_breakpoint) {
    console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
  }
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = false;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = 0;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = 0;
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = "0";
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  maximizeButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Role attribute of html element.
   * @group Emits
   */
  role = "dialog";
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {boolean} value - New value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = new EventEmitter();
  headerViewChild;
  contentViewChild;
  footerViewChild;
  /**
   * Header template.
   * @group Props
   */
  headerTemplate;
  /**
   * Content template.
   * @group Props
   */
  contentTemplate;
  /**
   * Footer template.
   * @group Props
   */
  footerTemplate;
  /**
   * Close icon template.
   * @group Props
   */
  closeIconTemplate;
  /**
   * Maximize icon template.
   * @group Props
   */
  maximizeIconTemplate;
  /**
   * Minimize icon template.
   * @group Props
   */
  minimizeIconTemplate;
  /**
   * Headless template.
   * @group Props
   */
  headlessTemplate;
  _headerTemplate;
  _contentTemplate;
  _footerTemplate;
  _closeiconTemplate;
  _maximizeiconTemplate;
  _minimizeiconTemplate;
  _headlessTemplate;
  _visible = false;
  maskVisible;
  container;
  wrapper;
  dragging;
  ariaLabelledBy = this.getAriaLabelledBy();
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized;
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = uuid("pn_id_");
  _style = {};
  _position = "center";
  originalStyle;
  transformOptions = "scale(0.7)";
  styleElement;
  window;
  _componentStyle = inject(DialogStyle);
  headerT;
  contentT;
  footerT;
  closeIconT;
  maximizeIconT;
  minimizeIconT;
  headlessT;
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  zone = inject(NgZone);
  get maskClass() {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === this.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask p-overlay-mask-enter": this.modal || this.dismissableMask,
      [`p-dialog-${pos}`]: pos
    };
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerT = item.template;
          break;
        case "content":
          this.contentT = item.template;
          break;
        case "footer":
          this.footerT = item.template;
          break;
        case "closeicon":
          this.closeIconT = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconT = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconT = item.template;
          break;
        case "headless":
          this.headlessT = item.template;
          break;
        default:
          this.contentT = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? uuid("pn_id_") + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match;
    while ((match = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  _focus(focusParentElement) {
    if (focusParentElement) {
      const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
      let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
      if (_focusableElements && _focusableElements.length > 0) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => _focusableElements[0].focus(), timeoutDuration || 5);
        });
        return true;
      }
    }
    return false;
  }
  focus(focusParentElement) {
    let focused = this._focus(focusParentElement);
    if (!focused) {
      focused = this._focus(this.footerViewChild?.nativeElement);
      if (!focused) {
        focused = this._focus(this.headerViewChild?.nativeElement);
        if (!focused) {
          this._focus(this.contentViewChild?.nativeElement);
        }
      }
    }
  }
  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  initDrag(event) {
    if (hasClass(event.target, "p-dialog-maximize-icon") || hasClass(event.target, "p-dialog-header-close-icon") || hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      addClass(this.document.body, "p-unselectable-text");
    }
  }
  onDrag(event) {
    if (this.dragging) {
      const containerWidth = getOuterWidth(this.container);
      const containerHeight = getOuterHeight(this.container);
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container.getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container);
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = getViewport();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container.style.top = `${topPos}px`;
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      removeClass(this.document.body, "p-unselectable-text");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      addClass(this.document.body, "p-unselectable-text");
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = getOuterWidth(this.container);
      let containerHeight = getOuterHeight(this.container);
      let contentHeight = getOuterHeight(this.contentViewChild?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      removeClass(this.document.body, "p-unselectable-text");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        this.close(event);
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.wrapper);
      else appendChild(this.appendTo, this.wrapper);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.appendContainer();
        this.moveOnTop();
        this.bindGlobalListeners();
        this.container?.setAttribute(this.id, "");
        if (this.modal) {
          this.enableModality();
        }
        if (this.focusOnShow) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.modal) {
          addClass(this.wrapper, "p-overlay-mask-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        this.onHide.emit({});
        this.cd.markForCheck();
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;
    if (this.maximized) {
      this.document.body.style.removeProperty("--scrollbar;-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (hasClass(this.document.body, "p-overflow-hidden")) {
      removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Dialog_BaseFactory;
    return function Dialog_Factory(__ngFactoryType__) {
      return (\u0275Dialog_BaseFactory || (\u0275Dialog_BaseFactory = \u0275\u0275getInheritedFactory(_Dialog)))(__ngFactoryType__ || _Dialog);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 4);
        \u0275\u0275contentQuery(dirIndex, _c14, 4);
        \u0275\u0275contentQuery(dirIndex, _c24, 4);
        \u0275\u0275contentQuery(dirIndex, _c34, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c52, 4);
        \u0275\u0275contentQuery(dirIndex, _c62, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._closeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._maximizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._minimizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c24, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerViewChild = _t.first);
      }
    },
    inputs: {
      header: "header",
      draggable: [2, "draggable", "draggable", booleanAttribute],
      resizable: [2, "resizable", "resizable", booleanAttribute],
      positionLeft: "positionLeft",
      positionTop: "positionTop",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      modal: [2, "modal", "modal", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      responsive: "responsive",
      appendTo: "appendTo",
      breakpoints: "breakpoints",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      maskStyle: "maskStyle",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      breakpoint: "breakpoint",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      minX: [2, "minX", "minX", numberAttribute],
      minY: [2, "minY", "minY", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      maximizable: [2, "maximizable", "maximizable", booleanAttribute],
      keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      transitionOptions: "transitionOptions",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel",
      closeTabindex: "closeTabindex",
      minimizeIcon: "minimizeIcon",
      maximizeIcon: "maximizeIcon",
      closeButtonProps: "closeButtonProps",
      maximizeButtonProps: "maximizeButtonProps",
      visible: "visible",
      style: "style",
      position: "position",
      role: "role",
      headerTemplate: [0, "content", "headerTemplate"],
      contentTemplate: "contentTemplate",
      footerTemplate: "footerTemplate",
      closeIconTemplate: "closeIconTemplate",
      maximizeIconTemplate: "maximizeIconTemplate",
      minimizeIconTemplate: "minimizeIconTemplate",
      headlessTemplate: "headlessTemplate"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [\u0275\u0275ProvidersFeature([DialogStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c9,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["titlebar", ""], ["content", ""], ["icon", ""], ["footer", ""], [3, "ngClass", "class", "ngStyle", "style", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["pFocusTrap", "", 3, "class", "ngClass", "ngStyle", "style", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["style", "z-index: 90;", 3, "ngClass", "mousedown", 4, "ngIf"], [3, "mousedown", "ngClass"], [3, "id", "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "tabindex", "ariaLabel", "buttonProps", "onClick", "keydown.enter", 4, "ngIf"], [3, "styleClass", "ariaLabel", "tabindex", "buttonProps", "onClick", "keydown.enter", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [2, "z-index", "90", 3, "mousedown", "ngClass"], [3, "id", "ngClass"], [3, "onClick", "keydown.enter", "styleClass", "tabindex", "ariaLabel", "buttonProps"], [4, "ngIf"], [3, "onClick", "keydown.enter", "styleClass", "ariaLabel", "tabindex", "buttonProps"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275template(0, Dialog_div_0_Template, 2, 11, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.maskVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      standalone: true,
      imports: [CommonModule, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule],
      template: `
        <div
            *ngIf="maskVisible"
            [ngClass]="maskClass"
            [class]="maskStyleClass"
            [ngStyle]="{
                position: 'fixed',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                display: 'flex',
                'justify-content': position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
                'align-items': position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
                'pointer-events': modal ? 'auto' : 'none'
            }"
            [style]="maskStyle"
        >
            <div
                *ngIf="visible"
                #container
                [class]="styleClass"
                [ngClass]="{ 'p-dialog p-component': true, 'p-dialog-maximized': maximizable && maximized }"
                [ngStyle]="{ display: 'flex', 'flex-direction': 'column', 'pointer-events': 'auto' }"
                [style]="style"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{
                    value: 'visible',
                    params: { transform: transformOptions, transition: transitionOptions }
                }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                [attr.role]="role"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                    <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" [ngClass]="cx('resizeHandle')" style="z-index: 90;" (mousedown)="initResize($event)"></div>
                    <div #titlebar [ngClass]="cx('header')" (mousedown)="initDrag($event)">
                        <span [id]="ariaLabelledBy" [ngClass]="cx('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                        <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT"></ng-container>
                        <div [ngClass]="cx('headerActions')">
                            <p-button *ngIf="maximizable" [styleClass]="cx('pcMaximizeButton')" (onClick)="maximize()" (keydown.enter)="maximize()" [tabindex]="maximizable ? '0' : '-1'" [ariaLabel]="maximizeLabel" [buttonProps]="maximizeButtonProps">
                                <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                    <WindowMaximizeIcon *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                    <WindowMinimizeIcon *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                </ng-container>
                                <ng-container *ngIf="!maximized">
                                    <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                </ng-container>
                                <ng-container *ngIf="maximized">
                                    <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                </ng-container>
                            </p-button>
                            <p-button *ngIf="closable" [styleClass]="cx('pcCloseButton')" [ariaLabel]="closeAriaLabel" (onClick)="close($event)" (keydown.enter)="close($event)" [tabindex]="closeTabindex" [buttonProps]="closeButtonProps">
                                <ng-template #icon>
                                    <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                        <span *ngIf="closeIcon" [ngClass]="closeIcon"></span>
                                        <TimesIcon *ngIf="!closeIcon" />
                                    </ng-container>
                                    <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                        <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                        </div>
                    </div>
                    <div #content [ngClass]="cx('content')" [class]="contentStyleClass" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                    </div>
                    <div #footer [ngClass]="cx('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DialogStyle]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    positionLeft: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoint: [{
      type: Input
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    closeButtonProps: [{
      type: Input
    }],
    maximizeButtonProps: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }],
    headerTemplate: [{
      type: Input,
      args: ["content"]
    }],
    contentTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    closeIconTemplate: [{
      type: Input
    }],
    maximizeIconTemplate: [{
      type: Input
    }],
    minimizeIconTemplate: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _closeiconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _maximizeiconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", {
        descendants: false
      }]
    }],
    _minimizeiconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", {
        descendants: false
      }]
    }],
    _headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Dialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [Dialog, SharedModule],
      exports: [Dialog, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c05 = ["icon"];
var _c15 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 1, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var theme6 = ({
  dt
}) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt("tag.primary.background")};
    color: ${dt("tag.primary.color")};
    font-size: ${dt("tag.font.size")};
    font-weight: ${dt("tag.font.weight")};
    padding: ${dt("tag.padding")};
    border-radius: ${dt("tag.border.radius")};
    gap: ${dt("tag.gap")};
}

.p-tag-icon {
    font-size: ${dt("tag.icon.size")};
    width: ${dt("tag.icon.size")};
    height:${dt("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${dt("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${dt("tag.success.background")};
    color: ${dt("tag.success.color")};
}

.p-tag-info {
    background: ${dt("tag.info.background")};
    color: ${dt("tag.info.color")};
}

.p-tag-warn {
    background: ${dt("tag.warn.background")};
    color: ${dt("tag.warn.color")};
}

.p-tag-danger {
    background: ${dt("tag.danger.background")};
    color: ${dt("tag.danger.color")};
}

.p-tag-secondary {
    background: ${dt("tag.secondary.background")};
    color: ${dt("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${dt("tag.contrast.background")};
    color: ${dt("tag.contrast.color")};
}
`;
var classes6 = {
  root: ({
    props
  }) => ["p-tag p-component", {
    "p-tag-info": props.severity === "info",
    "p-tag-success": props.severity === "success",
    "p-tag-warn": props.severity === "warn",
    "p-tag-danger": props.severity === "danger",
    "p-tag-secondary": props.severity === "secondary",
    "p-tag-contrast": props.severity === "contrast",
    "p-tag-rounded": props.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = theme6;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var Tag = class _Tag extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _style;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    let classes12 = "p-tag p-component";
    if (this.severity) {
      classes12 += ` p-tag-${this.severity}`;
    }
    if (this.rounded) {
      classes12 += " p-tag-rounded";
    }
    if (this.styleClass) {
      classes12 += ` ${this.styleClass}`;
    }
    return classes12;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c15,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-label"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span class="p-tag-icon" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span class="p-tag-label">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c06 = ["header"];
var _c16 = ["footer"];
var _c25 = ["rejecticon"];
var _c35 = ["accepticon"];
var _c43 = ["message"];
var _c53 = ["icon"];
var _c63 = ["headless"];
var _c72 = [[["p-footer"]]];
var _c82 = ["p-footer"];
var _c92 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c102 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c92, ctx_r1.confirmation, ctx_r1.onAccept.bind(ctx_r1), ctx_r1.onReject.bind(ctx_r1)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.option("icon"));
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 3, "i", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.messageTemplate || ctx_r1._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c102, ctx_r1.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("message"))("innerHTML", ctx_r1.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 8)(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 2, "span", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.iconTemplate || ctx_r1._iconTemplate ? 0 : !ctx_r1.iconTemplate && !ctx_r1._iconTemplate && !ctx_r1._messageTemplate && !ctx_r1.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.messageTemplate || ctx_r1._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 2, "div", 6)(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.headerTemplate || ctx_r1._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_i_0_Template, 1, 2, "i", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_Template, 1, 1, "i", 13)(2, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_Template, 1, 0, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rejectIcon && !ctx_r1.rejectIconTemplate && !ctx_r1._rejectIconTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_i_0_Template, 1, 2, "i", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_Template, 1, 1, "i", 13)(2, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_Template, 1, 0, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.acceptIcon && !ctx_r1._acceptIconTemplate && !ctx_r1.acceptIconTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 6, "p-button", 11)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 6, "p-button", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1)(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && !ctx_r1._footerTemplate ? 1 : -1);
  }
}
var theme7 = ({
  dt
}) => `
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${dt("confirmdialog.content.gap")};
}

.p-confirmdialog .p-confirmdialog-icon {
    color: ${dt("confirmdialog.icon.color")};
    font-size: ${dt("confirmdialog.icon.size")};
    width: ${dt("confirmdialog.icon.size")};
    height: ${dt("confirmdialog.icon.size")};
}
`;
var classes7 = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  theme = theme7;
  classes = classes7;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var showAnimation2 = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation2 = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  headlessTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = uuid("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  get containerClass() {
    return this.cx("root") + " " + this.styleClass || " ";
  }
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? uuid("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this || this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    switch (this.option("defaultFocus")) {
      case "accept":
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return findSingle(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c06, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c25, 4);
        \u0275\u0275contentQuery(dirIndex, _c35, 4);
        \u0275\u0275contentQuery(dirIndex, _c43, 4);
        \u0275\u0275contentQuery(dirIndex, _c53, 4);
        \u0275\u0275contentQuery(dirIndex, _c63, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: "appendTo",
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      visible: "visible",
      position: "position"
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c82,
    decls: 6,
    vars: 13,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["role", "alertdialog", 3, "visibleChange", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "ngClass", "class"], [3, "ngClass", "innerHTML"], [3, "ngClass", "class", 4, "ngIf"], [3, "label", "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "label", "styleClass", "ariaLabel", "buttonProps"], [3, "class"], [3, "class", 4, "ngIf"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c72);
        \u0275\u0275elementStart(0, "p-dialog", 4, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        });
        \u0275\u0275template(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1)(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.containerClass)("modal", true)("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.option("appendTo"))("position", ctx.position)("dismissableMask", ctx.dismissableMask);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation2)]), transition("visible => void", [useAnimation(hideAnimation2)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule],
      template: `
        <p-dialog
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="containerClass"
            [modal]="true"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <div [ngClass]="cx('header')">
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </div>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [ngClass]="cx('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                            <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')"></i>
                        }
                        <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                    </p-button>
                    <p-button
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                            <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')"></i>
                        }
                        <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation2)]), transition("visible => void", [useAnimation(hideAnimation2)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/crud/crud.ts
var _c07 = ["dt"];
var _c17 = () => ["name", "country.name", "representative.name", "status"];
var _c26 = () => ({ "min-width": "75rem" });
var _c36 = () => [10, 20, 30];
var _c44 = () => ({ width: "450px" });
function Crud_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedProducts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedProducts || !ctx_r2.selectedProducts.length);
  }
}
function Crud_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function Crud_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15);
    \u0275\u0275text(2, "Manage Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 16);
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275listener("input", function Crud_ng_template_7_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r6 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r6, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function Crud_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, " Name ");
    \u0275\u0275element(7, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, " Price ");
    \u0275\u0275element(12, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, " Category ");
    \u0275\u0275element(15, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, " Reviews ");
    \u0275\u0275element(18, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 28);
    \u0275\u0275text(20, " Status ");
    \u0275\u0275element(21, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th", 30);
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275element(2, "p-tableCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "p-rating", 33);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_11_Template_p_rating_ngModelChange_15_listener($event) {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(product_r8.rating, $event) || (product_r8.rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "p-button", 35);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_19_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(product_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 36);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_20_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProduct(product_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r8.image, \u0275\u0275sanitizeUrl)("alt", product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, product_r8.price, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", product_r8.rating);
    \u0275\u0275property("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8.inventoryStatus)("severity", ctx_r2.getSeverity(product_r8.inventoryStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function Crud_ng_template_14_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + ctx_r2.product.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.image);
  }
}
function Crud_ng_template_14_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, Crud_ng_template_14_img_1_Template, 1, 2, "img", 38);
    \u0275\u0275elementStart(2, "div")(3, "label", 39);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.name, $event) || (ctx_r2.product.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Crud_ng_template_14_small_6_Template, 2, 0, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.description, $event) || (ctx_r2.product.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 44);
    \u0275\u0275text(13, "Inventory Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.inventoryStatus, $event) || (ctx_r2.product.inventoryStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 46);
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "p-radiobutton", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 50);
    \u0275\u0275text(22, "Accessories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 48)(24, "p-radiobutton", 51);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 52);
    \u0275\u0275text(26, "Clothing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 48)(28, "p-radiobutton", 53);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 54);
    \u0275\u0275text(30, "Electronics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 48)(32, "p-radiobutton", 55);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 56);
    \u0275\u0275text(34, "Fitness");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 47)(36, "div", 57)(37, "label", 58);
    \u0275\u0275text(38, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p-inputnumber", 59);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.price, $event) || (ctx_r2.product.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 57)(41, "label", 60);
    \u0275\u0275text(42, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p-inputnumber", 61);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.quantity, $event) || (ctx_r2.product.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.image);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.inventoryStatus);
    \u0275\u0275property("options", ctx_r2.statuses);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.quantity);
  }
}
function Crud_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 64);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 65);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProduct());
    });
    \u0275\u0275elementEnd();
  }
}
var Crud = class _Crud {
  productService;
  messageService;
  confirmationService;
  productDialog = false;
  products = signal([]);
  product;
  selectedProducts;
  submitted = false;
  statuses;
  dt;
  exportColumns;
  cols;
  constructor(productService, messageService, confirmationService) {
    this.productService = productService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  ngOnInit() {
    this.loadDemoData();
  }
  loadDemoData() {
    this.productService.getProducts().then((data) => {
      this.products.set(data);
    });
    this.statuses = [
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" }
    ];
    this.cols = [
      { field: "code", header: "Code", customExportHeader: "Product Code" },
      { field: "name", header: "Name" },
      { field: "image", header: "Image" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product) {
    this.product = __spreadValues({}, product);
    this.productDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => !this.selectedProducts?.includes(val)));
        this.selectedProducts = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Products Deleted",
          life: 3e3
        });
      }
    });
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  deleteProduct(product) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + product.name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => val.id !== product.id));
        this.product = {};
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Deleted",
          life: 3e3
        });
      }
    });
  }
  findIndexById(id) {
    let index = -1;
    for (let i = 0; i < this.products().length; i++) {
      if (this.products()[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  createId() {
    let id = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  getSeverity(status) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warn";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return "info";
    }
  }
  saveProduct() {
    this.submitted = true;
    let _products = this.products();
    if (this.product.name?.trim()) {
      if (this.product.id) {
        _products[this.findIndexById(this.product.id)] = this.product;
        this.products.set([..._products]);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3e3
        });
      } else {
        this.product.id = this.createId();
        this.product.image = "product-placeholder.svg";
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3e3
        });
        this.products.set([..._products, this.product]);
      }
      this.productDialog = false;
      this.product = {};
    }
  }
  static \u0275fac = function Crud_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Crud)(\u0275\u0275directiveInject(Trips), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Crud, selectors: [["app-crud"]], viewQuery: function Crud_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, Trips, ConfirmationService])], decls: 19, vars: 21, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], ["styleClass", "mb-6"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} products", 3, "selectionChange", "value", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Product Details", 3, "visibleChange", "visible", "modal"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], [2, "min-width", "16rem"], ["pSortableColumn", "name", 2, "min-width", "16rem"], ["field", "name"], ["pSortableColumn", "price", 2, "min-width", "8rem"], ["field", "price"], ["pSortableColumn", "category", 2, "min-width", "10rem"], ["field", "category"], ["pSortableColumn", "rating", 2, "min-width", "12rem"], ["field", "rating"], ["pSortableColumn", "inventoryStatus", 2, "min-width", "12rem"], ["field", "inventoryStatus"], [2, "min-width", "12rem"], [3, "value"], [1, "rounded", 2, "width", "64px", 3, "src", "alt"], [3, "ngModelChange", "ngModel", "readonly"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "mr-2", 3, "click", "rounded", "outlined"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [1, "flex", "flex-col", "gap-6"], ["class", "block m-auto pb-4", 3, "src", "alt", 4, "ngIf"], ["for", "name", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "name", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["class", "text-red-500", 4, "ngIf"], ["for", "description", 1, "block", "font-bold", "mb-3"], ["id", "description", "pTextarea", "", "required", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "inventoryStatus", 1, "block", "font-bold", "mb-3"], ["inputId", "inventoryStatus", "optionLabel", "label", "optionValue", "label", "placeholder", "Select a Status", "fluid", "", 3, "ngModelChange", "ngModel", "options"], [1, "block", "font-bold", "mb-4"], [1, "grid", "grid-cols-12", "gap-4"], [1, "flex", "items-center", "gap-2", "col-span-6"], ["id", "category1", "name", "category", "value", "Accessories", 3, "ngModelChange", "ngModel"], ["for", "category1"], ["id", "category2", "name", "category", "value", "Clothing", 3, "ngModelChange", "ngModel"], ["for", "category2"], ["id", "category3", "name", "category", "value", "Electronics", 3, "ngModelChange", "ngModel"], ["for", "category3"], ["id", "category4", "name", "category", "value", "Fitness", 3, "ngModelChange", "ngModel"], ["for", "category4"], [1, "col-span-6"], ["for", "price", 1, "block", "font-bold", "mb-3"], ["id", "price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "quantity", 1, "block", "font-bold", "mb-3"], ["id", "quantity", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "block", "m-auto", "pb-4", 3, "src", "alt"], [1, "text-red-500"], ["label", "Cancel", "icon", "pi pi-times", "text", "", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function Crud_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 8);
      \u0275\u0275template(1, Crud_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Crud_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-table", 9, 2);
      \u0275\u0275twoWayListener("selectionChange", function Crud_Template_p_table_selectionChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProducts, $event) || (ctx.selectedProducts = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, Crud_ng_template_7_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, Crud_ng_template_9_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(11, Crud_ng_template_11_Template, 21, 18, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Crud_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productDialog, $event) || (ctx.productDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(14, Crud_ng_template_14_Template, 44, 12, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(16, Crud_ng_template_16_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.products())("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(16, _c17))("tableStyle", \u0275\u0275pureFunction0(17, _c26));
      \u0275\u0275twoWayProperty("selection", ctx.selectedProducts);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c36));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c44));
      \u0275\u0275twoWayProperty("visible", ctx.productDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c44));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    CurrencyPipe,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    ToolbarModule,
    Toolbar,
    RatingModule,
    Rating,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    RadioButtonModule,
    RadioButton,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Crud, { className: "Crud", filePath: "src/app/pages/crud/crud.ts", lineNumber: 213 });
})();

// src/app/pages/empty/empty.ts
var Empty = class _Empty {
  static \u0275fac = function Empty_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Empty)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Empty, selectors: [["app-empty"]], decls: 5, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-xl", "mb-4"]], template: function Empty_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Empty Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Use this page to start from scratch and place your custom content.");
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Empty, { className: "Empty", filePath: "src/app/pages/empty/empty.ts", lineNumber: 11 });
})();

// node_modules/primeng/fesm2022/primeng-message.mjs
var _c08 = ["container"];
var _c18 = ["icon"];
var _c27 = ["closeicon"];
var _c37 = ["*"];
var _c45 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c54 = (a0) => ({
  value: "visible()",
  params: a0
});
var _c64 = (a0) => ({
  closeCallback: a0
});
function Message_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0.iconTemplate);
  }
}
function Message_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Message_Conditional_0_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.cx("text"))("innerHTML", ctx_r0.text, \u0275\u0275sanitizeHtml);
  }
}
function Message_Conditional_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Message_Conditional_0_div_4_span_1_Template, 1, 2, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.escape);
  }
}
function Message_Conditional_0_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.cx("text"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function Message_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_ng_template_5_span_0_Template, 2, 2, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.escape && ctx_r0.text);
  }
}
function Message_Conditional_0_Conditional_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_7_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.containerTemplate || ctx_r0.containerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c64, ctx_r0.close.bind(ctx_r0)));
  }
}
function Message_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.cx("text"));
  }
}
function Message_Conditional_0_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.closeIcon);
  }
}
function Message_Conditional_0_Conditional_9_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_9_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate);
  }
}
function Message_Conditional_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 14);
  }
}
function Message_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function Message_Conditional_0_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.close($event));
    });
    \u0275\u0275template(1, Message_Conditional_0_Conditional_9_Conditional_1_Template, 1, 1, "i", 13)(2, Message_Conditional_0_Conditional_9_Conditional_2_Template, 1, 1, "ng-container")(3, Message_Conditional_0_Conditional_9_Conditional_3_Template, 1, 0, "TimesIcon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r0.closeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.closeIconTemplate && !ctx_r0._closeIconTemplate && !ctx_r0.closeIcon ? 3 : -1);
  }
}
function Message_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, Message_Conditional_0_Conditional_2_Template, 1, 1, "ng-container")(3, Message_Conditional_0_Conditional_3_Template, 1, 1, "i", 3)(4, Message_Conditional_0_div_4_Template, 2, 1, "div", 4)(5, Message_Conditional_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, Message_Conditional_0_Conditional_7_Template, 1, 4, "ng-container")(8, Message_Conditional_0_Conditional_8_Template, 2, 1, "span", 5)(9, Message_Conditional_0_Conditional_9_Template, 4, 4, "button", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const escapeOut_r3 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.containerClass)("@messageAnimation", \u0275\u0275pureFunction1(13, _c54, \u0275\u0275pureFunction2(10, _c45, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    \u0275\u0275attribute("aria-live", "polite")("role", "alert");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.iconTemplate || ctx_r0._iconTemplate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.icon ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.escape)("ngIfElse", escapeOut_r3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.containerTemplate || ctx_r0._containerTemplate ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.closable ? 9 : -1);
  }
}
var theme8 = ({
  dt
}) => `
.p-message {
    border-radius: ${dt("message.border.radius")};
    outline-width: ${dt("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${dt("message.content.padding")};
    gap: ${dt("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${dt("message.close.button.width")};
    height: ${dt("message.close.button.height")};
    border-radius: ${dt("message.close.button.border.radius")};
    background: transparent;
    transition: background ${dt("message.transition.duration")}, color ${dt("message.transition.duration")}, outline-color ${dt("message.transition.duration")}, box-shadow ${dt("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${dt("message.close.icon.size")};
    width: ${dt("message.close.icon.size")};
    height: ${dt("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${dt("message.close.button.focus.ring.width")};
    outline-style: ${dt("message.close.button.focus.ring.style")};
    outline-offset: ${dt("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${dt("message.info.background")};
    outline-color: ${dt("message.info.border.color")};
    color: ${dt("message.info.color")};
    box-shadow: ${dt("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${dt("message.info.close.button.focus.ring.color")};
    box-shadow: ${dt("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${dt("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${dt("message.info.outlined.color")};
    outline-color: ${dt("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${dt("message.info.simple.color")};
}

.p-message-success {
    background: ${dt("message.success.background")};
    outline-color: ${dt("message.success.border.color")};
    color: ${dt("message.success.color")};
    box-shadow: ${dt("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${dt("message.success.close.button.focus.ring.color")};
    box-shadow: ${dt("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${dt("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${dt("message.success.outlined.color")};
    outline-color: ${dt("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${dt("message.success.simple.color")};
}

.p-message-warn {
    background: ${dt("message.warn.background")};
    outline-color: ${dt("message.warn.border.color")};
    color: ${dt("message.warn.color")};
    box-shadow: ${dt("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${dt("message.warn.close.button.focus.ring.color")};
    box-shadow: ${dt("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${dt("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${dt("message.warn.outlined.color")};
    outline-color: ${dt("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${dt("message.warn.simple.color")};
}

.p-message-error {
    background: ${dt("message.error.background")};
    outline-color: ${dt("message.error.border.color")};
    color: ${dt("message.error.color")};
    box-shadow: ${dt("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${dt("message.error.close.button.focus.ring.color")};
    box-shadow: ${dt("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${dt("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${dt("message.error.outlined.color")};
    outline-color: ${dt("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${dt("message.error.simple.color")};
}

.p-message-secondary {
    background: ${dt("message.secondary.background")};
    outline-color: ${dt("message.secondary.border.color")};
    color: ${dt("message.secondary.color")};
    box-shadow: ${dt("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${dt("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${dt("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${dt("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${dt("message.secondary.outlined.color")};
    outline-color: ${dt("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${dt("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${dt("message.contrast.background")};
    outline-color: ${dt("message.contrast.border.color")};
    color: ${dt("message.contrast.color")};
    box-shadow: ${dt("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${dt("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${dt("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${dt("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${dt("message.contrast.outlined.color")};
    outline-color: ${dt("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${dt("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${dt("message.text.font.size")};
    font-weight: ${dt("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${dt("message.icon.size")};
    width: ${dt("message.icon.size")};
    height: ${dt("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${dt("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${dt("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${dt("message.icon.sm.size")};
    width: ${dt("message.icon.sm.size")};
    height: ${dt("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${dt("message.close.icon.sm.size")};
    width: ${dt("message.close.icon.sm.size")};
    height: ${dt("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${dt("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${dt("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${dt("message.icon.lg.size")};
    width: ${dt("message.icon.lg.size")};
    height: ${dt("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${dt("message.close.icon.lg.size")};
    width: ${dt("message.close.icon.lg.size")};
    height: ${dt("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${dt("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${dt("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`;
var classes8 = {
  root: ({
    props
  }) => ["p-message p-component p-message-" + props.severity, {
    "p-message-simple": props.variant === "simple"
  }],
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = class _MessageStyle extends BaseStyle {
  name = "message";
  theme = theme8;
  classes = classes8;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MessageStyle_BaseFactory;
    return function MessageStyle_Factory(__ngFactoryType__) {
      return (\u0275MessageStyle_BaseFactory || (\u0275MessageStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MessageStyle)))(__ngFactoryType__ || _MessageStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageStyle,
    factory: _MessageStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageStyle, [{
    type: Injectable
  }], null, null);
})();
var MessageClasses;
(function(MessageClasses2) {
  MessageClasses2["root"] = "p-message";
  MessageClasses2["content"] = "p-message-content";
  MessageClasses2["icon"] = "p-message-icon";
  MessageClasses2["text"] = "p-message-text";
  MessageClasses2["closeButton"] = "p-message-close-button";
  MessageClasses2["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));
var Message = class _Message extends BaseComponent {
  /**
   * Severity level of the message.
   * @defaultValue 'info'
   * @group Props
   */
  severity = "info";
  /**
   * Text content.
   * @group Props
   */
  text;
  /**
   * Whether displaying messages would be escaped or not.
   * @deprecated Use content projection instead '<p-message>Content</p-message>'.
   * @group Props
   */
  escape = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether the message can be closed manually using the close icon.
   * @group Props
   * @defaultValue false
   */
  closable = false;
  /**
   * Icon to display in the message.
   * @group Props
   * @defaultValue undefined
   */
  icon;
  /**
   * Icon to display in the message close button.
   * @group Props
   * @defaultValue undefined
   */
  closeIcon;
  /**
   * Delay in milliseconds to close the message automatically.
   * @defaultValue undefined
   */
  life;
  /**
   * Transition options of the show animation.
   * @defaultValue '300ms ease-out'
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @defaultValue '200ms cubic-bezier(0.86, 0, 0.07, 1)'
   * @group Props
   */
  hideTransitionOptions = "200ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Emits when the message is closed.
   * @param {{ originalEvent: Event }} event - The event object containing the original event.
   * @group Emits
   */
  onClose = new EventEmitter();
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  get containerClass() {
    const variantClass = this.variant === "outlined" ? "p-message-outlined" : this.variant === "simple" ? "p-message-simple" : "";
    const sizeClass = this.size === "small" ? "p-message-sm" : this.size === "large" ? "p-message-lg" : "";
    return `p-message-${this.severity} ${variantClass} ${sizeClass}`.trim() + (this.styleClass ? " " + this.styleClass : "");
  }
  visible = signal(true);
  _componentStyle = inject(MessageStyle);
  /**
   * Custom template of the message container.
   * @group Templates
   */
  containerTemplate;
  /**
   * Custom template of the message icon.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom template of the close icon.
   * @group Templates
   */
  closeIconTemplate;
  templates;
  _containerTemplate;
  _iconTemplate;
  _closeIconTemplate;
  ngOnInit() {
    super.ngOnInit();
    if (this.life) {
      setTimeout(() => {
        this.visible.set(false);
      }, this.life);
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "container":
          this._containerTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
      }
    });
  }
  /**
   * Closes the message.
   * @param {Event} event - Browser event.
   * @group Method
   */
  close(event) {
    this.visible.set(false);
    this.onClose.emit({
      originalEvent: event
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Message_BaseFactory;
    return function Message_Factory(__ngFactoryType__) {
      return (\u0275Message_BaseFactory || (\u0275Message_BaseFactory = \u0275\u0275getInheritedFactory(_Message)))(__ngFactoryType__ || _Message);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Message,
    selectors: [["p-message"]],
    contentQueries: function Message_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c08, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c27, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      severity: "severity",
      text: "text",
      escape: [2, "escape", "escape", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      closable: [2, "closable", "closable", booleanAttribute],
      icon: "icon",
      closeIcon: "closeIcon",
      life: "life",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      size: "size",
      variant: "variant"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([MessageStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c37,
    decls: 1,
    vars: 1,
    consts: [["escapeOut", ""], [1, "p-message", "p-component", 3, "ngClass"], [1, "p-message-content"], [1, "p-message-icon", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "ngClass"], ["pRipple", "", "type", "button", 1, "p-message-close-button"], [4, "ngTemplateOutlet"], [3, "ngClass", "innerHTML", 4, "ngIf"], [3, "ngClass", "innerHTML"], [3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pRipple", "", "type", "button", 1, "p-message-close-button", 3, "click"], [1, "p-message-close-icon", 3, "ngClass"], ["styleClass", "p-message-close-icon"]],
    template: function Message_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Message_Conditional_0_Template, 10, 15, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesIcon, Ripple, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Message, [{
    type: Component,
    args: [{
      selector: "p-message",
      standalone: true,
      imports: [CommonModule, TimesIcon, Ripple, SharedModule],
      template: `
        @if (visible()) {
            <div
                class="p-message p-component"
                [attr.aria-live]="'polite'"
                [ngClass]="containerClass"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div class="p-message-content">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i class="p-message-icon" [ngClass]="icon"></i>
                    }

                    <div *ngIf="!escape; else escapeOut">
                        <span *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                    </div>

                    <ng-template #escapeOut>
                        <span *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                    </ng-template>

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || containerTemplate; context: { closeCallback: close.bind(this) }"></ng-container>
                    } @else {
                        <span [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button pRipple type="button" class="p-message-close-button" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i class="p-message-close-icon" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <TimesIcon styleClass="p-message-close-icon" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MessageStyle],
      animations: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])]
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerTemplate: [{
      type: ContentChild,
      args: ["container", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MessageModule = class _MessageModule {
  static \u0275fac = function MessageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MessageModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Message, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [Message, SharedModule],
      exports: [Message, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c09 = ["content"];
var _c19 = (a0, a1) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a0,
  "p-progressbar-indeterminate": a1
});
var _c28 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit, "");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, ProgressBar_div_1_div_2_Template, 2, 5, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueStyleClass);
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("background", ctx_r0.color);
    \u0275\u0275property("ngClass", "p-progressbar-value p-progressbar-value-animate");
    \u0275\u0275attribute("data-pc-section", "value");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c28, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueStyleClass);
    \u0275\u0275property("ngClass", "p-progressbar-indeterminate-container");
    \u0275\u0275attribute("data-pc-section", "container");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275attribute("data-pc-section", "value");
  }
}
var theme9 = ({
  dt
}) => `
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${dt("progressbar.height")};
    background: ${dt("progressbar.background")};
    border-radius: ${dt("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${dt("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${dt("progressbar.label.color")};
    font-size: ${dt("progressbar.label.font.size")};
    font-weight: ${dt("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`;
var classes9 = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.determinate,
    "p-progressbar-indeterminate": instance.indeterminate
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  theme = theme9;
  classes = classes9;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var ProgressBar = class _ProgressBar extends BaseComponent {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @group templates
   */
  contentTemplate;
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c09, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      style: "style",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 15,
    consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["style", "display:flex", 3, "ngClass", "class", "width", "background", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [2, "display", "flex", 3, "ngClass"], [1, "p-progressbar-label"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-progressbar-value", "p-progressbar-value-animate"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProgressBar_div_1_Template, 4, 13, "div", 1)(2, ProgressBar_div_2_Template, 2, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction2(12, _c19, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root")("aria-label", ctx.value + ctx.unit);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div
            role="progressbar"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.aria-valuemin]="0"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="100"
            [attr.data-pc-name]="'progressbar'"
            [attr.data-pc-section]="'root'"
            [ngClass]="{
                'p-progressbar p-component': true,
                'p-progressbar-determinate': mode === 'determinate',
                'p-progressbar-indeterminate': mode === 'indeterminate'
            }"
            [attr.aria-label]="value + unit"
        >
            <div *ngIf="mode === 'determinate'" [ngClass]="'p-progressbar-value p-progressbar-value-animate'" [class]="valueStyleClass" [style.width]="value + '%'" style="display:flex" [style.background]="color" [attr.data-pc-section]="'value'">
                <div class="p-progressbar-label">
                    <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'" [attr.data-pc-section]="'label'">{{ value }}{{ unit }}</div>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
                </div>
            </div>
            <div *ngIf="mode === 'indeterminate'" [ngClass]="'p-progressbar-indeterminate-container'" [class]="valueStyleClass" [attr.data-pc-section]="'container'">
                <div class="p-progressbar-value p-progressbar-value-animate" [style.background]="color" [attr.data-pc-section]="'value'"></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fileupload.mjs
var _c010 = ["file"];
var _c110 = ["header"];
var _c29 = ["content"];
var _c38 = ["toolbar"];
var _c46 = ["chooseicon"];
var _c55 = ["filelabel"];
var _c65 = ["uploadicon"];
var _c73 = ["cancelicon"];
var _c83 = ["empty"];
var _c93 = ["advancedfileinput"];
var _c103 = ["basicfileinput"];
var _c112 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  uploadCallback: a4
});
var _c123 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  removeUploadedFileCallback: a4,
  removeFileCallback: a5,
  progress: a6,
  messages: a7
});
var _c133 = (a0) => ({
  $implicit: a0
});
function FileUpload_div_0_ng_container_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.chooseIcon);
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_container_5_PlusIcon_1_Template, 1, 2, "PlusIcon", 9)(2, FileUpload_div_0_ng_container_4_ng_container_5_span_2_Template, 2, 3, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "UploadIcon");
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_UploadIcon_1_Template, 1, 0, "UploadIcon", 9)(2, FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_span_2_Template, 2, 2, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.upload());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_span_1_Template, 1, 2, "span", 20)(2, FileUpload_div_0_ng_container_4_p_button_6_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.uploadButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.isFileLimitExceeded())("styleClass", "p-fileupload-upload-button " + ctx_r1.uploadStyleClass)("buttonProps", ctx_r1.uploadButtonProps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 9)(2, FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_span_2_Template, 2, 2, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIconTemplate && !ctx_r1._cancelIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_span_1_Template, 1, 1, "span", 20)(2, FileUpload_div_0_ng_container_4_p_button_7_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.cancelButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.uploading)("styleClass", "p-fileupload-cancel-button " + ctx_r1.cancelStyleClass)("buttonProps", ctx_r1.cancelButtonProps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-button", 16);
    \u0275\u0275listener("focus", function FileUpload_div_0_ng_container_4_Template_p_button_focus_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_0_ng_container_4_Template_p_button_blur_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBlur());
    })("onClick", function FileUpload_div_0_ng_container_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    })("keydown.enter", function FileUpload_div_0_ng_container_4_Template_p_button_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    });
    \u0275\u0275elementStart(2, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_ng_container_4_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_span_4_Template, 1, 4, "span", 17)(5, FileUpload_div_0_ng_container_4_ng_container_5_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FileUpload_div_0_ng_container_4_p_button_6_Template, 3, 6, "p-button", 18)(7, FileUpload_div_0_ng_container_4_p_button_7_Template, 3, 6, "p-button", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", "p-fileupload-choose-button " + ctx_r1.chooseStyleClass)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled())("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    \u0275\u0275attribute("data-pc-section", "choosebutton");
    \u0275\u0275advance();
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showUploadButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showCancelButton);
  }
}
function FileUpload_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_p_progressbar_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressbar", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.progress)("showValue", false);
  }
}
function FileUpload_div_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 14);
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    \u0275\u0275property("severity", message_r6.severity)("text", message_r6.text);
  }
}
function FileUpload_div_0_div_12_Conditional_1_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 33);
    \u0275\u0275listener("error", function FileUpload_div_0_div_12_Conditional_1_div_0_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", file_r9.objectURL, \u0275\u0275sanitizeUrl)("width", ctx_r1.previewWidth);
  }
}
function FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_TimesIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
}
function FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_TimesIcon_0_Template, 1, 0, "TimesIcon", 9)(1, FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_1_Template, 1, 0, null, 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.cancelIconTemplate && !ctx_r1._cancelIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_div_12_Conditional_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, FileUpload_div_0_div_12_Conditional_1_div_0_img_1_Template, 1, 2, "img", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "p-button", 32);
    \u0275\u0275listener("onClick", function FileUpload_div_0_div_12_Conditional_1_div_0_Template_p_button_onClick_8_listener($event) {
      const i_r10 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.remove($event, i_r10));
    });
    \u0275\u0275template(9, FileUpload_div_0_div_12_Conditional_1_div_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImage(file_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatSize(file_r9.size));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.uploading)("styleClass", "p-fileupload-file-remove-button " + ctx_r1.removeStyleClass);
  }
}
function FileUpload_div_0_div_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_div_12_Conditional_1_div_0_Template, 11, 5, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r1.files);
  }
}
function FileUpload_div_0_div_12_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_div_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_div_12_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r1.files)("ngForTemplate", ctx_r1.fileTemplate || ctx_r1._fileTemplate);
  }
}
function FileUpload_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, FileUpload_div_0_div_12_Conditional_1_Template, 1, 1, "div", 24)(2, FileUpload_div_0_div_12_Conditional_2_Template, 1, 2, null, 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.fileTemplate && !ctx_r1._fileTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fileTemplate || ctx_r1._fileTemplate ? 2 : -1);
  }
}
function FileUpload_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_Conditional_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_Conditional_14_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_Template, 8, 15, "ng-container", 9)(5, FileUpload_div_0_ng_container_5_Template, 1, 0, "ng-container", 10)(6, FileUpload_div_0_ng_container_6_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12, 1);
    \u0275\u0275listener("dragenter", function FileUpload_div_0_Template_div_dragenter_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(9, FileUpload_div_0_p_progressbar_9_Template, 1, 2, "p-progressbar", 13);
    \u0275\u0275repeaterCreate(10, FileUpload_div_0_For_11_Template, 1, 2, "p-message", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(12, FileUpload_div_0_div_12_Template, 3, 2, "div", 15)(13, FileUpload_div_0_ng_container_13_Template, 1, 0, "ng-container", 10)(14, FileUpload_div_0_Conditional_14_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r1.style);
    \u0275\u0275attribute("data-pc-name", "fileupload")("data-pc-section", "root");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", "none");
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.headerTemplate && !ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(24, _c112, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.upload.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.toolbarTemplate || ctx_r1._toolbarTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasFiles());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.msgs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasFiles());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction8(30, _c123, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.removeUploadedFile.bind(ctx_r1), ctx_r1.remove.bind(ctx_r1), ctx_r1.progress, ctx_r1.msgs));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.emptyTemplate || ctx_r1._emptyTemplate) && !ctx_r1.hasFiles() && !ctx_r1.hasUploadedFiles() ? 14 : -1);
  }
}
function FileUpload_div_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 14);
  }
  if (rf & 2) {
    const message_r12 = ctx.$implicit;
    \u0275\u0275property("severity", message_r12.severity)("text", message_r12.text);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "UploadIcon", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_UploadIcon_1_Template, 1, 1, "UploadIcon", 38)(2, FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_span_2_Template, 2, 1, "span", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_Conditional_0_span_0_Template, 1, 1, "span", 36)(1, FileUpload_div_1_ng_template_4_Conditional_0_ng_container_1_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_PlusIcon_1_Template, 1, 1, "PlusIcon", 9)(2, FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_2_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_Conditional_1_span_0_Template, 1, 1, "span", 42)(1, FileUpload_div_1_ng_template_4_Conditional_1_ng_container_1_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_Conditional_0_Template, 2, 2)(1, FileUpload_div_1_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.hasFiles() && !ctx_r1.auto ? 0 : 1);
  }
}
function FileUpload_div_1_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("filelabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.basicFileChosenLabel(), " ");
  }
}
function FileUpload_div_1_Conditional_8_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_1_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_Conditional_8_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.fileLabelTemplate || ctx_r1._fileLabelTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c133, ctx_r1.files));
  }
}
function FileUpload_div_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_Conditional_8_Conditional_0_Template, 2, 3, "span", 44)(1, FileUpload_div_1_Conditional_8_Conditional_1_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.fileLabelTemplate && !ctx_r1._fileLabelTemplate ? 0 : 1);
  }
}
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, FileUpload_div_1_For_2_Template, 1, 2, "p-message", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "p-button", 34);
    \u0275\u0275listener("onClick", function FileUpload_div_1_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_p_button_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicKeydown($event));
    });
    \u0275\u0275template(4, FileUpload_div_1_ng_template_4_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "input", 35, 3);
    \u0275\u0275listener("change", function FileUpload_div_1_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    })("focus", function FileUpload_div_1_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_1_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FileUpload_div_1_Conditional_8_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", "p-fileupload p-fileupload-basic p-component");
    \u0275\u0275attribute("data-pc-name", "fileupload");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.msgs);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("styleClass", "p-fileupload-choose-button " + ctx_r1.chooseStyleClass)("disabled", ctx_r1.disabled)("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.auto ? 8 : -1);
  }
}
var theme10 = ({
  dt
}) => `
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${dt("fileupload.border.color")};
    border-radius: ${dt("fileupload.border.radius")};
    background: ${dt("fileupload.background")};
    color: ${dt("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${dt("fileupload.header.padding")};
    background: ${dt("fileupload.header.background")};
    color: ${dt("fileupload.header.color")};
    border-style: solid;
    border-width: ${dt("fileupload.header.border.width")};
    border-color: ${dt("fileupload.header.border.color")};
    border-radius: ${dt("fileupload.header.border.radius")};
    gap: ${dt("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${dt("fileupload.content.gap")};
    transition: border-color ${dt("fileupload.transition.duration")};
    padding: ${dt("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${dt("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${dt("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${dt("fileupload.file.padding")};
    border-bottom: 1px solid ${dt("fileupload.file.border.color")};
    gap: ${dt("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${dt("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${dt("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${dt("fileupload.basic.gap")};
}
`;
var classes10 = {
  root: ({
    instance
  }) => `p-fileupload p-fileupload-${instance.mode} p-component`,
  header: "p-fileupload-header",
  pcChooseButton: "p-fileupload-choose-button",
  pcUploadButton: "p-fileupload-upload-button",
  pcCancelButton: "p-fileupload-cancel-button",
  content: "p-fileupload-content",
  fileList: "p-fileupload-file-list",
  file: "p-fileupload-file",
  fileThumbnail: "p-fileupload-file-thumbnail",
  fileInfo: "p-fileupload-file-info",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  pcFileBadge: "p-fileupload-file-badge",
  fileActions: "p-fileupload-file-actions",
  pcFileRemoveButton: "p-fileupload-file-remove-button"
};
var FileUploadStyle = class _FileUploadStyle extends BaseStyle {
  name = "fileupload";
  theme = theme10;
  classes = classes10;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FileUploadStyle_BaseFactory;
    return function FileUploadStyle_Factory(__ngFactoryType__) {
      return (\u0275FileUploadStyle_BaseFactory || (\u0275FileUploadStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FileUploadStyle)))(__ngFactoryType__ || _FileUploadStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FileUploadStyle,
    factory: _FileUploadStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadStyle, [{
    type: Injectable
  }], null, null);
})();
var FileUploadClasses;
(function(FileUploadClasses2) {
  FileUploadClasses2["root"] = "p-fileupload";
  FileUploadClasses2["header"] = "p-fileupload-header";
  FileUploadClasses2["pcChooseButton"] = "p-fileupload-choose-button";
  FileUploadClasses2["pcUploadButton"] = "p-fileupload-upload-button";
  FileUploadClasses2["pcCancelButton"] = "p-fileupload-cancel-button";
  FileUploadClasses2["content"] = "p-fileupload-content";
  FileUploadClasses2["fileList"] = "p-fileupload-file-list";
  FileUploadClasses2["file"] = "p-fileupload-file";
  FileUploadClasses2["fileThumbnail"] = "p-fileupload-file-thumbnail";
  FileUploadClasses2["fileInfo"] = "p-fileupload-file-info";
  FileUploadClasses2["fileName"] = "p-fileupload-file-name";
  FileUploadClasses2["fileSize"] = "p-fileupload-file-size";
  FileUploadClasses2["pcFileBadge"] = "p-fileupload-file-badge";
  FileUploadClasses2["fileActions"] = "p-fileupload-file-actions";
  FileUploadClasses2["pcFileRemoveButton"] = "p-fileupload-file-remove-button";
})(FileUploadClasses || (FileUploadClasses = {}));
var FileUpload = class _FileUpload extends BaseComponent {
  /**
   * Name of the request parameter to identify the files at backend.
   * @group Props
   */
  name;
  /**
   * Remote url to upload the files.
   * @group Props
   */
  url;
  /**
   * HTTP method to send the files to the url such as "post" and "put".
   * @group Props
   */
  method = "post";
  /**
   * Used to select multiple files at once from file dialog.
   * @group Props
   */
  multiple;
  /**
   * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
   * @group Props
   */
  accept;
  /**
   * Disables the upload functionality.
   * @group Props
   */
  disabled;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @group Props
   */
  auto;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @group Props
   */
  withCredentials;
  /**
   * Maximum file size allowed in bytes.
   * @group Props
   */
  maxFileSize;
  /**
   * Summary message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageSummary = "{0}: Invalid file size, ";
  /**
   * Detail message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageDetail = "maximum upload size is {0}.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageSummary = "{0}: Invalid file type, ";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageDetail = "allowed file types: {0}.";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageDetail = "limit is {0} at most.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageSummary = "Maximum number of files exceeded, ";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Width of the image thumbnail in pixels.
   * @group Props
   */
  previewWidth = 50;
  /**
   * Label of the choose button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  chooseLabel;
  /**
   * Label of the upload button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  uploadLabel;
  /**
   * Label of the cancel button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  cancelLabel;
  /**
   * Icon of the choose button.
   * @group Props
   */
  chooseIcon;
  /**
   * Icon of the upload button.
   * @group Props
   */
  uploadIcon;
  /**
   * Icon of the cancel button.
   * @group Props
   */
  cancelIcon;
  /**
   * Whether to show the upload button.
   * @group Props
   */
  showUploadButton = true;
  /**
   * Whether to show the cancel button.
   * @group Props
   */
  showCancelButton = true;
  /**
   * Defines the UI of the component.
   * @group Props
   */
  mode = "advanced";
  /**
   * HttpHeaders class represents the header configuration options for an HTTP request.
   * @group Props
   */
  headers;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  customUpload;
  /**
   * Maximum number of files that can be uploaded.
   * @group Props
   */
  fileLimit;
  /**
   * Style class of the upload button.
   * @group Props
   */
  uploadStyleClass;
  /**
   * Style class of the cancel button.
   * @group Props
   */
  cancelStyleClass;
  /**
   * Style class of the remove button.
   * @group Props
   */
  removeStyleClass;
  /**
   * Style class of the choose button.
   * @group Props
   */
  chooseStyleClass;
  /**
   * Used to pass all properties of the ButtonProps to the choose button inside the component.
   * @group Props
   */
  chooseButtonProps;
  /**
   * Used to pass all properties of the ButtonProps to the upload button inside the component.
   * @group Props
   */
  uploadButtonProps = {
    severity: "secondary"
  };
  /**
   * Used to pass all properties of the ButtonProps to the cancel button inside the component.
   * @group Props
   */
  cancelButtonProps = {
    severity: "secondary"
  };
  /**
   * Callback to invoke before file upload is initialized.
   * @param {FileBeforeUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onBeforeUpload = new EventEmitter();
  /**
   * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
   * @param {FileSendEvent} event - Custom send event.
   * @group Emits
   */
  onSend = new EventEmitter();
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onUpload = new EventEmitter();
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   * @group Emits
   */
  onError = new EventEmitter();
  /**
   * Callback to invoke when files in queue are removed without uploading using clear all button.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when files are selected.
   * @param {FileSelectEvent} event - Select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileProgressEvent} event - Progress event.
   * @group Emits
   */
  onProgress = new EventEmitter();
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Upload handler event.
   * @group Emits
   */
  uploadHandler = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {RemoveUploadedFileEvent} event - Remove event.
   * @group Emits
   */
  onRemoveUploadedFile = new EventEmitter();
  /**
   * Template for file.
   * @group Templates
   */
  fileTemplate;
  /**
   * Template for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for content.
   * @group Templates
   */
  contentTemplate;
  /**
   * Template for toolbar.
   * @group Templates
   */
  toolbarTemplate;
  /**
   * Template for choose icon.
   * @group Templates
   */
  chooseIconTemplate;
  /**
   * Template for file label.
   * @group Templates
   */
  fileLabelTemplate;
  /**
   * Template for upload icon.
   * @group Templates
   */
  uploadIconTemplate;
  /**
   * Template for cancel icon.
   * @group Templates
   */
  cancelIconTemplate;
  /**
   * Template for empty state.
   * @group Templates
   */
  emptyTemplate;
  advancedFileInput;
  basicFileInput;
  content;
  set files(files) {
    this._files = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isImage(file)) {
          file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
        }
        this._files.push(files[i]);
      }
    }
  }
  get files() {
    return this._files;
  }
  get basicButtonLabel() {
    if (this.auto || !this.hasFiles()) {
      return this.chooseLabel;
    }
    return this.uploadLabel ?? this.files[0].name;
  }
  _files = [];
  progress = 0;
  dragHighlight;
  msgs;
  uploadedFileCount = 0;
  focus;
  uploading;
  duplicateIEEvent;
  // flag to recognize duplicate onchange event for file input
  translationSubscription;
  dragOverListener;
  uploadedFiles = [];
  sanitizer = inject(DomSanitizer);
  zone = inject(NgZone);
  http = inject(HttpClient);
  _componentStyle = inject(FileUploadStyle);
  ngOnInit() {
    super.ngOnInit();
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (this.mode === "advanced") {
        this.zone.runOutsideAngular(() => {
          if (this.content) {
            this.dragOverListener = this.renderer.listen(this.content.nativeElement, "dragover", this.onDragOver.bind(this));
          }
        });
      }
    }
  }
  _headerTemplate;
  _contentTemplate;
  _toolbarTemplate;
  _chooseIconTemplate;
  _uploadIconTemplate;
  _cancelIconTemplate;
  _emptyTemplate;
  _fileTemplate;
  _fileLabelTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "file":
          this._fileTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "toolbar":
          this._toolbarTemplate = item.template;
          break;
        case "chooseicon":
          this._chooseIconTemplate = item.template;
          break;
        case "uploadicon":
          this._uploadIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "filelabel":
          this._fileLabelTemplate = item.template;
          break;
        default:
          this._fileTemplate = item.template;
          break;
      }
    });
  }
  basicFileChosenLabel() {
    if (this.auto) return this.chooseButtonLabel;
    else if (this.hasFiles()) {
      if (this.files && this.files.length === 1) return this.files[0].name;
      return this.config.getTranslation("fileChosenMessage")?.replace("{0}", this.files.length);
    }
    return this.config.getTranslation("noFileChosenMessage") || "";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  choose() {
    this.advancedFileInput?.nativeElement.click();
  }
  onFileSelect(event) {
    if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
      this.duplicateIEEvent = false;
      return;
    }
    this.msgs = [];
    if (!this.multiple) {
      this.files = [];
    }
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!this.isFileSelected(file)) {
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
    this.onSelect.emit({
      originalEvent: event,
      files,
      currentFiles: this.files
    });
    this.checkFileLimit(files);
    if (this.hasFiles() && this.auto && (this.mode !== "advanced" || !this.isFileLimitExceeded())) {
      this.upload();
    }
    if (event.type !== "drop" && this.isIE11()) {
      this.clearIEInput();
    } else {
      this.clearInputElement();
    }
  }
  isFileSelected(file) {
    for (let sFile of this.files) {
      if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
        return true;
      }
    }
    return false;
  }
  isIE11() {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.document.defaultView["MSInputMethodContext"] && !!this.document["documentMode"];
    }
  }
  validate(file) {
    this.msgs = this.msgs || [];
    if (this.accept && !this.isFileTypeValid(file)) {
      const text = `${this.invalidFileTypeMessageSummary.replace("{0}", file.name)} ${this.invalidFileTypeMessageDetail.replace("{0}", this.accept)}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    if (this.maxFileSize && file.size > this.maxFileSize) {
      const text = `${this.invalidFileSizeMessageSummary.replace("{0}", file.name)} ${this.invalidFileSizeMessageDetail.replace("{0}", this.formatSize(this.maxFileSize))}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    return true;
  }
  isFileTypeValid(file) {
    let acceptableTypes = this.accept?.split(",").map((type) => type.trim());
    for (let type of acceptableTypes) {
      let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
      if (acceptable) {
        return true;
      }
    }
    return false;
  }
  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf("/"));
  }
  isWildcard(fileType) {
    return fileType.indexOf("*") !== -1;
  }
  getFileExtension(file) {
    return "." + file.name.split(".").pop();
  }
  isImage(file) {
    return /^image\//.test(file.type);
  }
  onImageLoad(img) {
    window.URL.revokeObjectURL(img.src);
  }
  /**
   * Uploads the selected files.
   * @group Method
   */
  uploader() {
    if (this.customUpload) {
      if (this.fileLimit) {
        this.uploadedFileCount += this.files.length;
      }
      this.uploadHandler.emit({
        files: this.files
      });
      this.cd.markForCheck();
    } else {
      this.uploading = true;
      this.msgs = [];
      let formData = new FormData();
      this.onBeforeUpload.emit({
        formData
      });
      for (let i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      this.http.request(this.method, this.url, {
        body: formData,
        headers: this.headers,
        reportProgress: true,
        observe: "events",
        withCredentials: this.withCredentials
      }).subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.onSend.emit({
              originalEvent: event,
              formData
            });
            break;
          case HttpEventType.Response:
            this.uploading = false;
            this.progress = 0;
            if (event["status"] >= 200 && event["status"] < 300) {
              if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
              }
              this.onUpload.emit({
                originalEvent: event,
                files: this.files
              });
            } else {
              this.onError.emit({
                files: this.files
              });
            }
            this.uploadedFiles.push(...this.files);
            this.clear();
            break;
          case HttpEventType.UploadProgress: {
            if (event["loaded"]) {
              this.progress = Math.round(event["loaded"] * 100 / event["total"]);
            }
            this.onProgress.emit({
              originalEvent: event,
              progress: this.progress
            });
            break;
          }
        }
        this.cd.markForCheck();
      }, (error) => {
        this.uploading = false;
        this.onError.emit({
          files: this.files,
          error
        });
      });
    }
  }
  /**
   * Clears the files list.
   * @group Method
   */
  clear() {
    this.files = [];
    this.uploadedFileCount = 0;
    this.onClear.emit();
    this.clearInputElement();
    this.cd.markForCheck();
  }
  /**
   * Removes a single file.
   * @param {Event} event - Browser event.
   * @param {Number} index - Index of the file.
   * @group Method
   */
  remove(event, index) {
    this.clearInputElement();
    this.onRemove.emit({
      originalEvent: event,
      file: this.files[index]
    });
    this.files.splice(index, 1);
    this.checkFileLimit(this.files);
  }
  /**
   * Removes uploaded file.
   * @param {Number} index - Index of the file to be removed.
   * @group Method
   */
  removeUploadedFile(index) {
    let removedFile = this.uploadedFiles.splice(index, 1)[0];
    this.uploadedFiles = [...this.uploadedFiles];
    this.onRemoveUploadedFile.emit({
      file: removedFile,
      files: this.uploadedFiles
    });
  }
  isFileLimitExceeded() {
    const isAutoMode = this.auto;
    const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
    if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
      this.focus = false;
    }
    return this.fileLimit && this.fileLimit < totalFileCount;
  }
  isChooseDisabled() {
    if (this.auto) {
      return this.fileLimit && this.fileLimit <= this.files.length;
    } else {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
  }
  checkFileLimit(files) {
    this.msgs ??= [];
    const hasExistingValidationMessages = this.msgs.length > 0 && this.fileLimit && this.fileLimit < files.length;
    if (this.isFileLimitExceeded() || hasExistingValidationMessages) {
      const text = `${this.invalidFileLimitMessageSummary.replace("{0}", this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}", this.fileLimit.toString())}`;
      this.msgs.push({
        severity: "error",
        text
      });
    }
  }
  clearInputElement() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.advancedFileInput.nativeElement.value = "";
    }
    if (this.basicFileInput && this.basicFileInput.nativeElement) {
      this.basicFileInput.nativeElement.value = "";
    }
  }
  clearIEInput() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.duplicateIEEvent = true;
      this.advancedFileInput.nativeElement.value = "";
    }
  }
  hasFiles() {
    return this.files && this.files.length > 0;
  }
  hasUploadedFiles() {
    return this.uploadedFiles && this.uploadedFiles.length > 0;
  }
  onDragEnter(e) {
    if (!this.disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragOver(e) {
    if (!this.disabled) {
      addClass(this.content?.nativeElement, "p-fileupload-highlight");
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragLeave(event) {
    if (!this.disabled) {
      removeClass(this.content?.nativeElement, "p-fileupload-highlight");
    }
  }
  onDrop(event) {
    if (!this.disabled) {
      removeClass(this.content?.nativeElement, "p-fileupload-highlight");
      event.stopPropagation();
      event.preventDefault();
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      let allowDrop = this.multiple || files && files.length === 1;
      if (allowDrop) {
        this.onFileSelect(event);
      }
    }
  }
  onFocus() {
    this.focus = true;
  }
  onBlur() {
    this.focus = false;
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  upload() {
    if (this.hasFiles()) this.uploader();
  }
  onBasicUploaderClick() {
    this.basicFileInput?.nativeElement.click();
  }
  onBasicKeydown(event) {
    switch (event.code) {
      case "Space":
      case "Enter":
        this.onBasicUploaderClick();
        event.preventDefault();
        break;
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get chooseButtonLabel() {
    return this.chooseLabel || this.config.getTranslation(TranslationKeys.CHOOSE);
  }
  get uploadButtonLabel() {
    return this.uploadLabel || this.config.getTranslation(TranslationKeys.UPLOAD);
  }
  get cancelButtonLabel() {
    return this.cancelLabel || this.config.getTranslation(TranslationKeys.CANCEL);
  }
  get browseFilesLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)[TranslationKeys.BROWSE_FILES];
  }
  get pendingLabel() {
    return this.config.getTranslation(TranslationKeys.PENDING);
  }
  ngOnDestroy() {
    if (this.content && this.content.nativeElement) {
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FileUpload_BaseFactory;
    return function FileUpload_Factory(__ngFactoryType__) {
      return (\u0275FileUpload_BaseFactory || (\u0275FileUpload_BaseFactory = \u0275\u0275getInheritedFactory(_FileUpload)))(__ngFactoryType__ || _FileUpload);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FileUpload,
    selectors: [["p-fileupload"], ["p-fileUpload"]],
    contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c010, 4);
        \u0275\u0275contentQuery(dirIndex, _c110, 4);
        \u0275\u0275contentQuery(dirIndex, _c29, 4);
        \u0275\u0275contentQuery(dirIndex, _c38, 4);
        \u0275\u0275contentQuery(dirIndex, _c46, 4);
        \u0275\u0275contentQuery(dirIndex, _c55, 4);
        \u0275\u0275contentQuery(dirIndex, _c65, 4);
        \u0275\u0275contentQuery(dirIndex, _c73, 4);
        \u0275\u0275contentQuery(dirIndex, _c83, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toolbarTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chooseIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileLabelTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.uploadIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancelIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function FileUpload_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c93, 5);
        \u0275\u0275viewQuery(_c103, 5);
        \u0275\u0275viewQuery(_c29, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.advancedFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      name: "name",
      url: "url",
      method: "method",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      accept: "accept",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      auto: [2, "auto", "auto", booleanAttribute],
      withCredentials: [2, "withCredentials", "withCredentials", booleanAttribute],
      maxFileSize: [2, "maxFileSize", "maxFileSize", numberAttribute],
      invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
      invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
      invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
      invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
      invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
      invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
      style: "style",
      styleClass: "styleClass",
      previewWidth: [2, "previewWidth", "previewWidth", numberAttribute],
      chooseLabel: "chooseLabel",
      uploadLabel: "uploadLabel",
      cancelLabel: "cancelLabel",
      chooseIcon: "chooseIcon",
      uploadIcon: "uploadIcon",
      cancelIcon: "cancelIcon",
      showUploadButton: [2, "showUploadButton", "showUploadButton", booleanAttribute],
      showCancelButton: [2, "showCancelButton", "showCancelButton", booleanAttribute],
      mode: "mode",
      headers: "headers",
      customUpload: [2, "customUpload", "customUpload", booleanAttribute],
      fileLimit: [2, "fileLimit", "fileLimit", (value) => numberAttribute(value, null)],
      uploadStyleClass: "uploadStyleClass",
      cancelStyleClass: "cancelStyleClass",
      removeStyleClass: "removeStyleClass",
      chooseStyleClass: "chooseStyleClass",
      chooseButtonProps: "chooseButtonProps",
      uploadButtonProps: "uploadButtonProps",
      cancelButtonProps: "cancelButtonProps",
      files: "files"
    },
    outputs: {
      onBeforeUpload: "onBeforeUpload",
      onSend: "onSend",
      onUpload: "onUpload",
      onError: "onError",
      onClear: "onClear",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onProgress: "onProgress",
      uploadHandler: "uploadHandler",
      onImageError: "onImageError",
      onRemoveUploadedFile: "onRemoveUploadedFile"
    },
    features: [\u0275\u0275ProvidersFeature([FileUploadStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [["advancedfileinput", ""], ["content", ""], ["icon", ""], ["basicfileinput", ""], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "file", 3, "change", "multiple", "accept", "disabled"], [1, "p-fileupload-header"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], [3, "value", "showValue", 4, "ngIf"], [3, "severity", "text"], ["class", "p-fileupload-file-list", 4, "ngIf"], ["tabindex", "0", 3, "focus", "blur", "onClick", "keydown.enter", "styleClass", "disabled", "label", "buttonProps"], [3, "class", 4, "ngIf"], [3, "label", "disabled", "styleClass", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "label", "disabled", "styleClass", "buttonProps"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "value", "showValue"], [1, "p-fileupload-file-list"], [1, "p-fileupload-file"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], ["class", "p-fileupload-file", 4, "ngFor", "ngForOf"], ["class", "p-fileupload-file-thumbnail", 3, "src", "width", "error", 4, "ngIf"], [1, "p-fileupload-file-info"], [1, "p-fileupload-file-name"], [1, "p-fileupload-file-size"], [1, "p-fileupload-file-actions"], ["text", "", "rounded", "", "severity", "danger", 3, "onClick", "disabled", "styleClass"], [1, "p-fileupload-file-thumbnail", 3, "error", "src", "width"], ["tabindex", "0", 3, "onClick", "keydown", "styleClass", "disabled", "label", "buttonProps"], ["type", "file", 3, "change", "focus", "blur", "accept", "multiple", "disabled"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon", "p-button-icon-left"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], [3, "class"]],
    template: function FileUpload_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileUpload_div_0_Template, 15, 39, "div", 4)(1, FileUpload_div_1_Template, 9, 16, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "advanced");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "basic");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUpload, [{
    type: Component,
    args: [{
      selector: "p-fileupload, p-fileUpload",
      standalone: true,
      imports: [CommonModule, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule],
      template: `
        <div [ngClass]="'p-fileupload p-fileupload-advanced p-component'" [ngStyle]="style" [class]="styleClass" *ngIf="mode === 'advanced'" [attr.data-pc-name]="'fileupload'" [attr.data-pc-section]="'root'">
            <input
                [attr.aria-label]="browseFilesLabel"
                #advancedfileinput
                type="file"
                (change)="onFileSelect($event)"
                [multiple]="multiple"
                [accept]="accept"
                [disabled]="disabled || isChooseDisabled()"
                [attr.title]="''"
                [attr.data-pc-section]="'input'"
                [style.display]="'none'"
            />
            <div class="p-fileupload-header">
                <ng-container *ngIf="!headerTemplate && !_headerTemplate">
                    <p-button
                        [styleClass]="'p-fileupload-choose-button ' + chooseStyleClass"
                        [disabled]="disabled || isChooseDisabled()"
                        (focus)="onFocus()"
                        [label]="chooseButtonLabel"
                        (blur)="onBlur()"
                        (onClick)="choose()"
                        (keydown.enter)="choose()"
                        tabindex="0"
                        [attr.data-pc-section]="'choosebutton'"
                        [buttonProps]="chooseButtonProps"
                    >
                        <input
                            [attr.aria-label]="browseFilesLabel"
                            #advancedfileinput
                            type="file"
                            (change)="onFileSelect($event)"
                            [multiple]="multiple"
                            [accept]="accept"
                            [disabled]="disabled || isChooseDisabled()"
                            [attr.title]="''"
                            [attr.data-pc-section]="'input'"
                        />
                        <span *ngIf="chooseIcon" [class]="chooseIcon" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'"></span>
                        <ng-container *ngIf="!chooseIcon">
                            <PlusIcon *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'" />
                            <span *ngIf="chooseIconTemplate || _chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'">
                                <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </p-button>

                    <p-button
                        *ngIf="!auto && showUploadButton"
                        [label]="uploadButtonLabel"
                        (onClick)="upload()"
                        [disabled]="!hasFiles() || isFileLimitExceeded()"
                        [styleClass]="'p-fileupload-upload-button ' + uploadStyleClass"
                        [buttonProps]="uploadButtonProps"
                    >
                        <span *ngIf="uploadIcon" [ngClass]="uploadIcon" [attr.aria-hidden]="true"></span>
                        <ng-container *ngIf="!uploadIcon">
                            <UploadIcon *ngIf="!uploadIconTemplate && !_uploadIconTemplate" />
                            <span *ngIf="uploadIconTemplate || _uploadIconTemplate" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="uploadIconTemplate || _uploadIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </p-button>
                    <p-button *ngIf="!auto && showCancelButton" [label]="cancelButtonLabel" (onClick)="clear()" [disabled]="!hasFiles() || uploading" [styleClass]="'p-fileupload-cancel-button ' + cancelStyleClass" [buttonProps]="cancelButtonProps">
                        <span *ngIf="cancelIcon" [ngClass]="cancelIcon"></span>
                        <ng-container *ngIf="!cancelIcon">
                            <TimesIcon *ngIf="!cancelIconTemplate && !_cancelIconTemplate" [attr.aria-hidden]="true" />
                            <span *ngIf="cancelIconTemplate || _cancelIconTemplate" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="cancelIconTemplate || _cancelIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </p-button>
                </ng-container>
                <ng-container
                    *ngTemplateOutlet="
                        headerTemplate || _headerTemplate;
                        context: {
                            $implicit: files,
                            uploadedFiles: uploadedFiles,
                            chooseCallback: choose.bind(this),
                            clearCallback: clear.bind(this),
                            uploadCallback: upload.bind(this)
                        }
                    "
                ></ng-container>
                <ng-container *ngTemplateOutlet="toolbarTemplate || _toolbarTemplate"></ng-container>
            </div>
            <div #content class="p-fileupload-content" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)" [attr.data-pc-section]="'content'">
                <p-progressbar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressbar>
                @for (message of msgs; track message) {
                    <p-message [severity]="message.severity" [text]="message.text"></p-message>
                }

                <div class="p-fileupload-file-list" *ngIf="hasFiles()">
                    @if (!fileTemplate && !_fileTemplate) {
                        <div class="p-fileupload-file" *ngFor="let file of files; let i = index">
                            <img [src]="file.objectURL" *ngIf="isImage(file)" [width]="previewWidth" (error)="imageError($event)" class="p-fileupload-file-thumbnail" />
                            <div class="p-fileupload-file-info">
                                <div class="p-fileupload-file-name">{{ file.name }}</div>
                                <span class="p-fileupload-file-size">{{ formatSize(file.size) }}</span>
                            </div>
                            <div class="p-fileupload-file-actions">
                                <p-button (onClick)="remove($event, i)" [disabled]="uploading" text rounded severity="danger" [styleClass]="'p-fileupload-file-remove-button ' + removeStyleClass">
                                    <ng-template #icon>
                                        <TimesIcon *ngIf="!cancelIconTemplate && !_cancelIconTemplate" />
                                        <ng-template *ngTemplateOutlet="cancelIconTemplate || _cancelIconTemplate"></ng-template>
                                    </ng-template>
                                </p-button>
                            </div>
                        </div>
                    }
                    @if (fileTemplate || _fileTemplate) {
                        <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate || _fileTemplate"></ng-template>
                    }
                </div>
                <ng-container
                    *ngTemplateOutlet="
                        contentTemplate || _contentTemplate;
                        context: {
                            $implicit: files,
                            uploadedFiles: uploadedFiles,
                            chooseCallback: choose.bind(this),
                            clearCallback: clear.bind(this),
                            removeUploadedFileCallback: removeUploadedFile.bind(this),
                            removeFileCallback: remove.bind(this),
                            progress: progress,
                            messages: msgs
                        }
                    "
                ></ng-container>
                @if ((emptyTemplate || _emptyTemplate) && !hasFiles() && !hasUploadedFiles()) {
                    <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                }
            </div>
        </div>
        <div [ngClass]="'p-fileupload p-fileupload-basic p-component'" [class]="styleClass" *ngIf="mode === 'basic'" [attr.data-pc-name]="'fileupload'">
            @for (message of msgs; track message) {
                <p-message [severity]="message.severity" [text]="message.text"></p-message>
            }

            <p-button
                [styleClass]="'p-fileupload-choose-button ' + chooseStyleClass"
                [disabled]="disabled"
                [label]="chooseButtonLabel"
                [style]="style"
                (onClick)="onBasicUploaderClick()"
                (keydown)="onBasicKeydown($event)"
                tabindex="0"
                [buttonProps]="chooseButtonProps"
            >
                <ng-template #icon>
                    @if (hasFiles() && !auto) {
                        <span *ngIf="uploadIcon" class="p-button-icon p-button-icon-left" [ngClass]="uploadIcon"></span>
                        <ng-container *ngIf="!uploadIcon">
                            <UploadIcon *ngIf="!uploadIconTemplate && !_uploadIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" />
                            <span *ngIf="_uploadIconTemplate || uploadIconTemplate" class="p-button-icon p-button-icon-left">
                                <ng-template *ngTemplateOutlet="_uploadIconTemplate || uploadIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    } @else {
                        <span *ngIf="chooseIcon" class="p-button-icon p-button-icon-left pi" [ngClass]="chooseIcon"></span>
                        <ng-container *ngIf="!chooseIcon">
                            <PlusIcon *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.data-pc-section]="'uploadicon'" />
                            <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                        </ng-container>
                    }
                </ng-template>
                <input
                    [attr.aria-label]="browseFilesLabel"
                    #basicfileinput
                    type="file"
                    [accept]="accept"
                    [multiple]="multiple"
                    [disabled]="disabled"
                    (change)="onFileSelect($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'input'"
                />
            </p-button>
            @if (!auto) {
                @if (!fileLabelTemplate && !_fileLabelTemplate) {
                    <span [class]="cx('filelabel')">
                        {{ basicFileChosenLabel() }}
                    </span>
                } @else {
                    <ng-container *ngTemplateOutlet="fileLabelTemplate || _fileLabelTemplate; context: { $implicit: files }"></ng-container>
                }
            }
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FileUploadStyle]
    }]
  }], null, {
    name: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    auto: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    withCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxFileSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    invalidFileSizeMessageSummary: [{
      type: Input
    }],
    invalidFileSizeMessageDetail: [{
      type: Input
    }],
    invalidFileTypeMessageSummary: [{
      type: Input
    }],
    invalidFileTypeMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageSummary: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    previewWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    chooseLabel: [{
      type: Input
    }],
    uploadLabel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    chooseIcon: [{
      type: Input
    }],
    uploadIcon: [{
      type: Input
    }],
    cancelIcon: [{
      type: Input
    }],
    showUploadButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCancelButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mode: [{
      type: Input
    }],
    headers: [{
      type: Input
    }],
    customUpload: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fileLimit: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    uploadStyleClass: [{
      type: Input
    }],
    cancelStyleClass: [{
      type: Input
    }],
    removeStyleClass: [{
      type: Input
    }],
    chooseStyleClass: [{
      type: Input
    }],
    chooseButtonProps: [{
      type: Input
    }],
    uploadButtonProps: [{
      type: Input
    }],
    cancelButtonProps: [{
      type: Input
    }],
    onBeforeUpload: [{
      type: Output
    }],
    onSend: [{
      type: Output
    }],
    onUpload: [{
      type: Output
    }],
    onError: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onProgress: [{
      type: Output
    }],
    uploadHandler: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    onRemoveUploadedFile: [{
      type: Output
    }],
    fileTemplate: [{
      type: ContentChild,
      args: ["file", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    toolbarTemplate: [{
      type: ContentChild,
      args: ["toolbar", {
        descendants: false
      }]
    }],
    chooseIconTemplate: [{
      type: ContentChild,
      args: ["chooseicon", {
        descendants: false
      }]
    }],
    fileLabelTemplate: [{
      type: ContentChild,
      args: ["filelabel", {
        descendants: false
      }]
    }],
    uploadIconTemplate: [{
      type: ContentChild,
      args: ["uploadicon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    advancedFileInput: [{
      type: ViewChild,
      args: ["advancedfileinput"]
    }],
    basicFileInput: [{
      type: ViewChild,
      args: ["basicfileinput"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    files: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FileUploadModule = class _FileUploadModule {
  static \u0275fac = function FileUploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FileUploadModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [FileUpload, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [FileUpload, SharedModule],
      exports: [FileUpload, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dropdown.mjs
var _c011 = (a0) => ({
  height: a0
});
var _c111 = (a0, a1, a2) => ({
  "p-select-option": true,
  "p-select-option-selected": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c210 = (a0) => ({
  $implicit: a0
});
function DropdownItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-option-check-icon");
  }
}
function DropdownItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BlankIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-option-blank-icon");
  }
}
function DropdownItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DropdownItem_ng_container_1_CheckIcon_1_Template, 1, 1, "CheckIcon", 3)(2, DropdownItem_ng_container_1_BlankIcon_2_Template, 1, 1, "BlankIcon", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selected);
  }
}
function DropdownItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c39 = ["container"];
var _c47 = ["filter"];
var _c56 = ["focusInput"];
var _c66 = ["editableInput"];
var _c74 = ["items"];
var _c84 = ["scroller"];
var _c94 = ["overlay"];
var _c104 = ["firstHiddenFocusableEl"];
var _c113 = ["lastHiddenFocusableEl"];
var _c124 = () => ({
  class: "p-select-clear-icon"
});
var _c134 = () => ({
  class: "p-select-dropdown-icon"
});
var _c143 = (a0) => ({
  options: a0
});
var _c152 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c162 = () => ({});
function Dropdown_span_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 23);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c210, ctx_r2.selectedOption));
  }
}
function Dropdown_span_0_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_span_0_ng_template_4_span_0_Template, 2, 1, "span", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedOption);
  }
}
function Dropdown_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 21, 3);
    \u0275\u0275listener("focus", function Dropdown_span_0_Template_span_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_0_Template_span_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_0_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Dropdown_span_0_ng_container_2_Template, 2, 1, "ng-container", 19)(3, Dropdown_span_0_ng_container_3_Template, 1, 4, "ng-container", 22)(4, Dropdown_span_0_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedItemTemplate && ctx_r2.selectedOption);
  }
}
function Dropdown_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 24, 5);
    \u0275\u0275listener("input", function Dropdown_input_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_1_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_1_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_1_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function Dropdown_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 26);
    \u0275\u0275listener("click", function Dropdown_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275listener("click", function Dropdown_ng_container_2_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275template(1, Dropdown_ng_container_2_span_2_1_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(3, _c124));
  }
}
function Dropdown_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 25)(2, Dropdown_ng_container_2_span_2_Template, 2, 4, "span", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_container_4_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-select-loading-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_4_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-select-loading-icon pi pi-spinner pi-spin");
  }
}
function Dropdown_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_2_span_1_Template, 1, 1, "span", 29)(2, Dropdown_ng_container_4_ng_container_2_span_2_Template, 1, 2, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 17)(2, Dropdown_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_template_5_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_5_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 37);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-dropdown-icon");
  }
}
function Dropdown_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_5_ng_container_0_span_1_Template, 1, 1, "span", 34)(2, Dropdown_ng_template_5_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_5_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_5_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_5_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275template(1, Dropdown_ng_template_5_span_1_1_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c134));
  }
}
function Dropdown_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 17)(1, Dropdown_ng_template_5_span_1_Template, 2, 3, "span", 33);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c143, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon");
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_Template, 1, 0, null, 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield")(1, "input", 45, 10);
    \u0275\u0275listener("input", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon");
    \u0275\u0275template(4, Dropdown_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template, 1, 0, "SearchIcon", 17)(5, Dropdown_ng_template_9_div_4_ng_template_2_span_5_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2._filterValue() || "")("variant", ctx_r2.variant);
    \u0275\u0275attribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function Dropdown_ng_template_9_div_4_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_container_1_Template, 2, 4, "ng-container", 19)(2, Dropdown_ng_template_9_div_4_ng_template_2_Template, 6, 8, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c152, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c143, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Dropdown_ng_template_9_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 46, 11);
    \u0275\u0275listener("onLazyLoad", function Dropdown_ng_template_9_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Dropdown_ng_template_9_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, Dropdown_ng_template_9_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(8, _c011, ctx_r2.scrollHeight));
    \u0275\u0275property("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_9_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c152, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c162)));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 50);
    \u0275\u0275template(2, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 17)(3, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c011, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c210, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-dropdownItem", 51);
    \u0275\u0275listener("onClick", function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 17)(1, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 17);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 14);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c011, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c011, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Dropdown_ng_template_9_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 47, 13);
    \u0275\u0275template(2, Dropdown_ng_template_9_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 48)(3, Dropdown_ng_template_9_ng_template_8_li_3_Template, 3, 4, "li", 49)(4, Dropdown_ng_template_9_ng_template_8_li_4_Template, 3, 4, "li", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r20.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r20.contentStyleClass);
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40, 6);
    \u0275\u0275listener("focus", function Dropdown_ng_template_9_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Dropdown_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 28)(4, Dropdown_ng_template_9_div_4_Template, 4, 2, "div", 41);
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275template(6, Dropdown_ng_template_9_p_scroller_6_Template, 5, 10, "p-scroller", 43)(7, Dropdown_ng_template_9_ng_container_7_Template, 2, 6, "ng-container", 17)(8, Dropdown_ng_template_9_ng_template_8_Template, 5, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Dropdown_ng_template_9_ng_container_10_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementStart(11, "span", 40, 8);
    \u0275\u0275listener("focus", function Dropdown_ng_template_9_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.panelStyleClass);
    \u0275\u0275property("ngClass", "p-select-overlay p-component")("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filter);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var theme11 = ({
  dt
}) => `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt("select.background")};
    border: 1px solid ${dt("select.border.color")};
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
        outline-color ${dt("select.transition.duration")}, box-shadow ${dt("select.transition.duration")};
    border-radius: ${dt("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${dt("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${dt("select.focus.border.color")};
    box-shadow: ${dt("select.focus.ring.shadow")};
    outline: ${dt("select.focus.ring.width")} ${dt("select.focus.ring.style")} ${dt("select.focus.ring.color")};
    outline-offset: ${dt("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${dt("select.filled.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${dt("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${dt("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt("select.clear.icon.color")};
    right: ${dt("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("select.dropdown.color")};
    width: ${dt("select.dropdown.width")};
    border-start-end-radius: ${dt("select.border.radius")};
    border-end-end-radius: ${dt("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${dt("select.padding.y")} ${dt("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${dt("select.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + ${dt("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${dt("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt("select.overlay.background")};
    color: ${dt("select.overlay.color")};
    border: 1px solid ${dt("select.overlay.border.color")};
    border-radius: ${dt("select.overlay.border.radius")};
    box-shadow: ${dt("select.overlay.shadow")};
}

.p-select-header {
    padding: ${dt("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt("select.option.group.padding")};
    background: ${dt("select.option.group.background")};
    color: ${dt("select.option.group.color")};
    font-weight: ${dt("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt("select.list.padding")};
    gap: ${dt("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt("select.option.padding")};
    border: 0 none;
    color: ${dt("select.option.color")};
    background: transparent;
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
    box-shadow ${dt("select.transition.duration")}, outline-color ${dt("select.transition.duration")};
    border-radius: ${dt("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${dt("select.option.focus.background")};
    color: ${dt("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${dt("select.option.selected.background")};
    color: ${dt("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${dt("select.option.selected.focus.background")};
    color: ${dt("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${dt("select.checkmark.gutter.start")};
    margin-inline-end: ${dt("select.checkmark.gutter.end")};
    color: ${dt("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${dt("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

/*For PrimeNG*/

.p-dropdown.ng-invalid.ng-dirty,
.p-select.ng-invalid.ng-dirty {
    outline: 1px solid ${dt("select.invalid.border.color")};
    outline-offset: 0;
}

.p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${dt("select.invalid.placeholder.color")};
}
`;
var classes11 = {
  root: ({
    instance
  }) => ["p-dropdown p-select p-component p-inputwrapper", {
    "p-disabled": instance.disabled,
    "p-variant-filled": instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.modelValue() !== void 0 && instance.modelValue() !== null && !instance.modelValue().length,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-select-open": instance.overlayVisible,
    "p-select-fluid": instance.hasFluid,
    "p-select-sm p-inputfield-sm": instance.size === "small",
    "p-select-lg p-inputfield-lg": instance.size === "large"
  }],
  label: ({
    instance,
    props
  }) => ["p-select-label", {
    "p-placeholder": !props.editable && instance.label === props.placeholder,
    "p-select-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
  }],
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: ({
    instance,
    props,
    state: state2,
    option,
    focusedOption
  }) => ["p-select-option", {
    "p-select-option-selected": instance.isSelected(option) && props.highlightOnSelect,
    "p-focus": state2.focusedOptionIndex === focusedOption,
    "p-disabled": instance.isOptionDisabled(option)
  }],
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
};
var DropdownStyle = class _DropdownStyle extends BaseStyle {
  name = "select";
  theme = theme11;
  classes = classes11;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DropdownStyle_BaseFactory;
    return function DropdownStyle_Factory(__ngFactoryType__) {
      return (\u0275DropdownStyle_BaseFactory || (\u0275DropdownStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DropdownStyle)))(__ngFactoryType__ || _DropdownStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DropdownStyle,
    factory: _DropdownStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownStyle, [{
    type: Injectable
  }], null, null);
})();
var DropdownClasses;
/* @__PURE__ */ (function(DropdownClasses2) {
})(DropdownClasses || (DropdownClasses = {}));
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class _DropdownItem extends BaseComponent {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DropdownItem_BaseFactory;
    return function DropdownItem_Factory(__ngFactoryType__) {
      return (\u0275DropdownItem_BaseFactory || (\u0275DropdownItem_BaseFactory = \u0275\u0275getInheritedFactory(_DropdownItem)))(__ngFactoryType__ || _DropdownItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DropdownItem,
    selectors: [["p-dropdownItem"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      visible: [2, "visible", "visible", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 22,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0);
        \u0275\u0275listener("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275template(1, DropdownItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, DropdownItem_span_2_Template, 2, 1, "span", 1)(3, DropdownItem_ng_container_3_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.id)("ngStyle", \u0275\u0275pureFunction1(14, _c011, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction3(16, _c111, ctx.selected, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkmark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c210, ctx.option));
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, BlankIcon, CheckIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      standalone: false,
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{
                'p-select-option': true,
                'p-select-option-selected': selected,
                'p-disabled': disabled,
                'p-focus': focused
            }"
        >
            <ng-container *ngIf="checkmark">
                <CheckIcon *ngIf="selected" [styleClass]="'p-select-option-check-icon'" />
                <BlankIcon *ngIf="!selected" [styleClass]="'p-select-option-blank-icon'" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Dropdown = class _Dropdown extends BaseComponent {
  zone;
  filterService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the dropdown is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  _componentStyle = inject(DropdownStyle);
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  // @todo to be refactored
  get hostClass() {
    const classes12 = this._componentStyle.classes.root({
      instance: this
    }).map((cls) => {
      if (typeof cls === "string") {
        return cls;
      } else {
        return Object.keys(cls).filter((key) => cls[key]).join(" ");
      }
    }).join(" ");
    return classes12 + " " + this.styleClass;
  }
  get hostStyle() {
    return this.style;
  }
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  loadingIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchTimeout;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-select-label": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-select-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return this.label() !== "p-emptylabel" && this.modelValue() !== void 0 && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(zone, filterService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    super.ngOnInit();
    console.log("Dropdown component is deprecated as of v18, use Select component instead.");
    this.id = this.id || uuid("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-highlight");
      if (selectedItem) {
        scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector("label");
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onContainerClick(event) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      //down
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      //up
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      //space
      case "Space":
        this.onSpaceKey(event, search);
        break;
      //enter
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      //escape and tab
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  hasFocusableElements() {
    return getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    optionIndex = this.visibleOptions().findIndex((option) => this.isOptionExactMatched(option));
    if (optionIndex === -1) {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionStartsWith(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionStartsWith(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isOptionExactMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale) === this.searchValue.toLocaleLowerCase(this.filterLocale);
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static \u0275fac = function Dropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dropdown)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c39, 5);
        \u0275\u0275viewQuery(_c47, 5);
        \u0275\u0275viewQuery(_c56, 5);
        \u0275\u0275viewQuery(_c66, 5);
        \u0275\u0275viewQuery(_c74, 5);
        \u0275\u0275viewQuery(_c84, 5);
        \u0275\u0275viewQuery(_c94, 5);
        \u0275\u0275viewQuery(_c104, 5);
        \u0275\u0275viewQuery(_c113, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editableInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Dropdown_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.hostClass);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", booleanAttribute],
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      editable: [2, "editable", "editable", booleanAttribute],
      appendTo: "appendTo",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      variant: "variant",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: [2, "autoDisplayFirst", "autoDisplayFirst", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DROPDOWN_VALUE_ACCESSOR, DropdownStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 11,
    vars: 15,
    consts: [["elseBlock", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["emptyFilter", ""], ["role", "combobox", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "pAutoFocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-select-dropdown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["role", "combobox", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "pAutoFocus"], ["class", "p-select-clear-icon", 3, "click", 4, "ngIf"], [1, "p-select-clear-icon", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-select-dropdown-icon", 4, "ngIf"], ["class", "p-select-dropdown-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-select-dropdown-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-select-dropdown-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-select-header", 3, "click", 4, "ngIf"], [1, "p-select-list-container"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-select-header", 3, "click"], ["pInputText", "", "type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-select-filter", 3, "input", "keydown", "blur", "value", "variant"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["role", "listbox", 1, "p-select-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-select-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-select-option-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-select-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, Dropdown_span_0_Template, 6, 20, "span", 15)(1, Dropdown_input_1_Template, 2, 8, "input", 16)(2, Dropdown_ng_container_2_Template, 3, 2, "ng-container", 17);
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275template(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 19)(5, Dropdown_ng_template_5_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-overlay", 20, 1);
        \u0275\u0275twoWayListener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(9, Dropdown_ng_template_9_Template, 13, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        const elseBlock_r23 = \u0275\u0275reference(6);
        \u0275\u0275property("ngIf", !ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", (tmp_6_0 = ctx.overlayVisible) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("data-pc-section", "trigger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, DropdownItem],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      standalone: false,
      template: `
        <span
            #focusInput
            [ngClass]="inputClass"
            *ngIf="!editable"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="disabled"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!disabled ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required"
            [attr.required]="required"
        >
            <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="!selectedOption">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [attr.maxlength]="maxlength"
            [ngClass]="inputClass"
            [disabled]="disabled"
            aria-haspopup="listbox"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <TimesIcon class="p-select-clear-icon" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span class="p-select-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate; context: { class: 'p-select-clear-icon' }"></ng-template>
            </span>
        </ng-container>

        <div class="p-select-dropdown" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-select-loading-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-select-loading-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-select-dropdown-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-select-dropdown-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-select-dropdown-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate; context: { class: 'p-select-dropdown-icon' }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [autoZIndex]="autoZIndex"
            [baseZIndex]="baseZIndex"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [ngClass]="'p-select-overlay p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-select-header" *ngIf="filter" (click)="$event.stopPropagation()">
                        <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield>
                                <input
                                    #filter
                                    pInputText
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    class="p-select-filter"
                                    [variant]="variant"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                />
                                <p-inputicon>
                                    <SearchIcon *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div class="p-select-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize || _itemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-select-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li class="p-select-option-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-dropdownItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-dropdownItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      host: {
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR, DropdownStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static \u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DropdownModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, Scroller, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, InputTextModule, IconField, InputIcon, OverlayModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, Ripple, Scroller, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, InputTextModule, IconField, InputIcon],
      exports: [Dropdown, OverlayModule, SharedModule, Scroller],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

// src/app/pages/clients/add-client-modal/add-client-modal.component.ts
var _c012 = ["locationInput"];
var AddClientModalComponent = class _AddClientModalComponent {
  fb;
  ngZone;
  clientAdded = new EventEmitter();
  closeDialog = new EventEmitter();
  locationInput;
  clientForm;
  autocomplete;
  constructor(fb, ngZone) {
    this.fb = fb;
    this.ngZone = ngZone;
    this.clientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      location: ["", Validators.required],
      idNumber: ["", Validators.required],
      city: [""],
      suburb: [""],
      country: [""],
      latitude: [""],
      longitude: [""]
    });
  }
  ngAfterViewInit() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    if (!this.locationInput || !this.locationInput.nativeElement) {
      console.error("\u274C Location input element is missing or not initialized.");
      return;
    }
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("\u274C Google Maps API is not loaded.");
      return;
    }
    console.log("\u2705 Initializing Google Places Autocomplete...");
    this.autocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement);
    setTimeout(() => {
      const pacContainer = document.querySelector(".pac-container");
      if (pacContainer) {
        pacContainer.setAttribute("style", "z-index: 100000 !important; position: absolute;");
        document.body.appendChild(pacContainer);
      }
    }, 500);
    this.autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.processPlace(this.autocomplete.getPlace());
      });
    });
  }
  processPlace(place) {
    if (!place || !place.geometry || !place.address_components) {
      console.error("\u274C Still unable to retrieve a valid place:", place);
      return;
    }
    this.fillInAddress(place);
  }
  fillInAddress(place) {
    let city = "";
    let suburb = "";
    let country = "";
    let formattedAddress = place.formatted_address || "";
    let latitude = place.geometry?.location?.lat() || "";
    let longitude = place.geometry?.location?.lng() || "";
    if (!place.address_components) {
      return;
    }
    for (const component of place.address_components) {
      const addressType = component.types[0];
      switch (addressType) {
        case "locality":
          city = component.long_name;
          break;
        case "sublocality_level_1":
        case "sublocality":
          suburb = component.long_name;
          break;
        case "country":
          country = component.long_name;
          break;
      }
    }
    this.clientForm.patchValue({
      location: formattedAddress,
      city: city || "",
      suburb: suburb || "",
      country: country || "",
      latitude,
      longitude
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      this.clientAdded.emit(this.clientForm.value);
      this.closeDialog.emit();
    }
  }
  onCancel() {
    this.closeDialog.emit();
  }
  static \u0275fac = function AddClientModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddClientModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddClientModalComponent, selectors: [["add-client-modal"]], viewQuery: function AddClientModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c012, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.locationInput = _t.first);
    }
  }, outputs: { clientAdded: "clientAdded", closeDialog: "closeDialog" }, decls: 45, vars: 2, consts: [["locationInput", ""], [1, "p-fluid", "grid", "formgrid", "gap-4", 3, "ngSubmit", "formGroup"], [1, "field", "col-12", "md:col-6"], ["for", "name", 1, "font-semibold"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 1, "p-inputtext-lg", "w-full"], ["for", "email", 1, "font-semibold"], ["id", "email", "type", "email", "pInputText", "", "formControlName", "email", 1, "p-inputtext-lg", "w-full"], ["for", "phone", 1, "font-semibold"], ["id", "phone", "type", "tel", "pInputText", "", "formControlName", "phone", 1, "p-inputtext-lg", "w-full"], ["for", "location", 1, "font-semibold"], ["id", "location", "type", "text", "pInputText", "", "formControlName", "location", "autocomplete", "off", 1, "p-inputtext-lg", "w-full"], ["for", "idNumber", 1, "font-semibold"], ["id", "idNumber", "type", "text", "pInputText", "", "formControlName", "idNumber", 1, "p-inputtext-lg", "w-full"], ["for", "city", 1, "font-semibold"], ["id", "city", "type", "text", "pInputText", "", "formControlName", "city", "readonly", "", 1, "p-inputtext-lg", "w-full"], ["for", "suburb", 1, "font-semibold"], ["id", "suburb", "type", "text", "pInputText", "", "formControlName", "suburb", "readonly", "", 1, "p-inputtext-lg", "w-full"], ["for", "country", 1, "font-semibold"], ["id", "country", "type", "text", "pInputText", "", "formControlName", "country", "readonly", "", 1, "p-inputtext-lg", "w-full"], ["for", "latitude", 1, "font-semibold"], ["id", "latitude", "type", "text", "pInputText", "", "formControlName", "latitude", "readonly", "", 1, "p-inputtext-lg", "w-full"], ["for", "longitude", 1, "font-semibold"], ["id", "longitude", "type", "text", "pInputText", "", "formControlName", "longitude", "readonly", "", 1, "p-inputtext-lg", "w-full"], [1, "col-12", "flex", "justify-end", "gap-3", "mt-3"], ["type", "button", "pButton", "", "label", "Cancel", 1, "p-button-outlined", "p-button-secondary", 3, "click"], ["type", "submit", "pButton", "", "label", "Save", 1, "p-button-primary", 3, "disabled"]], template: function AddClientModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 1);
      \u0275\u0275listener("ngSubmit", function AddClientModalComponent_Template_form_ngSubmit_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
      \u0275\u0275text(3, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "label", 5);
      \u0275\u0275text(7, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2)(10, "label", 7);
      \u0275\u0275text(11, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 2)(14, "label", 9);
      \u0275\u0275text(15, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 10, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 2)(19, "label", 11);
      \u0275\u0275text(20, "ID Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 2)(23, "label", 13);
      \u0275\u0275text(24, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 2)(27, "label", 15);
      \u0275\u0275text(28, "Suburb");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 2)(31, "label", 17);
      \u0275\u0275text(32, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 2)(35, "label", 19);
      \u0275\u0275text(36, "Latitude");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 2)(39, "label", 21);
      \u0275\u0275text(40, "Longitude");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23)(43, "button", 24);
      \u0275\u0275listener("click", function AddClientModalComponent_Template_button_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "button", 25);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(44);
      \u0275\u0275property("disabled", ctx.clientForm.invalid);
    }
  }, dependencies: [DialogModule, InputTextModule, InputText, DropdownModule, ButtonModule, ButtonDirective, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule], styles: ["\n\n[_nghost-%COMP%]     .pac-container {\n  z-index: 100000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n/*# sourceMappingURL=add-client-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddClientModalComponent, { className: "AddClientModalComponent", filePath: "src/app/pages/clients/add-client-modal/add-client-modal.component.ts", lineNumber: 19 });
})();

// src/app/pages/clients/clients.component.ts
var _c013 = ["dt"];
var _c114 = () => ["name", "email", "phone", "status", "location"];
var _c211 = () => ({ "min-width": "75rem" });
var _c310 = () => [10, 25, 50];
var _c48 = () => ({ width: "450px" });
var _c57 = () => ({ width: "50vw" });
var _c67 = () => ({ severity: "secondary" });
function ClientsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function ClientsComponent_ng_template_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddClientModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 10);
    \u0275\u0275listener("onClick", function ClientsComponent_ng_template_1_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedClients());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedClients || !ctx_r2.selectedClients.length);
  }
}
function ClientsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "p-fileUpload", 11);
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("onClick", function ClientsComponent_ng_template_3_Template_p_button_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("maxFileSize", 1e6)("chooseButtonProps", \u0275\u0275pureFunction0(2, _c67));
  }
}
function ClientsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h5", 14);
    \u0275\u0275text(2, "Manage Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 15);
    \u0275\u0275elementStart(5, "input", 16);
    \u0275\u0275listener("input", function ClientsComponent_ng_template_7_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterGlobal($event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ClientsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 17);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 18);
    \u0275\u0275text(4, " ID Number ");
    \u0275\u0275element(5, "p-sortIcon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 20);
    \u0275\u0275text(7, " Name ");
    \u0275\u0275element(8, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, " Email ");
    \u0275\u0275element(11, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, " Phone ");
    \u0275\u0275element(14, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, " Status ");
    \u0275\u0275element(17, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 28);
    \u0275\u0275text(19, " Location ");
    \u0275\u0275element(20, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 30);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275element(2, "p-tableCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "p-button", 34);
    \u0275\u0275listener("click", function ClientsComponent_ng_template_11_Template_p_button_click_16_listener() {
      const client_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editClient(client_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-button", 35);
    \u0275\u0275listener("click", function ClientsComponent_ng_template_11_Template_p_button_click_17_listener() {
      const client_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteClient(client_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", client_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.idNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", client_r7.status)("severity", ctx_r2.getSeverity(client_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.location);
  }
}
var ClientsComponent = class _ClientsComponent {
  fb;
  clients = [
    { idNumber: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active", location: "New York" },
    { idNumber: "2", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Inactive", location: "Los Angeles" },
    { idNumber: "3", name: "Alice Johnson", email: "alice@example.com", phone: "555-123-4567", status: "Active", location: "Chicago" },
    { idNumber: "4", name: "Bob Brown", email: "bob@example.com", phone: "444-555-6666", status: "Pending", location: "Houston" }
  ];
  searchText = "";
  selectedClients = [];
  clientDialog = false;
  client = { idNumber: "", name: "", email: "", phone: "", status: "", location: "" };
  submitted = false;
  statuses = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    { label: "Pending", value: "Pending" }
  ];
  addClientModalVisible = false;
  display = false;
  clientForm;
  dt;
  constructor(fb) {
    this.fb = fb;
    this.clientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      status: ["", Validators.required],
      location: ["", Validators.required]
    });
  }
  get filteredClients() {
    return this.clients.filter((client) => client.name.toLowerCase().includes(this.searchText.toLowerCase()) || client.email.toLowerCase().includes(this.searchText.toLowerCase()) || client.phone.includes(this.searchText) || client.status.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  getSeverity(status) {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "danger";
      case "Pending":
        return "warn";
      default:
        return "secondary";
    }
  }
  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
  }
  filterGlobal(event) {
    const inputElement = event.target;
    if (this.dt) {
      this.dt.filterGlobal(inputElement.value, "contains");
    }
  }
  saveClient() {
    this.submitted = true;
    if (this.client.name.trim()) {
      if (this.client.idNumber) {
        const index = this.clients.findIndex((c) => c.idNumber === this.client.idNumber);
        this.clients[index] = this.client;
      } else {
        this.client.idNumber = this.createId();
        this.clients.push(this.client);
      }
      this.clients = [...this.clients];
      this.clientDialog = false;
      this.client = { idNumber: "", name: "", email: "", phone: "", status: "", location: "" };
    }
  }
  createId() {
    return Math.random().toString(36).substr(2, 9);
  }
  deleteSelectedClients() {
    this.clients = this.clients.filter((val) => !this.selectedClients.includes(val));
    this.selectedClients = [];
  }
  exportCSV(event) {
  }
  editClient(client) {
  }
  deleteClient(client) {
    this.clients = this.clients.filter((c) => c.idNumber !== client.idNumber);
  }
  addClient() {
    this.showAddClientModal();
  }
  showAddClientModal() {
    console.log("`12");
    this.addClientModalVisible = true;
  }
  onClientAdded(client) {
    this.clients.push(client);
  }
  static \u0275fac = function ClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["app-clients"]], viewQuery: function ClientsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c013, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 16, vars: 21, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["dataKey", "idNumber", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "selectionChange", "value", "rows", "paginator", "globalFilterFields", "tableStyle", "selection", "rowsPerPageOptions", "rowHover", "showCurrentPageReport"], ["header", "Add Client", 3, "visibleChange", "visible", "modal", "closable"], [3, "clientAdded", "closeDialog"], ["label", "New", "icon", "pi pi-plus", 1, "mr-2", 3, "onClick"], ["severity", "danger", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["mode", "basic", "accept", "image/*", "label", "Import", "chooseLabel", "Import", "auto", "", "customUpload", "", 1, "mr-2", "inline-block", 3, "maxFileSize", "chooseButtonProps"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "idNumber", 2, "min-width", "16rem"], ["field", "idNumber"], ["pSortableColumn", "name", 2, "min-width", "16rem"], ["field", "name"], ["pSortableColumn", "email", 2, "min-width", "16rem"], ["field", "email"], ["pSortableColumn", "phone", 2, "min-width", "16rem"], ["field", "phone"], ["pSortableColumn", "status", 2, "min-width", "16rem"], ["field", "status"], ["pSortableColumn", "location", 2, "min-width", "16rem"], ["field", "location"], [2, "min-width", "12rem"], [3, "value"], [2, "min-width", "16rem"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["icon", "pi pi-trash", "severity", "danger", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"]], template: function ClientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar");
      \u0275\u0275template(1, ClientsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ClientsComponent_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-table", 6, 2);
      \u0275\u0275twoWayListener("selectionChange", function ClientsComponent_Template_p_table_selectionChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedClients, $event) || (ctx.selectedClients = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, ClientsComponent_ng_template_7_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, ClientsComponent_ng_template_9_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(11, ClientsComponent_ng_template_11_Template, 18, 8, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-confirmDialog");
      \u0275\u0275elementStart(14, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function ClientsComponent_Template_p_dialog_visibleChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.addClientModalVisible, $event) || (ctx.addClientModalVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(15, "add-client-modal", 8);
      \u0275\u0275listener("clientAdded", function ClientsComponent_Template_add_client_modal_clientAdded_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClientAdded($event));
      })("closeDialog", function ClientsComponent_Template_add_client_modal_closeDialog_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addClientModalVisible = false);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.filteredClients)("rows", 10)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(16, _c114))("tableStyle", \u0275\u0275pureFunction0(17, _c211));
      \u0275\u0275twoWayProperty("selection", ctx.selectedClients);
      \u0275\u0275property("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c310))("rowHover", true)("showCurrentPageReport", true);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c48));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c57));
      \u0275\u0275twoWayProperty("visible", ctx.addClientModalVisible);
      \u0275\u0275property("modal", true)("closable", true);
    }
  }, dependencies: [TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, DialogModule, Dialog, RippleModule, SelectModule, ToastModule, ToolbarModule, Toolbar, ConfirmDialogModule, ConfirmDialog, InputTextModule, InputText, TextareaModule, CommonModule, FileUploadModule, FileUpload, DropdownModule, TagModule, Tag, RadioButtonModule, RatingModule, FormsModule, InputNumberModule, IconFieldModule, IconField, InputIconModule, InputIcon, ButtonModule, Button, AddClientModalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "src/app/pages/clients/clients.component.ts", lineNumber: 43 });
})();
var SomeStandaloneComponent = class _SomeStandaloneComponent {
  static \u0275fac = function SomeStandaloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SomeStandaloneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SomeStandaloneComponent, selectors: [["app-some-standalone"]], decls: 2, vars: 0, template: function SomeStandaloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1");
      \u0275\u0275text(1, "Standalone Component");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SomeStandaloneComponent, { className: "SomeStandaloneComponent", filePath: "src/app/pages/clients/clients.component.ts", lineNumber: 171 });
})();

// src/app/pages/drivers/add-driver-modal/add-driver-modal.component.ts
var _c014 = ["locationInput"];
var AddDriverModalComponent = class _AddDriverModalComponent {
  fb;
  ngZone;
  driverAdded = new EventEmitter();
  locationInput;
  display = false;
  driverForm;
  autocomplete;
  closeDialog = new EventEmitter();
  constructor(fb, ngZone) {
    this.fb = fb;
    this.ngZone = ngZone;
    this.driverForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      baseLocation: ["", Validators.required],
      idNumber: ["", Validators.required]
    });
  }
  ngAfterViewInit() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    if (!this.locationInput || !this.locationInput.nativeElement) {
      console.error("\u274C Location input element is missing or not initialized.");
      return;
    }
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("\u274C Google Maps API is not loaded.");
      return;
    }
    console.log("\u2705 Initializing Google Places Autocomplete...");
    this.autocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement);
    setTimeout(() => {
      const pacContainer = document.querySelector(".pac-container");
      if (pacContainer) {
        pacContainer.setAttribute("style", "z-index: 100000 !important; position: absolute;");
        document.body.appendChild(pacContainer);
      }
    }, 500);
    this.autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.processPlace(this.autocomplete.getPlace());
      });
    });
  }
  processPlace(place) {
    if (!place || !place.geometry || !place.address_components) {
      console.error("\u274C Still unable to retrieve a valid place:", place);
      return;
    }
    this.fillInAddress(place);
  }
  fillInAddress(place) {
    let formattedAddress = place.formatted_address || "";
    let latitude = place.geometry?.location?.lat() || "";
    let longitude = place.geometry?.location?.lng() || "";
    this.driverForm.patchValue({
      baseLocation: formattedAddress,
      latitude,
      longitude
    });
  }
  onSubmit() {
    if (this.driverForm.valid) {
      this.driverAdded.emit(this.driverForm.value);
      this.closeDialog.emit();
      this.display = false;
    }
  }
  onCancel() {
    this.closeDialog.emit();
  }
  static \u0275fac = function AddDriverModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddDriverModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddDriverModalComponent, selectors: [["add-driver-modal"]], viewQuery: function AddDriverModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c014, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.locationInput = _t.first);
    }
  }, outputs: { driverAdded: "driverAdded", closeDialog: "closeDialog" }, decls: 21, vars: 2, consts: [["locationInput", ""], [1, "p-fluid", "grid", "formgrid", "gap-4", 3, "ngSubmit", "formGroup"], [1, "field", "col-12", "md:col-6"], ["for", "name", 1, "font-semibold"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 1, "p-inputtext-lg", "w-full"], ["for", "phone", 1, "font-semibold"], ["id", "phone", "type", "tel", "pInputText", "", "formControlName", "phone", 1, "p-inputtext-lg", "w-full"], ["for", "baseLocation", 1, "font-semibold"], ["id", "baseLocation", "type", "text", "pInputText", "", "formControlName", "baseLocation", "autocomplete", "off", 1, "p-inputtext-lg", "w-full"], ["for", "idNumber", 1, "font-semibold"], ["id", "idNumber", "type", "text", "pInputText", "", "formControlName", "idNumber", 1, "p-inputtext-lg", "w-full"], [1, "col-12", "flex", "justify-end", "gap-3", "mt-3"], ["type", "button", "pButton", "", "label", "Cancel", 1, "p-button-outlined", "p-button-secondary", 3, "click"], ["type", "submit", "pButton", "", "label", "Save", 1, "p-button-primary", 3, "disabled"]], template: function AddDriverModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 1);
      \u0275\u0275listener("ngSubmit", function AddDriverModalComponent_Template_form_ngSubmit_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
      \u0275\u0275text(3, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "label", 5);
      \u0275\u0275text(7, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2)(10, "label", 7);
      \u0275\u0275text(11, "Base Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 8, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 2)(15, "label", 9);
      \u0275\u0275text(16, "ID Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
      \u0275\u0275listener("click", function AddDriverModalComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "button", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.driverForm);
      \u0275\u0275advance(20);
      \u0275\u0275property("disabled", ctx.driverForm.invalid);
    }
  }, dependencies: [DialogModule, InputTextModule, InputText, DropdownModule, ButtonModule, ButtonDirective, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule], styles: ["\n\n[_nghost-%COMP%]     .pac-container {\n  z-index: 100000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n/*# sourceMappingURL=add-driver-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddDriverModalComponent, { className: "AddDriverModalComponent", filePath: "src/app/pages/drivers/add-driver-modal/add-driver-modal.component.ts", lineNumber: 17 });
})();

// src/app/pages/drivers/drivers.component.ts
var _c015 = ["dt"];
var _c115 = () => ["name", "phone", "baseLocation"];
var _c212 = () => ({ "min-width": "75rem" });
var _c311 = () => [10, 25, 50];
var _c49 = () => ({ width: "450px" });
var _c58 = () => ({ width: "50vw", zIndex: 10 });
var _c68 = () => ({ severity: "secondary" });
function DriversComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function DriversComponent_ng_template_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddDriverModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 10);
    \u0275\u0275listener("onClick", function DriversComponent_ng_template_1_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedDrivers());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedDrivers || !ctx_r2.selectedDrivers.length);
  }
}
function DriversComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "p-fileUpload", 11);
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("click", function DriversComponent_ng_template_3_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("maxFileSize", 1e6)("chooseButtonProps", \u0275\u0275pureFunction0(2, _c68));
  }
}
function DriversComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h5", 14);
    \u0275\u0275text(2, "Manage Drivers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 15);
    \u0275\u0275elementStart(5, "input", 16);
    \u0275\u0275listener("input", function DriversComponent_ng_template_7_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterGlobal($event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function DriversComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 17);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 18);
    \u0275\u0275text(4, " ID Number ");
    \u0275\u0275element(5, "p-sortIcon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 20);
    \u0275\u0275text(7, " Name ");
    \u0275\u0275element(8, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, " Phone ");
    \u0275\u0275element(11, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, " Base Location ");
    \u0275\u0275element(14, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function DriversComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275element(2, "p-tableCheckbox", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "p-button", 29);
    \u0275\u0275listener("click", function DriversComponent_ng_template_11_Template_p_button_click_12_listener() {
      const driver_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editDriver(driver_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 30);
    \u0275\u0275listener("click", function DriversComponent_ng_template_11_Template_p_button_click_13_listener() {
      const driver_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDriver(driver_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const driver_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", driver_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r7.idNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r7.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r7.baseLocation);
  }
}
var DriversComponent = class _DriversComponent {
  fb;
  drivers = [
    { idNumber: "1", name: "John Doe", phone: "123-456-7890", baseLocation: "New York" },
    { idNumber: "2", name: "Jane Smith", phone: "987-654-3210", baseLocation: "Los Angeles" },
    { idNumber: "3", name: "Alice Johnson", phone: "555-123-4567", baseLocation: "Chicago" },
    { idNumber: "4", name: "Bob Brown", phone: "444-555-6666", baseLocation: "Houston" }
  ];
  searchText = "";
  selectedDrivers = [];
  closeDialog = false;
  driver = { idNumber: "", name: "", phone: "", baseLocation: "" };
  submitted = false;
  addDriverModalVisible = false;
  display = false;
  driverForm;
  cols = [
    { field: "idNumber", header: "ID Number", customExportHeader: "Driver ID" },
    { field: "name", header: "Name" },
    { field: "phone", header: "Phone" },
    { field: "baseLocation", header: "Base Location" }
  ];
  dt;
  exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  rowsPerPageOptions = [5, 10, 20, 50];
  rows = 10;
  constructor(fb) {
    this.fb = fb;
    this.driverForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      baseLocation: ["", Validators.required]
    });
  }
  get filteredDrivers() {
    return this.drivers.filter((driver) => driver.name.toLowerCase().includes(this.searchText.toLowerCase()) || driver.phone.includes(this.searchText) || driver.baseLocation.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  exportCSV() {
    console.log("this.dt", this.dt?.columns);
    if (this.dt) {
      this.dt.exportCSV();
    } else {
      console.error("Table reference is undefined");
    }
  }
  hideDialog() {
    this.closeDialog = false;
    this.submitted = false;
  }
  filterGlobal(event) {
    const inputElement = event.target;
    if (this.dt) {
      this.dt.filterGlobal(inputElement.value, "contains");
    }
  }
  saveDriver() {
    this.submitted = true;
    if (this.driver.name.trim()) {
      if (this.driver.idNumber) {
        const index = this.drivers.findIndex((d) => d.idNumber === this.driver.idNumber);
        this.drivers[index] = this.driver;
      } else {
        this.driver.idNumber = this.createId();
        this.drivers.push(this.driver);
      }
      this.drivers = [...this.drivers];
      this.closeDialog = false;
      this.driver = { idNumber: "", name: "", phone: "", baseLocation: "" };
    }
  }
  createId() {
    return Math.random().toString(36).substr(2, 9);
  }
  deleteSelectedDrivers() {
    this.drivers = this.drivers.filter((val) => !this.selectedDrivers.includes(val));
    this.selectedDrivers = [];
  }
  editDriver(driver) {
  }
  deleteDriver(driver) {
    this.drivers = this.drivers.filter((d) => d.idNumber !== driver.idNumber);
  }
  addDriver() {
    this.showAddDriverModal();
  }
  showAddDriverModal() {
    this.addDriverModalVisible = true;
  }
  onDriverAdded(driver) {
    this.drivers.push(driver);
  }
  onRowsChange(event) {
    this.rows = event.value;
  }
  static \u0275fac = function DriversComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriversComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversComponent, selectors: [["app-drivers"]], viewQuery: function DriversComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c015, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 16, vars: 22, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["dataKey", "idNumber", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "selectionChange", "value", "rows", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "exportHeader", "rowsPerPageOptions", "showCurrentPageReport"], ["header", "Add Driver", 3, "visibleChange", "visible", "modal", "closable"], [3, "driverAdded", "closeDialog"], ["label", "New", "icon", "pi pi-plus", 1, "mr-2", 3, "onClick"], ["severity", "danger", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["mode", "basic", "accept", "image/*", "label", "Import", "chooseLabel", "Import", "auto", "", "customUpload", "", 1, "mr-2", "inline-block", 3, "maxFileSize", "chooseButtonProps"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "idNumber", 2, "min-width", "16rem"], ["field", "idNumber"], ["pSortableColumn", "name", 2, "min-width", "16rem"], ["field", "name"], ["pSortableColumn", "phone", 2, "min-width", "16rem"], ["field", "phone"], ["pSortableColumn", "baseLocation", 2, "min-width", "16rem"], ["field", "baseLocation"], [2, "min-width", "12rem"], [3, "value"], [2, "min-width", "16rem"], ["icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["icon", "pi pi-trash", "severity", "danger", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"]], template: function DriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar");
      \u0275\u0275template(1, DriversComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DriversComponent_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-table", 6, 2);
      \u0275\u0275twoWayListener("selectionChange", function DriversComponent_Template_p_table_selectionChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDrivers, $event) || (ctx.selectedDrivers = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, DriversComponent_ng_template_7_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, DriversComponent_ng_template_9_Template, 17, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(11, DriversComponent_ng_template_11_Template, 14, 5, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-confirmDialog");
      \u0275\u0275elementStart(14, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function DriversComponent_Template_p_dialog_visibleChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.addDriverModalVisible, $event) || (ctx.addDriverModalVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(15, "add-driver-modal", 8);
      \u0275\u0275listener("driverAdded", function DriversComponent_Template_add_driver_modal_driverAdded_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDriverAdded($event));
      })("closeDialog", function DriversComponent_Template_add_driver_modal_closeDialog_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addDriverModalVisible = false);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.filteredDrivers)("rows", 10)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(17, _c115))("tableStyle", \u0275\u0275pureFunction0(18, _c212));
      \u0275\u0275twoWayProperty("selection", ctx.selectedDrivers);
      \u0275\u0275property("rowHover", true)("exportHeader", "customExportHeader")("rowsPerPageOptions", \u0275\u0275pureFunction0(19, _c311))("showCurrentPageReport", true);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c49));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c58));
      \u0275\u0275twoWayProperty("visible", ctx.addDriverModalVisible);
      \u0275\u0275property("modal", true)("closable", true);
    }
  }, dependencies: [TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, DialogModule, Dialog, RippleModule, SelectModule, ToastModule, ToolbarModule, Toolbar, ConfirmDialogModule, ConfirmDialog, InputTextModule, InputText, TextareaModule, CommonModule, FileUploadModule, FileUpload, DropdownModule, TagModule, RadioButtonModule, RatingModule, FormsModule, InputNumberModule, IconFieldModule, IconField, InputIconModule, InputIcon, ButtonModule, Button, AddDriverModalComponent], styles: ["\n\n[_nghost-%COMP%]     .pac-container {\n  z-index: 100000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n/*# sourceMappingURL=drivers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriversComponent, { className: "DriversComponent", filePath: "src/app/pages/drivers/drivers.component.ts", lineNumber: 52 });
})();

// src/app/pages/track-confonfirmation/track-confonfirmation.component.ts
var TrackConfonfirmationComponent = class _TrackConfonfirmationComponent {
  route;
  router;
  firebaseService;
  userId = "";
  constructor(route, router, firebaseService) {
    this.route = route;
    this.router = router;
    this.firebaseService = firebaseService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }
  startTracking() {
    if (!this.userId) {
      console.error("User ID is missing!");
      return;
    }
    this.firebaseService.confirmTracking(this.userId);
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.firebaseService.updateLocation(this.userId, latitude, longitude);
      }, (error) => console.error("Location error:", error), { enableHighAccuracy: true, maximumAge: 0 });
    }
    this.router.navigate(["pages/thank-you"]);
  }
  static \u0275fac = function TrackConfonfirmationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackConfonfirmationComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FirebaseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackConfonfirmationComponent, selectors: [["app-track-confonfirmation"]], decls: 7, vars: 0, consts: [[1, "confirmation-container"], [3, "click"]], template: function TrackConfonfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Start Tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Click the button below to start tracking your location.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 1);
      \u0275\u0275listener("click", function TrackConfonfirmationComponent_Template_button_click_5_listener() {
        return ctx.startTracking();
      });
      \u0275\u0275text(6, "Confirm & Start Tracking");
      \u0275\u0275elementEnd()();
    }
  }, styles: ["\n\n.confirmation-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 18px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n/*# sourceMappingURL=track-confonfirmation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackConfonfirmationComponent, { className: "TrackConfonfirmationComponent", filePath: "src/app/pages/track-confonfirmation/track-confonfirmation.component.ts", lineNumber: 10 });
})();

// src/app/pages/thank-you-tracker/thank-you-tracker.component.ts
var ThankYouTrackerComponent = class _ThankYouTrackerComponent {
  static \u0275fac = function ThankYouTrackerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThankYouTrackerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThankYouTrackerComponent, selectors: [["app-thank-you-tracker"]], decls: 5, vars: 0, consts: [[1, "thank-you-container"]], template: function ThankYouTrackerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "\u2705 Tracking Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "You are now being tracked as a driver.");
      \u0275\u0275elementEnd()();
    }
  }, styles: ["\n\n.thank-you-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=thank-you-tracker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThankYouTrackerComponent, { className: "ThankYouTrackerComponent", filePath: "src/app/pages/thank-you-tracker/thank-you-tracker.component.ts", lineNumber: 9 });
})();

// src/app/pages/pages.routes.ts
var pages_routes_default = [
  { path: "documentation", component: Documentation },
  { path: "crud", component: Crud },
  { path: "empty", component: Empty },
  { path: "track/:id", component: TrackConfonfirmationComponent },
  { path: "track", component: TrackConfonfirmationComponent },
  { path: "thank-you", component: ThankYouTrackerComponent },
  { path: "map", component: TrackingMapComponent },
  { path: "clients", component: ClientsComponent },
  { path: "drivers", component: DriversComponent },
  { path: "**", redirectTo: "/notfound" }
];
export {
  pages_routes_default as default
};
//# sourceMappingURL=chunk-3T3B5GYN.js.map
