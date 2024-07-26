"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./Info";

function PreviewModal() {
  const PreviewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={PreviewModal.isOpen} onClose={PreviewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery image={product.image} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} onclose={PreviewModal.onClose} />
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;
