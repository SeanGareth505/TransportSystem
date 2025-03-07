import {
  AppFloatingConfigurator
} from "./chunk-MXOWSASD.js";
import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonModule,
  CheckboxModule,
  ConnectedOverlayScrollHandler,
  Database,
  DefaultValueAccessor,
  DomHandler,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  InputText,
  InputTextModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OverlayService,
  PrimeTemplate,
  ReactiveFormsModule,
  RippleModule,
  RouterLink,
  RouterModule,
  SharedModule,
  TimesIcon,
  TranslationKeys,
  Validators,
  absolutePosition,
  addClass,
  getOuterWidth,
  hasClass,
  isTouchDevice,
  ref,
  relativePosition,
  removeClass,
  set,
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
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  Pipe,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  animate,
  booleanAttribute,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5I55Z35Z.js";

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var EyeIcon = class _EyeIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeIcon_BaseFactory;
    return function EyeIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeIcon_BaseFactory || (\u0275EyeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeIcon)))(__ngFactoryType__ || _EyeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeIcon,
    selectors: [["EyeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
    template: function EyeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeIcon, [{
    type: Component,
    args: [{
      selector: "EyeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs
var EyeSlashIcon = class _EyeSlashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeSlashIcon_BaseFactory;
    return function EyeSlashIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeSlashIcon_BaseFactory || (\u0275EyeSlashIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeSlashIcon)))(__ngFactoryType__ || _EyeSlashIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeSlashIcon,
    selectors: [["EyeSlashIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function EyeSlashIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeSlashIcon, [{
    type: Component,
    args: [{
      selector: "EyeSlashIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
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

// src/app/pages/auth/access.ts
var Access = class _Access {
  static \u0275fac = function Access_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Access)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Access, selectors: [["app-access"]], decls: 15, vars: 0, consts: [[1, "bg-surface-50", "dark:bg-surface-950", "flex", "items-center", "justify-center", "min-h-screen", "min-w-[100vw]", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "gap-4", "flex", "flex-col", "items-center"], [1, "flex", "justify-center", "items-center", "border-2", "border-orange-500", "rounded-full", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-orange-500", "pi", "pi-fw", "pi-lock", "!text-2xl"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-muted-color", "mb-8"], ["src", "https://primefaces.org/cdn/templates/sakai/auth/asset-access.svg", "alt", "Access denied", "width", "80%", 1, "mb-8"], [1, "col-span-12", "mt-8", "text-center"], ["label", "Go to Dashboard", "routerLink", "/", "severity", "warn"]], template: function Access_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Access Denied");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "You do not have the necessary permisions. Please contact admins.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "p-button", 11);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [ButtonModule, Button, RouterModule, RouterLink, RippleModule, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Access, { className: "Access", filePath: "src/app/pages/auth/access.ts", lineNumber: 32 });
})();

// src/app/pages/auth/error.ts
var Error = class _Error {
  static \u0275fac = function Error_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Error)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error, selectors: [["app-error"]], decls: 15, vars: 0, consts: [[1, "bg-surface-50", "dark:bg-surface-950", "flex", "items-center", "justify-center", "min-h-screen", "min-w-[100vw]", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "gap-4", "flex", "flex-col", "items-center"], [1, "flex", "justify-center", "items-center", "border-2", "border-pink-500", "rounded-full", 2, "height", "3.2rem", "width", "3.2rem"], [1, "pi", "pi-fw", "pi-exclamation-circle", "!text-2xl", "text-pink-500"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-5xl", "mb-2"], [1, "text-muted-color", "mb-8"], ["src", "https://primefaces.org/cdn/templates/sakai/auth/asset-error.svg", "alt", "Error", "width", "80%", 1, "mb-8"], [1, "col-span-12", "mt-8", "text-center"], ["label", "Go to Dashboard", "routerLink", "/", "severity", "danger"]], template: function Error_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Error Occured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "Requested resource is not available.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "p-button", 11);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [ButtonModule, Button, RippleModule, RouterModule, RouterLink, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error, { className: "Error", filePath: "src/app/pages/auth/error.ts", lineNumber: 32 });
})();

// node_modules/primeng/fesm2022/primeng-password.mjs
var _c0 = ["content"];
var _c1 = ["footer"];
var _c2 = ["header"];
var _c3 = ["clearicon"];
var _c4 = ["headericon"];
var _c5 = ["showicon"];
var _c6 = ["input"];
var _c7 = () => ({
  class: "p-password-toggle-mask-icon p-password-mask-icon"
});
var _c8 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
var _c10 = (a0) => ({
  width: a0
});
function Password_ng_container_5_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 8);
    \u0275\u0275listener("click", function Password_ng_container_5_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function Password_ng_container_5_3_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_5_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_5_TimesIcon_1_Template, 1, 1, "TimesIcon", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275listener("click", function Password_ng_container_5_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275template(3, Password_ng_container_5_3_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.clearIconTemplate && !ctx_r3._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.clearIconTemplate || ctx_r3._clearIconTemplate);
  }
}
function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeSlashIcon", 12);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "hideIcon");
  }
}
function Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_1_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c7));
  }
}
function Password_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template, 1, 1, "EyeSlashIcon", 10)(2, Password_ng_container_6_ng_container_1_span_2_Template, 2, 3, "span", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.hideIconTemplate && !ctx_r3._hideIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_EyeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeIcon", 12);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_2_EyeIcon_1_Template_EyeIcon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "showIcon");
  }
}
function Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_2_EyeIcon_1_Template, 1, 1, "EyeIcon", 10)(2, Password_ng_container_6_ng_container_2_span_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showIconTemplate && !ctx_r3._showIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Password_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.unmasked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.unmasked);
  }
}
function Password_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_div_7_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.contentTemplate || ctx_r3._contentTemplate);
  }
}
function Password_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275pipe(3, "mapper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "meter");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pipeBind2(3, 6, ctx_r3.meter, ctx_r3.strengthClass))("ngStyle", \u0275\u0275pureFunction1(9, _c10, ctx_r3.meter ? ctx_r3.meter.width : ""));
    \u0275\u0275attribute("data-pc-section", "meterLabel");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.infoText);
  }
}
function Password_div_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15, 1);
    \u0275\u0275listener("click", function Password_div_7_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onOverlayClick($event));
    })("@overlayAnimation.start", function Password_div_7_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationStart($event));
    })("@overlayAnimation.done", function Password_div_7_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Password_div_7_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Password_div_7_ng_container_3_Template, 2, 1, "ng-container", 16)(4, Password_div_7_ng_template_4_Template, 6, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Password_div_7_ng_container_6_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@overlayAnimation", \u0275\u0275pureFunction1(9, _c9, \u0275\u0275pureFunction2(6, _c8, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.headerTemplate || ctx_r3._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.contentTemplate || ctx_r3._contentTemplate)("ngIfElse", content_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.footerTemplate || ctx_r3._footerTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${dt("password.meter.height")};
    background: ${dt("password.meter.background")};
    border-radius: ${dt("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${dt("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${dt("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${dt("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${dt("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${dt("password.overlay.padding")};
    background: ${dt("password.overlay.background")};
    color: ${dt("password.overlay.color")};
    border: 1px solid ${dt("password.overlay.border.color")};
    box-shadow: ${dt("password.overlay.shadow")};
    border-radius: ${dt("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${dt("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${dt("form.field.padding.x")};
    color: ${dt("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${dt("icon.size")} / 2));
    width: ${dt("icon.size")};
    height: ${dt("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${dt("form.field.padding.x")};
    color: ${dt("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.appendTo === "self" ? "relative" : void 0
  })
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-password p-component p-inputwrapper": true,
    "p-inputwrapper-filled": instance.filled(),
    "p-variant-filled": 'instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled"',
    "p-inputwrapper-focus": instance.focused,
    "p-password-fluid": instance.hasFluid
  }),
  pcInput: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: ({
    instance
  }) => `p-password-meter-label ${instance.meter ? "p-password-meter-" + instance.meter.strength : ""}`,
  meterText: "p-password-meter-text"
};
var PasswordStyle = class _PasswordStyle extends BaseStyle {
  name = "password";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PasswordStyle_BaseFactory;
    return function PasswordStyle_Factory(__ngFactoryType__) {
      return (\u0275PasswordStyle_BaseFactory || (\u0275PasswordStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PasswordStyle)))(__ngFactoryType__ || _PasswordStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PasswordStyle,
    factory: _PasswordStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordStyle, [{
    type: Injectable
  }], null, null);
})();
var PasswordClasses;
(function(PasswordClasses2) {
  PasswordClasses2["root"] = "p-password";
  PasswordClasses2["pcInput"] = "p-password-input";
  PasswordClasses2["maskIcon"] = "p-password-mask-icon";
  PasswordClasses2["unmaskIcon"] = "p-password-unmask-icon";
  PasswordClasses2["overlay"] = "p-password-overlay";
  PasswordClasses2["meter"] = "p-password-meter";
  PasswordClasses2["meterLabel"] = "p-password-meter-label";
  PasswordClasses2["meterText"] = "p-password-meter-text";
})(PasswordClasses || (PasswordClasses = {}));
var PasswordDirective = class _PasswordDirective extends BaseComponent {
  zone;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel = "Enter a password";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel = "Weak";
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel = "Medium";
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel = "Strong";
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Sets the visibility of the password field.
   * @group Props
   */
  set showPassword(show) {
    this.el.nativeElement.type = show ? "text" : "password";
  }
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
  panel;
  meter;
  info;
  filled;
  content;
  label;
  scrollHandler;
  documentResizeListener;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-overlay");
      this.renderer.addClass(this.panel, "p-component");
      this.content = this.renderer.createElement("div");
      this.renderer.addClass(this.content, "p-password-content");
      this.renderer.appendChild(this.panel, this.content);
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.content, this.meter);
      this.label = this.renderer.createElement("div");
      this.renderer.addClass(this.label, "p-password-meter-label");
      this.renderer.appendChild(this.meter, this.label);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-meter-text");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel);
      this.renderer.appendChild(this.content, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
      this.updateMeter();
    }
  }
  showOverlay() {
    if (this.feedback) {
      if (!this.panel) {
        this.createPanel();
      }
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          addClass(this.panel, "p-connected-overlay-visible");
          this.bindScrollListener();
          this.bindDocumentResizeListener();
        }, 1);
      });
      absolutePosition(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback && this.panel) {
      addClass(this.panel, "p-connected-overlay-hidden");
      removeClass(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngOnDestroy();
        }, 150);
      });
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  labelSignal = signal("");
  onKeyup(e) {
    if (this.feedback) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel;
        meterPos = "0px 0px";
      } else {
        var score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel;
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel;
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel;
          meterPos = "0px -30px";
        }
        this.labelSignal.set(label);
        this.updateMeter();
      }
      if (!this.panel || !hasClass(this.panel, "p-connected-overlay-visible")) {
        this.showOverlay();
      }
      this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      this.info.textContent = label;
    }
  }
  updateMeter() {
    if (this.labelSignal()) {
      const label = this.labelSignal();
      const strengthClass = this.strengthClass(label.toLowerCase());
      const width = this.getWidth(label.toLowerCase());
      this.renderer.addClass(this.meter, strengthClass);
      this.renderer.setStyle(this.meter, "width", width);
      this.info.textContent = label;
    }
  }
  getWidth(label) {
    return label === "weak" ? "33.33%" : label === "medium" ? "66.66%" : label === "strong" ? "100%" : "";
  }
  strengthClass(label) {
    return `p-password-meter${label ? `-${label}` : ""}`;
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    let diff = x - y;
    if (diff <= 0) return x / y;
    else return 1 + 0.5 * (x / (x + y / 4));
  }
  get disabled() {
    return this.el.nativeElement.disabled;
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (hasClass(this.panel, "p-connected-overlay-visible")) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!isTouchDevice()) {
      this.hideOverlay();
    }
  }
  ngOnDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function PasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordDirective)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PasswordDirective,
    selectors: [["", "pPassword", ""]],
    hostAttrs: [1, "p-password", "p-inputtext", "p-component", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-password-fluid-directive", ctx.hasFluid);
      }
    },
    inputs: {
      promptLabel: "promptLabel",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      strongLabel: "strongLabel",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      showPassword: "showPassword",
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([PasswordStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      standalone: true,
      host: {
        class: "p-password p-inputtext p-component p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-password-fluid-directive]": "hasFluid"
      },
      providers: [PasswordStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    promptLabel: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    strongLabel: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPassword: [{
      type: Input
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
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class _MapperPipe {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static \u0275fac = function MapperPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapperPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "mapper",
    type: _MapperPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class _Password extends BaseComponent {
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label of the input for accessibility.
   * @group Props
   */
  label;
  /**
   * Indicates whether the component is disabled or not.
   * @group Props
   */
  disabled;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel;
  /**
   * Regex value for medium regex.
   * @group Props
   */
  mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  /**
   * Regex value for strong regex.
   * @group Props
   */
  strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel;
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel;
  /**
   * specifies the maximum number of characters allowed in the input element.
   * @group Props
   */
  maxLength;
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Id of the element or "body" for document where the overlay should be appended to.
   * @group Props
   */
  appendTo;
  /**
   * Whether to show an icon to display the password as plain text.
   * @group Props
   */
  toggleMask;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Specify automated assistance in filling out password by browser.
   * @group Props
   */
  autocomplete;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  contentTemplate;
  footerTemplate;
  headerTemplate;
  clearIconTemplate;
  hideIconTemplate;
  showIconTemplate;
  templates;
  _contentTemplate;
  _footerTemplate;
  _headerTemplate;
  _clearIconTemplate;
  _hideIconTemplate;
  _showIconTemplate;
  overlayVisible = false;
  meter;
  infoText;
  focused = false;
  unmasked = false;
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  overlay;
  value = null;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  translationSubscription;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  overlayService = inject(OverlayService);
  ngOnInit() {
    super.ngOnInit();
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "hideicon":
          this._hideIconTemplate = item.template;
          break;
        case "showicon":
          this._showIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
        break;
      case "void":
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) {
      this.overlay.style.minWidth = getOuterWidth(this.input.nativeElement) + "px";
      absolutePosition(this.overlay, this.input.nativeElement);
    } else {
      relativePosition(this.overlay, this.input.nativeElement);
    }
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback) {
      this.overlayVisible = true;
    }
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback) {
      this.overlayVisible = false;
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        this.overlayVisible && (this.overlayVisible = false);
        return;
      }
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
        break;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked = !this.unmasked;
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp.test(str)) level = 3;
    else if (this.mediumCheckRegExp.test(str)) level = 2;
    else if (str.length) level = 1;
    return level;
  }
  writeValue(value) {
    if (value === void 0) this.value = null;
    else this.value = value;
    if (this.feedback) this.updateUI(this.value || "");
    this.cd.markForCheck();
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
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        const window = this.document.defaultView;
        this.resizeListener = this.renderer.listen(window, "resize", () => {
          if (this.overlayVisible && !isTouchDevice()) {
            this.overlayVisible = false;
          }
        });
      }
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  containerClass(toggleMask) {
    return {
      "p-password p-component p-inputwrapper": true,
      "p-input-icon-right": toggleMask
    };
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  inputFieldClass(disabled) {
    return {
      "p-password-input": true,
      "p-disabled": disabled
    };
  }
  strengthClass(meter) {
    return `p-password-meter-label p-password-meter${meter?.strength ? `-${meter.strength}` : ""}`;
  }
  filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  promptText() {
    return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
  }
  restoreAppend() {
    if (this.overlay && this.appendTo) {
      if (this.appendTo === "body") this.renderer.removeChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).removeChild(this.overlay);
    }
  }
  inputType(unmasked) {
    return unmasked ? "text" : "password";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  ngOnDestroy() {
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
    this.restoreAppend();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Password_BaseFactory;
    return function Password_Factory(__ngFactoryType__) {
      return (\u0275Password_BaseFactory || (\u0275Password_BaseFactory = \u0275\u0275getInheritedFactory(_Password)))(__ngFactoryType__ || _Password);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Password,
    selectors: [["p-password"]],
    contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hideIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.showIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Password_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      promptLabel: "promptLabel",
      mediumRegex: "mediumRegex",
      strongRegex: "strongRegex",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      maxLength: [2, "maxLength", "maxLength", numberAttribute],
      strongLabel: "strongLabel",
      inputId: "inputId",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      appendTo: "appendTo",
      toggleMask: [2, "toggleMask", "toggleMask", booleanAttribute],
      size: "size",
      inputStyleClass: "inputStyleClass",
      styleClass: "styleClass",
      style: "style",
      inputStyle: "inputStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autocomplete: "autocomplete",
      placeholder: "placeholder",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: "variant",
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([Password_VALUE_ACCESSOR, PasswordStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 34,
    consts: [["input", ""], ["overlay", ""], ["content", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", 3, "input", "focus", "blur", "keyup", "disabled", "pSize", "ngClass", "ngStyle", "value", "variant", "pAutoFocus"], [4, "ngIf"], ["class", "p-password-overlay p-component", 3, "click", 4, "ngIf"], ["class", "p-password-clear-icon", 3, "click", 4, "ngIf"], [1, "p-password-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-password-toggle-mask-icon p-password-mask-icon", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "p-password-toggle-mask-icon", "p-password-mask-icon", 3, "click"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-password-overlay", "p-component", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "p-password-content"], [1, "p-password-meter"], [1, "p-password-meter-text"]],
    template: function Password_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "input", 4, 0);
        \u0275\u0275pipe(3, "mapper");
        \u0275\u0275pipe(4, "mapper");
        \u0275\u0275listener("input", function Password_Template_input_input_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInput($event));
        })("focus", function Password_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Password_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keyup", function Password_Template_input_keyup_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Password_ng_container_5_Template, 4, 3, "ng-container", 5)(6, Password_ng_container_6_Template, 3, 2, "ng-container", 5)(7, Password_div_7_Template, 7, 11, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "password")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275property("disabled", ctx.disabled)("pSize", ctx.size)("ngClass", \u0275\u0275pipeBind2(3, 28, ctx.disabled, ctx.inputFieldClass))("ngStyle", ctx.inputStyle)("value", ctx.value)("variant", ctx.variant)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("label", ctx.label)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.inputId)("tabindex", ctx.tabindex)("type", \u0275\u0275pipeBind2(4, 31, ctx.unmasked, ctx.inputType))("placeholder", ctx.placeholder)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxLength)("data-pc-section", "input");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showClear && ctx.value != null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleMask);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Password, [{
    type: Component,
    args: [{
      selector: "p-password",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
      template: `
        <div [ngClass]="rootClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                [attr.tabindex]="tabindex"
                pInputText
                [disabled]="disabled"
                [pSize]="size"
                [ngClass]="disabled | mapper: inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper: inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                [variant]="variant"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
                [pAutoFocus]="autofocus"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" class="p-password-clear-icon" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon class="p-password-toggle-mask-icon p-password-mask-icon" *ngIf="!hideIconTemplate && !_hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate || _hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate || _hideIconTemplate; context: { class: 'p-password-toggle-mask-icon p-password-mask-icon' }"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate && !_showIconTemplate" class="p-password-toggle-mask-icon p-password-mask-icon" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate || _showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate || _showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                class="p-password-overlay p-component"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate || _contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-content">
                        <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                            <div [ngClass]="meter | mapper: strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                        </div>
                        <div class="p-password-meter-text" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [Password_VALUE_ACCESSOR, PasswordStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
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
    promptLabel: [{
      type: Input
    }],
    mediumRegex: [{
      type: Input
    }],
    strongRegex: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    maxLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strongLabel: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    toggleMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    hideIconTemplate: [{
      type: ContentChild,
      args: ["headericon", {
        descendants: false
      }]
    }],
    showIconTemplate: [{
      type: ContentChild,
      args: ["showicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PasswordModule = class _PasswordModule {
  static \u0275fac = function PasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PasswordModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Password, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [Password, PasswordDirective, SharedModule],
      exports: [PasswordDirective, Password, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/auth/signup.ts
var Signup = class _Signup {
  fb;
  signupForm;
  constructor(fb) {
    this.fb = fb;
    this.signupForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log("Form Submitted", this.signupForm.value);
    }
  }
  static \u0275fac = function Signup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signup)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signup, selectors: [["app-signup"]], decls: 30, vars: 7, consts: [[1, "bg-surface-50", "dark:bg-surface-950", "flex", "items-center", "justify-center", "min-h-screen", "min-w-[100vw]", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", 2, "border-radius", "53px"], [1, "text-center", "mb-8"], ["viewBox", "0 0 120 60", "xmlns", "http://www.w3.org/2000/svg", "fill", "none"], ["width", "120", "height", "60", "rx", "10", "fill", "var(--primary-color, #002A5E)"], ["d", "M10 45 L40 20 L70 30 L100 10", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round"], ["d", "M20 35 C35 10, 75 5, 105 25 L95 30 C70 15, 40 20, 20 35 Z", "fill", "white"], ["x", "15", "y", "52", "fill", "white", "font-size", "12", "font-family", "Arial", "font-weight", "bold"], ["x", "15", "y", "58", "fill", "white", "font-size", "6", "font-family", "Arial", "font-weight", "light"], [1, "text-muted-color", "font-medium", "mt-2"], [3, "ngSubmit", "formGroup"], ["for", "name", 1, "block", "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "mb-2"], ["pInputText", "", "id", "name", "type", "text", "placeholder", "Name", "formControlName", "name", 1, "w-full", "md:w-[30rem]", "mb-8"], ["for", "email", 1, "block", "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "mb-2"], ["pInputText", "", "id", "email", "type", "text", "placeholder", "Email address", "formControlName", "email", 1, "w-full", "md:w-[30rem]", "mb-8"], ["for", "password", 1, "block", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-2"], ["id", "password", "placeholder", "Password", "styleClass", "mb-4", "formControlName", "password", 3, "toggleMask", "fluid", "feedback"], ["for", "confirmPassword", 1, "block", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-2"], ["id", "confirmPassword", "placeholder", "Confirm Password", "styleClass", "mb-4", "formControlName", "confirmPassword", 3, "toggleMask", "fluid", "feedback"], ["label", "Sign Up", "styleClass", "w-full", "type", "submit"]], template: function Signup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "rect", 6)(8, "path", 7)(9, "path", 8);
      \u0275\u0275elementStart(10, "text", 9);
      \u0275\u0275text(11, "NOVA TRANSIT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "text", 10);
      \u0275\u0275text(13, "Reliable | Fast | Efficient");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Create an account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function Signup_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "label", 13);
      \u0275\u0275text(18, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementStart(20, "label", 15);
      \u0275\u0275text(21, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 16);
      \u0275\u0275elementStart(23, "label", 17);
      \u0275\u0275text(24, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "p-password", 18);
      \u0275\u0275elementStart(26, "label", 19);
      \u0275\u0275text(27, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "p-password", 20)(29, "p-button", 21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("formGroup", ctx.signupForm);
      \u0275\u0275advance(9);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
    }
  }, dependencies: [ButtonModule, Button, InputTextModule, InputText, PasswordModule, Password, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RippleModule, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signup, { className: "Signup", filePath: "src/app/pages/auth/signup.ts", lineNumber: 62 });
})();

// src/app/pages/auth/login.component/login.component.ts
function AuthComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
function AuthComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
var AuthComponent = class _AuthComponent {
  db;
  isSignUp = signal(false);
  loginData = signal({
    email: "",
    password: ""
  });
  signupData = signal({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  constructor(db) {
    this.db = db;
  }
  ngOnInit() {
    const testRef = ref(this.db, "test");
    set(testRef, { message: "Hello Firebase!" }).then(() => {
      console.log("Data added to Firebase!");
    }).catch((err) => console.error("Error:", err));
  }
  toggleSignUp() {
    this.isSignUp.set(!this.isSignUp());
  }
  validateInputs() {
    const login = this.loginData();
    const signup = this.signupData();
    if (!login.email)
      this.loginData.set(__spreadProps(__spreadValues({}, login), { email: "Required field" }));
    if (!signup.name)
      this.signupData.set(__spreadProps(__spreadValues({}, signup), { name: "Required field" }));
    if (!login.password)
      this.loginData.set(__spreadProps(__spreadValues({}, login), { password: "Required field" }));
    if (!signup.email)
      this.signupData.set(__spreadProps(__spreadValues({}, signup), { email: "Required field" }));
    if (!signup.password)
      this.signupData.set(__spreadProps(__spreadValues({}, signup), { password: "Required field" }));
    if (!signup.confirmPassword)
      this.signupData.set(__spreadProps(__spreadValues({}, signup), { confirmPassword: "Required field" }));
  }
  static \u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthComponent)(\u0275\u0275directiveInject(Database));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], decls: 54, vars: 10, consts: [[2, "display", "flex", "justify-content", "center", "align-items", "center", "height", "100vh"], [1, "wrapper"], [1, "form", "login"], [1, "title"], ["type", "email", 1, "placeholder", 3, "ngModelChange", "ngModel"], ["type", "password", 1, "placeholder", 3, "ngModelChange", "ngModel"], ["type", "button", "routerLink", "", 1, "submit-btn", 3, "click"], [1, "forgot-password"], [1, "slide-panel"], [1, "img"], [1, "img-text", "m-up"], [1, "img-text", "m-in"], [1, "img-btn", 3, "click"], [4, "ngIf"], [1, "form", "signup"], ["type", "text", 1, "placeholder", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "submit-btn", 3, "click"]], template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h2", 3);
      \u0275\u0275text(5, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "label")(7, "span");
      \u0275\u0275text(8, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.loginData().email, $event) || (ctx.loginData().email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "label")(11, "span");
      \u0275\u0275text(12, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.loginData().password, $event) || (ctx.loginData().password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 6);
      \u0275\u0275listener("click", function AuthComponent_Template_button_click_14_listener() {
        return ctx.validateInputs();
      });
      \u0275\u0275text(15, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 7);
      \u0275\u0275text(17, "Forgot your password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "h2");
      \u0275\u0275text(22, "New Here?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Create an account to stay updated!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 11)(26, "h2");
      \u0275\u0275text(27, "Already have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Just log in and continue where you left off.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 12);
      \u0275\u0275listener("click", function AuthComponent_Template_div_click_30_listener() {
        return ctx.toggleSignUp();
      });
      \u0275\u0275template(31, AuthComponent_span_31_Template, 2, 0, "span", 13)(32, AuthComponent_span_32_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 14)(34, "h2", 3);
      \u0275\u0275text(35, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "label")(37, "span");
      \u0275\u0275text(38, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.signupData().name, $event) || (ctx.signupData().name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "label")(41, "span");
      \u0275\u0275text(42, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.signupData().email, $event) || (ctx.signupData().email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "label")(45, "span");
      \u0275\u0275text(46, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.signupData().password, $event) || (ctx.signupData().password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "label")(49, "span");
      \u0275\u0275text(50, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.signupData().confirmPassword, $event) || (ctx.signupData().confirmPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "button", 16);
      \u0275\u0275listener("click", function AuthComponent_Template_button_click_52_listener() {
        return ctx.validateInputs();
      });
      \u0275\u0275text(53, "Sign Up");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("s-signup", ctx.isSignUp());
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.loginData().email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.loginData().password);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", !ctx.isSignUp());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSignUp());
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.signupData().name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.signupData().email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.signupData().password);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.signupData().confirmPassword);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AppFloatingConfigurator, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, RouterModule, RouterLink, RippleModule], styles: ["\n\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  height: 500px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  display: flex;\n}\n.form[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 40px;\n  text-align: center;\n  position: absolute;\n  transition: transform 0.5s ease-in-out;\n  top: 10%;\n}\n.login[_ngcontent-%COMP%] {\n  left: 0;\n}\n.signup[_ngcontent-%COMP%] {\n  top: 0;\n  padding-top: 3%;\n  left: 100%;\n}\n.s-signup[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.s-signup[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.slide-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  background: var(--primary-color);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  right: 0;\n  transition: transform 0.5s ease-in-out;\n}\n.s-signup[_ngcontent-%COMP%]   .slide-panel[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  margin-bottom: 10px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-top: 5px;\n  font-size: 16px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  padding: 12px;\n  margin-top: 15px;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 16px;\n  transition: background-color 0.3s ease-in-out;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark-color);\n  filter: brightness(1.2);\n}\n.img-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n  padding: 12px 25px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 20px;\n}\n.img-btn[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  color: #666;\n  cursor: pointer;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/pages/auth/login.component/login.component.ts", lineNumber: 20 });
})();

// src/app/pages/auth/auth.routes.ts
var auth_routes_default = [
  { path: "access", component: Access },
  { path: "error", component: Error },
  { path: "login", component: AuthComponent },
  { path: "signup", component: Signup }
];
export {
  auth_routes_default as default
};
//# sourceMappingURL=chunk-VX6LI3RA.js.map
