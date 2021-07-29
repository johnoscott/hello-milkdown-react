import React from 'react';
import { Editor, rootCtx } from '@milkdown/core';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';

import '@milkdown/theme-nord/lib/theme.css';
import '@milkdown/preset-commonmark/lib/style.css';

import { defaultValueCtx } from '@milkdown/core';

const defaultValue = `# 🍼 Hello milkdown
Milkdown is a WYSIWYG markdown editor.

> This is a bare-bones version that does not use any plug-ins
> *NOTE:* The slash \`/\` menu does not work here (it requires the \`@milkdown/plugin-slash\` plug-in)

-   Features
    -  📝 **WYSIWYG Markdown** - Write markdown in an elegant way
    - other features are available from plug-ins

![logo](https://preview.redd.it/us7w1x2zx8461.jpg?auto=webp&s=077a73d5c08aec0bc0fb48c5e5be40c928467bb6)

---
click here (or anywhere) to start editing.

`;

export const MilkdownEditor: React.FC = () => {
    const editor = useEditor((root) =>
        new Editor()
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, defaultValue);
            })
            .use(commonmark)
    );

    return <ReactEditor editor={editor} />;
};
