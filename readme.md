# 1. Create vite project

npm init- enter all the way ( will create package.json)
npm install -D vite ( will create package-lock.json)
create index, js, cs folder
add script to index
add to packed.json
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
npm run build (dist folder)
npm run dev

## 2. run multiple inputs

(resource: <https://stackoverflow.com/questions/71365513/multiple-inputs-with-vite>)
add new index - script also
add vite.config
    import { defineConfig } from 'vite'
    import { resolve } from 'path'

    export default defineConfig({
        build: {
            rollupOptions: {
                input: {
                    home: resolve(__dirname, './index.html'),
                    singup: resolve(__dirname, './singup.html'),
      },
    },
}
});

npm run build (check to se that both files are included: index and singup in this case) folder will be added to dist folder
npm run dev (run project)