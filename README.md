# dtux-kangaroo
## Install
```
npm i dtux-kangaroo -g
```
## Usage

### roo backup
backup resource on origin machine

- **-c  --config**  | use specified config  (**OPTIONAL**)


```
roo backup 

roo backup -c  [which roo.config.js]

```

**roo.config.js**
```
module.exports={
  local:{
    resourceDirectory:'<your local resource directory>'
  },
  origin:{
    host:'<your origin machine - ip>',
    username: '<your origin machine - username>',
    password: '<your origin machine - password>',
    backupDirectory:'<resource directory on your  origin machine>',
  }
}
```

### roo nginx
change config about nginx

- **-c  --config**  | use specified config  (**OPTIONAL**)

```
roo nginx 

roo nginx -c  [which roo.config.js]

```

**roo.config.js**
```
module.exports={
  local:{
    nginxConfigFilePath:'<where you generate nginx config >',
  },
  origin:{
    host:'<your origin machine - ip>',
    username: '<your origin machine - username>',
    password: '<your origin machine - password>',
    nginxConfigFilePath:'<nginx config used by your project on your origin machine >'
  },
  nginxConfig:{
    serverName:'<project name>',
    publicPath:'<nginx static directory>',
    port:'<nginx start  port >'
  }
}
```
### roo port

find ports in used

- **-c  --config**  | use specified config  (**OPTIONAL**)
- **-p  --port**    | check that is specified port in used (**OPTIONAL**)


```
roo port //show info about all port in used 
roo port -c [which roo.config.js]
roo port -p 8080 //show info about the specified port
```
**roo.config.js**
```
module.exports={
  origin:{
    host:'<your origin machine - ip>',
    username: '<your origin machine - username>',
    password: '<your origin machine - password>'
  },
}
```
### roo publish

publish web application
- **-c  --config**  | use specified config  (**OPTIONAL**)

```
roo publish
roo publish -c [which roo.config.js]

```
**roo.config.js**
```
module.exports={
  local:{
    resourceDirectory:'<local resource dsirectory>'
  },
  origin:{
    host:'<your origin machine - ip>',
    username: '<your origin machine - username>',
    password: '<your origin machine - password>'
    resourceDirectory:'<resource directory on your origin machine >',
    nginxConfigFilePath:'<nginx config used by your project on your origin machine >'    
  },
  nginxConfig:{
    port:'<nginx start  port >'
  }
}
```
## Warning

1. If you do not use **-c** or **--config**,you should create a file named **roo.config.js** in project root; 