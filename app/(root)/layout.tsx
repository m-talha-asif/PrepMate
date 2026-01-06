import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const handleSignOut = async () => {
    "use server";
    await signOut();
    redirect("/sign-in");
  };

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100 bg-gradient-to-r from-indigo-700 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            PrepMate
          </h2>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">AI Interview Coach</span>
          <form action={handleSignOut}>
            <Button className="btn-secondary">Log out</Button>
          </form>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
