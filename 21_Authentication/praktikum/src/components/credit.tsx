import { cn } from "@/lib/tailwind-merge";

export function Credit({ children, className }: { children?: React.ReactNode, className?: string}) {
  return (
    <div className={cn("text-center pt-5 pb-5 text-xs", className)}>
      {children}
      <h5>
        Made by <span className="text-red-500">Naufal Nasrullah</span> with{" "}
        <span className="underline text-emerald-500">
         React, Tailwind, Shadcn, React Hook Form, Zod, Redux, TypeScript, and ❤
        </span>
      </h5>
      <h6 className="mt-1">⚠️ please contact me if you found any bug ⚠️</h6>
    </div>
  );
}
