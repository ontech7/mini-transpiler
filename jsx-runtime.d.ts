import type { MiniElement } from "@9elt/miniframe";
import { JSXInternal } from "./jsx";

type Tags =
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap
  | keyof MathMLElementTagNameMap;
type Children = (MiniElement | string)[];

export function jsx(
  tagName: Tags | Function,
  props: Partial<MiniElement> & { children?: Children }
): MiniElement;

export function jsxDEV(
  tagName: Tags | Function,
  props: Partial<MiniElement> & { children?: Children }
): MiniElement;

export function jsxs(
  tagName: Tags | Function,
  props: Partial<MiniElement> & { children?: Children }
): MiniElement;

export function Fragment(
  props: Partial<MiniElement> & { children?: Children }
): MiniElement;

export { JSXInternal as JSX };
