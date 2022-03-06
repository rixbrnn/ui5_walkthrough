sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel, ResourceBundle){
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface */
                "id": "app",
            }
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

            // set i18n model
            const i18nModel = new ResourceBundle({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    })
})