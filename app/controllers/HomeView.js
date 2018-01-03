var args = $.args || {};
var CreateDataBase = require("CreateDataBase");
var backColor = "#"+new CreateDataBase().getProperty('background_color');
Ti.API.info('Color BAck '+backColor);
var canvasHome = Ti.UI.createView({
  width:Ti.UI.FILL,
  height:Ti.UI.FILL,
  backgroundColor:backColor,
  layout:"vertical"
});
var paramsToWidget = args.paramsToWidget;
canvasHome.add(Alloy.createController("HeaderUser",{}).getView());
/*Agregamos el Widget de Categorias al canvas*/
canvasHome.add(Alloy.createWidget(args.widgetToLoad,paramsToWidget).getView());

$.root.add(Alloy.createController("MenuLeft",{}).getView());
/*Agregamos el Header al canvas*/
$.root.add(canvasHome);
