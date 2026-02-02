
# CONTRIBUTING TO ERRORHEAD

Thank you for your interest in contributing to ERRORHEAD! We welcome experimental artists, creative coders, and shader wizards.

## 🤝 HOW TO CONTRIBUTE

1.  **Fork the Repository**
2.  **Clone Locally**
    ```bash
    git clone https://github.com/your-username/errorhead.git
    cd errorhead
    npm install
    ```
3.  **Create a Branch**
    ```bash
    git checkout -b feature/my-cool-glitch
    ```
4.  **Hack & Commit**
    *   Add new Shaders in `/services/webglService.ts`.
    *   Add new Presets in `/constants.ts`.
5.  **Submit a Pull Request**

## 🧪 GOOD FIRST ISSUES

-   **Add New Presets**: Create interesting visual states and add them to the `PRESETS` array.
-   **Improve UI**: Help refine the mobile layout or accessibility of the HUD.
-   **Optimization**: Improve WebGL performance on lower-end devices.

## 📝 CODING STANDARDS

-   Use TypeScript for all new logic.
-   Keep specific glitch algorithms isolated in `glitchService.ts`.
-   Follow the existing "Sci-Fi Console" styling conventions (Tailwind CSS).

## 🐛 REPORTING BUGS

Please open an issue on GitHub with:
1.  Browser & Version.
2.  Hardware (GPU).
3.  Steps to reproduce the crash/bug.

## 📜 LICENSE

By contributing, you agree that your code will be licensed under the project's MIT License.
