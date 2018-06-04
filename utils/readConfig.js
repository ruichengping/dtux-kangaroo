const path=require('path');
module.exports=(program)=>{
  let configPath=path.resolve(process.cwd(),'roo.config.js');  

  if(program.config){
   configPath=path.isAbsolute(program.config)?program.config:path.resolve(process.cwd(),program.config);
  }
 
  return require(configPath);

}