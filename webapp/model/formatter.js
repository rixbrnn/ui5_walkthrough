sap.ui.define([], function () {
    "use strict";

    return {

        statusText: function (sStatus){
            const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus){
                case "A": return oResourceBundle.getText("statusA");
                case "B": return oResourceBundle.getText("statusB");
                case "C": return oResourceBundle.getText("statusC");
                default: return sStatus;
            }
        }
    }
});