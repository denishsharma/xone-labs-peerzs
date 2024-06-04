export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        typeCheck: "build",
        tsConfig: {
            compilerOptions: {
                noErrorTruncation: true,
            },
        },
    },
    css: ["~/assets/styles/global.scss"],
    modules: [
        "@nuxt/eslint",
        "@nuxtjs/color-mode",
        "@unocss/nuxt",
        "nuxt-icon",
        "nuxt-svgo",
        "@nuxt/fonts",
        "@vueuse/nuxt",
    ],
    colorMode: {
        classSuffix: "",
        globalName: "__PEERZS_COLOR_MODE__",
        storageKey: "peerzs-color-mode",
    },
    svgo: {
        autoImportPath: "~/assets",
    },
    eslint: {
        config: {
            standalone: false,
        },
    },
});
