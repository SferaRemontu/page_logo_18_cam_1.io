// Created with Motiva Layama v2.1 2101 https://www.motivacg.com/layama
// Rendered with Layama for Unreal

function getLayamaCameras()
{
   var layamaCameras = [];
   layamaCameras.push({n: "LayamaExterior20002", a: "CineCameraActor3", p: {x:-40.915, y:200, z:584.388}, l: {x:-39.915, y:200, z:584.388},f: [129.303,-0.000458236,1,-0.000249422],c: [1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]});
   layamaCameras.push({n: "LayamaExterior20009", a: "CineCameraActor4", p: {x:-575.055, y:200, z:584.388}, l: {x:-574.055, y:200, z:584.388}, f: [147.203,-0.0015703,0.999999,0.000269854], c: [1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]});
   layamaCameras.push({n: "LayamaExterior20016", a: "CineCameraActor6", p: {x:612.041, y:200, z:584.388}, l: {x:613.041, y:200, z:584.388}, f: [129.037,-0.00122109,0.99982,0.0189368], c: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});
   layamaCameras.push({n: "LayamaExterior20023", a: "CineCameraActor10", p: {x:838.492, y:200, z:25.8374}, l: {x:839.492, y:200, z:25.8374}, f: [144.35,-0.000158166,0.999997,-0.00223515], c: [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1]});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = [];
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getHideMuteControls()
{
   return true;
}

function getLayamaAudios()
{
   var layamaAudios = [];
   layamaAudios.push({n: "prezintation", p: {x:-40.915, y:200, z:-584.388}, f: "./audios/cloned_voice_22_2024-10-17_23-48-30.mp3", a: 2, v: 100, m: 100, s: 1, d: 0});
   return layamaAudios;
}

