# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
class WeeklyClock {
  private data: any[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.startClock();
  }

  private startClock() {
    this.timer = setInterval(() => {
      const now = new Date();
      console.log(`[${now.toLocaleString()}] Clock running...`);

      this.logData({ timestamp: now, value: Math.random() });

      if (this.isResetTime(now)) {
        this.resetData();
      }
    }, 1000);
  }

  private logData(entry: any) {
    this.data.push(entry);
  }

  private isResetTime(date: Date): boolean {
    return (
      date.getDay() === 0 && // Sunday
      date.getHours() === 12 &&
      date.getMinutes() === 59 &&
      date.getSeconds() === 59
    );
  }

  private resetData() {
    console.log("🕒 Resetting data at Sunday 12:59:59...");
    this.data = [];
  }

  public getData() {
    return this.data;
  }

  public stopClock() {
    if (this.timer) {
      clearInterval(this.timer);
      console.log("Clock stopped.");
    }
  }
}

const clock = new WeeklyClock();

// For demo only: stop after 10 seconds
setTimeout(() => clock.stopClock(), 10_000);
