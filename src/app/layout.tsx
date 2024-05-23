"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import ReactQueryProvider from "@/config/reactQueryProvider";
import { SnackbarProvider } from "notistack";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
