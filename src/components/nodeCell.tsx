import { TNode } from "../types";

type PropsType = {
  node: TNode;
  toggleSelectNode: (node: TNode) => void;
  isSelected: boolean;
};

export default function NodeCell({
  node,
  toggleSelectNode,
  isSelected,
}: PropsType) {
  return (
    <div
      key={`${node[0]}${node[1]}`}
      className={`w-6 min-w-6 h-6 min-h-6 ${
        isSelected
          ? "bg-teal-400 ring-1 ring-white"
          : "bg-white ring-1 ring-teal-400"
      }`}
      onClick={() => toggleSelectNode(node)}
    ></div>
  );
}
