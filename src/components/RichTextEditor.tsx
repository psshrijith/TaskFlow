import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./RichTextEditor.css";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RichTextEditor = ({ value, onChange, disabled = false }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm dark:prose-invert focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800">
      {/* Toolbar */}
      <div className="flex gap-1 border-b border-gray-700 bg-gray-900 p-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={disabled}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            editor.isActive("bold")
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={disabled}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            editor.isActive("italic")
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          disabled={disabled}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            editor.isActive("heading")
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          H
        </button>
        <div className="mx-1 border-r border-gray-600" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={disabled}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            editor.isActive("bulletList")
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          •
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={disabled}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            editor.isActive("orderedList")
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          1.
        </button>
      </div>

      {/* Editor */}
      <div className="p-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichTextEditor;
