import { component$, Slot } from "@builder.io/qwik";
import {
  CollapsibleContent,
  type CollapsibleContentProps,
} from "../collapsible";

export const AccordionContent = component$((props: CollapsibleContentProps) => {
  return (
    <CollapsibleContent {...props}>
      <Slot />
    </CollapsibleContent>
  );
});
