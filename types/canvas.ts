export type Colors = { r: number; g: number; b: number };
export type Camera = { x: number; y: number };
export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}
export type RectangleLayer = {
  type: LayerType.Rectangle;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: Colors;
  value?: string;
};

export type EllipseLayer = {
  type: LayerType.Ellipse;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: Colors;
  value?: string;
};
export type TextLayer = {
  type: LayerType.Text;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: Colors;
  value?: string;
};

export type NoteLayer = {
  type: LayerType.Note;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: Colors;
  value?: string;
};

export type PathLayer = {
  type: LayerType.Path;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: Colors;
  points: number[][];
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};
export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}
export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Pencil;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      Corner: Side;
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType: LayerType.Ellipse | LayerType.Note
        | LayerType.Rectangle
        | LayerType.Text;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}
