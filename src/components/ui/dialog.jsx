import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function Modal({ trigger, children, title }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line/60 bg-bg p-5 shadow-lg">
          <div className="flex items-center justify-between border-b border-line/40 pb-3">
            <Dialog.Title className="font-title text-lg">{title}</Dialog.Title>
            <Dialog.Close aria-label="Fechar">
              <X className="h-5 w-5 text-muted hover:text-text" />
            </Dialog.Close>
          </div>
          <div className="pt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
