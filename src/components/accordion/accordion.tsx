import {
  component$,
  Slot,
  type PropsOf,
  useSignal,
  useContextProvider,
} from "@builder.io/qwik";
import { accordionContextId, type AccordionContext } from "./accordion-context";

export const Accordion = component$<PropsOf<"div">>((props) => {
  const selectedIdSig = useSignal<string | null>(null);

  const context: AccordionContext = {
    selectedIdSig,
  };

  useContextProvider(accordionContextId, context);

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
