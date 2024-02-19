"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}
const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
      return null;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return <div>Rectangle</div>;
      default:
        console.warn("Unknown Layer type");
        return null;
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
