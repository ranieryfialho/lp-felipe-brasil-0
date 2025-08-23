import * as RAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const Accordion = RAccordion.Root;
export const AccordionItem = RAccordion.Item;

export function AccordionTrigger({ children, ...props }) {
  return (
    <RAccordion.Header className="w-full">
      <RAccordion.Trigger
        className="group flex w-full items-center justify-between rounded-md border border-line/40 bg-bg2/40 px-4 py-3 text-left text-sm text-text hover:bg-bg2/60"
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </RAccordion.Trigger>
    </RAccordion.Header>
  );
}

export function AccordionContent(props) {
  return (
    <RAccordion.Content
      className="rounded-md border border-line/40 bg-bg/60 px-4 py-4 text-sm text-muted data-[state=open]:animate-in data-[state=closed]:animate-out"
      {...props}
    />
  );
}
