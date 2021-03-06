"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardConnectBolt = /** @class */ (function () {
    function CardConnectBolt(apiKey, subDomain, merchantID, port) {
        if (port === void 0) { port = 6443; }
        this.apiKey = apiKey;
        this.subDomain = subDomain;
        this.merchantID = merchantID;
        this.port = port;
    }
    CardConnectBolt.prototype.getBaseURL = function () {
        return "https://" + this.subDomain + ".cardpointe.com:" + this.port + "/api";
    };
    CardConnectBolt.prototype.generateAuthHeaders = function (cardConnectSessionKey) {
        return {
            "Authorization": this.apiKey,
            "X-CardConnect-SessionKey": cardConnectSessionKey ? cardConnectSessionKey : undefined
        };
    };
    CardConnectBolt.prototype.listTerminalsRequestBuilder = function (endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/listTerminals";
        var body = {
            merchantId: this.merchantID
        };
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.dateTimeRequestBuilder = function (params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/dateTime";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.panPadVersionRequestBuilder = function (params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/getPanPadVersion";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.pingRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/ping";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.preConnectRequestBuilder = function (params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/preconnect";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.connectRequestBuilder = function (params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/connect";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.disconnectRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/disconnect";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.displayRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/display";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.clearDisplayRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/clearDisplay";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.readConfirmationRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/readConfirmation";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.readInputRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/readInput";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.readSignatureRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/readSignature";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.cancelRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/cancel";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.readCardRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/readCard";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.readManualRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v2'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/readManual";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.authCardRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v3'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/authCard";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    CardConnectBolt.prototype.authManualRequestBuilder = function (cardConnectSessionKey, params, endPointVersion) {
        if (endPointVersion === void 0) { endPointVersion = 'v3'; }
        var url = this.getBaseURL() + "/" + endPointVersion + "/authManual";
        var body = __assign({ merchantId: this.merchantID }, params);
        return {
            url: url,
            method: 'POST',
            headers: this.generateAuthHeaders(cardConnectSessionKey),
            body: body,
            json: true,
            resolveWithFullResponse: true
        };
    };
    return CardConnectBolt;
}());
exports.CardConnectBolt = CardConnectBolt;
;
