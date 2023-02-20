import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react({ include: "**/*.tsx" }), mkcert()],
  root: "src",
  server: {
    host: true,
    port: 3000,
    https: true,

    /*   proxy: {
      "/api": {
        target: "http://192.168.101.14:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, options) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            if (!req.headers.cookie) {
              return;
            }
            console.log("req.headers.cookie", req.headers.cookie);
            proxyReq.setHeader("cookie", req.headers.cookie);
          });
        },
        secure: false,
      },
    }, */

    /*   proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    }, */

    // proxy: {
    //   // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    //   // '/foo': 'http://localhost:4567',
    //   // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    //   "/api": {
    //     target: "http://192.168.101.14:5000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },

    /*   proxy: {
      "/api": {
        target: "http://192.168.101.14:5000",
        changeOrigin: true,
        secure: true,
      },
    }, */
    /*  proxy: {
      "/api": {
        target: "http://192.168.101.14:5000",
        changeOrigin: true,
        secure: false,
      },
    }, */
  },
});
