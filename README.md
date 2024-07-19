# 🌟 Didesign

Didesign is a collaborative design platform built with Next.js, TypeScript, Liveblocks, Fabric.js, Shadcn, and Tailwind CSS. It offers a rich set of features to enable real-time design collaboration and creativity.

## ✨ Features

- **👥 Multi Cursors, Cursor Chat, and Reactions**: Allows multiple users to collaborate simultaneously by showing individual cursors, enabling real-time chat, and reactions for interactive communication.
- **🟢 Active Users**: Displays a list of currently active users in the collaborative environment, providing visibility into who is currently engaged.
- **💬 Comment Bubbles**: Enables users to attach comments to specific elements on the canvas, fostering communication and feedback on design components.
- **🔺 Creating Different Shapes**: Provides tools for users to generate a variety of shapes on the canvas, allowing for diverse design elements.
- **🖼️ Uploading Images**: Import images onto the canvas, expanding the range of visual content in the design.
- **🎨 Customization**: Allows users to adjust the properties of design elements, offering flexibility in customizing and fine-tuning visual components.
- **✏️ Freeform Drawing**: Enables users to draw freely on the canvas, promoting artistic expression and creative design.
- **↩️ Undo/Redo**: Provides the ability to reverse (undo) or restore (redo) previous actions, offering flexibility in design decision-making.
- **⌨️ Keyboard Actions**: Allows users to utilize keyboard shortcuts for various actions, including copying, pasting, deleting, and triggering shortcuts for features like opening cursor chat, reactions, and more, enhancing efficiency and accessibility.
- **📜 History**: Review the chronological history of actions and changes made on the canvas, aiding in project management and version control.
- **🛠️ Managing Design Elements**: Offers a range of functions for managing design elements, including deletion, scaling, moving, clearing the canvas, and exporting the final design for external use.

## 🛠️ Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Liveblocks**: A real-time collaboration infrastructure.
- **Fabric.js**: A powerful and simple JavaScript HTML5 canvas library.
- **Shadcn**: A component library for building consistent and reusable UI elements.
- **Tailwind CSS**: A utility-first CSS framework.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/didesign.git
   ```

2. Navigate to the project directory:

   ```bash
   cd didesign
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Set Up Environment Variables
   Create a new file named `.env` in the root of your project and add the following content:

   ```env
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
   ```

   Replace the placeholder values with your actual Liveblocks credentials. You can obtain these credentials by signing up on the [Liveblocks website](https://liveblocks.io).

### Running the Development Server

```bash
npm run dev
```
