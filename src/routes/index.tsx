import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "../components/accordion";
import { LuChevronDown } from "@qwikest/icons/lucide";

export default component$(() => {
  // animation in collapsible.css

  return (
    <Accordion class="accordion-root">
      {[0, 1, 2, 3].map((name, index) => (
        <AccordionItem
          key={index}
          class="accordion-item"
          defaultOpen={index === 0}
        >
          <AccordionHeader>
            <AccordionTrigger>
              <span>Title {index + 1}</span>
              <LuChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="animation" style={{ overflow: "hidden" }}>
            Content
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
