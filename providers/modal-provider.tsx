"use client";
import PreviewModal from "@/components/PreviewModal";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div>
      <PreviewModal />
    </div>
  );
}

export default ModalProvider;
