import React from "react";
import { cn } from "@/libs/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, onSubmit, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("space-y-6 w-full max-w-md", className)}
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) {
            onSubmit(e);
          }
        }}
        {...props}
      >
        {children}
      </form>
    );
  }
);
Form.displayName = "Form";
