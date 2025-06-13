import type React from "react"
import { forwardRef } from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
  children: React.ReactNode
  rounded?: "default" | "full"
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, rounded = "default", ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(rounded === "full" && "rounded-full", className)}
        variant={variant}
        size={size}
        ref={ref}
        asChild={asChild}
        {...props}
      />
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
