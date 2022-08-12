import {expandCollapse} from "./expand-collapse";
import {shake} from "./shake";
import {zoomIn, zoomOut} from "./zoom";
import {
  fadeIn,
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeInTop,
  fadeOut, fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
  fadeOutTop
} from "./fade";
import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop,
  slideOutBottom,
  slideOutLeft,
  slideOutRight,
  slideOutTop
} from "./slide";


export const FuseAnimations = [
    expandCollapse,
    fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight,
    fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight,
    shake,
    slideInTop, slideInBottom, slideInLeft, slideInRight,
    slideOutTop, slideOutBottom, slideOutLeft, slideOutRight,
    zoomIn, zoomOut
];
