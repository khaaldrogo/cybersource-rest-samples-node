
'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processSoloUK() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_7";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "recurring";

        var subMerchant = new CybersourceRestApi.V2paymentsAggregatorInformationSubMerchant();
        subMerchant.cardAcceptorId = "1234567890";
        subMerchant.country = "US";
        subMerchant.phoneNumber = "650-432-0000";
        subMerchant.address1 = "900 Metro Center";
        subMerchant.postalCode = "94404-2775";
        subMerchant.locality = "Foster City";
        subMerchant.name = "Visa Inc";
        subMerchant.administrativeArea = "CA";
        subMerchant.region = "PEN";
        subMerchant.email = "test@cybs.com";

        var aggregatorInformation = new CybersourceRestApi.V2paymentsAggregatorInformation();
        aggregatorInformation.subMerchant = subMerchant;
        aggregatorInformation.name = "V-Internatio";
        aggregatorInformation.aggregatorId = "123456789";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Deo";
        billTo.address2 = "Address 2";
        billTo.address1 = "201 S. Division St.";
        billTo.postalCode = "48104-2201";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.firstName = "John";
        billTo.phoneNumber = "999999999";
        billTo.district = "MI";
        billTo.buildingNumber = "123";
        billTo.company = "Visa";
        billTo.email = "test@cybs.com";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "106.00";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "6334580500000000";
        card.securityCode = "123";
        card.expirationMonth = "12";
        card.type = "024";
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.processingInformation = processingInformation;
        request.aggregatorInformation = aggregatorInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;

        instance.createPayment(request, function (error, data, response) {
            if (error) {
                console.log(error.stack);
            }
            else if (data) {
                console.log("Response Data : " + JSON.stringify(data));
            }
            console.log("Request Headers : " + JSON.stringify(response.req._headers));
            console.log("Response Status : " + JSON.stringify(response.status));
            console.log("v-c-correlation-id : " + JSON.stringify(response.header.v - c - correlation - id));
        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processSoloUK(function () {
        console.log('Method call complete.');
    });
}
module.exports.processSoloUK = processSoloUK;