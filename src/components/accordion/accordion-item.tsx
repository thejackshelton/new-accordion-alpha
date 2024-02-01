import {
  Slot,
  component$,
  useContext,
  useContextProvider,
  useId,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Collapsible, type CollapsibleProps } from "../collapsible";
import {
  accordionItemContextId,
  type AccordionItemContext,
  accordionContextId,
} from "./accordion-context";

export const AccordionItem = component$((props: CollapsibleProps) => {
  const context = useContext(accordionContextId);
  const isOpenSig = useSignal<boolean>(props.defaultOpen ?? false);
  const localId = useId();
  const itemId = `${localId}-item`;
  const triggerId = `${localId}-trigger`;

  useTask$(function resetTriggersTask({ track }) {
    track(() => context.selectedIdSig.value);

    const notCurrItem = triggerId !== context.selectedIdSig.value;
    const notNull = context.selectedIdSig.value !== null;

    if (notCurrItem && notNull) {
      isOpenSig.value = false;
    }
  });

  const itemContext: AccordionItemContext = {
    isOpenSig,
    localId,
  };

  useContextProvider(accordionItemContextId, itemContext);

  return (
    <Collapsible bind:isOpen={isOpenSig} id={itemId} {...props}>
      <Slot />
    </Collapsible>
  );
});
