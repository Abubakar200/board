"use client";
import { useCallback, useState } from "react";
import Info from "./info";
import Participants from "./participants";
import ToolBar from "./toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";
import { CursorPresence } from "./cursor-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";
interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  const onPointerMover = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );
  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);
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
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMover}
      >
        <g>
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
