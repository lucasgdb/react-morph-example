import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { CloseButton } from "./CloseButton";
import { ShoppingCart } from "lucide-react";
import { Card } from "./Card";

type Props = {
  id: string;
  title: string;
  subTitle: string;
  image: string;
};

export function TransitionCard({ id, title, subTitle, image }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <LayoutGroup>
        <Card
          id={id}
          title={title}
          image={image}
          onClick={() => setOpen(true)}
        />

        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild forceMount>
                <motion.div
                  layoutId={`item-${id}`}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-112 p-4 bg-white rounded-lg"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-4">
                      <Dialog.Title>Buy</Dialog.Title>
                      <Dialog.Description className="sr-only">
                        {subTitle}
                      </Dialog.Description>
                    </div>

                    <Dialog.Close asChild>
                      <CloseButton />
                    </Dialog.Close>
                  </div>

                  <div className="grid [grid-template-columns:min-content_1fr] gap-2 border mt-2 p-4 rounded-lg">
                    <motion.img
                      src={`/assets/images/${image}`}
                      className="max-w-40"
                      layoutId={`image-${id}`}
                    />

                    <motion.h3
                      layoutId={`title-${id}`}
                      className="text-sm font-medium"
                    >
                      {title}
                    </motion.h3>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{subTitle}</p>
                  </div>

                  <div className="mt-4">
                    <Dialog.Close asChild>
                      <Button className="w-full">
                        <ShoppingCart className="size-4" />
                        Buy
                      </Button>
                    </Dialog.Close>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Dialog.Root>
  );
}
