const path=require('path');
const fs=require('fs');
const chalk=require('chalk');
module.exports={
  //读取配置文件
  readConfig:(program)=>{
    let configPath=path.resolve(process.cwd(),'roo.config.js');  
  
    if(program.config){
     configPath=path.isAbsolute(program.config)?program.config:path.resolve(process.cwd(),program.config);
    }
    if(!fs.existsSync(configPath)){
      console.log(chalk.red(`配置文件${configPath}不存在`));
      process.exit();
    }
    console.log(chalk.green(`已使用${configPath}作为配置文件`));
    return require(configPath); 
  },
  //检查配置文件完整性
  checkConfig:(config,callback)=>{
    const {origin,local}=config;
    const errorList=[];
    if(!(origin&&origin.host)){
      errorList.push('origin.host');
    }
    if(!(origin&&origin.username)){
      errorList.push('origin.username');
    }
    if(!(origin&&origin.password)){
      errorList.push('origin.password');
    }
    if(typeof callback === 'function'){
      callback(errorList);
    }
  }
}