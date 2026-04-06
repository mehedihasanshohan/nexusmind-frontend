// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

// function DaisyThemeSync() {
//   const { resolvedTheme } = useTheme();

//   React.useEffect(() => {
//     const root = document.documentElement;
//     root.setAttribute("data-theme", resolvedTheme === "light" ? "light" : "dark");
//   }, [resolvedTheme]);

//   return null;
// }

// export function ThemeProvider({ children }) {
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <>{children}</>;
//   }

//   return (
//     <NextThemesProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem={false}
//       disableTransitionOnChange
//     >
//       <DaisyThemeSync />
//       {children}
//     </NextThemesProvider>
//   );
// }






"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function DaisyThemeSync() {
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    const root = document.documentElement;
    // তোর CSS এর [data-theme] এর সাথে এটা এখন সিঙ্কড
    root.setAttribute("data-theme", resolvedTheme === "light" ? "light" : "dark");
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <DaisyThemeSync />
      {children}
    </NextThemesProvider>
  );
}