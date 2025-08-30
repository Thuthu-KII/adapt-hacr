import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full h-[100vh] overflow-y-auto">
        <header className="border-b border-border px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"></header>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
