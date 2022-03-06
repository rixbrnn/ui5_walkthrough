sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (UIComponent, JSONModel, Device){
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json",
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            const oData = {
                recipient: {
                    name: "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            const oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");
            
            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        getContentDensityClass : function () {
            if(!this._sContentDensityClass){
                if(!Device.support.touch){
                    this._sContentDensityClass="sapUiSizeCompact";
                }else{
                    this._sContentDensityClass="sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    })
})