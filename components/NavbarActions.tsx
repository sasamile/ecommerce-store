"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const route = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => route.push("/cart")}
        className="flex items-center rounded-full bg-black py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items.length}
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;
