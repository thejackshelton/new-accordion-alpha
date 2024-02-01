import { createContextId, type Signal } from "@builder.io/qwik";

export const accordionContextId =
  createContextId<AccordionContext>("qwikui-accordion");

export const accordionItemContextId = createContextId<AccordionItemContext>(
  "qwikui-accordion-item"
);

export type AccordionItemContext = {
  isOpenSig: Signal<boolean>;
  localId: string;
};

export type AccordionContext = {
  selectedIdSig: Signal<string | null>;
};
