# nodejs-canil

### NPMS---------------------------------

npm init -y
tsc --init
npm i express
npm i mustache-express 
npm i dotenv   
npm i --save-dev @types/express 
npm i --save-dev @types/mustache-express 
npm i --save-dev @types/node  

### NPMS GLOBAL---------------------------------

nodemon
typescript
ts-node

### ALTERAÇÕES NO tscondfig.json-----------------

"rootDir": "./src",
"moduleResolution": "node",
"outDir": "./dist",  

### ALTERAÇÕES NO package.json-----------------

"start": "nodemon -e ts,json,mustache src/server.ts"

### para rodar o projeto ----------------

npm run start