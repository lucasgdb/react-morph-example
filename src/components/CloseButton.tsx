import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { forwardRef } from "react";

interface CloseButtonProps {
  onClick?: () => void;
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton({ onClick }, ref) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={onClick}
        aria-label="Close"
        ref={ref}
      >
        <X className="h-4 w-4" />
      </Button>
    );
  }
);
