import { Toaster } from "@/components/ui/sonner"

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <>
        <div className="min-h-screen">{children}</div>
        <Toaster />
    </>
  );
}
