import React from "react";
import { cn } from "@/libs/utils";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col min-h-screen bg-gray-50", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Layout.displayName = "Layout";

interface LayoutHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export const LayoutHeader = React.forwardRef<HTMLHeadElement, LayoutHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn("sticky top-0 z-30 flex h-16 w-full items-center px-6 border-b border-gray-200 bg-white", className)}
        {...props}
      >
        {children}
      </header>
    );
  }
);
LayoutHeader.displayName = "LayoutHeader";

interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const LayoutContainer = React.forwardRef<HTMLDivElement, LayoutContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-1 overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LayoutContainer.displayName = "LayoutContainer";

interface LayoutSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const LayoutSidebar = React.forwardRef<HTMLDivElement, LayoutSidebarProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn("hidden md:flex w-64 flex-col border-r border-gray-200 bg-white p-4 overflow-y-auto", className)}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
LayoutSidebar.displayName = "LayoutSidebar";

interface LayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const LayoutContent = React.forwardRef<HTMLDivElement, LayoutContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn("flex-1 overflow-y-auto p-6", className)}
        {...props}
      >
        {children}
      </main>
    );
  }
);
LayoutContent.displayName = "LayoutContent";

export default Object.assign(Layout, {
  Header: LayoutHeader,
  Container: LayoutContainer,
  Sidebar: LayoutSidebar,
  Content: LayoutContent,
});
