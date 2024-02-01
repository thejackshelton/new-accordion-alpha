import {
  Slot,
  component$,
  useContext,
  $,
  type PropsOf,
} from "@builder.io/qwik";
import { CollapsibleTrigger } from "../collapsible";
import {
  accordionContextId,
  accordionItemContextId,
} from "./accordion-context";

export const AccordionTrigger = component$<PropsOf<"button">>((props) => {
  const context = useContext(accordionContextId);
  const itemContext = useContext(accordionItemContextId);
  const triggerId = `${itemContext.localId}-trigger`;

  const handleClick$ = $(() => {
    context.selectedIdSig.value = triggerId;
  });

  return (
    <CollapsibleTrigger onClick$={handleClick$} id={triggerId} {...props}>
      <Slot />
    </CollapsibleTrigger>
  );
});
