const fs=require('node:fs');const path=require('node:path');
const folder=path.join(__dirname,'assets/optical-covers');const board=fs.readFileSync(path.join(folder,'optical-project-colors.png'));
const names=['amtek','dl-studio','dl-games','red-path','credo','global-digital','mens-club','kozikhinsky'];
names.forEach((id,i)=>{const x=-(i%4)*512,y=-Math.floor(i/4)*384;fs.writeFileSync(path.join(folder,id+'.svg'),`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="384" viewBox="0 0 512 384"><image x="${x}" y="${y}" width="2048" height="768" href="data:image/png;base64,${board.toString('base64')}"/></svg>`);});
console.log('Exported eight self-contained SVG wrappers for raster covers (512 × 384).');
