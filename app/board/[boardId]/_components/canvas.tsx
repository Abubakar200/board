"use client";
import { useState } from "react";
import Info from "./info";
import Participants from "./participants";
import ToolBar from "./toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";
interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar
        setCanvasState={setCanvasState}
        canvasState={canvasState}
        redo={history.redo} // TODO: implement undo and redo function
        undo={history.undo}
        canRedo={canRedo}
        canUndo={canUndo}
      />
    </main>
  );
};

export default Canvas;
