// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.pt"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.pt"
            }, {
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__ogt_1p_data_v2",
                "priority": 14,
                "vtp_isAutoEnabled": true,
                "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
                "vtp_isEnabled": true,
                "vtp_autoEmailEnabled": true,
                "vtp_autoPhoneEnabled": false,
                "vtp_autoAddressEnabled": false,
                "vtp_isAutoCollectPiiEnabledFlag": false,
                "tag_id": 10
            }, {
                "function": "__ccd_ga_first",
                "priority": 13,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 25
            }, {
                "function": "__set_product_settings",
                "priority": 12,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "vtp_foreignTldMacroResult": ["macro", 5],
                "vtp_isChinaVipRegionMacroResult": ["macro", 6],
                "tag_id": 24
            }, {
                "function": "__ogt_google_signals",
                "priority": 11,
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "vtp_serverMacroResult": ["macro", 4],
                "tag_id": 23
            }, {
                "function": "__ccd_ga_regscope",
                "priority": 10,
                "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 22
            }, {
                "function": "__ccd_em_download",
                "priority": 9,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 21
            }, {
                "function": "__ccd_em_form",
                "priority": 8,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 20
            }, {
                "function": "__ccd_em_outbound_click",
                "priority": 7,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 19
            }, {
                "function": "__ccd_em_page_view",
                "priority": 6,
                "vtp_historyEvents": true,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 18
            }, {
                "function": "__ccd_em_scroll",
                "priority": 5,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 17
            }, {
                "function": "__ccd_em_site_search",
                "priority": 4,
                "vtp_searchQueryParams": "q,s,search,query,keyword",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 16
            }, {
                "function": "__ccd_em_video",
                "priority": 3,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 15
            }, {
                "function": "__ccd_conversion_marking",
                "priority": 2,
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 14
            }, {
                "function": "__ccd_auto_redact",
                "priority": 1,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 13
            }, {
                "function": "__gct",
                "vtp_trackingId": "G-NVVV9T5J9P",
                "vtp_sessionDuration": 0,
                "vtp_googleSignals": ["macro", 1],
                "vtp_foreignTld": ["macro", 2],
                "vtp_restrictDomain": ["macro", 3],
                "vtp_eventSettings": ["map"],
                "tag_id": 7
            }, {
                "function": "__ccd_ga_last",
                "priority": 0,
                "vtp_instanceDestinationId": "G-NVVV9T5J9P",
                "tag_id": 12
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 14]], [["if", 1], ["add", 0, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]]]
        },
        "runtime": [[50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]], [50, "__ccd_auto_redact", [46, "a"], [50, "v", [46, "bk"], [36, [2, [15, "bk"], "replace", [7, [15, "u"], "\\$1"]]]], [50, "w", [46, "bk"], [52, "bl", ["c", [15, "bk"]]], [52, "bm", [7]], [65, "bn", [2, [15, "bl"], "split", [7, ""]], [46, [53, [52, "bo", [7, ["v", [15, "bn"]]]], [52, "bp", ["d", [15, "bn"]]], [22, [12, [15, "bp"], [45]], [46, [36, ["d", ["v", [15, "bk"]]]]]], [22, [21, [15, "bp"], [15, "bn"]], [46, [2, [15, "bo"], "push", [7, [15, "bp"]]], [22, [21, [15, "bn"], [2, [15, "bn"], "toLowerCase", [7]]], [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toLowerCase", [7]]]]]], [46, [22, [21, [15, "bn"], [2, [15, "bn"], "toUpperCase", [7]]], [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toUpperCase", [7]]]]]]]]]]], [22, [18, [17, [15, "bo"], "length"], 1], [46, [2, [15, "bm"], "push", [7, [0, [0, "(?:", [2, [15, "bo"], "join", [7, "|"]]], ")"]]]], [46, [2, [15, "bm"], "push", [7, [16, [15, "bo"], 0]]]]]]]], [36, [2, [15, "bm"], "join", [7, ""]]]], [50, "x", [46, "bk", "bl", "bm"], [52, "bn", ["z", [15, "bk"], [15, "bm"]]], [22, [28, [15, "bn"]], [46, [36, [15, "bk"]]]], [22, [28, [17, [15, "bn"], "search"]], [46, [36, [15, "bk"]]]], [41, "bo"], [3, "bo", [17, [15, "bn"], "search"]], [65, "bp", [15, "bl"], [46, [53, [52, "bq", [7, ["v", [15, "bp"]], ["w", [15, "bp"]]]], [65, "br", [15, "bq"], [46, [53, [52, "bs", [30, [16, [15, "t"], [15, "br"]], [43, [15, "t"], [15, "br"], ["b", [0, [0, "([?&]", [15, "br"]], "=)([^&]*)"], "gi"]]]], [3, "bo", [2, [15, "bo"], "replace", [7, [15, "bs"], [0, "$1", [15, "r"]]]]]]]]]]], [22, [20, [15, "bo"], [17, [15, "bn"], "search"]], [46, [36, [15, "bk"]]]], [22, [20, [16, [15, "bo"], 0], "&"], [46, [3, "bo", [2, [15, "bo"], "substring", [7, 1]]]]], [22, [21, [16, [15, "bo"], 0], "?"], [46, [3, "bo", [0, "?", [15, "bo"]]]]], [22, [20, [15, "bo"], "?"], [46, [3, "bo", ""]]], [43, [15, "bn"], "search", [15, "bo"]], [36, ["ba", [15, "bn"], [15, "bm"]]]], [50, "z", [46, "bk", "bl"], [22, [20, [15, "bl"], [17, [15, "s"], "PATH"]], [46, [3, "bk", [0, [15, "y"], [15, "bk"]]]]], [36, ["g", [15, "bk"]]]], [50, "ba", [46, "bk", "bl"], [41, "bm"], [3, "bm", ""], [22, [20, [15, "bl"], [17, [15, "s"], "URL"]], [46, [53, [41, "bn"], [3, "bn", ""], [22, [30, [17, [15, "bk"], "username"], [17, [15, "bk"], "password"]], [46, [3, "bn", [0, [15, "bn"], [0, [0, [0, [17, [15, "bk"], "username"], [39, [17, [15, "bk"], "password"], ":", ""]], [17, [15, "bk"], "password"]], "@"]]]]], [3, "bm", [0, [0, [0, [17, [15, "bk"], "protocol"], "//"], [15, "bn"]], [17, [15, "bk"], "host"]]]]]], [36, [0, [0, [0, [15, "bm"], [17, [15, "bk"], "pathname"]], [17, [15, "bk"], "search"]], [17, [15, "bk"], "hash"]]]], [50, "bb", [46, "bk", "bl"], [41, "bm"], [3, "bm", [2, [15, "bk"], "replace", [7, [15, "n"], [15, "r"]]]], [22, [30, [20, [15, "bl"], [17, [15, "s"], "URL"]], [20, [15, "bl"], [17, [15, "s"], "PATH"]]], [46, [53, [52, "bn", ["z", [15, "bm"], [15, "bl"]]], [22, [20, [15, "bn"], [44]], [46, [36, [15, "bm"]]]], [52, "bo", [17, [15, "bn"], "search"]], [52, "bp", [2, [15, "bo"], "replace", [7, [15, "o"], [15, "r"]]]], [22, [20, [15, "bo"], [15, "bp"]], [46, [36, [15, "bm"]]]], [43, [15, "bn"], "search", [15, "bp"]], [3, "bm", ["ba", [15, "bn"], [15, "bl"]]]]]], [36, [15, "bm"]]], [50, "bc", [46, "bk"], [22, [20, [15, "bk"], [15, "q"]], [46, [36, [17, [15, "s"], "PATH"]]], [46, [22, [21, [2, [15, "p"], "indexOf", [7, [15, "bk"]]], [27, 1]], [46, [36, [17, [15, "s"], "URL"]]], [46, [36, [17, [15, "s"], "TEXT"]]]]]]], [50, "bd", [46, "bk", "bl"], [41, "bm"], [3, "bm", false], [52, "bn", ["f", [15, "bk"]]], [38, [15, "bn"], [46, "string", "array", "object"], [46, [5, [46, [52, "bo", ["bb", [15, "bk"], [15, "bl"]]], [22, [21, [15, "bk"], [15, "bo"]], [46, [36, [15, "bo"]]]], [4]]], [5, [46, [53, [41, "bp"], [3, "bp", 0], [63, [7, "bp"], [23, [15, "bp"], [17, [15, "bk"], "length"]], [33, [15, "bp"], [3, "bp", [0, [15, "bp"], 1]]], [46, [53, [52, "bq", ["bd", [16, [15, "bk"], [15, "bp"]], [17, [15, "s"], "TEXT"]]], [22, [21, [15, "bq"], [44]], [46, [43, [15, "bk"], [15, "bp"], [15, "bq"]], [3, "bm", true]]]]]]], [4]]], [5, [46, [54, "bp", [15, "bk"], [46, [53, [52, "bq", ["bd", [16, [15, "bk"], [15, "bp"]], [17, [15, "s"], "TEXT"]]], [22, [21, [15, "bq"], [44]], [46, [43, [15, "bk"], [15, "bp"], [15, "bq"]], [3, "bm", true]]]]]], [4]]]]], [36, [39, [15, "bm"], [15, "bk"], [44]]]], [50, "bj", [46, "bk", "bl"], [52, "bm", [30, [2, [15, "bk"], "getMetadata", [7, [15, "bi"]]], [7]]], [22, [20, [2, [15, "bm"], "indexOf", [7, [15, "bl"]]], [27, 1]], [46, [2, [15, "bm"], "push", [7, [15, "bl"]]]]], [2, [15, "bk"], "setMetadata", [7, [15, "bi"], [15, "bm"]]]], [52, "b", ["require", "internal.createRegex"]], [52, "c", ["require", "decodeUriComponent"]], [52, "d", ["require", "encodeUriComponent"]], [52, "e", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "f", ["require", "getType"]], [52, "g", ["require", "parseUrl"]], [52, "h", ["require", "internal.registerCcdCallback"]], [52, "i", [17, [15, "a"], "instanceDestinationId"]], [52, "j", [17, [15, "a"], "redactEmail"]], [52, "k", [17, [15, "a"], "redactQueryParams"]], [52, "l", [39, [15, "k"], [2, [15, "k"], "split", [7, ","]], [7]]], [52, "m", "is_sgtm_prehit"], [22, [1, [28, [17, [15, "l"], "length"]], [28, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]], [52, "o", ["b", [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"], "gi"]], [52, "p", [7, "page_location", "page_referrer", "page_path", "link_url", "video_url", "form_destination"]], [52, "q", "page_path"], [52, "r", "(redacted)"], [52, "s", [8, "TEXT", 0, "URL", 1, "PATH", 2]], [52, "t", [8]], [52, "u", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]], [52, "y", "http://."], [52, "be", 15], [52, "bf", 16], [52, "bg", 23], [52, "bh", 24], [52, "bi", "event_usage"], ["h", [15, "i"], [51, "", [7, "bk"], [22, [15, "j"], [46, [53, [52, "bl", [2, [15, "bk"], "getHitKeys", [7]]], [65, "bm", [15, "bl"], [46, [53, [22, [20, [15, "bm"], "_sst_parameters"], [46, [6]]], [52, "bn", [2, [15, "bk"], "getHitData", [7, [15, "bm"]]]], [22, [28, [15, "bn"]], [46, [6]]], [52, "bo", ["bc", [15, "bm"]]], [52, "bp", ["bd", [15, "bn"], [15, "bo"]]], [22, [21, [15, "bp"], [44]], [46, [2, [15, "bk"], "setHitData", [7, [15, "bm"], [15, "bp"]]], ["bj", [15, "bk"], [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]], [15, "bg"], [15, "be"]]]]]]]]]]], [22, [17, [15, "l"], "length"], [46, [65, "bl", [15, "p"], [46, [53, [52, "bm", [2, [15, "bk"], "getHitData", [7, [15, "bl"]]]], [22, [28, [15, "bm"]], [46, [6]]], [52, "bn", [39, [20, [15, "bl"], [15, "q"]], [17, [15, "s"], "PATH"], [17, [15, "s"], "URL"]]], [52, "bo", ["x", [15, "bm"], [15, "l"], [15, "bn"]]], [22, [21, [15, "bo"], [15, "bm"]], [46, [2, [15, "bk"], "setHitData", [7, [15, "bl"], [15, "bo"]]], ["bj", [15, "bk"], [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]], [15, "bh"], [15, "bf"]]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "is_conversion"], [52, "f", "is_first_visit"], [52, "g", "is_first_visit_conversion"], [52, "h", "is_session_start"], [52, "i", "is_session_start_conversion"], [52, "j", "first_visit"], [52, "k", "session_start"], [41, "l"], [41, "m"], ["d", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "n"], [52, "o", [8, "preHit", [15, "n"]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "o"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]], [46, [22, [28, [15, "m"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "k"]]], [3, "m", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "m"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_em_download", [46, "a"], [50, "r", [46, "x"], [36, [1, [15, "x"], [21, [2, [2, [15, "x"], "toLowerCase", [7]], "match", [7, [15, "q"]]], [45]]]]], [50, "s", [46, "x"], [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]], [52, "z", [39, [18, [17, [15, "y"], "length"], 1], [16, [15, "y"], [37, [17, [15, "y"], "length"], 1]], ""]], [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]]], [50, "t", [46, "x"], [36, [39, [12, [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]], "/"], [17, [15, "x"], "pathname"], [0, "/", [17, [15, "x"], "pathname"]]]]], [50, "u", [46, "x"], [41, "y"], [3, "y", ""], [22, [1, [15, "x"], [17, [15, "x"], "href"]], [46, [53, [41, "z"], [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]], [3, "y", [39, [23, [15, "z"], 0], [17, [15, "x"], "href"], [2, [17, [15, "x"], "href"], "substring", [7, 0, [15, "z"]]]]]]]], [36, [15, "y"]]], [50, "w", [46, "x"], [52, "y", [8]], [43, [15, "y"], [15, "j"], true], [43, [15, "y"], [15, "f"], true], [43, [15, "x"], "eventMetadata", [15, "y"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmDownloadActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_downloads"], [52, "h", "file_download"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerDownloadActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "parseUrl"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", [0, "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]], [52, "v", ["m", [8, "checkValidation", true]]], [22, [28, [15, "v"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "x", "y"], ["y"], [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "z"], "deferrable", true]]], [52, "ba", [16, [15, "x"], "gtm.elementUrl"]], [52, "bb", ["o", [15, "ba"]]], [22, [28, [15, "bb"]], [46, [36]]], [52, "bc", ["s", [15, "bb"]]], [22, [28, ["r", [15, "bc"]]], [46, [36]]], [52, "bd", [8, "link_id", [16, [15, "x"], "gtm.elementId"], "link_url", ["u", [15, "bb"]], "link_text", [16, [15, "x"], "gtm.elementText"], "file_name", ["t", [15, "bb"]], "file_extension", [15, "bc"]]], ["w", [15, "z"]], ["p", ["n"], [15, "h"], [15, "bd"], [15, "z"]]], [15, "v"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_form", [46, "a"], [50, "t", [46, "ba"], [52, "bb", [30, [16, [15, "ba"], [15, "l"]], [8]]], [43, [15, "bb"], "event_usage", [7, 8]], [43, [15, "ba"], [15, "l"], [15, "bb"]]], [50, "u", [46, "ba", "bb"], [52, "bc", [30, [16, [15, "ba"], [15, "l"]], [8]]], [43, [15, "bc"], [15, "k"], true], [43, [15, "bc"], [15, "f"], true], [22, [1, [15, "o"], [16, [15, "bb"], "gtm.formCanceled"]], [46, [43, [15, "bc"], [15, "m"], true]]], [43, [15, "ba"], [15, "l"], [15, "bc"]]], [50, "v", [46, "ba", "bb", "bc"], [52, "bd", [2, ["r"], "filter", [7, [51, "", [7, "bf"], [36, [20, [2, [15, "bf"], "indexOf", [7, "AW-"]], 0]]]]]], [22, [18, [17, [15, "bd"], "length"], 0], [46, ["s", [15, "bd"], [15, "ba"], [15, "bb"], [15, "bc"]]]], [52, "be", [2, ["r"], "filter", [7, [51, "", [7, "bf"], [36, [21, [2, [15, "bf"], "indexOf", [7, "AW-"]], 0]]]]]], [22, [18, [17, [15, "be"], "length"], 0], [46, [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["s", [15, "be"], [15, "ba"], [15, "bb"], [15, "bc"]]]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmFormActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_form"], [52, "h", "form_submit"], [52, "i", "form_start"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", "eventMetadata"], [52, "m", "form_event_canceled"], [52, "n", [17, [15, "a"], "instanceDestinationId"]], [52, "o", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [22, ["c", [15, "n"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerFormActivityCallback", [7, [17, [15, "a"], "instanceDestinationId"], [17, [15, "a"], "skipValidation"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "j"], true]], [52, "p", ["require", "internal.addFormInteractionListener"]], [52, "q", ["require", "internal.addFormSubmitListener"]], [52, "r", ["require", "internal.getDestinationIds"]], [52, "s", ["require", "internal.sendGtagEvent"]], [52, "w", [8]], [52, "x", [51, "", [7, "ba", "bb"], [22, [15, "bb"], [46, ["bb"]]], [52, "bc", [16, [15, "ba"], "gtm.elementId"]], [22, [16, [15, "w"], [15, "bc"]], [46, [36]]], [43, [15, "w"], [15, "bc"], true], [52, "bd", [8, "form_id", [15, "bc"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "ba"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "ba"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "ba"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "ba"], "gtm.interactedFormFieldPosition"]]], [52, "be", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], ["t", [15, "be"]], ["u", [15, "be"], [15, "ba"]], ["v", [15, "i"], [15, "bd"], [15, "be"]]]], [52, "y", [16, [15, "b"], "useEnableAutoEventOnFormApis"]], [52, "z", [51, "", [7, "ba", "bb"], ["x", [15, "ba"], [44]], [52, "bc", [8, "form_id", [16, [15, "ba"], "gtm.elementId"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "form_submit_text", [39, [15, "y"], [16, [15, "ba"], "gtm.formSubmitElementText"], [16, [15, "ba"], "gtm.formSubmitButtonText"]]]], [43, [15, "bc"], "event_callback", [15, "bb"]], [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]], ["t", [15, "bd"]], ["u", [15, "bd"], [15, "ba"]], ["v", [15, "h"], [15, "bc"], [15, "bd"]]]], [22, [15, "y"], [46, [53, [52, "ba", ["require", "internal.addDataLayerEventListener"]], [52, "bb", ["require", "internal.enableAutoEventOnFormSubmit"]], [52, "bc", ["require", "internal.enableAutoEventOnFormInteraction"]], [52, "bd", ["bc"]], [22, [28, [15, "bd"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["ba", "gtm.formInteract", [15, "x"], [15, "bd"]], [52, "be", ["bb", [8, "checkValidation", [28, [15, "o"]], "waitForTags", false]]], [22, [28, [15, "be"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["ba", "gtm.formSubmit", [15, "z"], [15, "be"]]]], [46, ["p", [15, "x"]], ["q", [15, "z"], [8, "waitForCallbacks", false, "checkValidation", [28, [15, "o"]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "s", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", ""], [22, [1, [15, "y"], [17, [15, "y"], "href"]], [46, [53, [41, "ba"], [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]], [3, "z", [39, [23, [15, "ba"], 0], [17, [15, "y"], "href"], [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]]]]]], [36, [15, "z"]]], [50, "t", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", [17, [15, "y"], "hostname"]], [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "ba"], [16, [15, "ba"], 0]], [46, [3, "z", [2, [15, "z"], "substring", [7, [17, [16, [15, "ba"], 0], "length"]]]]]], [36, [15, "z"]]], [50, "u", [46, "y"], [22, [28, [15, "y"]], [46, [36, false]]], [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]], [41, "ba"], [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]], [41, "bb"], [3, "bb", [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]]], [22, [1, [18, [15, "bb"], 0], [29, [2, [15, "ba"], "charAt", [7, 0]], "."]], [46, [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]], [3, "ba", [0, ".", [15, "ba"]]]]], [22, [1, [19, [15, "bb"], 0], [12, [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]], [15, "bb"]]], [46, [36, false]]], [36, true]], [50, "x", [46, "y"], [52, "z", [8]], [43, [15, "z"], [15, "j"], true], [43, [15, "z"], [15, "f"], true], [43, [15, "y"], "eventMetadata", [15, "z"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmOutboundClickActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_outbound_click"], [52, "h", "click"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerOutbackClickActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.getRemoteConfigParameter"]], [52, "p", ["require", "getUrl"]], [52, "q", ["require", "parseUrl"]], [52, "r", ["require", "internal.sendGtagEvent"]], [52, "v", ["o", [15, "k"], "cross_domain_conditions"]], [52, "w", ["m", [8, "affiliateDomains", [15, "v"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "y", "z"], [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]], [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]], [52, "bb", [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_classes", [16, [15, "y"], "gtm.elementClasses"], "link_url", ["s", [15, "ba"]], "link_domain", ["t", [15, "ba"]], "outbound", true]], [43, [15, "bb"], "event_callback", [15, "z"]], [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["x", [15, "bc"]], ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]]], [15, "w"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_page_view", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "k"], true], [43, [15, "u"], [15, "g"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [22, [28, [17, [15, "a"], "historyEvents"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", ["require", "templateStorage"]], [52, "f", [15, "__module_ccdEmPageViewActivity"]], [52, "g", "speculative"], [52, "h", "ae_block_history"], [52, "i", "page_view"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "l"], [15, "h"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "f"], "registerPageViewActivityCallback", [7, [15, "l"]]], [22, [2, [15, "e"], "getItem", [7, [15, "j"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnHistoryChange"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", [8, "interval", 1000, "useV2EventName", true]], [52, "r", ["n", [15, "q"]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "j"], true]], ["m", "gtm.historyChange-v2", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.oldUrl"]], [22, [20, [16, [15, "t"], "gtm.newUrl"], [15, "v"]], [46, [36]]], [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]], [22, [1, [1, [21, [15, "w"], "pushState"], [21, [15, "w"], "popstate"]], [21, [15, "w"], "replaceState"]], [46, [36]]], [52, "x", [8]], [22, [17, [15, "a"], "includeParams"], [46, [43, [15, "x"], "page_location", [16, [15, "t"], "gtm.newUrl"]], [43, [15, "x"], "page_referrer", [15, "v"]]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "y"], "deferrable", true]]], ["s", [15, "y"]], ["p", ["o"], [15, "i"], [15, "x"], [15, "y"]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [50, "q", [46, "r"], [52, "s", [8]], [43, [15, "s"], [15, "j"], true], [43, [15, "s"], [15, "f"], true], [43, [15, "r"], "eventMetadata", [15, "s"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmScrollActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_scroll"], [52, "h", "scroll"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerScrollActivityCallback", [7, [15, "k"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnScroll"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.sendGtagEvent"]], [52, "p", ["m", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "i"], true]], ["l", "gtm.scrollDepth", [51, "", [7, "r", "s"], ["s"], [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "t"], "deferrable", true]]], [52, "u", [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]]], ["q", [15, "t"]], ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]]], [15, "p"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", [15, "__module_ccdEmSiteSearchActivity"]], [52, "f", [2, [15, "e"], "getSearchTerm", [7, [17, [15, "a"], "searchQueryParams"], [15, "b"]]]], [52, "g", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "h", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"], "eventMetadata", [8, "em_event", true]]], [22, [15, "f"], [46, [53, [52, "i", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [2, [15, "e"], "buildEventParams", [7, [15, "f"], [17, [15, "a"], "additionalQueryParams"], [15, "b"]]], [8]]], ["c", [15, "g"], "view_search_results", [15, "i"], [15, "h"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_video", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "l"], true], [43, [15, "u"], [15, "f"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "templateStorage"]], [52, "e", [15, "__module_ccdEmVideoActivity"]], [52, "f", "speculative"], [52, "g", "ae_block_video"], [52, "h", "video_start"], [52, "i", "video_progress"], [52, "j", "video_complete"], [52, "k", "isRegistered"], [52, "l", "em_event"], [52, "m", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "m"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [2, [15, "e"], "registerVideoActivityCallback", [7, [15, "m"], [17, [15, "a"], "includeParams"]]], [22, [2, [15, "d"], "getItem", [7, [15, "k"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["require", "internal.addDataLayerEventListener"]], [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]], [52, "p", ["require", "internal.getDestinationIds"]], [52, "q", ["require", "internal.sendGtagEvent"]], [52, "r", ["o", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "d"], "setItem", [7, [15, "k"], true]], ["n", "gtm.video", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.videoStatus"]], [41, "w"], [22, [20, [15, "v"], "start"], [46, [3, "w", [15, "h"]]], [46, [22, [20, [15, "v"], "progress"], [46, [3, "w", [15, "i"]]], [46, [22, [20, [15, "v"], "complete"], [46, [3, "w", [15, "j"]]], [46, [36]]]]]]], [52, "x", [8, "video_current_time", [16, [15, "t"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "t"], "gtm.videoDuration"], "video_percent", [16, [15, "t"], "gtm.videoPercent"], "video_provider", [16, [15, "t"], "gtm.videoProvider"], "video_title", [16, [15, "t"], "gtm.videoTitle"], "video_url", [16, [15, "t"], "gtm.videoUrl"], "visible", [16, [15, "t"], "gtm.videoVisible"]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "y"], "deferrable", true]]], ["s", [15, "y"]], ["q", ["p"], [15, "w"], [15, "x"], [15, "y"]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [52, "c", [2, [15, "b"], "extractRedactedLocations", [7, [15, "a"]]]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"], [15, "c"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__e", [46, "a"], [36, [13, [41, "$0"], [3, "$0", ["require", "internal.getEventData"]], ["$0", "event"]]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [39, [17, [15, "d"], "ignoreServerMacroInGoogleSignal"], [20, [17, [15, "a"], "googleSignals"], "ENABLED"], [20, [17, [15, "a"], "serverMacroResult"], 1]]], ["b", [15, "e"], "google_ng", [39, [17, [15, "d"], "ignoreServerMacroInGoogleSignal"], [20, [17, [15, "a"], "googleSignals"], "NON_GAIA_REMARKETING"], [20, [17, [15, "a"], "serverMacroResult"], 2]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_activities", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "c", "d"], [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]]], [36, [8, "withRequestContext", [15, "b"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmDownloadActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_text", [44]]], [2, [15, "k"], "setHitData", [7, "file_name", [44]]], [2, [15, "k"], "setHitData", [7, "file_extension", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_downloads"], [52, "f", "file_download"], [52, "g", "em_event"], [36, [8, "registerDownloadActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmFormActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "l", [46, "m", "n", "o"], [22, [1, [15, "k"], [20, [15, "n"], [44]]], [46, [3, "n", [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0]]]], ["d", [15, "m"], [51, "", [7, "p"], [52, "q", [2, [15, "p"], "getEventName", [7]]], [52, "r", [30, [20, [15, "q"], [15, "h"]], [20, [15, "q"], [15, "g"]]]], [22, [30, [28, [15, "r"]], [28, [2, [15, "p"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["c", [15, "m"], [15, "f"]], [46, [2, [15, "p"], "abort", [7]], [36]]], [22, [15, "k"], [46, [22, [1, [28, [15, "n"]], [2, [15, "p"], "getMetadata", [7, [15, "j"]]]], [46, [2, [15, "p"], "abort", [7]], [36]]]]], [2, [15, "p"], "setMetadata", [7, [15, "e"], false]], [22, [28, [15, "o"]], [46, [2, [15, "p"], "setHitData", [7, "form_id", [44]]], [2, [15, "p"], "setHitData", [7, "form_name", [44]]], [2, [15, "p"], "setHitData", [7, "form_destination", [44]]], [2, [15, "p"], "setHitData", [7, "form_length", [44]]], [22, [20, [15, "q"], [15, "g"]], [46, [2, [15, "p"], "setHitData", [7, "form_submit_text", [44]]]], [46, [22, [20, [15, "q"], [15, "h"]], [46, [2, [15, "p"], "setHitData", [7, "first_field_id", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_name", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_type", [44]]], [2, [15, "p"], "setHitData", [7, "first_field_position", [44]]]]]]]]]]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "speculative"], [52, "f", "ae_block_form"], [52, "g", "form_submit"], [52, "h", "form_start"], [52, "i", "em_event"], [52, "j", "form_event_canceled"], [52, "k", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]], [36, [8, "registerFormActivityCallback", [15, "l"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmOutboundClickActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "link_id", [44]]], [2, [15, "k"], "setHitData", [7, "link_classes", [44]]], [2, [15, "k"], "setHitData", [7, "link_url", [44]]], [2, [15, "k"], "setHitData", [7, "link_domain", [44]]], [2, [15, "k"], "setHitData", [7, "outbound", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_outbound_click"], [52, "f", "click"], [52, "g", "em_event"], [36, [8, "registerOutbackClickActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmPageViewActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "k"], ["c", [15, "k"], [51, "", [7, "l"], [22, [30, [21, [2, [15, "l"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "l"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["b", [15, "k"], [15, "g"]], [46, [2, [15, "l"], "abort", [7]], [36]]], [22, [28, [2, [15, "l"], "getMetadata", [7, [15, "f"]]]], [46, ["d", [15, "k"], "page_referrer", [2, [15, "l"], "getHitData", [7, "page_referrer"]]]]], [2, [15, "l"], "setMetadata", [7, [15, "e"], false]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", "speculative"], [52, "f", "is_sgtm_prehit"], [52, "g", "ae_block_history"], [52, "h", "page_view"], [52, "i", "em_event"], [36, [8, "registerPageViewActivityCallback", [15, "j"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmSiteSearchActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "d", "e"], [52, "f", [2, [30, [15, "d"], ""], "split", [7, ","]]], [53, [41, "g"], [3, "g", 0], [63, [7, "g"], [23, [15, "g"], [17, [15, "f"], "length"]], [33, [15, "g"], [3, "g", [0, [15, "g"], 1]]], [46, [53, [52, "h", ["e", [2, [16, [15, "f"], [15, "g"]], "trim", [7]]]], [22, [21, [15, "h"], [44]], [46, [36, [15, "h"]]]]]]]]], [50, "c", [46, "d", "e", "f"], [52, "g", [8, "search_term", [15, "d"]]], [52, "h", [2, [30, [15, "e"], ""], "split", [7, ","]]], [53, [41, "i"], [3, "i", 0], [63, [7, "i"], [23, [15, "i"], [17, [15, "h"], "length"]], [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]], [46, [53, [52, "j", [2, [16, [15, "h"], [15, "i"]], "trim", [7]]], [52, "k", ["f", [15, "j"]]], [22, [21, [15, "k"], [44]], [46, [43, [15, "g"], [0, "q_", [15, "j"]], [15, "k"]]]]]]]], [36, [15, "g"]]], [36, [8, "getSearchTerm", [15, "b"], "buildEventParams", [15, "c"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmScrollActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "i", "j"], ["c", [15, "i"], [51, "", [7, "k"], [22, [30, [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]], [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]]], [46, [36]]], [22, ["b", [15, "i"], [15, "e"]], [46, [2, [15, "k"], "abort", [7]], [36]]], [2, [15, "k"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "j"]], [46, [2, [15, "k"], "setHitData", [7, "percent_scrolled", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_scroll"], [52, "f", "scroll"], [52, "g", "em_event"], [36, [8, "registerScrollActivityCallback", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdEmVideoActivity", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "k", "l"], ["c", [15, "k"], [51, "", [7, "m"], [52, "n", [2, [15, "m"], "getEventName", [7]]], [52, "o", [30, [30, [20, [15, "n"], [15, "f"]], [20, [15, "n"], [15, "g"]]], [20, [15, "n"], [15, "h"]]]], [22, [30, [28, [15, "o"]], [28, [2, [15, "m"], "getMetadata", [7, [15, "i"]]]]], [46, [36]]], [22, ["b", [15, "k"], [15, "e"]], [46, [2, [15, "m"], "abort", [7]], [36]]], [2, [15, "m"], "setMetadata", [7, [15, "d"], false]], [22, [28, [15, "l"]], [46, [2, [15, "m"], "setHitData", [7, "video_current_time", [44]]], [2, [15, "m"], "setHitData", [7, "video_duration", [44]]], [2, [15, "m"], "setHitData", [7, "video_percent", [44]]], [2, [15, "m"], "setHitData", [7, "video_provider", [44]]], [2, [15, "m"], "setHitData", [7, "video_title", [44]]], [2, [15, "m"], "setHitData", [7, "video_url", [44]]], [2, [15, "m"], "setHitData", [7, "visible", [44]]]]]]]], [52, "b", ["require", "internal.getProductSettingsParameter"]], [52, "c", ["require", "internal.registerCcdCallback"]], [52, "d", "speculative"], [52, "e", "ae_block_video"], [52, "f", "video_start"], [52, "g", "video_progress"], [52, "h", "video_complete"], [52, "i", "em_event"], [36, [8, "registerVideoActivityCallback", [15, "j"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "n", [46, "q", "r", "s"], [50, "x", [46, "z"], [52, "ba", [16, [15, "m"], [15, "z"]]], [22, [28, [15, "ba"]], [46, [36]]], [53, [41, "bb"], [3, "bb", 0], [63, [7, "bb"], [23, [15, "bb"], [17, [15, "ba"], "length"]], [33, [15, "bb"], [3, "bb", [0, [15, "bb"], 1]]], [46, [53, [52, "bc", [16, [15, "ba"], [15, "bb"]]], ["u", [15, "t"], [17, [15, "bc"], "name"], [17, [15, "bc"], "value"]]]]]]], [50, "y", [46, "z"], [22, [30, [28, [15, "v"]], [21, [17, [15, "v"], "length"], 2]], [46, [36, false]]], [41, "ba"], [3, "ba", [16, [15, "z"], [15, "w"]]], [22, [20, [15, "ba"], [44]], [46, [3, "ba", [16, [15, "z"], [15, "v"]]]]], [36, [28, [28, [15, "ba"]]]]], [22, [28, [15, "r"]], [46, [36]]], [52, "t", [30, [17, [15, "q"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "u", ["i", [15, "g"], [15, "s"]]], [52, "v", [13, [41, "$0"], [3, "$0", ["i", [15, "e"], [15, "s"]]], ["$0"]]], [52, "w", [13, [41, "$0"], [3, "$0", ["i", [15, "f"], [15, "s"]]], ["$0"]]], [53, [41, "z"], [3, "z", 0], [63, [7, "z"], [23, [15, "z"], [17, [15, "r"], "length"]], [33, [15, "z"], [3, "z", [0, [15, "z"], 1]]], [46, [53, [52, "ba", [16, [15, "r"], [15, "z"]]], [22, [30, [17, [15, "ba"], "disallowAllRegions"], ["y", [17, [15, "ba"], "disallowedRegions"]]], [46, ["x", [17, [15, "ba"], "redactFieldGroup"]]]]]]]]], [50, "o", [46, "q"], [52, "r", [8]], [22, [28, [15, "q"]], [46, [36, [15, "r"]]]], [52, "s", [2, [15, "q"], "split", [7, ","]]], [53, [41, "t"], [3, "t", 0], [63, [7, "t"], [23, [15, "t"], [17, [15, "s"], "length"]], [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]], [46, [53, [52, "u", [2, [16, [15, "s"], [15, "t"]], "trim", [7]]], [22, [28, [15, "u"]], [46, [6]]], [52, "v", [2, [15, "u"], "split", [7, "-"]]], [52, "w", [16, [15, "v"], 0]], [52, "x", [39, [20, [17, [15, "v"], "length"], 2], [15, "u"], [44]]], [22, [30, [28, [15, "w"]], [21, [17, [15, "w"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "x"], [44]], [30, [23, [17, [15, "x"], "length"], 4], [18, [17, [15, "x"], "length"], 6]]], [46, [6]]], [43, [15, "r"], [15, "u"], true]]]]], [36, [15, "r"]]], [50, "p", [46, "q"], [22, [28, [17, [15, "q"], "settingsTable"]], [46, [36, [7]]]], [52, "r", [8]], [53, [41, "s"], [3, "s", 0], [63, [7, "s"], [23, [15, "s"], [17, [17, [15, "q"], "settingsTable"], "length"]], [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]], [46, [53, [52, "t", [16, [17, [15, "q"], "settingsTable"], [15, "s"]]], [52, "u", [17, [15, "t"], "redactFieldGroup"]], [22, [28, [16, [15, "m"], [15, "u"]]], [46, [6]]], [43, [15, "r"], [15, "u"], [8, "redactFieldGroup", [15, "u"], "disallowAllRegions", false, "disallowedRegions", [8]]], [52, "v", [16, [15, "r"], [15, "u"]]], [22, [17, [15, "t"], "disallowAllRegions"], [46, [43, [15, "v"], "disallowAllRegions", true], [6]]], [43, [15, "v"], "disallowedRegions", ["o", [17, [15, "t"], "disallowedRegions"]]]]]]], [36, [2, [15, "b"], "values", [7, [15, "r"]]]]], [52, "b", ["require", "Object"]], [52, "c", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getCountryCode"]], [52, "f", ["require", "internal.getRegionCode"]], [52, "g", ["require", "internal.setRemoteConfigParameter"]], [52, "h", [15, "__module_activities"]], [52, "i", [17, [15, "h"], "withRequestContext"]], [41, "j"], [41, "k"], [41, "l"], [52, "m", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "n"], "extractRedactedLocations", [15, "p"]]]], [36, ["a"]]]], ["$0"]]]
        ],
        "entities": {
            "__c": {
                "2": true,
                "4": true
            },
            "__ccd_auto_redact": {
                "2": true,
                "4": true
            },
            "__ccd_conversion_marking": {
                "2": true,
                "4": true
            },
            "__ccd_em_download": {
                "2": true,
                "4": true
            },
            "__ccd_em_form": {
                "2": true,
                "4": true
            },
            "__ccd_em_outbound_click": {
                "2": true,
                "4": true
            },
            "__ccd_em_page_view": {
                "2": true,
                "4": true
            },
            "__ccd_em_scroll": {
                "2": true,
                "4": true
            },
            "__ccd_em_site_search": {
                "2": true,
                "4": true
            },
            "__ccd_em_video": {
                "2": true,
                "4": true
            },
            "__ccd_ga_first": {
                "2": true,
                "4": true
            },
            "__ccd_ga_last": {
                "2": true,
                "4": true
            },
            "__ccd_ga_regscope": {
                "2": true,
                "4": true
            },
            "__e": {
                "2": true,
                "4": true
            },
            "__ogt_1p_data_v2": {
                "2": true
            },
            "__ogt_google_signals": {
                "2": true,
                "4": true
            },
            "__set_product_settings": {
                "2": true,
                "4": true
            }

        },
        "blob": {
            "1": "1"
        },
        "permissions": {
            "__c": {},
            "__ccd_auto_redact": {},
            "__ccd_conversion_marking": {},
            "__ccd_em_download": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "access_template_storage": {},
                "detect_link_click_events": {
                    "allowWaitForTags": ""
                }
            },
            "__ccd_em_form": {
                "access_template_storage": {},
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.formInteract", "gtm.formSubmit"]
                },
                "detect_form_submit_events": {
                    "allowWaitForTags": ""
                },
                "detect_form_interaction_events": {}
            },
            "__ccd_em_outbound_click": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "access_template_storage": {},
                "detect_link_click_events": {
                    "allowWaitForTags": ""
                }
            },
            "__ccd_em_page_view": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.historyChange-v2"]
                },
                "access_template_storage": {},
                "detect_history_change_events": {}
            },
            "__ccd_em_scroll": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.scrollDepth"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "resize"
                    }, {
                        "targetType": "window",
                        "eventName": "scroll"
                    }, {
                        "targetType": "window",
                        "eventName": "scrollend"
                    }]
                },
                "access_template_storage": {},
                "detect_scroll_events": {}
            },
            "__ccd_em_site_search": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "read_container_data": {}
            },
            "__ccd_em_video": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.video"]
                },
                "access_template_storage": {},
                "detect_youtube_activity_events": {
                    "allowFixMissingJavaScriptApi": false
                }
            },
            "__ccd_ga_first": {},
            "__ccd_ga_last": {},
            "__ccd_ga_regscope": {
                "read_container_data": {}
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__ogt_1p_data_v2": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__set_product_settings": {}

        }
        ,
        "security_groups": {
            "google": ["__c", "__ccd_auto_redact", "__ccd_conversion_marking", "__ccd_em_download", "__ccd_em_form", "__ccd_em_outbound_click", "__ccd_em_page_view", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_em_video", "__ccd_ga_first", "__ccd_ga_last", "__ccd_ga_regscope", "__e", "__ogt_1p_data_v2", "__ogt_google_signals", "__set_product_settings"
            ]

        }

    };

    var ca, da = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ia = function(a) {
        for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d && d.Math == Math)
                return d
        }
        throw Error("Cannot find global object");
    }, ja = ia(this), ka = function(a, b) {
        if (b)
            a: {
                for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c))
                        break a;
                    c = c[f]
                }
                var g = d[d.length - 1]
                  , h = c[g]
                  , m = b(h);
                m != h && m != null && ea(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
    }, la = function(a) {
        return a.raw = a
    }, na = function(a, b) {
        a.raw = b;
        return a
    }, oa = function(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: da(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, qa = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }, ra = function(a) {
        return a instanceof Array ? a : qa(oa(a))
    }, sa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    ka("Object.assign", function(a) {
        return a || sa
    });
    var ta = typeof Object.create == "function" ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ua;
    if (typeof Object.setPrototypeOf == "function")
        ua = Object.setPrototypeOf;
    else {
        var va;
        a: {
            var wa = {
                a: !0
            }
              , xa = {};
            try {
                xa.__proto__ = wa;
                va = xa.a;
                break a
            } catch (a) {}
            va = !1
        }
        ua = va ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ya = ua
      , za = function(a, b) {
        a.prototype = ta(b.prototype);
        a.prototype.constructor = a;
        if (ya)
            ya(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Qn = b.prototype
    }
      , Aa = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var Ca = this || self
      , Da = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , Ea = function(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , Fa = function(a, b, c) {
        Fa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Da : Ea;
        return Fa.apply(null, arguments)
    }
      , Ga = function(a) {
        return a
    };
    var Ha = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ka = function() {
        this.j = {};
        this.H = {}
    };
    ca = Ka.prototype;
    ca.get = function(a) {
        return this.j["dust." + a]
    }
    ;
    ca.set = function(a, b) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || (this.j[a] = b)
    }
    ;
    ca.Mh = function(a, b) {
        this.set(a, b);
        this.H["dust." + a] = !0
    }
    ;
    ca.has = function(a) {
        return this.j.hasOwnProperty("dust." + a)
    }
    ;
    ca.vf = function(a) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || delete this.j[a]
    }
    ;
    var La = function() {};
    La.prototype.reset = function() {}
    ;
    var Ma = function(a, b) {
        this.O = a;
        this.parent = b;
        this.j = this.D = void 0;
        this.K = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.values = new Ka
    };
    Ma.prototype.add = function(a, b) {
        Na(this, a, b, !1)
    }
    ;
    var Na = function(a, b, c, d) {
        d ? a.values.Mh(b, c) : a.values.set(b, c)
    };
    Ma.prototype.set = function(a, b) {
        !this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b)
    }
    ;
    Ma.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    }
    ;
    Ma.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    }
    ;
    var Oa = function(a) {
        var b = new Ma(a.O,a);
        a.D && (b.D = a.D);
        b.K = a.K;
        b.j = a.j;
        return b
    };
    Ma.prototype.H = function() {
        return this.O
    }
    ;
    function Pa(a, b) {
        for (var c, d = 0; d < b.length && !(c = Qa(a, b[d]),
        c instanceof Ha); d++)
            ;
        return c
    }
    function Qa(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || typeof c.invoke !== "function")
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.D;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
    ;var Ra = function() {
        this.K = new La;
        this.j = new Ma(this.K)
    };
    Ra.prototype.H = function() {
        return this.K
    }
    ;
    Ra.prototype.execute = function(a) {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.D(b)
    }
    ;
    Ra.prototype.D = function() {
        for (var a, b = 0; b < arguments.length; b++)
            a = Qa(this.j, arguments[b]);
        return a
    }
    ;
    Ra.prototype.O = function(a) {
        var b = Oa(this.j);
        b.j = a;
        for (var c, d = 1; d < arguments.length; d++)
            c = Qa(b, arguments[d]);
        return c
    }
    ;
    var Sa = function() {
        Ka.call(this);
        this.D = !1
    };
    za(Sa, Ka);
    var Ta = function(a, b) {
        var c = [], d;
        for (d in a.j)
            if (a.j.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    Sa.prototype.set = function(a, b) {
        this.D || Ka.prototype.set.call(this, a, b)
    }
    ;
    Sa.prototype.Mh = function(a, b) {
        this.D || Ka.prototype.Mh.call(this, a, b)
    }
    ;
    Sa.prototype.vf = function(a) {
        this.D || Ka.prototype.vf.call(this, a)
    }
    ;
    Sa.prototype.Mb = function() {
        this.D = !0
    }
    ;
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
    var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Va = function(a) {
        if (a == null)
            return String(a);
        var b = Ua.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Wa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Ya = function(a) {
        if (!a || Va(a) != "object" || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Wa(a, "constructor") && !Wa(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return b === void 0 || Wa(a, b)
    }
      , k = function(a, b) {
        var c = b || (Va(a) == "array" ? [] : {}), d;
        for (d in a)
            if (Wa(a, d)) {
                var e = a[d];
                Va(e) == "array" ? (Va(c[d]) != "array" && (c[d] = []),
                c[d] = k(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}),
                c[d] = k(e, c[d])) : c[d] = e
            }
        return c
    };
    function Za(a) {
        if (a == void 0 || Array.isArray(a) || Ya(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    }
    function $a(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    }
    ;var ab = function(a) {
        this.j = [];
        this.H = !1;
        this.D = new Sa;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && ($a(b) ? this.j[Number(b)] = a[Number(b)] : this.D.set(b, a[b]))
    };
    ca = ab.prototype;
    ca.toString = function(a) {
        if (a && a.indexOf(this) >= 0)
            return "";
        for (var b = [], c = 0; c < this.j.length; c++) {
            var d = this.j[c];
            d === null || d === void 0 ? b.push("") : d instanceof ab ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(String(d))
        }
        return b.join(",")
    }
    ;
    ca.set = function(a, b) {
        if (!this.H)
            if (a === "length") {
                if (!$a(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.j.length = Number(b)
            } else
                $a(a) ? this.j[Number(a)] = b : this.D.set(a, b)
    }
    ;
    ca.get = function(a) {
        return a === "length" ? this.length() : $a(a) ? this.j[Number(a)] : this.D.get(a)
    }
    ;
    ca.length = function() {
        return this.j.length
    }
    ;
    ca.fc = function() {
        for (var a = Ta(this.D, 1), b = 0; b < this.j.length; b++)
            a.push(b + "");
        return new ab(a)
    }
    ;
    var bb = function(a, b) {
        $a(b) ? delete a.j[Number(b)] : a.D.vf(b)
    };
    ca = ab.prototype;
    ca.pop = function() {
        return this.j.pop()
    }
    ;
    ca.push = function() {
        return this.j.push.apply(this.j, Array.prototype.slice.call(arguments))
    }
    ;
    ca.shift = function() {
        return this.j.shift()
    }
    ;
    ca.splice = function(a, b) {
        return new ab(this.j.splice.apply(this.j, arguments))
    }
    ;
    ca.unshift = function() {
        return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments))
    }
    ;
    ca.has = function(a) {
        return $a(a) && this.j.hasOwnProperty(a) || this.D.has(a)
    }
    ;
    ca.Mb = function() {
        this.H = !0;
        Object.freeze(this.j);
        this.D.Mb()
    }
    ;
    function cb(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
    ;var db = function() {
        Sa.call(this)
    };
    za(db, Sa);
    db.prototype.fc = function() {
        return new ab(Ta(this, 1))
    }
    ;
    var eb = function(a) {
        for (var b = Ta(a, 3), c = new ab, d = 0; d < b.length; d++) {
            var e = new ab(b[d]);
            c.push(e)
        }
        return c
    };
    function fb() {
        for (var a = gb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function hb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var gb, ib;
    function jb(a) {
        gb = gb || hb();
        ib = ib || fb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(gb[m], gb[n], gb[p], gb[q])
        }
        return b.join("")
    }
    function kb(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = ib[n];
                if (p != null)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        gb = gb || hb();
        ib = ib || fb();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (h === 64 && e === -1)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            h !== 64 && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var lb = {};
    function mb(a, b) {
        lb[a] = lb[a] || [];
        lb[a][b] = !0
    }
    function nb(a) {
        var b = lb[a];
        if (!b || b.length === 0)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return jb(c.join("")).replace(/\.+$/, "")
    }
    function ob() {
        for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    }
    ;function pb() {}
    function qb(a) {
        return typeof a === "function"
    }
    function l(a) {
        return typeof a === "string"
    }
    function rb(a) {
        return typeof a === "number" && !isNaN(a)
    }
    function sb(a) {
        return Array.isArray(a) ? a : [a]
    }
    function tb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
    function ub(a, b) {
        if (!rb(a) || !rb(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    function vb(a, b) {
        for (var c = new wb, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
    function z(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
    function xb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
    function yb(a) {
        return Math.round(Number(a)) || 0
    }
    function zb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
    function Ab(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
    function Bb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
    function Cb() {
        return new Date(Date.now())
    }
    function Db() {
        return Cb().getTime()
    }
    var wb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    wb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    wb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    function Eb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
    function Fb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
    function Gb(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
    function Hb(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
    function Ib(a, b) {
        return a.substring(0, b.length) === b
    }
    function Jb(a, b) {
        var c = G;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0)
                return
        }
        return d
    }
    function Kb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var Lb = /^\w{1,9}$/;
    function Mb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        z(a, function(d, e) {
            Lb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
    function Nb(a, b) {
        function c() {
            e && ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    }
    function Ob(a) {
        if (a) {
            var b = a.split(",");
            if (b.length === 2 && b[0] === b[1])
                return b[0]
        }
        return a
    }
    ;var Pb, Qb = function() {
        if (Pb === void 0) {
            var a = null
              , b = Ca.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ga,
                        createScript: Ga,
                        createScriptURL: Ga
                    })
                } catch (c) {
                    Ca.console && Ca.console.error(c.message)
                }
                Pb = a
            } else
                Pb = a
        }
        return Pb
    };
    var Rb = function(a) {
        this.j = a
    };
    Rb.prototype.toString = function() {
        return this.j + ""
    }
    ;
    var Sb = function(a) {
        return a instanceof Rb && a.constructor === Rb ? a.j : "type_error:TrustedResourceUrl"
    }
      , Tb = {}
      , Ub = function(a) {
        var b = a
          , c = Qb()
          , d = c ? c.createScriptURL(b) : b;
        return new Rb(d,Tb)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Vb = la([""])
      , Wb = na(["\x00"], ["\\0"])
      , Xb = na(["\n"], ["\\n"])
      , Yb = na(["\x00"], ["\\u0000"]);
    function Zb(a) {
        return a.toString().indexOf("`") === -1
    }
    Zb(function(a) {
        return a(Vb)
    }) || Zb(function(a) {
        return a(Wb)
    }) || Zb(function(a) {
        return a(Xb)
    }) || Zb(function(a) {
        return a(Yb)
    });
    var $b = function(a) {
        this.j = a
    };
    $b.prototype.toString = function() {
        return this.j
    }
    ;
    var ac = new $b("about:invalid#zClosurez");
    var bc = function(a) {
        this.Yl = a
    };
    function cc(a) {
        return new bc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var dc = [cc("data"), cc("http"), cc("https"), cc("mailto"), cc("ftp"), new bc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function ec(a, b) {
        b = b === void 0 ? dc : b;
        if (a instanceof $b)
            return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof bc && d.Yl(a))
                return new $b(a)
        }
    }
    function fc(a) {
        var b;
        b = b === void 0 ? dc : b;
        return ec(a, b) || ac
    }
    var gc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    function hc(a) {
        var b;
        if (a instanceof $b)
            if (a instanceof $b)
                b = a.j;
            else
                throw Error("");
        else
            b = gc.test(a) ? a : void 0;
        return b
    }
    ;var jc = function() {
        this.j = ic[0].toLowerCase()
    };
    jc.prototype.toString = function() {
        return this.j
    }
    ;
    var kc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var lc = {}
      , mc = function(a) {
        this.j = a
    };
    mc.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    function nc(a, b) {
        var c = [new jc];
        if (c.length === 0)
            throw Error("");
        var d = c.map(function(f) {
            var g;
            if (f instanceof jc)
                g = f.j;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return e.indexOf(f) !== 0
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    ;function oc(a, b) {
        var c = hc(b);
        c !== void 0 && (a.action = c)
    }
    ;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON", "INPUT"]);
    function pc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    }
    ;var G = window
      , H = document
      , qc = navigator
      , rc = function() {
        var a;
        try {
            a = qc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
      , sc = H.currentScript
      , tc = sc && sc.src
      , uc = function(a, b) {
        var c = G[a];
        G[a] = c === void 0 ? b : c;
        return G[a]
    };
    function vc(a) {
        return (qc.userAgent || "").indexOf(a) !== -1
    }
    var wc = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , xc = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , yc = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function zc(a, b, c) {
        b && z(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Ac = function(a, b, c, d, e) {
        var f = H.createElement("script");
        zc(f, d, xc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Ub(pc(a));
        f.src = Sb(g);
        var h, m, n, p = (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : n.call(m, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        wc(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = H.getElementsByTagName("script")[0] || H.body || H.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , Bc = function() {
        if (tc) {
            var a = tc.toLowerCase();
            if (a.indexOf("https://") === 0)
                return 2;
            if (a.indexOf("http://") === 0)
                return 3
        }
        return 1
    }
      , Cc = function(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e
          , h = !1;
        g || (g = H.createElement("iframe"),
        h = !0);
        zc(g, c, yc);
        d && z(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (h) {
            var m = H.body && H.body.lastChild || H.body || H.head;
            m.parentNode.insertBefore(g, m)
        }
        wc(g, b);
        return g
    }
      , Dc = function(a, b, c, d) {
        var e = new Image(1,1);
        zc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a;
        return e
    }
      , Ec = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Fc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , I = function(a) {
        G.setTimeout(a, 0)
    }
      , Gc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Hc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Ic = function(a) {
        var b = H.createElement("div"), c = b, d, e = pc("A<div>" + a + "</div>"), f = Qb(), g = f ? f.createHTML(e) : e;
        d = new mc(g,lc);
        if (c.nodeType === 1) {
            var h = c.tagName;
            if (h === "SCRIPT" || h === "STYLE")
                throw Error("");
        }
        c.innerHTML = d instanceof mc && d.constructor === mc ? d.j : "type_error:SafeHtml";
        b = b.lastChild;
        for (var m = []; b.firstChild; )
            m.push(b.removeChild(b.firstChild));
        return m
    }
      , Jc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , Kc = function(a) {
        var b;
        try {
            b = qc.sendBeacon && qc.sendBeacon(a)
        } catch (c) {
            mb("TAGGING", 15)
        }
        b || Dc(a)
    }
      , Lc = function(a, b) {
        try {
            return qc.sendBeacon(a, b)
        } catch (c) {
            mb("TAGGING", 15)
        }
        return !1
    }
      , Mc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    }
      , Nc = function(a, b, c) {
        if ("fetch"in G) {
            var d = Object.assign({}, Mc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
            c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                var e = G.fetch(a, d);
                e && e.catch(pb);
                return !0
            } catch (f) {}
        }
        if (c && c.noFallback)
            return !1;
        if (b)
            return Lc(a, b);
        Kc(a);
        return !0
    }
      , Oc = function(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }
      , Pc = function() {
        var a = G.performance;
        if (a && qb(a.now))
            return a.now()
    }
      , Qc = function() {
        return G.performance || void 0
    };
    function Rc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }
    function Sc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }
    function Tc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }
    function Uc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }
    function Vc(a, b) {
        var c = String(this.evaluate(a))
          , d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }
    function Wc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
        case "pageLocation":
            var c = G.location.href;
            b instanceof db && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    }
    ;var Xc = function(a, b) {
        Sa.call(this);
        this.K = a;
        this.O = b
    };
    za(Xc, Sa);
    ca = Xc.prototype;
    ca.toString = function() {
        return this.K
    }
    ;
    ca.getName = function() {
        return this.K
    }
    ;
    ca.fc = function() {
        return new ab(Ta(this, 1))
    }
    ;
    ca.invoke = function(a) {
        return this.O.apply(new Yc(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    ca.fb = function(a) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (b) {}
    }
    ;
    var Yc = function(a, b) {
        this.j = a;
        this.F = b
    };
    Yc.prototype.evaluate = function(a) {
        var b = this.F;
        return Array.isArray(a) ? Qa(b, a) : a
    }
    ;
    Yc.prototype.getName = function() {
        return this.j.getName()
    }
    ;
    Yc.prototype.H = function() {
        return this.F.H()
    }
    ;
    var Zc = function() {
        this.map = new Map
    };
    Zc.prototype.set = function(a, b) {
        this.map.set(a, b)
    }
    ;
    Zc.prototype.get = function(a) {
        return this.map.get(a)
    }
    ;
    var $c = function() {
        this.keys = [];
        this.values = []
    };
    $c.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    }
    ;
    $c.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1)
            return this.values[b]
    }
    ;
    function ad() {
        try {
            return Map ? new Zc : new $c
        } catch (a) {
            return new $c
        }
    }
    ;var bd = function(a) {
        if (a instanceof bd)
            return a;
        if (Za(a))
            throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    bd.prototype.getValue = function() {
        return this.value
    }
    ;
    bd.prototype.toString = function() {
        return String(this.value)
    }
    ;
    var dd = function(a) {
        Sa.call(this);
        this.promise = a;
        this.set("then", cd(this));
        this.set("catch", cd(this, !0));
        this.set("finally", cd(this, !1, !0))
    };
    za(dd, db);
    var cd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Xc("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof Xc || (d = void 0);
            e instanceof Xc || (e = void 0);
            var f = Oa(this.F)
              , g = function(m) {
                return function(n) {
                    return c ? (m.invoke(f),
                    a.promise) : m.invoke(f, n)
                }
            }
              , h = a.promise.then(d && g(d), e && g(e));
            return new dd(h)
        }
        )
    };
    function J(a, b, c) {
        var d = ad()
          , e = function(g, h) {
            for (var m = Ta(g, 1), n = 0; n < m.length; n++)
                h[m[n]] = f(g.get(m[n]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (g instanceof ab) {
                var m = [];
                d.set(g, m);
                for (var n = g.fc(), p = 0; p < n.length(); p++)
                    m[n.get(p)] = f(g.get(n.get(p)));
                return m
            }
            if (g instanceof dd)
                return g.promise;
            if (g instanceof db) {
                var q = {};
                d.set(g, q);
                e(g, q);
                return q
            }
            if (g instanceof Xc) {
                var r = function() {
                    for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++)
                        u[v] = ed(u[v], b, c);
                    var w = new Ma(b ? b.H() : new La);
                    b && (w.j = b.j);
                    return f(g.invoke.apply(g, [w].concat(u)))
                };
                d.set(g, r);
                e(g, r);
                return r
            }
            var t = !1;
            switch (c) {
            case 1:
                t = !0;
                break;
            case 2:
                t = !1;
                break;
            case 3:
                t = !1;
                break;
            default:
            }
            if (g instanceof bd && t)
                return g.getValue();
            switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return g;
            case "object":
                if (g === null)
                    return null
            }
        };
        return f(a)
    }
    function ed(a, b, c) {
        var d = ad()
          , e = function(g, h) {
            for (var m in g)
                g.hasOwnProperty(m) && h.set(m, f(g[m]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (Array.isArray(g) || xb(g)) {
                var m = new ab([]);
                d.set(g, m);
                for (var n in g)
                    g.hasOwnProperty(n) && m.set(n, f(g[n]));
                return m
            }
            if (Ya(g)) {
                var p = new db;
                d.set(g, p);
                e(g, p);
                return p
            }
            if (typeof g === "function") {
                var q = new Xc("",function() {
                    for (var x = Array.prototype.slice.call(arguments, 0), y = 0; y < x.length; y++)
                        x[y] = J(this.evaluate(x[y]), b, c);
                    return f((0,
                    this.F.K)(g, g, x))
                }
                );
                d.set(g, q);
                e(g, q);
                return q
            }
            var v = typeof g;
            if (g === null || v === "string" || v === "number" || v === "boolean")
                return g;
            var w = !1;
            switch (c) {
            case 1:
                w = !0;
                break;
            case 2:
                w = !1;
                break;
            default:
            }
            if (g !== void 0 && w)
                return new bd(g)
        };
        return f(a)
    }
    ;function fd() {
        var a = !1;
        return a
    }
    ;var gd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++)
                b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d]instanceof ab)
                    for (var e = arguments[d], f = 0; f < e.length(); f++)
                        b.push(e.get(f));
                else
                    b.push(arguments[d]);
            return new ab(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new ab(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new ab(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (c !== void 0)
                e = c;
            else {
                if (d === 0)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (c !== void 0)
                e = c;
            else {
                if (d === 0)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; h >= 0; h--)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = cb(this), b = a.length - 1, c = 0; b >= 0; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : bb(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new ab(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = cb(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : bb(this, d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var hd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack)
    };
    za(hd, Error);
    var id = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1
    }
      , jd = new Ha("break")
      , kd = new Ha("continue");
    function ld(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }
    function md(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }
    function nd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof ab))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (fd())
                throw new hd(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = J(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (fd())
                throw new hd(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (id.hasOwnProperty(b)) {
                var h = 2;
                h = 1;
                var m = J(c, void 0, h);
                return ed(a[b].apply(a, m), this.F)
            }
            var n = "TypeError: " + b + " is not a function";
            if (fd())
                throw new hd(n);
            throw Error(n);
        }
        if (a instanceof ab) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof Xc) {
                    var q = cb(c);
                    q.unshift(this.F);
                    return p.invoke.apply(p, q)
                }
                var r = "TypeError: " + b + " is not a function";
                if (fd())
                    throw new hd(r);
                throw Error(r);
            }
            if (gd.supportedMethods.indexOf(b) >= 0) {
                var t = cb(c);
                t.unshift(this.F);
                return gd[b].apply(a, t)
            }
        }
        if (a instanceof Xc || a instanceof db) {
            if (a.has(b)) {
                var u = a.get(b);
                if (u instanceof Xc) {
                    var v = cb(c);
                    v.unshift(this.F);
                    return u.invoke.apply(u, v)
                }
                var w = "TypeError: " + b + " is not a function";
                if (fd())
                    throw new hd(w);
                throw Error(w);
            }
            if (b === "toString")
                return a instanceof Xc ? a.getName() : a.toString();
            if (b === "hasOwnProperty")
                return a.has.apply(a, cb(c))
        }
        if (a instanceof bd && b === "toString")
            return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (fd())
            throw new hd(x);
        throw Error(x);
    }
    function od(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string")
            throw Error("Invalid key name given for assignment.");
        var c = this.F;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }
    function pd() {
        var a = Oa(this.F)
          , b = Pa(a, Array.prototype.slice.apply(arguments));
        if (b instanceof Ha)
            return b
    }
    function qd() {
        return jd
    }
    function rd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Ha)
                return d
        }
    }
    function sd() {
        for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Na(a, c, d, !0)
            }
        }
    }
    function td() {
        return kd
    }
    function ud(a, b) {
        return new Ha(a,this.evaluate(b))
    }
    function vd(a, b) {
        var c = new ab;
        b = this.evaluate(b);
        for (var d = 0; d < b.length; d++)
            c.push(b[d]);
        var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.F.add(a, this.evaluate(e))
    }
    function wd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }
    function xd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof bd
          , d = b instanceof bd;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }
    function yd() {
        for (var a, b = 0; b < arguments.length; b++)
            a = this.evaluate(arguments[b]);
        return a
    }
    function zd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = Pa(f, d);
            if (g instanceof Ha) {
                if (g.type === "break")
                    break;
                if (g.type === "return")
                    return g
            }
        }
    }
    function Ad(a, b, c) {
        if (typeof b === "string")
            return zd(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof db || b instanceof ab || b instanceof Xc) {
            var d = b.fc()
              , e = d.length();
            return zd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    function Bd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Ad(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
    function Cd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Ad(function(e) {
            var f = Oa(d);
            Na(f, a, e, !0);
            return f
        }, b, c)
    }
    function Dd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Ad(function(e) {
            var f = Oa(d);
            f.add(a, e);
            return f
        }, b, c)
    }
    function Ed(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
    function Gd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            var f = Oa(d);
            Na(f, a, e, !0);
            return f
        }, b, c)
    }
    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            var f = Oa(d);
            f.add(a, e);
            return f
        }, b, c)
    }
    function Fd(a, b, c) {
        if (typeof b === "string")
            return zd(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof ab)
            return zd(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        if (fd())
            throw new hd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    function Id(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof ab))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.F;
        d = this.evaluate(d);
        var h = Oa(g);
        for (e(g, h); Qa(h, b); ) {
            var m = Pa(h, d);
            if (m instanceof Ha) {
                if (m.type === "break")
                    break;
                if (m.type === "return")
                    return m
            }
            var n = Oa(g);
            e(h, n);
            Qa(n, c);
            h = n
        }
    }
    function Jd(a, b) {
        var c = this.F
          , d = this.evaluate(b);
        if (!(d instanceof ab))
            throw Error("Error: non-List value given for Fn argument names.");
        var e = Array.prototype.slice.call(arguments, 2);
        return new Xc(a,function() {
            return function(f) {
                var g = Oa(c);
                g.j === void 0 && (g.j = this.F.j);
                for (var h = Array.prototype.slice.call(arguments, 0), m = 0; m < h.length; m++)
                    if (h[m] = this.evaluate(h[m]),
                    h[m]instanceof Ha)
                        return h[m];
                for (var n = d.get("length"), p = 0; p < n; p++)
                    p < h.length ? g.add(d.get(p), h[p]) : g.add(d.get(p), void 0);
                g.add("arguments", new ab(h));
                var q = Pa(g, e);
                if (q instanceof Ha)
                    return q.type === "return" ? q.data : q
            }
        }())
    }
    function Kd(a) {
        a = this.evaluate(a);
        var b = this.F;
        if (Ld && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
    function Md(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (fd())
                throw new hd(d);
            throw Error(d);
        }
        if (a instanceof db || a instanceof ab || a instanceof Xc)
            c = a.get(b);
        else if (typeof a === "string")
            b === "length" ? c = a.length : $a(b) && (c = a[b]);
        else if (a instanceof bd)
            return;
        return c
    }
    function Nd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }
    function Od(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }
    function Pd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof bd && (a = a.getValue());
        b instanceof bd && (b = b.getValue());
        return a === b
    }
    function Qd(a, b) {
        return !Pd.call(this, a, b)
    }
    function Rd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Pa(this.F, d);
        if (e instanceof Ha)
            return e
    }
    var Ld = !1;
    function Sd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }
    function Td(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }
    function Ud() {
        for (var a = new ab, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }
    function Vd() {
        for (var a = new db, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + ""
              , d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }
    function Wd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }
    function Xd(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }
    function Yd(a) {
        return -this.evaluate(a)
    }
    function Zd(a) {
        return !this.evaluate(a)
    }
    function $d(a, b) {
        return !xd.call(this, a, b)
    }
    function ae() {
        return null
    }
    function be(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }
    function de(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }
    function ee(a) {
        return this.evaluate(a)
    }
    function fe() {
        return Array.prototype.slice.apply(arguments)
    }
    function ge(a) {
        return new Ha("return",this.evaluate(a))
    }
    function he(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (fd())
                throw new hd(d);
            throw Error(d);
        }
        (a instanceof Xc || a instanceof ab || a instanceof db) && a.set(b, c);
        return c
    }
    function ie(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }
    function je(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b)
          , e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === this.evaluate(d[h]))
                if (f = this.evaluate(e[h]),
                f instanceof Ha) {
                    var m = f.type;
                    if (m === "break")
                        return;
                    if (m === "return" || m === "continue")
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]),
        f instanceof Ha && (f.type === "return" || f.type === "continue")))
            return f
    }
    function ke(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }
    function le(a) {
        a = this.evaluate(a);
        return a instanceof Xc ? "function" : typeof a
    }
    function me() {
        for (var a = this.F, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }
    function ne(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Pa(this.F, e);
            if (f instanceof Ha) {
                if (f.type === "break")
                    return;
                if (f.type === "return")
                    return f
            }
        }
        for (; this.evaluate(a); ) {
            var g = Pa(this.F, e);
            if (g instanceof Ha) {
                if (g.type === "break")
                    break;
                if (g.type === "return")
                    return g
            }
            this.evaluate(b)
        }
    }
    function oe(a) {
        return ~Number(this.evaluate(a))
    }
    function pe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }
    function qe(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }
    function re(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }
    function se(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }
    function te(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }
    function ue(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }
    function ve() {}
    function we(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Ha)
                return g
        } catch (r) {
            if (!(r instanceof hd && a))
                throw f = r instanceof hd,
                r;
            var h = Oa(this.F)
              , m = new bd(r);
            h.add(b, m);
            var n = this.evaluate(d)
              , p = Pa(h, n);
            if (p instanceof Ha)
                return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Ha)
                    return q
            }
        }
    }
    ;var ye = function() {
        this.j = new Ra;
        xe(this)
    };
    ye.prototype.execute = function(a) {
        return this.j.D(a)
    }
    ;
    var xe = function(a) {
        var b = function(c, d) {
            var e = new Xc(String(c),d);
            e.Mb();
            a.j.j.set(String(c), e)
        };
        b("map", Vd);
        b("and", Rc);
        b("contains", Uc);
        b("equals", Sc);
        b("or", Tc);
        b("startsWith", Vc);
        b("variable", Wc)
    };
    var Ae = function() {
        this.D = !1;
        this.j = new Ra;
        ze(this);
        this.D = !0
    };
    Ae.prototype.execute = function(a) {
        return Be(this.j.D(a))
    }
    ;
    var Ce = function(a, b, c) {
        return Be(a.j.O(b, c))
    }
      , ze = function(a) {
        var b = function(c, d) {
            var e = String(c)
              , f = new Xc(e,d);
            f.Mb();
            a.j.j.set(e, f)
        };
        b(0, ld);
        b(1, md);
        b(2, nd);
        b(3, od);
        b(56, se);
        b(57, pe);
        b(58, oe);
        b(59, ue);
        b(60, qe);
        b(61, re);
        b(62, te);
        b(53, pd);
        b(4, qd);
        b(5, rd);
        b(52, sd);
        b(6, td);
        b(49, ud);
        b(7, Ud);
        b(8, Vd);
        b(9, rd);
        b(50, vd);
        b(10, wd);
        b(12, xd);
        b(13, yd);
        b(51, Jd);
        b(47, Bd);
        b(54, Cd);
        b(55, Dd);
        b(63, Id);
        b(64, Ed);
        b(65, Gd);
        b(66, Hd);
        b(15, Kd);
        b(16, Md);
        b(17, Md);
        b(18, Nd);
        b(19, Od);
        b(20, Pd);
        b(21, Qd);
        b(22, Rd);
        b(23, Sd);
        b(24, Td);
        b(25, Wd);
        b(26, Xd);
        b(27, Yd);
        b(28, Zd);
        b(29, $d);
        b(45, ae);
        b(30, be);
        b(32, de);
        b(33, de);
        b(34, ee);
        b(35, ee);
        b(46, fe);
        b(36, ge);
        b(43, he);
        b(37, ie);
        b(38, je);
        b(39, ke);
        b(67, we);
        b(40, le);
        b(44, ve);
        b(41, me);
        b(42, ne)
    };
    Ae.prototype.H = function() {
        return this.j.H()
    }
    ;
    function Be(a) {
        if (a instanceof Ha || a instanceof Xc || a instanceof ab || a instanceof db || a instanceof bd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean")
            return a
    }
    ;var De = function(a) {
        this.message = a
    };
    function Ee(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
        return b === void 0 ? new De("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    }
    ;function Fe(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    ;var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function He(a, b) {
        for (var c = "", d = !0; a > 7; ) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Ee(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Ee(a | b) + c
    }
    ;var Ie = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            lk: a("consent"),
            Wh: a("convert_case_to"),
            Xh: a("convert_false_to"),
            Yh: a("convert_null_to"),
            Zh: a("convert_true_to"),
            ai: a("convert_undefined_to"),
            dn: a("debug_mode_metadata"),
            oa: a("function"),
            Jg: a("instance_name"),
            Kk: a("live_only"),
            Lk: a("malware_disabled"),
            Mk: a("metadata"),
            Pk: a("original_activity_id"),
            sn: a("original_vendor_template_id"),
            rn: a("once_on_load"),
            Ok: a("once_per_event"),
            ij: a("once_per_load"),
            wn: a("priority_override"),
            xn: a("respected_consent_types"),
            qj: a("setup_tags"),
            me: a("tag_id"),
            wj: a("teardown_tags")
        }
    }();
    var ef;
    var ff = [], gf = [], hf = [], jf = [], kf = [], lf = {}, mf, nf;
    function of(a) {
        nf = nf || a
    }
    function pf(a) {}
    var qf, rf = [], sf = [];
    function tf(a, b) {
        var c = {};
        c[Ie.oa] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }
    function uf(a, b, c) {
        try {
            return mf(vf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }
    function wf(a) {
        var b = a[Ie.oa];
        if (!b)
            throw Error("Error: No function name given for function call.");
        return !!lf[b]
    }
    var vf = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
        return d
    }
      , xf = function(a, b, c) {
        if (Array.isArray(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(xf(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = ff[f];
                if (!g || b.isBlocked(g))
                    return;
                c[f] = !0;
                var h = String(g[Ie.Jg]);
                try {
                    var m = vf(g, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = yf(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    qf && (d = qf.jl(d, m))
                } catch (y) {
                    b.logMacroError && b.logMacroError(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = xf(a[q], b, c);
                    nf && (p = p || nf.Vl(r));
                    d.push(r)
                }
                return nf && p ? nf.nl(d) : d.join("");
            case "escape":
                d = xf(a[1], b, c);
                if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.Wl(a))
                    return nf.wm(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Je[a[t]] && (d = Je[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!jf[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return {
                    Ej: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v[Ie.oa] = a[1];
                var w = uf(v, b, c)
                  , x = !!a[4];
                return x || w !== 2 ? x !== (w === 1) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }
      , yf = function(a, b) {
        var c = a[Ie.oa]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = lf[c], f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) && e && rf.indexOf(c) !== -1, g = {}, h = {}, m;
        for (m in a)
            a.hasOwnProperty(m) && m.indexOf("vtp_") === 0 && (e && (g[m] = a[m]),
            !e || f) && (h[m.substring(4)] = a[m]);
        e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
        if (b) {
            if (b.name == null) {
                var n;
                a: {
                    var p = b.type
                      , q = b.index;
                    if (q == null)
                        n = "";
                    else {
                        var r;
                        switch (p) {
                        case 2:
                            r = ff[q];
                            break;
                        case 1:
                            r = jf[q];
                            break;
                        default:
                            n = "";
                            break a
                        }
                        var t = r && r[Ie.Jg];
                        n = t ? String(t) : ""
                    }
                }
                b.name = n
            }
            e && (g.vtp_gtmEntityIndex = b.index,
            g.vtp_gtmEntityName = b.name)
        }
        var u, v, w;
        if (f && sf.indexOf(c) === -1) {
            sf.push(c);
            var x = Db();
            u = e(g);
            var y = Db() - x
              , B = Db();
            v = ef(c, h, b);
            w = y - (Db() - B)
        } else if (e && (u = e(g)),
        !e || f)
            v = ef(c, h, b);
        f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Za(u) ? (Array.isArray(u) ? Array.isArray(v) : Ya(u) ? Ya(v) : typeof u === "function" ? typeof v === "function" : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
        return e ? u : v
    };
    var zf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    za(zf, Error);
    function Af(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Af(a[c], b[c])
        }
    }
    ;var Bf = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.lm = a;
        this.j = [];
        this.D = b
    };
    za(Bf, Error);
    var Df = function() {
        return function(a, b) {
            a instanceof Bf || (a = new Bf(a,Cf));
            b && a.j.push(b);
            throw a;
        }
    };
    function Cf(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--)
            rb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Gf = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = Ef(a), f = 0; f < gf.length; f++) {
            var g = gf[f]
              , h = Ff(g, e);
            if (h) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                h === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < jf.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Ff = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0)
                return !1;
            if (e === 2)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (h === 2)
                return null;
            if (h === 1)
                return !1
        }
        return !0
    }
      , Ef = function(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = uf(hf[c], a));
            return b[c]
        }
    };
    var Hf = {
        jl: function(a, b) {
            b[Ie.Wh] && typeof a === "string" && (a = b[Ie.Wh] == 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ie.Yh) && a === null && (a = b[Ie.Yh]);
            b.hasOwnProperty(Ie.ai) && a === void 0 && (a = b[Ie.ai]);
            b.hasOwnProperty(Ie.Zh) && a === !0 && (a = b[Ie.Zh]);
            b.hasOwnProperty(Ie.Xh) && a === !1 && (a = b[Ie.Xh]);
            return a
        }
    };
    var If = function() {
        this.j = {}
    }
      , Kf = function(a, b) {
        var c = Jf.D, d;
        (d = c.j)[a] != null || (d[a] = []);
        c.j[a].push(function() {
            return b.apply(null, ra(Aa.apply(0, arguments)))
        })
    };
    function Lf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d),
                    g += "."
                } catch (h) {
                    g = typeof h === "string" ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new zf(c,d,g);
            }
    }
    function Mf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d]
                  , f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Lf(e, b, d, g);
                    Lf(f, b, d, g)
                }
            }
        }
    }
    ;var Qf = function() {
        var a = data.permissions || {}
          , b = Nf.ctid
          , c = this;
        this.D = new If;
        this.j = {};
        var d = {}
          , e = {}
          , f = Mf(this.D, b, function() {
            var g = arguments[0];
            return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        z(a, function(g, h) {
            var m = {};
            z(h, function(p, q) {
                var r = Of(p, q);
                m[p] = r.assert;
                d[p] || (d[p] = r.N);
                r.zj && !e[p] && (e[p] = r.zj)
            });
            var n = function(p) {
                var q = Aa.apply(1, arguments);
                if (!m[p])
                    throw Pf(p, {}, "The requested additional permission " + p + " is not configured.");
                f.apply(null, [p].concat(ra(q)))
            };
            c.j[g] = function(p, q) {
                var r = m[p];
                if (!r)
                    throw Pf(p, {}, "The requested permission " + p + " is not configured.");
                var t = Array.prototype.slice.call(arguments, 0);
                r.apply(void 0, t);
                f.apply(void 0, t);
                var u = e[p];
                u && u.apply(null, [n].concat(ra(t.slice(1))))
            }
        })
    }
      , Rf = function(a) {
        return Jf.j[a] || function() {}
    };
    function Of(a, b) {
        var c = tf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Pf;
        try {
            return yf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new zf(e,{},"Permission " + e + " is unknown.");
                },
                N: function() {
                    throw new zf(a,{},"Permission " + a + " is unknown.");
                }
            }
        }
    }
    function Pf(a, b, c) {
        return new zf(a,b,c)
    }
    ;var Sf = !1;
    var Vf = {};
    Vf.Um = zb('');
    Vf.ql = zb('');
    var Wf = Sf
      , Xf = Vf.ql
      , Yf = Vf.Um;
    var bg = function(a) {
        var b = {}
          , c = 0;
        z(a, function(e, f) {
            if (f != null)
                if (f = ("" + f).replace(/~/g, "~~"),
                Zf.hasOwnProperty(e))
                    b[Zf[e]] = f;
                else if ($f.hasOwnProperty(e)) {
                    var g = $f[e]
                      , h = f;
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if (e === "category")
                    for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
                        var p = b
                          , q = ag[n]
                          , r = m[n];
                        p.hasOwnProperty(q) || (p[q] = r)
                    }
                else if (c < 27) {
                    var t = String.fromCharCode(c < 10 ? 48 + c : 65 + c - 10);
                    b["k" + t] = ("" + String(e)).replace(/~/g, "~~");
                    b["v" + t] = f;
                    c++
                }
        });
        var d = [];
        z(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , Zf = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , $f = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , ag = ["ca", "c2", "c3", "c4", "c5"];
    var cg = function(a) {
        var b = [];
        z(a, function(c, d) {
            d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , dg = function(a, b, c, d, e) {
        this.ja = a.ja;
        this.Lc = a.Lc;
        this.bh = a.bh;
        this.baseUrl = b;
        this.endpoint = e;
        this.H = c;
        this.D = cg(a.ja);
        this.j = cg(a.bh);
        this.K = this.j.length;
        if (d && this.K > 16384)
            throw Error("EVENT_TOO_LARGE");
    };
    var eg = function() {
        this.events = [];
        this.j = "";
        this.ja = {};
        this.baseUrl = "";
        this.H = 0;
        this.K = this.D = !1;
    };
    eg.prototype.add = function(a) {
        return this.O(a) ? (this.events.push(a),
        this.j = a.D,
        this.ja = a.ja,
        this.baseUrl = a.baseUrl,
        this.H += a.K,
        this.D = a.H,
        !0) : !1
    }
    ;
    eg.prototype.O = function(a) {
        return this.events.length ? this.events.length >= 20 || a.K + this.H >= 16384 ? !1 : this.baseUrl === a.baseUrl && this.D === a.H && this.Z(a) : !0
    }
    ;
    eg.prototype.Z = function(a) {
        var b = this;
        if (this.K) {
            var c = Object.keys(this.ja);
            return c.length === Object.keys(a.ja).length && c.every(function(d) {
                return a.ja.hasOwnProperty(d) && String(b.ja[d]) === String(a.ja[d])
            })
        }
        return this.j === a.D
    }
    ;
    var fg = {}
      , gg = (fg.uaa = !0,
    fg.uab = !0,
    fg.uafvl = !0,
    fg.uamb = !0,
    fg.uam = !0,
    fg.uap = !0,
    fg.uapv = !0,
    fg.uaw = !0,
    fg);
    var hg = function(a, b) {
        z(a, function(c, d) {
            d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , ig = function(a, b) {
        var c = [];
        a.D && c.push(a.D);
        b && c.push("_s=" + b);
        hg(a.Lc, c);
        var d = !1;
        a.j && (c.push(a.j),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.baseUrl.length + 1;
        d && g > 2048 && (f = c.pop(),
        e = c.join("&"));
        return {
            params: e,
            body: f
        }
    }
      , jg = function(a, b) {
        var c = a.events;
        if (c.length == 1)
            return ig(c[0], b);
        var d = [];
        a.j && d.push(a.j);
        for (var e = {}, f = 0; f < c.length; f++)
            z(c[f].Lc, function(t, u) {
                u != null && (e[t] = e[t] || {},
                e[t][String(u)] = e[t][String(u)] + 1 || 1)
            });
        var g = {};
        z(e, function(t, u) {
            var v, w = -1, x = 0;
            z(u, function(y, B) {
                x += B;
                var A = (y.length + t.length + 2) * (B - 1);
                A > w && (v = y,
                w = A)
            });
            x == c.length && (g[t] = v)
        });
        hg(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
            yh: void 0
        },
        p++) {
            var q = [];
            n.yh = {};
            z(c[p].Lc, function(t) {
                return function(u, v) {
                    g[u] != "" + v && (t.yh[u] = v)
                }
            }(n));
            c[p].j && q.push(c[p].j);
            hg(n.yh, q);
            m.push(q.join("&"))
        }
        var r = m.join("\r\n");
        return {
            params: h,
            body: r
        }
    };
    var kg = /^[a-z$_][\w$]*$/i
      , lg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i
      , mg = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a
              , e = b[c];
            if (!lg.exec(e))
                throw Error("Invalid key wildcard");
            var f = e.indexOf(".*"), g = f !== -1 && f === e.length - 2, h = g ? e.slice(0, e.length - 2) : e, m;
            a: if (d.length === 0)
                m = !1;
            else {
                for (var n = d.split("."), p = 0; p < n.length; p++)
                    if (!kg.exec(n[p])) {
                        m = !1;
                        break a
                    }
                m = !0
            }
            if (!m || h.length > d.length || !g && d.length != e.length ? 0 : g ? d.indexOf(h) === 0 && (d === h || d.charAt(h.length) == ".") : d === h)
                return !0
        }
        return !1
    };
    var ng = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function og(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) === c
    }
    var pg = new wb;
    function qg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = pg.get(e);
            f || (f = new RegExp(b,d),
            pg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function rg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }
    function sg(a, b) {
        return String(a) === String(b)
    }
    function tg(a, b) {
        return Number(a) >= Number(b)
    }
    function ug(a, b) {
        return Number(a) <= Number(b)
    }
    function vg(a, b) {
        return Number(a) > Number(b)
    }
    function wg(a, b) {
        return Number(a) < Number(b)
    }
    function xg(a, b) {
        return String(a).indexOf(String(b)) === 0
    }
    ;var Eg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i
      , Fg = {
        Fn: "function",
        PixieMap: "Object",
        List: "Array"
    }
      , K = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Eg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = e[2] === "!"
              , h = e[3]
              , m = c[d];
            if (m == null) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (h !== "*") {
                var n = typeof m;
                m instanceof Xc ? n = "Fn" : m instanceof ab ? n = "List" : m instanceof db ? n = "PixieMap" : m instanceof bd && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (Fg[n] || n) + ", which does not match required type " + (Fg[h] || h) + ".");
            }
        }
    };
    function Gg(a) {
        return "" + a
    }
    function Hg(a, b) {
        var c = [];
        return c
    }
    ;function Ig(a, b) {
        var c = new Xc(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (fd())
                    throw new hd(g.message);
                throw g;
            }
        }
        );
        c.Mb();
        return c
    }
    function Jg(a, b) {
        var c = new db, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                qb(e) ? c.set(d, Ig(a + "_" + d, e)) : Ya(e) ? c.set(d, Jg(a + "_" + d, e)) : (rb(e) || l(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.Mb();
        return c
    }
    ;var Kg = function(a, b) {
        K(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new db;
        return d = Jg("AssertApiSubject", c)
    };
    var Lg = function(a, b) {
        K(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof dd)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new db;
        return d = Jg("AssertThatSubject", c)
    };
    function Mg(a) {
        return function() {
            for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
                b.push(J(arguments[d], c));
            return ed(a.apply(null, b))
        }
    }
    var Og = function() {
        for (var a = Math, b = Ng, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Mg(a[e].bind(a)))
        }
        return c
    };
    var Pg = function(a) {
        var b;
        return b
    };
    var Qg = function(a) {
        var b;
        K(this.getName(), ["uri:!string"], arguments);
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    };
    var Rg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Sg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    function Tg(a, b) {
        var c = !1;
        K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var d = JSON.parse(a);
        if (!d)
            throw Error("Invalid boolean expression string was given.");
        var e = b ? J(b) : {};
        c = Ug(d, e);
        return c
    }
    var Vg = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            if (a === void 0)
                return;
            a = a[b[c]]
        }
        return a
    }
      , Wg = function(a, b) {
        var c = b.preHit;
        if (c) {
            var d = a[0];
            switch (d) {
            case "hitData":
                return a.length < 2 ? void 0 : Vg(c.getHitData(a[1]), a.slice(2));
            case "metadata":
                return a.length < 2 ? void 0 : Vg(c.getMetadata(a[1]), a.slice(2));
            case "eventName":
                return c.getEventName();
            case "destinationId":
                return c.getDestinationId();
            default:
                throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
            }
        }
    }
      , Xg = function(a, b) {
        if (a) {
            if (a.contextValue !== void 0) {
                var c;
                a: {
                    var d = a.contextValue
                      , e = d.keyParts;
                    if (e && e.length !== 0) {
                        var f = d.namespaceType;
                        switch (f) {
                        case 1:
                            c = Wg(e, b);
                            break a;
                        case 2:
                            var g = b.macro;
                            c = g ? g[e[0]] : void 0;
                            break a;
                        default:
                            throw Error("Unknown Namespace Type used: " + f);
                        }
                    }
                    c = void 0
                }
                return c
            }
            if (a.booleanExpressionValue !== void 0)
                return Ug(a.booleanExpressionValue, b);
            if (a.booleanValue !== void 0)
                return !!a.booleanValue;
            if (a.stringValue !== void 0)
                return String(a.stringValue);
            if (a.integerValue !== void 0)
                return Number(a.integerValue);
            if (a.doubleValue !== void 0)
                return Number(a.doubleValue);
            throw Error("Unknown field used for variable of type ExpressionValue:" + a);
        }
    }
      , Ug = function(a, b) {
        var c = a.args;
        if (!Array.isArray(c) || c.length === 0)
            throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
        var d = function(g) {
            return Xg(g, b)
        };
        switch (a.type) {
        case 1:
            for (var e = 0; e < c.length; e++)
                if (d(c[e]))
                    return !0;
            return !1;
        case 2:
            for (var f = 0; f < c.length; f++)
                if (!d(c[f]))
                    return !1;
            return c.length > 0;
        case 3:
            return !d(c[0]);
        case 4:
            return qg(d(c[0]), d(c[1]), !1);
        case 5:
            return sg(d(c[0]), d(c[1]));
        case 6:
            return xg(d(c[0]), d(c[1]));
        case 7:
            return og(d(c[0]), d(c[1]));
        case 8:
            return rg(d(c[0]), d(c[1]));
        case 9:
            return wg(d(c[0]), d(c[1]));
        case 10:
            return ug(d(c[0]), d(c[1]));
        case 11:
            return vg(d(c[0]), d(c[1]));
        case 12:
            return tg(d(c[0]), d(c[1]));
        default:
            throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
        }
    };
    Tg.J = "internal.evaluateBooleanExpression";
    var Yg = function(a) {
        K(this.getName(), ["message:?string"], arguments);
    };
    var Zg = function(a, b) {
        K(this.getName(), ["min:!number", "max:!number"], arguments);
        return ub(a, b)
    };
    var $g = function() {
        return (new Date).getTime()
    };
    var ah = function(a) {
        if (a === null)
            return "null";
        if (a instanceof ab)
            return "array";
        if (a instanceof Xc)
            return "function";
        if (a instanceof bd) {
            a = a.getValue();
            if (a.constructor === void 0 || a.constructor.name === void 0) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var bh = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Wf || Yf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return ed(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(J(c))
            })
        }
    };
    var ch = function(a) {
        return yb(J(a, this.F))
    };
    var dh = function(a) {
        return Number(J(a, this.F))
    };
    var eh = function(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };
    var fh = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var Ng = "floor ceil round max min abs pow sqrt".split(" ");
    var gh = function() {
        var a = {};
        return {
            Bl: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Zj: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , hh = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return Xc.prototype.invoke.apply(a, c)
        }
    }
      , ih = function(a, b) {
        K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    }
      , jh = function(a, b) {
        K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
    var kh = {};
    var lh = function(a) {
        var b = new db;
        if (a instanceof ab)
            for (var c = a.fc(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            }
        else if (a instanceof Xc)
            for (var f = Ta(a, 1), g = 0; g < f.length; g++) {
                var h = f[g];
                b.set(h, a.get(h))
            }
        else
            for (var m = 0; m < a.length; m++)
                b.set(m, a[m]);
        return b
    };
    kh.keys = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof ab || a instanceof Xc || typeof a === "string")
            a = lh(a);
        if (a instanceof db)
            return a.fc();
        return new ab
    }
    ;
    kh.values = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof ab || a instanceof Xc || typeof a === "string")
            a = lh(a);
        if (a instanceof db)
            return new ab(Ta(a, 2));
        return new ab
    }
    ;
    kh.entries = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof ab || a instanceof Xc || typeof a === "string")
            a = lh(a);
        if (a instanceof db)
            return eb(a);
        return new ab
    }
    ;
    kh.freeze = function(a) {
        (a instanceof db || a instanceof ab || a instanceof Xc) && a.Mb();
        return a
    }
    ;
    kh.delete = function(a, b) {
        if (a instanceof db && !a.D)
            return a.vf(b),
            !0;
        return !1
    }
    ;
    var N = function(a, b, c) {
        var d = a.F.j;
        if (!d)
            throw Error("Missing program state.");
        if (d.Cm) {
            try {
                d.Aj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw mb("TAGGING", 21),
                e;
            }
            return
        }
        d.Aj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var mh = function() {
        this.j = {};
        this.D = {};
    };
    mh.prototype.get = function(a, b) {
        var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
        return c
    }
    ;
    mh.prototype.add = function(a, b, c) {
        if (this.j.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.D.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.j[a] = c ? void 0 : qb(b) ? Ig(a, b) : Jg(a, b)
    }
    ;
    function nh(a, b) {
        var c = void 0;
        return c
    }
    ;function oh() {
        var a = {};
        return a
    }
    ;function ph(a) {
        return qh ? H.querySelectorAll(a) : null
    }
    function rh(a, b) {
        if (!qh)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var sh = !1;
    if (H.querySelectorAll)
        try {
            var wh = H.querySelectorAll(":root");
            wh && wh.length == 1 && wh[0] == H.documentElement && (sh = !0)
        } catch (a) {}
    var qh = sh;
    var xh = /^[0-9A-Fa-f]{64}$/;
    function yh(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023),
                b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }
    function zh(a) {
        if (a === "" || a === "e0")
            return Promise.resolve(a);
        var b;
        if ((b = G.crypto) == null ? 0 : b.subtle) {
            if (xh.test(a))
                return Promise.resolve(a);
            try {
                var c = yh(a);
                return G.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return G.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
    ;function P(a) {
        mb("GTM", a)
    }
    ;var Dh = function(a) {
        var b = {}
          , c = ["tv.1"]
          , d = 0;
        var u = c.join("~");
        return {
            Nh: {
                userData: b
            },
            Nm: u,
            Wm: d
        }
    }
      , Fh = function(a) {
        if (G.Promise)
            try {
                return new Promise(function(b) {
                    Eh(a, function(c, d) {
                        b({
                            Lj: c,
                            Jf: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , Gh = function(a) {
        for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
            var e = a[d].name
              , f = a[d].value
              , g = a[d].index
              , h = Ah[e];
            h && f && (Bh.indexOf(e) === -1 || /^e\d+$/.test(f) || Ch.test(f) || xh.test(f)) && (g !== void 0 && (h += g),
            b.push(h + "." + f),
            c++)
        }
        a.length === 1 && a[0].name === "error_code" && (c = 0);
        return {
            Mj: encodeURIComponent(b.join("~")),
            Jf: c
        }
    }
      , Eh = function(a, b) {
        Hh(a, function(c) {
            var d = Gh(c);
            b(d.Mj, d.Jf)
        })
    }
      , Ph = function(a) {
        function b(r, t, u, v) {
            var w = Ih(r);
            w !== "" && (xh.test(w) ? h.push({
                name: t,
                value: w,
                index: v
            }) : h.push({
                name: t,
                value: u(w),
                index: v
            }))
        }
        function c(r, t) {
            var u = r;
            if (l(u) || Array.isArray(u)) {
                u = sb(r);
                for (var v = 0; v < u.length; ++v) {
                    var w = Ih(u[v])
                      , x = xh.test(w);
                    t && !x && P(89);
                    !t && x && P(88)
                }
            }
        }
        function d(r, t) {
            var u = r[t];
            c(u, !1);
            var v = Jh[t];
            r[v] && (r[t] && P(90),
            u = r[v],
            c(u, !0));
            return u
        }
        function e(r, t, u) {
            for (var v = sb(d(r, t)), w = 0; w < v.length; ++w)
                b(v[w], t, u)
        }
        function f(r, t, u, v) {
            var w = d(r, t);
            b(w, t, u, v)
        }
        function g(r) {
            return function(t) {
                P(64);
                return r(t)
            }
        }
        var h = [];
        if (G.location.protocol !== "https:")
            return h.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            h;
        e(a, "email", Kh);
        e(a, "phone_number", Lh);
        e(a, "first_name", g(Mh));
        e(a, "last_name", g(Mh));
        var m = a.home_address || {};
        e(m, "street", g(Nh));
        e(m, "city", g(Nh));
        e(m, "postal_code", g(Oh));
        e(m, "region", g(Nh));
        e(m, "country", g(Oh));
        for (var n = sb(a.address || {}), p = 0; p < n.length; p++) {
            var q = n[p];
            f(q, "first_name", Mh, p);
            f(q, "last_name", Mh, p);
            f(q, "street", Nh, p);
            f(q, "city", Nh, p);
            f(q, "postal_code", Oh, p);
            f(q, "region", Nh, p);
            f(q, "country", Oh, p)
        }
        return h
    }
      , Hh = function(a, b) {
        var c = Ph(a);
        Qh(c, b)
    }
      , Ih = function(a) {
        return a == null ? "" : l(a) ? Bb(String(a)) : "e0"
    }
      , Oh = function(a) {
        return a.replace(Rh, "")
    }
      , Mh = function(a) {
        return Nh(a.replace(/\s/g, ""))
    }
      , Nh = function(a) {
        return Bb(a.replace(Sh, "").toLowerCase())
    }
      , Lh = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        a.charAt(0) !== "+" && (a = "+" + a);
        return Th.test(a) ? a : "e0"
    }
      , Kh = function(a) {
        var b = a.toLowerCase().split("@");
        if (b.length === 2) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (Uh.test(c))
                return c
        }
        return "e0"
    }
      , Qh = function(a, b) {
        a.some(function(c) {
            c.value && Bh.indexOf(c.name)
        }) ? b(a) : G.Promise ? Promise.all(a.map(function(c) {
            return c.value && Bh.indexOf(c.name) !== -1 ? zh(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        }) : b([])
    }
      , Sh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , Uh = /^\S+@\S+\.\S+$/
      , Th = /^\+\d{10,15}$/
      , Rh = /[.~]/g
      , Ch = /^[0-9A-Za-z_-]{43}$/
      , Vh = {}
      , Ah = (Vh.email = "em",
    Vh.phone_number = "pn",
    Vh.first_name = "fn",
    Vh.last_name = "ln",
    Vh.street = "sa",
    Vh.city = "ct",
    Vh.region = "rg",
    Vh.country = "co",
    Vh.postal_code = "pc",
    Vh.error_code = "ec",
    Vh)
      , Wh = {}
      , Jh = (Wh.email = "sha256_email_address",
    Wh.phone_number = "sha256_phone_number",
    Wh.first_name = "sha256_first_name",
    Wh.last_name = "sha256_last_name",
    Wh.street = "sha256_street",
    Wh)
      , Bh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Q = {
        g: {
            ya: "ad_personalization",
            R: "ad_storage",
            P: "ad_user_data",
            U: "analytics_storage",
            nc: "region",
            Qb: "consent_updated",
            Qe: "wait_for_update",
            di: "app_remove",
            ei: "app_store_refund",
            fi: "app_store_subscription_cancel",
            gi: "app_store_subscription_convert",
            hi: "app_store_subscription_renew",
            pk: "consent_update",
            Sf: "add_payment_info",
            Tf: "add_shipping_info",
            oc: "add_to_cart",
            qc: "remove_from_cart",
            Uf: "view_cart",
            Rb: "begin_checkout",
            rc: "select_item",
            hb: "view_item_list",
            Cb: "select_promotion",
            ib: "view_promotion",
            Ia: "purchase",
            sc: "refund",
            Ma: "view_item",
            Vf: "add_to_wishlist",
            qk: "exception",
            ii: "first_open",
            ji: "first_visit",
            ba: "gtag.config",
            Ta: "gtag.get",
            ki: "in_app_purchase",
            Sb: "page_view",
            rk: "screen_view",
            li: "session_start",
            sk: "timing_complete",
            tk: "track_social",
            Mc: "user_engagement",
            uk: "user_id_update",
            jb: "gclgb",
            Ua: "gclid",
            mi: "gclgs",
            ni: "gclst",
            fa: "ads_data_redaction",
            oi: "gad_source",
            Fd: "gclid_url",
            ri: "gclsrc",
            Wf: "gbraid",
            Re: "wbraid",
            ma: "allow_ad_personalization_signals",
            Se: "allow_custom_scripts",
            Te: "allow_display_features",
            Gd: "allow_enhanced_conversions",
            kb: "allow_google_signals",
            Ca: "allow_interest_groups",
            vk: "app_id",
            wk: "app_installer_id",
            xk: "app_name",
            yk: "app_version",
            Db: "auid",
            si: "auto_detection_enabled",
            Tb: "aw_remarketing",
            Ue: "aw_remarketing_only",
            Hd: "discount",
            Id: "aw_feed_country",
            Jd: "aw_feed_language",
            da: "items",
            Kd: "aw_merchant_id",
            Xf: "aw_basket_type",
            Nc: "campaign_content",
            Oc: "campaign_id",
            Pc: "campaign_medium",
            Qc: "campaign_name",
            Rc: "campaign",
            Sc: "campaign_source",
            Tc: "campaign_term",
            lb: "client_id",
            ui: "rnd",
            Yf: "consent_update_type",
            vi: "content_group",
            wi: "content_type",
            Za: "conversion_cookie_prefix",
            Uc: "conversion_id",
            ra: "conversion_linker",
            xi: "conversion_linker_disabled",
            Ub: "conversion_api",
            Ve: "cookie_deprecation",
            Va: "cookie_domain",
            Wa: "cookie_expires",
            ab: "cookie_flags",
            uc: "cookie_name",
            Eb: "cookie_path",
            Na: "cookie_prefix",
            vc: "cookie_update",
            wc: "country",
            za: "currency",
            Ld: "customer_lifetime_value",
            Vc: "custom_map",
            Zf: "gcldc",
            Md: "dclid",
            yi: "debug_mode",
            ka: "developer_id",
            zi: "disable_merchant_reported_purchases",
            Wc: "dc_custom_params",
            Ai: "dc_natural_search",
            cg: "dynamic_event_settings",
            dg: "affiliation",
            Nd: "checkout_option",
            We: "checkout_step",
            eg: "coupon",
            Xc: "item_list_name",
            Xe: "list_name",
            Bi: "promotions",
            Yc: "shipping",
            Ye: "tax",
            Od: "engagement_time_msec",
            Pd: "enhanced_client_id",
            Qd: "enhanced_conversions",
            fg: "enhanced_conversions_automatic_settings",
            Rd: "estimated_delivery_date",
            Ze: "euid_logged_in_state",
            Zc: "event_callback",
            zk: "event_category",
            ob: "event_developer_id_string",
            Ak: "event_label",
            xc: "event",
            Sd: "event_settings",
            Td: "event_timeout",
            Bk: "description",
            Ck: "fatal",
            Ci: "experiments",
            af: "firebase_id",
            yc: "first_party_collection",
            Ud: "_x_20",
            pb: "_x_19",
            Di: "fledge_drop_reason",
            gg: "fledge",
            hg: "flight_error_code",
            ig: "flight_error_message",
            Ei: "fl_activity_category",
            Fi: "fl_activity_group",
            jg: "fl_advertiser_id",
            Gi: "fl_ar_dedupe",
            kg: "match_id",
            Hi: "fl_random_number",
            Ii: "tran",
            Ji: "u",
            Vd: "gac_gclid",
            zc: "gac_wbraid",
            lg: "gac_wbraid_multiple_conversions",
            mg: "ga_restrict_domain",
            ng: "ga_temp_client_id",
            Ac: "gdpr_applies",
            og: "geo_granularity",
            Fb: "value_callback",
            qb: "value_key",
            bd: "google_ng",
            Vb: "google_signals",
            pg: "google_tld",
            Wd: "groups",
            qg: "gsa_experiment_id",
            Ki: "gtm_up",
            Gb: "iframe_state",
            dd: "ignore_referrer",
            bf: "internal_traffic_results",
            Wb: "is_legacy_converted",
            Hb: "is_legacy_loaded",
            Xd: "is_passthrough",
            ed: "_lps",
            Oa: "language",
            Yd: "legacy_developer_id_string",
            sa: "linker",
            Bc: "accept_incoming",
            sb: "decorate_forms",
            W: "domains",
            Ib: "url_position",
            rg: "method",
            Dk: "name",
            fd: "new_customer",
            sg: "non_interaction",
            Li: "optimize_id",
            Mi: "page_hostname",
            gd: "page_path",
            Da: "page_referrer",
            Jb: "page_title",
            ug: "passengers",
            vg: "phone_conversion_callback",
            Ni: "phone_conversion_country_code",
            wg: "phone_conversion_css_class",
            Oi: "phone_conversion_ids",
            xg: "phone_conversion_number",
            yg: "phone_conversion_options",
            zg: "_protected_audience_enabled",
            hd: "quantity",
            Zd: "redact_device_info",
            cf: "referral_exclusion_definition",
            Xb: "restricted_data_processing",
            Pi: "retoken",
            Ek: "sample_rate",
            df: "screen_name",
            Kb: "screen_resolution",
            Qi: "search_term",
            Ja: "send_page_view",
            Yb: "send_to",
            jd: "server_container_url",
            kd: "session_duration",
            ae: "session_engaged",
            ef: "session_engaged_time",
            tb: "session_id",
            be: "session_number",
            ff: "_shared_user_id",
            ld: "delivery_postal_code",
            Fk: "temporary_client_id",
            hf: "topmost_url",
            Ri: "tracking_id",
            jf: "traffic_type",
            Aa: "transaction_id",
            Lb: "transport_url",
            Ag: "trip_type",
            Zb: "update",
            Xa: "url_passthrough",
            kf: "_user_agent_architecture",
            lf: "_user_agent_bitness",
            nf: "_user_agent_full_version_list",
            pf: "_user_agent_mobile",
            qf: "_user_agent_model",
            rf: "_user_agent_platform",
            tf: "_user_agent_platform_version",
            uf: "_user_agent_wow64",
            Ea: "user_data",
            Bg: "user_data_auto_latency",
            Cg: "user_data_auto_meta",
            Dg: "user_data_auto_multi",
            Eg: "user_data_auto_selectors",
            Fg: "user_data_auto_status",
            md: "user_data_mode",
            ce: "user_data_settings",
            Ba: "user_id",
            cb: "user_properties",
            Si: "_user_region",
            de: "us_privacy_string",
            na: "value",
            Gg: "wbraid_multiple_conversions",
            aj: "_host_name",
            bj: "_in_page_command",
            cj: "_is_passthrough_cid",
            Nb: "non_personalized_ads",
            je: "_sst_parameters",
            nb: "conversion_label",
            wa: "page_location",
            rb: "global_developer_id_string",
            Cc: "tc_privacy_string"
        }
    }
      , Xh = {}
      , Yh = Object.freeze((Xh[Q.g.ma] = 1,
    Xh[Q.g.Te] = 1,
    Xh[Q.g.Gd] = 1,
    Xh[Q.g.kb] = 1,
    Xh[Q.g.da] = 1,
    Xh[Q.g.Va] = 1,
    Xh[Q.g.Wa] = 1,
    Xh[Q.g.ab] = 1,
    Xh[Q.g.uc] = 1,
    Xh[Q.g.Eb] = 1,
    Xh[Q.g.Na] = 1,
    Xh[Q.g.vc] = 1,
    Xh[Q.g.Vc] = 1,
    Xh[Q.g.ka] = 1,
    Xh[Q.g.cg] = 1,
    Xh[Q.g.Zc] = 1,
    Xh[Q.g.Sd] = 1,
    Xh[Q.g.Td] = 1,
    Xh[Q.g.yc] = 1,
    Xh[Q.g.mg] = 1,
    Xh[Q.g.Vb] = 1,
    Xh[Q.g.pg] = 1,
    Xh[Q.g.Wd] = 1,
    Xh[Q.g.bf] = 1,
    Xh[Q.g.Wb] = 1,
    Xh[Q.g.Hb] = 1,
    Xh[Q.g.sa] = 1,
    Xh[Q.g.cf] = 1,
    Xh[Q.g.Xb] = 1,
    Xh[Q.g.Ja] = 1,
    Xh[Q.g.Yb] = 1,
    Xh[Q.g.jd] = 1,
    Xh[Q.g.kd] = 1,
    Xh[Q.g.ef] = 1,
    Xh[Q.g.ld] = 1,
    Xh[Q.g.Lb] = 1,
    Xh[Q.g.Zb] = 1,
    Xh[Q.g.ce] = 1,
    Xh[Q.g.cb] = 1,
    Xh[Q.g.je] = 1,
    Xh));
    Object.freeze([Q.g.wa, Q.g.Da, Q.g.Jb, Q.g.Oa, Q.g.df, Q.g.Ba, Q.g.af, Q.g.vi]);
    var Zh = {}
      , $h = Object.freeze((Zh[Q.g.di] = 1,
    Zh[Q.g.ei] = 1,
    Zh[Q.g.fi] = 1,
    Zh[Q.g.gi] = 1,
    Zh[Q.g.hi] = 1,
    Zh[Q.g.ii] = 1,
    Zh[Q.g.ji] = 1,
    Zh[Q.g.ki] = 1,
    Zh[Q.g.li] = 1,
    Zh[Q.g.Mc] = 1,
    Zh))
      , ai = {}
      , bi = Object.freeze((ai[Q.g.Sf] = 1,
    ai[Q.g.Tf] = 1,
    ai[Q.g.oc] = 1,
    ai[Q.g.qc] = 1,
    ai[Q.g.Uf] = 1,
    ai[Q.g.Rb] = 1,
    ai[Q.g.rc] = 1,
    ai[Q.g.hb] = 1,
    ai[Q.g.Cb] = 1,
    ai[Q.g.ib] = 1,
    ai[Q.g.Ia] = 1,
    ai[Q.g.sc] = 1,
    ai[Q.g.Ma] = 1,
    ai[Q.g.Vf] = 1,
    ai))
      , ci = Object.freeze([Q.g.ma, Q.g.kb, Q.g.vc, Q.g.yc, Q.g.dd, Q.g.Ja, Q.g.Zb])
      , di = Object.freeze([].concat(ra(ci)))
      , ei = Object.freeze([Q.g.Wa, Q.g.Td, Q.g.kd, Q.g.ef, Q.g.Od])
      , fi = Object.freeze([].concat(ra(ei)))
      , gi = {}
      , hi = (gi[Q.g.R] = "1",
    gi[Q.g.U] = "2",
    gi[Q.g.P] = "3",
    gi[Q.g.ya] = "4",
    gi)
      , ii = {}
      , ji = Object.freeze((ii[Q.g.ma] = 1,
    ii[Q.g.Gd] = 1,
    ii[Q.g.Ca] = 1,
    ii[Q.g.Tb] = 1,
    ii[Q.g.Ue] = 1,
    ii[Q.g.Hd] = 1,
    ii[Q.g.Id] = 1,
    ii[Q.g.Jd] = 1,
    ii[Q.g.da] = 1,
    ii[Q.g.Kd] = 1,
    ii[Q.g.Za] = 1,
    ii[Q.g.ra] = 1,
    ii[Q.g.Va] = 1,
    ii[Q.g.Wa] = 1,
    ii[Q.g.ab] = 1,
    ii[Q.g.Na] = 1,
    ii[Q.g.za] = 1,
    ii[Q.g.Ld] = 1,
    ii[Q.g.ka] = 1,
    ii[Q.g.zi] = 1,
    ii[Q.g.Qd] = 1,
    ii[Q.g.Rd] = 1,
    ii[Q.g.af] = 1,
    ii[Q.g.yc] = 1,
    ii[Q.g.Wb] = 1,
    ii[Q.g.Hb] = 1,
    ii[Q.g.Oa] = 1,
    ii[Q.g.fd] = 1,
    ii[Q.g.wa] = 1,
    ii[Q.g.Da] = 1,
    ii[Q.g.vg] = 1,
    ii[Q.g.wg] = 1,
    ii[Q.g.xg] = 1,
    ii[Q.g.yg] = 1,
    ii[Q.g.Xb] = 1,
    ii[Q.g.Ja] = 1,
    ii[Q.g.Yb] = 1,
    ii[Q.g.jd] = 1,
    ii[Q.g.ld] = 1,
    ii[Q.g.Aa] = 1,
    ii[Q.g.Lb] = 1,
    ii[Q.g.Zb] = 1,
    ii[Q.g.Xa] = 1,
    ii[Q.g.Ea] = 1,
    ii[Q.g.Ba] = 1,
    ii[Q.g.na] = 1,
    ii))
      , ki = {}
      , li = Object.freeze((ki.search = "s",
    ki.youtube = "y",
    ki.playstore = "p",
    ki.shopping = "h",
    ki.ads = "a",
    ki.maps = "m",
    ki));
    Object.freeze(Q.g);
    var mi = {}
      , ni = G.google_tag_manager = G.google_tag_manager || {};
    mi.Kg = "46j0";
    mi.ie = Number("0") || 0;
    mi.Ya = "dataLayer";
    mi.Zm = "ChAI8MnUswYQope5+63zp/RyEiUA1FVQTg2K2rs/CFzUTx2+frIMaidCrcPj19N3yyXV5rZdr9QRGgLGBQ\x3d\x3d";
    var oi = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, pi = {
        __paused: 1,
        __tg: 1
    }, qi;
    for (qi in oi)
        oi.hasOwnProperty(qi) && (pi[qi] = 1);
    var ri = zb("true"), si, ti = !1;
    ti = !0;
    si = ti;
    var ui, vi = !1;
    ui = vi;
    var wi, xi = !1;
    wi = xi;
    mi.Ed = "www.googletagmanager.com";
    var yi = "" + mi.Ed + (si ? "/gtag/js" : "/gtm.js")
      , zi = null
      , Ai = null
      , Bi = {}
      , Ci = {};
    function Di() {
        var a = ni.sequence || 1;
        ni.sequence = a + 1;
        return a
    }
    mi.mk = "true";
    var Ei = "";
    mi.yf = Ei;
    var Fi = new function() {
        this.j = "";
        this.H = this.D = !1;
        this.Pa = this.O = this.Z = this.K = ""
    }
    ;
    function Gi() {
        var a = Fi.K.length;
        return Fi.K[a - 1] === "/" ? Fi.K.substring(0, a - 1) : Fi.K
    }
    function Hi(a) {
        for (var b = {}, c = oa(a.split("|")), d = c.next(); !d.done; d = c.next())
            b[d.value] = !0;
        return b
    }
    var Ii = new wb
      , Ji = {}
      , Ki = {}
      , Ni = {
        name: mi.Ya,
        set: function(a, b) {
            k(Kb(a, b), Ji);
            Li()
        },
        get: function(a) {
            return Mi(a, 2)
        },
        reset: function() {
            Ii = new wb;
            Ji = {};
            Li()
        }
    };
    function Mi(a, b) {
        return b != 2 ? Ii.get(a) : Oi(a)
    }
    function Oi(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Ji, e = 0; e < c.length; e++) {
            if (d === null)
                return !1;
            if (d === void 0)
                break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1)
                return
        }
        return d
    }
    function Pi(a, b) {
        Ki.hasOwnProperty(a) || (Ii.set(a, b),
        k(Kb(a, b), Ji),
        Li())
    }
    function Qi() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = Mi(c, 1);
            if (Array.isArray(d) || Ya(d))
                d = k(d);
            Ki[c] = d
        }
    }
    function Li(a) {
        z(Ki, function(b, c) {
            Ii.set(b, c);
            k(Kb(b), Ji);
            k(Kb(b, c), Ji);
            a && delete Ki[b]
        })
    }
    function Ri(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Oi(a) : Ii.get(a);
        Va(d) === "array" || Va(d) === "object" ? c = k(d) : c = d;
        return c
    }
    ;var Si = function(a, b, c) {
        if (!c)
            return !1;
        var d = c.selector_type, e = String(c.value), f;
        if (d === "js_variable") {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var m = g[h].trim();
                if (m) {
                    if (m.indexOf("dataLayer.") === 0)
                        f = Mi(m.substring(10));
                    else {
                        var n = m.split(".");
                        f = G[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]]
                    }
                    if (f !== void 0)
                        break
                }
            }
        } else if (d === "css_selector" && qh) {
            var q = ph(e);
            if (q && q.length > 0) {
                f = [];
                for (var r = 0; r < q.length && r < (b === "email" || b === "phone_number" ? 5 : 1); r++)
                    f.push(Hc(q[r]) || Bb(q[r].value));
                f = f.length === 1 ? f[0] : f
            }
        }
        return f ? (a[b] = f,
        !0) : !1
    }
      , Ti = function(a) {
        if (a) {
            var b = {}
              , c = !1;
            c = Si(b, "email", a.email) || c;
            c = Si(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = Si(f, "first_name", d[e].first_name) || c;
                c = Si(f, "last_name", d[e].last_name) || c;
                c = Si(f, "street", d[e].street) || c;
                c = Si(f, "city", d[e].city) || c;
                c = Si(f, "region", d[e].region) || c;
                c = Si(f, "country", d[e].country) || c;
                c = Si(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ? b : void 0
        }
    }
      , Ui = function(a) {
        return Ya(a) ? !!a.enable_code : !1
    };
    function Vi(a, b) {
        if (a === "")
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var Wi = []
      , Xi = {};
    function Yi(a) {
        return Wi[a] === void 0 ? !1 : Wi[a]
    }
    ;var Zi = [];
    function $i(a) {
        switch (a) {
        case 0:
            return 0;
        case 39:
            return 1;
        case 40:
            return 2;
        case 53:
            return 3;
        case 61:
            return 6;
        case 64:
            return 8;
        case 73:
            return 4;
        case 78:
            return 5;
        case 82:
            return 7
        }
    }
    function S(a) {
        Zi[a] = !0;
        var b = $i(a);
        b !== void 0 && (Wi[b] = !0)
    }
    S(27);
    S(23);
    S(24);
    S(25);
    S(26);
    S(41);
    S(67);
    S(50);
    S(63);
    S(30);
    S(15);
    S(85);
    S(14);
    S(89);
    S(84);
    S(54);
    S(74);
    S(7);
    S(42);
    S(4);
    S(71);
    S(80);
    S(60);
    S(57);
    S(72);
    S(93);
    S(90);
    S(73);
    S(5);
    S(78);
    Zi[58] = !0;
    Zi[59] = !0;
    Xi[1] = Vi('1', 6E4);
    Xi[3] = Vi('10', 1);
    Xi[2] = Vi('', 50);
    S(12);
    S(56);
    S(81);
    S(45);
    S(70);
    function U(a) {
        return !!Zi[a]
    }
    var dj = /:[0-9]+$/
      , ej = /^\d+\.fls\.doubleclick\.net$/
      , fj = function(a, b, c, d) {
        for (var e = [], f = oa(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var h = oa(g.value.split("="))
              , m = h.next().value
              , n = qa(h);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c)
                    return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }
      , ij = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port")
            a.protocol = gj(a.protocol) || gj(G.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : G.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || G.location.hostname).replace(dj, "").toLowerCase());
        return hj(a, b, c, d, e)
    }
      , hj = function(a, b, c, d, e) {
        var f, g = gj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = jj(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(dj, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || mb("TAGGING", 1);
            f = a.pathname.substr(0, 1) === "/" ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = fj(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = n.length > 1 ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , gj = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , jj = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , kj = {}
      , lj = 0
      , V = function(a) {
        var b = kj[a];
        if (!b) {
            var c = H.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || mb("TAGGING", 1),
            d = "/" + d);
            var e = c.hostname.replace(dj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            lj < 5 && (kj[a] = b,
            lj++)
        }
        return b
    }
      , mj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = V(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        g[0] === "?" && (g = g.substring(1));
        h[0] === "#" && (h = h.substring(1));
        g = c(g);
        h = c(h);
        g !== "" && (g = "?" + g);
        h !== "" && (h = "#" + h);
        var m = "" + f + g + h;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }
      , nj = function(a) {
        var b = V(G.location.href)
          , c = ij(b, "host", !1);
        if (c && c.match(ej)) {
            var d = ij(b, "path").split(a + "=");
            if (d.length > 1)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var oj = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };
    function pj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return V("" + c + b).href
        }
    }
    function qj() {
        return Fi.D || ui
    }
    function rj() {
        return !!mi.yf && mi.yf.split("@@").join("") !== "SGTM_TOKEN"
    }
    function sj(a) {
        for (var b = oa([Q.g.jd, Q.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = W(a, c.value);
            if (d)
                return d
        }
    }
    function tj(a, b) {
        return Fi.D ? "" + Gi() + (b ? oj[a] || "" : "") : a
    }
    ;function uj(a) {
        var b = String(a[Ie.oa] || "").replace(/_/g, "");
        b.indexOf("cvt") === 0 && (b = "cvt");
        return b
    }
    var vj = G.location.search.indexOf("?gtm_latency=") >= 0 || G.location.search.indexOf("&gtm_latency=") >= 0;
    var wj = {
        sampleRate: "0.005000",
        ik: "",
        Xm: "0.005"
    }, xj = Math.random(), yj;
    if (!(yj = vj)) {
        var zj = wj.sampleRate;
        yj = xj < Number(zj)
    }
    var Aj = yj
      , Bj = vj || !U(44) && Aj || U(44) && xj >= 1 - Number(wj.Xm);
    function Cj(a, b) {
        var c = Dj();
        c.pending || (c.pending = []);
        tb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
    var Ej = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    };
    function Dj() {
        var a = uc("google_tag_data", {})
          , b = a.tidr;
        b || (b = new Ej,
        a.tidr = b);
        return b
    }
    ;var Fj = {}
      , Gj = !1
      , Nf = {
        ctid: "G-NVVV9T5J9P",
        canonicalContainerId: "119457462",
        Nj: "G-NVVV9T5J9P|GT-PBNTGCX",
        Oj: "G-NVVV9T5J9P"
    };
    Fj.fe = zb("");
    function Hj() {
        var a = Ij();
        return Gj ? a.map(Jj) : a
    }
    function Kj() {
        var a = Lj();
        return Gj ? a.map(Jj) : a
    }
    function Mj() {
        return Nj(Nf.ctid)
    }
    function Oj() {
        return Nj(Nf.canonicalContainerId || "_" + Nf.ctid)
    }
    function Ij() {
        return Nf.Nj ? Nf.Nj.split("|") : [Nf.ctid]
    }
    function Lj() {
        return Nf.Oj ? Nf.Oj.split("|") : []
    }
    function Pj() {
        var a = Qj(Xj())
          , b = a && a.parent;
        if (b)
            return Qj(b)
    }
    function Yj() {
        var a = Qj(Xj());
        if (a) {
            for (; a.parent; ) {
                var b = Qj(a.parent);
                if (!b)
                    break;
                a = b
            }
            return a
        }
    }
    function Qj(a) {
        var b = Dj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
    function Nj(a) {
        return Gj ? Jj(a) : a
    }
    function Jj(a) {
        return "siloed_" + a
    }
    function Zj(a) {
        return Gj ? ak(a) : a
    }
    function ak(a) {
        a = String(a);
        return a.indexOf("siloed_") === 0 ? a.substring(7) : a
    }
    function bk() {
        var a = !1;
        if (a) {
            var b = Dj();
            if (b.siloed) {
                for (var c = [], d = Ij().map(Jj), e = Lj().map(Jj), f = {}, g = 0; g < b.siloed.length; f = {
                    Bf: void 0
                },
                g++)
                    f.Bf = b.siloed[g],
                    !Gj && tb(f.Bf.isDestination ? e : d, function(h) {
                        return function(m) {
                            return m === h.Bf.ctid
                        }
                    }(f)) ? Gj = !0 : c.push(f.Bf);
                b.siloed = c
            }
        }
    }
    function ck() {
        var a = Dj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Hj(), f = Kj(), g = {}, h = 0; h < a.pending.length; g = {
                Ke: void 0
            },
            h++)
                g.Ke = a.pending[h],
                tb(g.Ke.target.isDestination ? f : e, function(m) {
                    return function(n) {
                        return n === m.Ke.target.ctid
                    }
                }(g)) ? d || (b = g.Ke.onLoad,
                d = !0) : c.push(g.Ke);
            a.pending = c;
            if (b)
                try {
                    b(Oj())
                } catch (m) {}
        }
    }
    function dk() {
        for (var a = Nf.ctid, b = Hj(), c = Kj(), d = function(n, p) {
            var q = {
                canonicalContainerId: Nf.canonicalContainerId,
                scriptContainerId: a,
                state: 2,
                containers: b.slice(),
                destinations: c.slice()
            };
            sc && (q.scriptElement = sc);
            tc && (q.scriptSource = tc);
            var r = p ? e.destination : e.container
              , t = r[n];
            t ? (p && t.state === 0 && P(93),
            Object.assign(t, q)) : r[n] = q
        }, e = Dj(), f = oa(b), g = f.next(); !g.done; g = f.next())
            d(g.value, !1);
        for (var h = oa(c), m = h.next(); !m.done; m = h.next())
            d(m.value, !0);
        e.canonical[Oj()] = {};
        ck()
    }
    function ek(a) {
        return !!Dj().container[a]
    }
    function fk(a) {
        var b = Dj().destination[a];
        return !!b && !!b.state
    }
    function Xj() {
        return {
            ctid: Mj(),
            isDestination: Fj.fe
        }
    }
    function gk(a) {
        var b = Dj();
        (b.siloed = b.siloed || []).push(a)
    }
    function hk() {
        var a = Dj().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1)
                return !0;
        return !1
    }
    function ik() {
        var a = {};
        z(Dj().destination, function(b, c) {
            c.state === 0 && (a[ak(b)] = c)
        });
        return a
    }
    function jk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var kk = {
        hk: Number("5"),
        Rn: Number("")
    }
      , lk = []
      , mk = [];
    function nk(a) {
        lk.push(a)
    }
    var ok = !1
      , pk = "?id=" + Nf.ctid
      , qk = void 0
      , rk = {}
      , sk = void 0
      , tk = new function() {
        var a = 5;
        kk.hk > 0 && (a = kk.hk);
        this.D = a;
        this.j = 0;
        this.H = []
    }
      , uk = 1E3;
    function vk(a, b, c, d) {
        var e = qk;
        if (e === void 0)
            if (a)
                e = 0;
            else if (c)
                e = Di();
            else
                return "";
        for (var f = [tj("https://www.googletagmanager.com"), a ? "/td" : "/a", pk], g = oa(a ? mk : lk), h = g.next(); !h.done; h = g.next())
            for (var m = h.value, n = m({
                eventId: e,
                Sa: !!b,
                Dj: !!d,
                mc: function() {
                    ok = !0
                }
            }), p = oa(n), q = p.next(); !q.done; q = p.next()) {
                var r = oa(q.value)
                  , t = r.next().value
                  , u = r.next().value;
                f.push("&" + t + "=" + u)
            }
        f.push("&z=0");
        return f.join("")
    }
    function wk() {
        if (Bj) {
            var a = vk(!0, !0);
            ok && (Dc(a),
            ok = !1)
        }
    }
    function xk() {
        sk && (G.clearTimeout(sk),
        sk = void 0);
        if (qk !== void 0 && yk) {
            U(45) || wk();
            var a;
            (a = rk[qk]) || (a = tk.j < tk.D ? !1 : Db() - tk.H[tk.j % tk.D] < 1E3);
            if (a || uk-- <= 0)
                P(1),
                rk[qk] = !0;
            else {
                var b = tk.j++ % tk.D;
                tk.H[b] = Db();
                var c = vk(!1, !0);
                Dc(c);
                yk = ok = !1
            }
        }
    }
    function zk() {
        if (Bj) {
            var a = vk(!0, !0, !0, !0);
            ok && (Nc(a),
            ok = !1)
        }
    }
    var yk = !1;
    function Ak(a) {
        rk[a] && !U(45) ? wk() : (a !== qk && (xk(),
        qk = a),
        yk = !0,
        sk || (sk = G.setTimeout(xk, 500)),
        vk(!1).length >= 2022 && xk())
    }
    var Bk = ub();
    function Ck() {
        Bk = ub()
    }
    function Dk() {
        return [["v", "3"], ["t", "t"], ["pid", String(Bk)]]
    }
    var Ek = "/td?id=" + Nf.ctid
      , Fk = ["v", "t", "pid", "dl", "tdp"]
      , Gk = {}
      , Hk = {}
      , Ik = {};
    function Jk(a, b, c, d) {
        Hk[a] = b;
        (c === void 0 || c) && Kk(a);
        d !== void 0 && (Ik[a] = d)
    }
    function Kk(a, b) {
        if (Gk[a] === void 0 || (b === void 0 ? 0 : b))
            Gk[a] = !0
    }
    function Lk() {
        var a = Object.keys(Gk).filter(function(b) {
            return Gk[b] === !0 && Hk[b] !== void 0
        }).map(function(b) {
            var c = Hk[b];
            typeof c === "function" && (c = c());
            return c ? "&" + b + "=" + c : ""
        }).join("");
        return "" + tj("https://www.googletagmanager.com") + Ek + ("" + a + "&z=0")
    }
    function Mk() {
        Object.keys(Gk).forEach(function(a) {
            Fk.indexOf(a) < 0 && (Gk[a] = !1)
        })
    }
    function Nk(a) {
        a = a === void 0 ? !1 : a;
        if (Bj && U(45))
            if (U(43)) {
                var b = Lk();
                a ? Nc(b) : Dc(b);
                Mk()
            } else
                wk()
    }
    function Ok() {
        Object.keys(Ik).some(function(a) {
            var b = Ik[a]();
            b && Kk(a, !0);
            return b
        }) && Nk(!0)
    }
    var Pk = ub();
    function Qk() {
        Pk = ub()
    }
    function Rk() {
        U(43) ? (Jk("v", "3"),
        Jk("t", "t"),
        Jk("pid", function() {
            return String(Pk)
        }),
        Ec(G, "pagehide", Ok),
        G.setInterval(Qk, 864E5)) : mk.push(Dk)
    }
    var Sk = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , Tk = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Uk = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }
      , Vk = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    var Wk, Xk;
    a: {
        for (var Yk = ["CLOSURE_FLAGS"], Zk = Ca, $k = 0; $k < Yk.length; $k++)
            if (Zk = Zk[Yk[$k]],
            Zk == null) {
                Xk = null;
                break a
            }
        Xk = Zk
    }
    var al = Xk && Xk[610401301];
    Wk = al != null ? al : !1;
    function bl() {
        var a = Ca.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var cl, dl = Ca.navigator;
    cl = dl ? dl.userAgentData || null : null;
    function el(a) {
        return Wk ? cl ? cl.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }
    function fl(a) {
        return bl().indexOf(a) != -1
    }
    ;function gl() {
        return Wk ? !!cl && cl.brands.length > 0 : !1
    }
    function hl() {
        return gl() ? !1 : fl("Opera")
    }
    function il() {
        return fl("Firefox") || fl("FxiOS")
    }
    function jl() {
        return gl() ? el("Chromium") : (fl("Chrome") || fl("CriOS")) && !(gl() ? 0 : fl("Edge")) || fl("Silk")
    }
    ;function kl() {
        return Wk ? !!cl && !!cl.platform : !1
    }
    function ll() {
        return fl("iPhone") && !fl("iPod") && !fl("iPad")
    }
    function ml() {
        ll() || fl("iPad") || fl("iPod")
    }
    ;var nl = function(a) {
        nl[" "](a);
        return a
    };
    nl[" "] = function() {}
    ;
    hl();
    gl() || fl("Trident") || fl("MSIE");
    fl("Edge");
    !fl("Gecko") || bl().toLowerCase().indexOf("webkit") != -1 && !fl("Edge") || fl("Trident") || fl("MSIE") || fl("Edge");
    bl().toLowerCase().indexOf("webkit") != -1 && !fl("Edge") && fl("Mobile");
    kl() || fl("Macintosh");
    kl() || fl("Windows");
    (kl() ? cl.platform === "Linux" : fl("Linux")) || kl() || fl("CrOS");
    kl() || fl("Android");
    ll();
    fl("iPad");
    fl("iPod");
    ml();
    bl().toLowerCase().indexOf("kaios");
    var ol = function(a, b, c, d) {
        for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (g == 38 || g == 63) {
                var h = a.charCodeAt(e + f);
                if (!h || h == 61 || h == 38 || h == 35)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , pl = /#|$/
      , ql = function(a, b) {
        var c = a.search(pl)
          , d = ol(a, 0, b, c);
        if (d < 0)
            return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    }
      , rl = /[?&]($|#)/
      , sl = function(a, b, c) {
        for (var d, e = a.search(pl), f = 0, g, h = []; (g = ol(a, f, b, e)) >= 0; )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(rl, "$1");
        var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            r < 0 && (r = d.length);
            var t = d.indexOf("?"), u;
            t < 0 || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var tl = function(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null)
                a: {
                    try {
                        nl(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , ul = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function vl(a) {
        if (!a || !H.head)
            return null;
        var b = wl("META");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var xl = function(a) {
        if (G.top == G)
            return 0;
        if (a === void 0 ? 0 : a) {
            var b = G.location.ancestorOrigins;
            if (b)
                return b[b.length - 1] == G.location.origin ? 1 : 2
        }
        return tl(G.top) ? 1 : 2
    }
      , wl = function(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var yl = "", zl, Al = [], Bl = !1;
    function Cl() {
        var a = V(G.location.href);
        return a.hostname + a.pathname
    }
    function Dl() {
        var a = [];
        yl && a.push(["dl", encodeURIComponent(yl)]);
        Al.length > 0 && a.push(["tdp", Al.join(".")]);
        zl !== void 0 && a.push(["frm", String(zl)]);
        return a
    }
    var El = function(a) {
        var b = Bl ? [] : Dl();
        !Bl && a.Sa && (Bl = !0,
        b.length && a.mc());
        return b
    };
    function Fl() {
        if (U(43)) {
            var a = Cl();
            a && Jk("dl", encodeURIComponent(a));
            Jk("tdp", function() {
                return Al.length > 0 ? Al.join(".") : void 0
            });
            var b = xl(!0);
            b !== void 0 && Jk("frm", String(b))
        } else
            mk.push(El)
    }
    ;var Gl = []
      , Hl = [];
    function Il(a) {
        if (U(43))
            Jk(a, "1");
        else {
            if (Hl.indexOf(a) !== -1)
                return;
            Gl.push(a);
            Hl.push(a)
        }
        Nk()
    }
    function Jl(a) {
        if (!Gl.length)
            return [];
        for (var b = Dl(), c = oa(Gl), d = c.next(); !d.done; d = c.next())
            b.push([d.value, "1"]);
        a.Sa && (a.mc(),
        Gl.length = 0);
        return b
    }
    ;function Kl(a) {
        mb("HEALTH", a)
    }
    ;var Ll;
    try {
        Ll = JSON.parse(kb("eyIwIjoiUFQiLCIxIjoiUFQtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5wdCIsIjQiOiJyZWdpb24xIiwiNSI6ZmFsc2UsIjYiOnRydWUsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
    } catch (a) {
        P(123),
        Kl(2),
        Ll = {}
    }
    function Ml() {
        return Ll["0"] || ""
    }
    function Nl() {
        return Ll["1"] || ""
    }
    function Ol() {
        var a = !1;
        a = !!Ll["2"];
        return a
    }
    function Pl() {
        return Ll["6"] !== !1
    }
    function Ql() {
        var a = "";
        a = Ll["4"] || "";
        return a
    }
    function Rl() {
        var a = !1;
        a = !!Ll["5"];
        return a
    }
    function Sl() {
        var a = "";
        a = Ll["3"] || "";
        return a
    }
    var Tl = new function(a, b) {
        this.j = a;
        this.defaultValue = b === void 0 ? !1 : b
    }
    (1933);
    function Ul() {
        var a = uc("google_tag_data", {});
        return a.ics = a.ics || new Vl
    }
    var Vl = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    Vl.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        mb("TAGGING", 19);
        b == null ? mb("TAGGING", 18) : Wl(this, a, b === "granted", c, d, e, f, g)
    }
    ;
    Vl.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++)
            Wl(this, a[d], void 0, void 0, "", "", b, c)
    }
    ;
    var Wl = function(a, b, c, d, e, f, g, h) {
        var m = a.entries
          , n = m[b] || {}
          , p = n.region
          , q = d && l(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0)
              , t = {
                region: q,
                declare_region: n.declare_region,
                implicit: n.implicit,
                default: c !== void 0 ? c : n.default,
                declare: n.declare,
                update: n.update,
                quiet: r
            };
            if (e !== "" || n.default !== !1)
                m[b] = t;
            r && G.setTimeout(function() {
                m[b] === t && t.quiet && (mb("TAGGING", 2),
                a.waitPeriodTimedOut = !0,
                a.clearTimeout(b, void 0, h),
                a.notifyListeners())
            }, g)
        }
    };
    ca = Vl.prototype;
    ca.clearTimeout = function(a, b, c) {
        var d = [a], e = (c == null ? void 0 : c.delegatedConsentTypes) || {}, f;
        for (f in e)
            e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {}
          , h = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = oa(d), n = m.next(); !n.done; n = m.next())
                Xl(this, n.value)
        } else if (b !== void 0 && h !== b)
            for (var p = oa(d), q = p.next(); !q.done; q = p.next())
                Xl(this, q.value)
    }
    ;
    ca.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c)
              , e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    }
    ;
    ca.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries
          , g = f[a] || {}
          , h = g.declare_region
          , m = c && l(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? h !== e : !m && !h)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1)
                f[a] = n
        }
    }
    ;
    ca.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries
          , d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    }
    ;
    ca.getConsentState = function(a, b) {
        var c = this.entries
          , d = c[a] || {}
          , e = d.update;
        if (e !== void 0)
            return e ? 1 : 2;
        e = d.default;
        if (e !== void 0)
            return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var f = c[b.delegatedConsentTypes[a]] || {};
            e = f.update;
            if (e !== void 0)
                return e ? 1 : 2;
            e = f.default;
            if (e !== void 0)
                return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0)
            return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    }
    ;
    ca.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            wl: b
        })
    }
    ;
    var Xl = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Pj = !0)
        }
    };
    Vl.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Pj) {
                d.Pj = !1;
                try {
                    d.wl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    ;
    var Zl = function() {
        var a = Yl
          , b = "nh";
        if (a.nh && a.hasOwnProperty(b))
            return a.nh;
        var c = new a;
        return a.nh = c
    };
    var Yl = function() {
        var a = {};
        this.j = function() {
            var b = Tl.j
              , c = Tl.defaultValue;
            return a[b] != null ? a[b] : c
        }
        ;
        this.D = function() {
            a[Tl.j] = !0
        }
    };
    var $l = !1
      , am = !1
      , bm = {
        delegatedConsentTypes: {},
        corePlatformServices: {},
        usedCorePlatformServices: !1,
        selectedAllCorePlatformServices: !1
    }
      , cm = function(a) {
        var b = Ul();
        b.accessedAny = !0;
        return (l(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, bm)) {
            case 1:
            case 3:
                return !0;
            case 2:
            case 4:
                return !1;
            default:
                return !0
            }
        })
    }
      , dm = function(a) {
        var b = Ul();
        b.accessedAny = !0;
        return b.getConsentState(a, bm)
    }
      , em = function(a) {
        for (var b = {}, c = oa(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = bm.corePlatformServices[e] !== !1
        }
        return b
    }
      , fm = function(a) {
        var b = Ul();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , gm = function() {
        if (!Zl().j())
            return !1;
        var a = Ul();
        a.accessedAny = !0;
        return a.active
    }
      , hm = function(a, b) {
        Ul().addListener(a, b)
    }
      , im = function(a, b) {
        Ul().notifyListeners(a, b)
    }
      , jm = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!fm(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            hm(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , km = function(a, b) {
        function c() {
            for (var h = [], m = 0; m < e.length; m++) {
                var n = e[m];
                cm(n) && !f[n] && h.push(n)
            }
            return h
        }
        function d(h) {
            for (var m = 0; m < h.length; m++)
                f[h[m]] = !0
        }
        var e = l(b) ? [b] : b
          , f = {}
          , g = c();
        g.length !== e.length && (d(g),
        hm(e, function(h) {
            function m(q) {
                q.length !== 0 && (d(q),
                h.consentTypes = q,
                a(h))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : G.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var lm = [Q.g.R, Q.g.U, Q.g.P, Q.g.ya], mm, nm;
    function om(a) {
        for (var b = a[Q.g.nc], c = Array.isArray(b) ? b : [b], d = {
            Ae: 0
        }; d.Ae < c.length; d = {
            Ae: d.Ae
        },
        ++d.Ae)
            z(a, function(e) {
                return function(f, g) {
                    if (f !== Q.g.nc) {
                        var h = c[e.Ae]
                          , m = Ml()
                          , n = Nl();
                        am = !0;
                        $l && mb("TAGGING", 20);
                        Ul().declare(f, g, h, m, n)
                    }
                }
            }(d))
    }
    function pm(a) {
        !nm && mm && Il("crc");
        nm = !0;
        var b = a[Q.g.nc];
        b && P(40);
        var c = a[Q.g.Qe];
        c && P(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
            Be: 0
        }; e.Be < d.length; e = {
            Be: e.Be
        },
        ++e.Be)
            z(a, function(f) {
                return function(g, h) {
                    if (g !== Q.g.nc && g !== Q.g.Qe) {
                        var m = d[f.Be]
                          , n = Number(c)
                          , p = Ml()
                          , q = Nl();
                        n = n === void 0 ? 0 : n;
                        $l = !0;
                        am && mb("TAGGING", 20);
                        Ul().default(g, h, m, p, q, n, bm)
                    }
                }
            }(e))
    }
    function qm(a, b) {
        mm = !0;
        z(a, function(c, d) {
            $l = !0;
            am && mb("TAGGING", 20);
            Ul().update(c, d, bm)
        });
        im(b.eventId, b.priorityId)
    }
    function rm(a) {
        a.hasOwnProperty("all") && z(li, function(b) {
            bm.selectedAllCorePlatformServices = !0;
            bm.corePlatformServices[b] = a.all === "granted";
            bm.usedCorePlatformServices = !0
        });
        z(a, function(b, c) {
            b !== "all" && (bm.corePlatformServices[b] = c === "granted",
            bm.usedCorePlatformServices = !0)
        })
    }
    function X(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return cm(b)
        })
    }
    function sm(a, b) {
        hm(a, b)
    }
    function tm(a, b) {
        km(a, b)
    }
    function um(a, b) {
        jm(a, b)
    }
    function vm() {
        var a = [Q.g.R, Q.g.ya, Q.g.P];
        Ul().waitForUpdate(a, 500, bm)
    }
    function wm(a) {
        for (var b = oa(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Ul().clearTimeout(d, void 0, bm)
        }
        im()
    }
    var xm = function() {
        if (ni.pscdl === void 0) {
            var a = function(b) {
                ni.pscdl = b
            };
            try {
                "cookieDeprecationLabel"in qc ? (a("pending"),
                qc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
        }
    };
    var ym = /[A-Z]+/
      , zm = /\s/;
    function Am(a, b) {
        if (l(a)) {
            a = Bb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (ym.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var h = g(f[1]);
                            h.length === 2 && (f[1] = h[0],
                            f.push(h[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || zm.test(f[m]) && (d !== "AW" || m !== 1))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        ia: d + "-" + f[0],
                        la: f
                    }
                }
            }
        }
    }
    function Bm(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Am(a[d], b);
            e && (c[e.id] = e)
        }
        Cm(c);
        var f = [];
        z(c, function(g, h) {
            f.push(h)
        });
        return f
    }
    function Cm(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.la[Dm[2]] && b.push(d.ia)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    var Em = {}
      , Dm = (Em[0] = 0,
    Em[1] = 0,
    Em[2] = 1,
    Em[3] = 0,
    Em[4] = 1,
    Em[5] = 2,
    Em[6] = 0,
    Em[7] = 0,
    Em[8] = 0,
    Em);
    var Fm = Number('') || 500
      , Gm = []
      , Hm = {}
      , Im = {}
      , Jm = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Km = {}
      , Lm = Object.freeze((Km[Q.g.Ja] = !0,
    Km))
      , Mm = H.location.search.indexOf("?gtm_diagnostics=") >= 0 || H.location.search.indexOf("&gtm_diagnostics=") >= 0
      , Nm = void 0;
    function Om(a, b) {
        if (b.length && Bj)
            if (U(45)) {
                var c;
                (c = Hm)[a] != null || (c[a] = []);
                Im[a] != null || (Im[a] = []);
                var d = b.filter(function(e) {
                    return !Im[a].includes(e)
                });
                Hm[a].push.apply(Hm[a], ra(d));
                Im[a].push.apply(Im[a], ra(d));
                !Nm && d.length > 0 && (U(43) || Ec(G, "pagehide", Pm),
                Nm = G.setTimeout(function() {
                    U(43) ? Kk("tdc", !0) : Fc(G, "pagehide", Pm);
                    Nk();
                    Gm.length = 0;
                    Hm = {};
                    Nm = void 0
                }, Fm))
            } else
                Gm.push(a + "*" + b.join("."))
    }
    function Qm(a, b, c) {
        if (Bj && a === "config") {
            var d, e = (d = Am(b)) == null ? void 0 : d.la;
            if (!(e && e.length > 1)) {
                var f, g = uc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var h = k(c.K);
                k(c.j, h);
                var m = [], n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = Rm(f[n], h);
                        p.length && (Mm && console.log(p),
                        m.push(n))
                    }
                m.length && (Om(b, m),
                mb("TAGGING", Jm[H.readyState] || 14));
                f[b] = h
            }
        }
    }
    function Sm(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Rm(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b)
            return [];
        var e = function(r, t) {
            var u;
            Va(t) === "object" ? u = t[r] : Va(t) === "array" && (u = t[r]);
            return u === void 0 ? Lm[r] : u
        }, f = Sm(a, b), g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var h = (d ? d + "." : "") + g
                  , m = e(g, a)
                  , n = e(g, b)
                  , p = Va(m) === "object" || Va(m) === "array"
                  , q = Va(n) === "object" || Va(n) === "array";
                if (p && q)
                    Rm(m, n, c, h);
                else if (p || q || m !== n)
                    c[h] = !0
            }
        return Object.keys(c)
    }
    function Tm(a) {
        var b;
        U(45) ? b = Um() : b = Gm.join("!");
        if (!b)
            return [];
        var c = [["tdc", b]];
        a.Sa && (a.mc(),
        Gm.length = 0);
        return c
    }
    function Pm() {
        Object.keys(Hm).length !== 0 && (G.clearTimeout(Nm),
        zk())
    }
    function Um() {
        var a = [], b;
        for (b in Hm)
            Hm.hasOwnProperty(b) && a.push(b + "*" + Hm[b].join("."));
        return a.length ? a.join("!") : void 0
    }
    function Vm() {
        U(43) ? Jk("tdc", function() {
            Nm && (G.clearTimeout(Nm),
            Nm = void 0);
            return Um()
        }, !1, function() {
            return Object.keys(Hm).length !== 0
        }) : mk.push(Tm)
    }
    ;var Wm = function(a, b, c, d, e, f, g, h, m, n, p) {
        this.eventId = a;
        this.priorityId = b;
        this.j = c;
        this.O = d;
        this.H = e;
        this.K = f;
        this.D = g;
        this.eventMetadata = h;
        this.onSuccess = m;
        this.onFailure = n;
        this.isGtmEvent = p
    }
      , Xm = function(a, b) {
        var c = [];
        switch (b) {
        case 3:
            c.push(a.j);
            c.push(a.O);
            c.push(a.H);
            c.push(a.K);
            c.push(a.D);
            break;
        case 2:
            c.push(a.j);
            break;
        case 1:
            c.push(a.O);
            c.push(a.H);
            c.push(a.K);
            c.push(a.D);
            break;
        case 4:
            c.push(a.j),
            c.push(a.O),
            c.push(a.H),
            c.push(a.K)
        }
        return c
    }
      , W = function(a, b, c, d) {
        for (var e = oa(Xm(a, d === void 0 ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            if (g[b] !== void 0)
                return g[b]
        }
        return c
    }
      , Ym = function(a) {
        for (var b = {}, c = Xm(a, 4), d = oa(c), e = d.next(); !e.done; e = d.next())
            for (var f = Object.keys(e.value), g = oa(f), h = g.next(); !h.done; h = g.next())
                b[h.value] = 1;
        return Object.keys(b)
    }
      , Zm = function(a, b, c) {
        function d(n) {
            Ya(n) && z(n, function(p, q) {
                f = !0;
                e[p] = q
            })
        }
        var e = {}
          , f = !1
          , g = Xm(a, c === void 0 ? 3 : c);
        g.reverse();
        for (var h = oa(g), m = h.next(); !m.done; m = h.next())
            d(m.value[b]);
        return f ? e : void 0
    }
      , $m = function(a) {
        for (var b = [Q.g.Rc, Q.g.Nc, Q.g.Oc, Q.g.Pc, Q.g.Qc, Q.g.Sc, Q.g.Tc], c = Xm(a, 3), d = oa(c), e = d.next(); !e.done; e = d.next()) {
            for (var f = e.value, g = {}, h = !1, m = oa(b), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                f[p] !== void 0 && (g[p] = f[p],
                h = !0)
            }
            var q = h ? g : void 0;
            if (q)
                return q
        }
        return {}
    }
      , an = function(a, b) {
        this.eventId = a;
        this.priorityId = b;
        this.D = {};
        this.O = {};
        this.j = {};
        this.H = {};
        this.Z = {};
        this.K = {};
        this.eventMetadata = {};
        this.isGtmEvent = !1;
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
    }
      , bn = function(a, b) {
        a.D = b;
        return a
    }
      , cn = function(a, b) {
        a.O = b;
        return a
    }
      , dn = function(a, b) {
        a.j = b;
        return a
    }
      , en = function(a, b) {
        a.H = b;
        return a
    }
      , fn = function(a, b) {
        a.Z = b;
        return a
    }
      , gn = function(a, b) {
        a.K = b;
        return a
    }
      , hn = function(a, b) {
        a.eventMetadata = b || {};
        return a
    }
      , jn = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , kn = function(a, b) {
        a.onFailure = b;
        return a
    }
      , ln = function(a, b) {
        a.isGtmEvent = b;
        return a
    }
      , mn = function(a) {
        return new Wm(a.eventId,a.priorityId,a.D,a.O,a.j,a.H,a.K,a.eventMetadata,a.onSuccess,a.onFailure,a.isGtmEvent)
    };
    var nn = {};
    function on(a, b, c) {
        Aj && a !== void 0 && (nn[a] = nn[a] || [],
        nn[a].push(c + b),
        Ak(a))
    }
    function pn(a) {
        var b = a.eventId
          , c = a.Sa
          , d = []
          , e = nn[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete nn[b];
        return d
    }
    ;function qn(a, b) {
        var c = Am(Nj(a), !0);
        c && rn.register(c, b)
    }
    function sn(a, b, c, d) {
        var e = Am(c, d.isGtmEvent);
        e && rn.push("event", [b, a], e, d)
    }
    function tn(a, b, c, d) {
        var e = Am(c, d.isGtmEvent);
        e && rn.push("get", [a, b], e, d)
    }
    function un(a) {
        var b = Am(Nj(a), !0), c;
        b ? c = vn(rn, b).j : c = {};
        return c
    }
    function wn(a, b) {
        var c = Am(Nj(a), !0);
        if (c) {
            var d = rn
              , e = k(b, null);
            k(vn(d, c).j, e);
            vn(d, c).j = e
        }
    }
    var xn = function() {
        this.O = {};
        this.j = {};
        this.D = {};
        this.Z = null;
        this.K = {};
        this.H = !1;
        this.status = 1
    }
      , yn = function(a, b, c, d) {
        this.D = Db();
        this.j = b;
        this.args = c;
        this.messageContext = d;
        this.type = a
    }
      , zn = function() {
        this.destinations = {};
        this.D = {};
        this.j = []
    }
      , vn = function(a, b) {
        var c = b.ia;
        return a.destinations[c] = a.destinations[c] || new xn
    }
      , An = function(a, b, c, d) {
        if (d.j) {
            var e = vn(a, d.j)
              , f = e.Z;
            if (f) {
                var g = k(c, null)
                  , h = k(e.O[d.j.id], null)
                  , m = k(e.K, null)
                  , n = k(e.j, null)
                  , p = k(a.D, null)
                  , q = {};
                if (Aj)
                    try {
                        q = k(Ji)
                    } catch (v) {
                        P(72)
                    }
                var r = d.j.prefix
                  , t = function(v) {
                    on(d.messageContext.eventId, r, v)
                }
                  , u = mn(ln(kn(jn(hn(fn(en(gn(dn(cn(bn(new an(d.messageContext.eventId,d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                            d.messageContext.onSuccess()
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3");
                        if (d.messageContext.onFailure)
                            d.messageContext.onFailure()
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    on(d.messageContext.eventId, r, "1"),
                    Qm(d.type, d.j.id, u),
                    f(d.j.id, b, d.D, u)
                } catch (v) {
                    on(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    zn.prototype.register = function(a, b, c) {
        var d = vn(this, a);
        d.status !== 3 && (d.Z = b,
        d.status = 3,
        c && (k(d.j, c),
        d.j = c),
        this.flush())
    }
    ;
    zn.prototype.push = function(a, b, c, d) {
        c !== void 0 && (vn(this, c).status === 1 && (vn(this, c).status = 2,
        this.push("require", [{}], c, {})),
        vn(this, c).H && (d.deferrable = !1));
        this.j.push(new yn(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    zn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.j.length; e = {
            Dc: void 0,
            eh: void 0
        }) {
            var f = this.j[0]
              , g = f.j;
            if (f.messageContext.deferrable)
                !g || vn(this, g).H ? (f.messageContext.deferrable = !1,
                this.j.push(f)) : c.push(f),
                this.j.shift();
            else {
                switch (f.type) {
                case "require":
                    if (vn(this, g).status !== 3 && !a) {
                        this.j.push.apply(this.j, c);
                        return
                    }
                    break;
                case "set":
                    z(f.args[0], function(r, t) {
                        k(Kb(r, t), b.D)
                    });
                    break;
                case "config":
                    var h = vn(this, g);
                    e.Dc = {};
                    z(f.args[0], function(r) {
                        return function(t, u) {
                            k(Kb(t, u), r.Dc)
                        }
                    }(e));
                    var m = !!e.Dc[Q.g.Zb];
                    delete e.Dc[Q.g.Zb];
                    var n = g.ia === g.id;
                    m || (n ? h.K = {} : h.O[g.id] = {});
                    h.H && m || An(this, Q.g.ba, e.Dc, f);
                    h.H = !0;
                    n ? k(e.Dc, h.K) : (k(e.Dc, h.O[g.id]),
                    P(70));
                    d = !0;
                    break;
                case "event":
                    e.eh = {};
                    z(f.args[0], function(r) {
                        return function(t, u) {
                            k(Kb(t, u), r.eh)
                        }
                    }(e));
                    An(this, f.args[1], e.eh, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[Q.g.qb] = f.args[0],
                    p[Q.g.Fb] = f.args[1],
                    p);
                    An(this, Q.g.Ta, q, f)
                }
                this.j.shift();
                Bn(this, f)
            }
        }
        this.j.push.apply(this.j, c);
        d && this.flush()
    }
    ;
    var Bn = function(a, b) {
        if (b.type !== "require")
            if (b.j)
                for (var c = vn(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.destinations)
                    if (a.destinations.hasOwnProperty(e)) {
                        var f = a.destinations[e];
                        if (f && f.D)
                            for (var g = f.D[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , rn = new zn;
    function Cn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = wl("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = kc(g, e);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                Vk(e, "load", f);
                Vk(e, "error", f)
            };
            Uk(e, "load", f);
            Uk(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var En = function(a) {
        var b;
        b = b === void 0 ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        ul(a, function(d, e) {
            if (d || d === 0)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        Dn(c, b)
    }
      , Dn = function(a, b) {
        var c = window, d;
        b = b === void 0 ? !1 : b;
        d = d === void 0 ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            Cn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
    };
    var Fn = function() {
        this.O = this.O;
        this.D = this.D
    };
    Fn.prototype.O = !1;
    Fn.prototype.dispose = function() {
        this.O || (this.O = !0,
        this.Pa())
    }
    ;
    Fn.prototype.addOnDisposeCallback = function(a, b) {
        this.O ? b !== void 0 ? a.call(b) : a() : (this.D || (this.D = []),
        this.D.push(b !== void 0 ? Fa(a, b) : a))
    }
    ;
    Fn.prototype.Pa = function() {
        if (this.D)
            for (; this.D.length; )
                this.D.shift()()
    }
    ;
    var Gn = function(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
      , Hn = function(a, b) {
        b = b === void 0 ? {} : b;
        Fn.call(this);
        this.H = a;
        this.j = null;
        this.Z = {};
        this.nd = 0;
        var c;
        this.bc = (c = b.Qm) != null ? c : 500;
        var d;
        this.ac = (d = b.En) != null ? d : !1;
        this.K = null
    };
    za(Hn, Fn);
    Hn.prototype.Pa = function() {
        this.Z = {};
        this.K && (Vk(this.H, "message", this.K),
        delete this.K);
        delete this.Z;
        delete this.H;
        delete this.j;
        Fn.prototype.Pa.call(this)
    }
    ;
    var Jn = function(a) {
        return typeof a.H.__tcfapi === "function" || In(a) != null
    };
    Hn.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.ac
        }
          , d = Tk(function() {
            return a(c)
        })
          , e = 0;
        this.bc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.bc));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Gn(c),
            c.internalBlockOnErrors = b.ac,
            h && c.internalErrorState === 0 || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Kn(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Hn.prototype.removeEventListener = function(a) {
        a && a.listenerId && Kn(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Mn = function(a, b, c) {
        var d;
        d = d === void 0 ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (f !== void 0) {
                    e = f[d === void 0 ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (g === 0)
            return !1;
        var h = c;
        c === 2 ? (h = 0,
        g === 2 && (h = 1)) : c === 3 && (h = 1,
        g === 1 && (h = 0));
        var m;
        if (h === 0)
            if (a.purpose && a.vendor) {
                var n = Ln(a.vendor.consents, d === void 0 ? "755" : d);
                m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Ln(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = h === 1 ? a.purpose && a.vendor ? Ln(a.purpose.legitimateInterests, b) && Ln(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
        return m
    }
      , Ln = function(a, b) {
        return !(!a || !a[b])
    }
      , Kn = function(a, b, c, d) {
        c || (c = function() {}
        );
        if (typeof a.H.__tcfapi === "function") {
            var e = a.H.__tcfapi;
            e(b, 2, c, d)
        } else if (In(a)) {
            Nn(a);
            var f = ++a.nd;
            a.Z[f] = c;
            if (a.j) {
                var g = {};
                a.j.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , In = function(a) {
        if (a.j)
            return a.j;
        var b;
        a: {
            for (var c = a.H, d = 0; d < 50; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.j = b;
        return a.j
    }
      , Nn = function(a) {
        a.K || (a.K = function(b) {
            try {
                var c;
                c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.Z[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Uk(a.H, "message", a.K))
    }
      , On = function(a) {
        if (a.gdprApplies === !1)
            return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = Gn(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (En({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    };
    var Pn = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function Qn() {
        var a = ni.tcf || {};
        return ni.tcf = a
    }
    var Rn = function() {
        return new Hn(G,{
            Qm: -1
        })
    }
      , ho = function() {
        var a = Qn()
          , b = Rn();
        Jn(b) && !Sn() && !Tn() && P(124);
        if (!a.active && Jn(b)) {
            Sn() && (a.active = !0,
            a.kc = {},
            a.cmpId = 0,
            a.tcfPolicyVersion = 0,
            Ul().active = !0,
            a.tcString = "tcunavailable");
            vm();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0)
                        Un(a),
                        wm([Q.g.R, Q.g.ya, Q.g.P]),
                        Ul().active = !0;
                    else if (a.gdprApplies = c.gdprApplies,
                    a.cmpId = c.cmpId,
                    a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode,
                    Tn() && (a.active = !0),
                    !Vn(c) || Sn() || Tn()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies === !1) {
                            var e = {}, f;
                            for (f in Pn)
                                Pn.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (Vn(c)) {
                            var g = {}, h;
                            for (h in Pn)
                                if (Pn.hasOwnProperty(h))
                                    if (h === "1") {
                                        var m, n = c, p = {
                                            Al: !0
                                        };
                                        p = p === void 0 ? {} : p;
                                        m = On(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Hj : (p.Hj || n.gdprApplies !== void 0 || p.Al) && (p.Hj || typeof n.tcString === "string" && n.tcString.length) ? Mn(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else
                                        g[h] = Mn(c, h, Pn[h]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.kc = d;
                            var q = {}
                              , r = (q[Q.g.R] = a.kc["1"] ? "granted" : "denied",
                            q);
                            a.gdprApplies !== !0 ? (wm([Q.g.R, Q.g.ya, Q.g.P]),
                            Ul().active = !0) : (r[Q.g.ya] = a.kc["3"] && a.kc["4"] ? "granted" : "denied",
                            typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[Q.g.P] = a.kc["1"] && a.kc["7"] ? "granted" : "denied" : wm([Q.g.P]),
                            qm(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: Wn() || ""
                            }))
                        }
                    } else
                        wm([Q.g.R, Q.g.ya, Q.g.P])
                })
            } catch (c) {
                Un(a),
                wm([Q.g.R, Q.g.ya, Q.g.P]),
                Ul().active = !0
            }
        }
    };
    function Un(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Vn(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }
    var Sn = function() {
        return G.gtag_enable_tcf_support === !0
    };
    function Tn() {
        return Qn().enableAdvertiserConsentMode === !0
    }
    var Wn = function() {
        var a = Qn();
        if (a.active)
            return a.tcString
    }
      , io = function() {
        var a = Qn();
        if (a.active && a.gdprApplies !== void 0)
            return a.gdprApplies ? "1" : "0"
    }
      , jo = function(a) {
        if (!Pn.hasOwnProperty(String(a)))
            return !0;
        var b = Qn();
        return b.active && b.kc ? !!b.kc[String(a)] : !0
    };
    var ko = [Q.g.R, Q.g.U, Q.g.P, Q.g.ya]
      , lo = {}
      , mo = (lo[Q.g.R] = 1,
    lo[Q.g.U] = 2,
    lo);
    function no(a) {
        if (a === void 0)
            return 0;
        switch (W(a, Q.g.ma)) {
        case void 0:
            return 1;
        case !1:
            return 3;
        default:
            return 2
        }
    }
    function oo() {
        return U(64) && Nl() === "US-CO" && qc.globalPrivacyControl === !0
    }
    var po = function(a) {
        if (oo())
            return !1;
        var b = no(a);
        if (b === 3)
            return !1;
        switch (dm(Q.g.ya)) {
        case 1:
        case 3:
            return !0;
        case 2:
            return !1;
        case 4:
            return b === 2;
        case 0:
            return !0;
        default:
            return !1
        }
    }
      , qo = function() {
        return gm() || !cm(Q.g.R) || !cm(Q.g.U)
    }
      , ro = function() {
        var a = {}, b;
        for (b in mo)
            mo.hasOwnProperty(b) && (a[mo[b]] = dm(b));
        return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0)
    }
      , so = {}
      , to = (so[Q.g.R] = 0,
    so[Q.g.U] = 1,
    so[Q.g.P] = 2,
    so[Q.g.ya] = 3,
    so);
    function uo(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var vo = function(a) {
        for (var b = "1", c = 0; c < ko.length; c++) {
            var d = b, e, f = ko[c], g = bm.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : to.hasOwnProperty(g) ? 12 | to[g] : 8;
            var h = Ul();
            h.accessedAny = !0;
            var m = h.entries[f] || {};
            e = e << 2 | uo(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[uo(m.declare) << 4 | uo(m.default) << 2 | uo(m.update)])
        }
        var n = b
          , p = (oo() ? 1 : 0) << 3
          , q = (gm() ? 1 : 0) << 2
          , r = no(a);
        return b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[p | q | r]
    }
      , wo = function() {
        if (!cm(Q.g.P))
            return "-";
        for (var a = Object.keys(li), b = em(a), c = "", d = oa(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += li[f])
        }
        U(51) && bm.selectedAllCorePlatformServices && (c += "o");
        return c || "-"
    }
      , xo = function() {
        return Pl() || (Sn() || Tn()) && io() === "1" ? "1" : "0"
    }
      , yo = function() {
        return (Pl() ? !0 : !(!Sn() && !Tn()) && io() === "1") || !cm(Q.g.P)
    }
      , zo = function() {
        var a = "0", b = "0", c;
        var d = Qn();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
        b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
        var e = "0", f;
        var g = Qn();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var h = 0;
        Pl() && (h |= 1);
        io() === "1" && (h |= 2);
        Sn() && (h |= 4);
        var m;
        var n = Qn();
        m = n.enableAdvertiserConsentMode !== void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (h |= 8);
        Ul().waitPeriodTimedOut && (h |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
    }
      , Ao = function() {
        return Nl() === "US-CO"
    };
    function Bo() {
        var a = !1;
        return a
    }
    ;var Co = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };
    function Do(a) {
        a = a === void 0 ? {} : a;
        var b = Nf.ctid.split("-")[0].toUpperCase()
          , c = {};
        c.ctid = Nf.ctid;
        c.Bm = mi.ie;
        c.Dm = mi.Kg;
        c.Zl = Fj.fe ? 2 : 1;
        c.Km = a.Yj;
        c.qe = Nf.canonicalContainerId;
        c.qe !== a.xa && (c.xa = a.xa);
        var d = Pj();
        c.mm = d ? d.canonicalContainerId : void 0;
        si ? (c.Kf = Co[b],
        c.Kf || (c.Kf = 0)) : c.Kf = wi ? 13 : 10;
        Fi.H ? (c.Hf = 0,
        c.al = 2) : ui ? c.Hf = 1 : Bo() ? c.Hf = 2 : c.Hf = 3;
        var e = {};
        e[6] = Gj;
        c.il = e;
        var f = a.Af, g;
        var h = c.Kf
          , m = c.Hf;
        h === void 0 ? g = "" : (m || (m = 0),
        g = "" + He(1, 1) + Ee(h << 2 | m));
        var n = c.al, p = "4" + g + (n ? "" + He(2, 1) + Ee(n) : ""), q, r = c.Dm;
        q = r && Ge.test(r) ? "" + He(3, 2) + r : "";
        var t, u = c.Bm;
        t = u ? "" + He(4, 1) + Ee(u) : "";
        var v;
        var w = c.ctid;
        if (w && f) {
            var x = w.split("-")
              , y = x[0].toUpperCase();
            if (y !== "GTM" && y !== "OPT")
                v = "";
            else {
                var B = x[1];
                v = "" + He(5, 3) + Ee(1 + B.length) + (c.Zl || 0) + B
            }
        } else
            v = "";
        var A = c.Km, D = c.qe, E = c.xa, C = c.Pn, F = p + q + t + v + (A ? "" + He(6, 1) + Ee(A) : "") + (D ? "" + He(7, 3) + Ee(D.length) + D : "") + (E ? "" + He(8, 3) + Ee(E.length) + E : "") + (C ? "" + He(9, 3) + Ee(C.length) + C : ""), M;
        var L = c.il;
        L = L === void 0 ? {} : L;
        for (var O = [], T = oa(Object.keys(L)), ba = T.next(); !ba.done; ba = T.next()) {
            var aa = ba.value;
            O[Number(aa)] = L[aa]
        }
        if (O.length) {
            var R = He(10, 3), pa;
            if (O.length === 0)
                pa = Ee(0);
            else {
                for (var ma = [], fa = 0, ha = !1, Ia = 0; Ia < O.length; Ia++) {
                    ha = !0;
                    var Ba = Ia % 6;
                    O[Ia] && (fa |= 1 << Ba);
                    Ba === 5 && (ma.push(Ee(fa)),
                    fa = 0,
                    ha = !1)
                }
                ha && ma.push(Ee(fa));
                pa = ma.join("")
            }
            var Ja = pa;
            M = "" + R + Ee(Ja.length) + Ja
        } else
            M = "";
        var Xa = c.mm;
        return F + M + (Xa ? "" + He(11, 3) + Ee(Xa.length) + Xa : "")
    }
    ;var Eo = {
        pj: "service_worker_endpoint",
        Lg: "shared_user_id",
        Mg: "shared_user_id_requested",
        ke: "shared_user_id_source"
    }, Fo;
    function Go(a) {
        if (!Fo) {
            Fo = {};
            for (var b = oa(Object.keys(Eo)), c = b.next(); !c.done; c = b.next())
                Fo[Eo[c.value]] = !0
        }
        return !!Fo[a]
    }
    function Ho(a, b) {
        b = b === void 0 ? !1 : b;
        if (Go(a)) {
            var c, d, e = (d = (c = uc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a])
                return e[a];
            if (b) {
                var f = void 0
                  , g = 1
                  , h = {}
                  , m = {
                    set: function(n) {
                        f = n;
                        m.notify()
                    },
                    get: function() {
                        return f
                    },
                    subscribe: function(n) {
                        h[String(g)] = n;
                        return g++
                    },
                    unsubscribe: function(n) {
                        var p = String(n);
                        return h.hasOwnProperty(p) ? (delete h[p],
                        !0) : !1
                    },
                    notify: function() {
                        for (var n = oa(Object.keys(h)), p = n.next(); !p.done; p = n.next()) {
                            var q = p.value;
                            try {
                                h[q](a, f)
                            } catch (r) {}
                        }
                    }
                };
                return e[a] = m
            }
        }
    }
    function Io(a, b) {
        var c = Ho(a, !0);
        c && c.set(b)
    }
    function Jo(a) {
        var b;
        return (b = Ho(a)) == null ? void 0 : b.get()
    }
    function Ko(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Ho(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }
    function Lo(a, b) {
        var c = Ho(a);
        return c ? c.unsubscribe(b) : !1
    }
    ;function Mo(a) {
        return a.origin !== "null"
    }
    ;function No(a, b, c, d) {
        var e;
        if (Oo(d)) {
            for (var f = [], g = String(b || Po()).split(";"), h = 0; h < g.length; h++) {
                var m = g[h].split("=")
                  , n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else
            e = [];
        return e
    }
    function Qo(a, b, c, d, e) {
        if (Oo(e)) {
            var f = Ro(a, d, e);
            if (f.length === 1)
                return f[0].id;
            if (f.length !== 0) {
                f = So(f, function(g) {
                    return g.pl
                }, b);
                if (f.length === 1)
                    return f[0].id;
                f = So(f, function(g) {
                    return g.qm
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }
    function To(a, b, c, d) {
        var e = Po()
          , f = window;
        Mo(f) && (f.document.cookie = a);
        var g = Po();
        return e !== g || c !== void 0 && No(b, g, !1, d).indexOf(c) >= 0
    }
    function Uo(a, b, c, d) {
        function e(w, x, y) {
            if (y == null)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (x == null)
                return w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!Oo(c.Ab))
            return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Vo(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.fm);
        g = e(g, "samesite", c.Em);
        c.Fm && (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = Wo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = p[t] !== "none" ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Xo(u, c.path) && To(v, a, b, c.Ab))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Xo(n, c.path) ? 1 : To(g, a, b, c.Ab) ? 0 : 1
    }
    function Yo(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Uo(a, b, c)
    }
    function So(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , m = b(h);
            m === c ? d.push(h) : f === void 0 || m < f ? (e = [h],
            f = m) : m === f && e.push(h)
        }
        return d.length > 0 ? d : e
    }
    function Ro(a, b, c) {
        for (var d = [], e = No(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || !h || b.indexOf(h) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        pl: Number(n[0]) || 1,
                        qm: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }
    function Vo(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var Zo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , $o = /(^|\.)doubleclick\.net$/i;
    function Xo(a, b) {
        return a !== void 0 && ($o.test(window.document.location.hostname) || b === "/" && Zo.test(a))
    }
    function ap(a) {
        if (!a)
            return 1;
        a = a.indexOf(".") === 0 ? a.substring(1) : a;
        return a.split(".").length
    }
    function bp(a) {
        if (!a || a === "/")
            return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }
    function cp(a, b) {
        var c = "" + ap(a)
          , d = bp(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var Po = function() {
        return Mo(window) ? window.document.cookie : ""
    }
      , Oo = function(a) {
        return a && Zl().j() ? (Array.isArray(a) ? a : [a]).every(function(b) {
            return fm(b) && cm(b)
        }) : !0
    }
      , Wo = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (b.length === 4) {
            var c = b[b.length - 1];
            if (Number(c).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; d >= 0; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        $o.test(e) || Zo.test(e) || a.push("none");
        return a
    };
    function dp(a) {
        var b = Math.round(Math.random() * 2147483647), c;
        if (a) {
            var d = 1, e, f, g;
            if (a)
                for (d = 0,
                f = a.length - 1; f >= 0; f--)
                    g = a.charCodeAt(f),
                    d = (d << 6 & 268435455) + g + (g << 14),
                    e = d & 266338304,
                    d = e !== 0 ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else
            c = String(b);
        return c
    }
    function ep(a) {
        return [dp(a), Math.round(Db() / 1E3)].join(".")
    }
    function fp(a, b, c, d, e) {
        var f = ap(b);
        return Qo(a, f, bp(c), d, e)
    }
    function gp(a, b, c, d) {
        return [b, cp(c, d), a].join(".")
    }
    ;function hp(a, b, c, d) {
        var e, f = Number(a.zb != null ? a.zb : void 0);
        f !== 0 && (e = new Date((b || Db()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Ab: d
        }
    }
    ;var ip;
    function jp() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }
        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = kp
          , d = lp
          , e = mp();
        if (!e.init) {
            Ec(H, "mousedown", a);
            Ec(H, "keyup", a);
            Ec(H, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            }
            ;
            e.init = !0
        }
    }
    function np(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        mp().decorators.push(f)
    }
    function op(a, b, c) {
        for (var d = mp().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== H.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && Gb(e, g.callback())
            }
        }
        return e
    }
    function mp() {
        var a = uc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var pp = /(.*?)\*(.*?)\*(.*)/
      , qp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , rp = /^(?:www\.|m\.|amp\.)+/
      , sp = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function tp(a) {
        var b = sp.exec(a);
        if (b)
            return {
                Ch: b[1],
                query: b[2],
                fragment: b[3]
            }
    }
    function up(a, b) {
        var c = [qc.userAgent, (new Date).getTimezoneOffset(), qc.userLanguage || qc.language, Math.floor(Db() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"), d;
        if (!(d = ip)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, h = 0; h < 8; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ip = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ ip[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function vp() {
        return function(a) {
            var b = V(G.location.href)
              , c = b.search.replace("?", "")
              , d = fj(c, "_gl", !1, !0) || "";
            a.query = wp(d) || {};
            var e = ij(b, "fragment"), f;
            var g = -1;
            if (Ib(e, "_gl="))
                g = 4;
            else {
                var h = e.indexOf("&_gl=");
                h > 0 && (g = h + 3 + 2)
            }
            if (g < 0)
                f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = m < 0 ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = wp(f || "") || {}
        }
    }
    function xp(a) {
        var b = vp()
          , c = mp();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Gb(d, e.query),
        a && Gb(d, e.fragment));
        return d
    }
    var wp = function(a) {
        try {
            var b = yp(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = kb(d[e + 1]);
                    c[f] = g
                }
                mb("TAGGING", 6);
                return c
            }
        } catch (h) {
            mb("TAGGING", 8)
        }
    };
    function yp(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = pp.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var h = g[3], m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === up(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return h;
                mb("TAGGING", 7)
            }
        }
    }
    function zp(a, b, c, d, e) {
        function f(p) {
            var q = p
              , r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q)
              , t = q;
            if (r) {
                var u = r[2]
                  , v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && w !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = tp(c);
        if (!g)
            return "";
        var h = g.query || ""
          , m = g.fragment || ""
          , n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Ch + h + m
    }
    function Ap(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [], w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (v.push(w),
                        v.push(jb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", up(y), y].join("*");
                d ? (Yi(3) || Yi(1) || !p) && Bp("_gl", u, a, p, q) : Cp("_gl", u, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM"
          , e = op(b, 1, d)
          , f = op(b, 2, d)
          , g = op(b, 4, d)
          , h = op(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Yi(1) && c(g, !0, !0);
        for (var m in h)
            h.hasOwnProperty(m) && Dp(m, h[m], a)
    }
    function Dp(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Cp(a, b, c) : c.tagName.toLowerCase() === "form" && Bp(a, b, c)
    }
    function Cp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Yi(4) || d)) {
                var h = G.location.href
                  , m = tp(c.href)
                  , n = tp(h);
                g = !(m && n && m.Ch === n.Ch && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = zp(a, b, c.href, d, e);
            gc.test(p) && (c.href = p)
        }
    }
    function Bp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = zp(a, b, c.action, d, e);
                    gc.test(g) && (c.action = g)
                }
            } else {
                for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
                    var p = h[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = H.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }
    function kp(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Ap(e, e.hostname)
            }
        } catch (g) {}
    }
    function lp(a) {
        try {
            if (a.action) {
                var b = ij(V(a.action), "host");
                Ap(a, b)
            }
        } catch (c) {}
    }
    function Ep(a, b, c, d) {
        jp();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        np(a, b, e, d, !1);
        e === 2 && mb("TAGGING", 23);
        d && mb("TAGGING", 24)
    }
    function Fp(a, b) {
        jp();
        np(a, [hj(G.location, "host", !0)], b, !0, !0)
    }
    function Gp() {
        var a = H.location.hostname
          , b = qp.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0)
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(rp, ""), m = e.replace(rp, ""), n;
        if (!(n = h === m)) {
            var p = "." + m;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
    function Hp(a, b) {
        return a === !1 ? !1 : a || b || Gp()
    }
    ;var Ip = ["1"]
      , Jp = {}
      , Kp = {};
    function Lp(a, b) {
        b = b === void 0 ? !0 : b;
        var c = Mp(a.prefix);
        if (!Jp[c])
            if (Np(c, a.path, a.domain)) {
                var d = Kp[Mp(a.prefix)];
                Op(a, d ? d.id : void 0, d ? d.wh : void 0)
            } else {
                var e = nj("auiddc");
                if (e)
                    mb("TAGGING", 17),
                    Jp[c] = e;
                else if (b) {
                    var f = Mp(a.prefix)
                      , g = ep();
                    Pp(f, g, a);
                    Np(c, a.path, a.domain)
                }
            }
    }
    function Op(a, b, c) {
        var d = Mp(a.prefix)
          , e = Jp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Db() / 1E3)));
                    Pp(d, h, a, g * 1E3)
                }
            }
        }
    }
    function Pp(a, b, c, d) {
        var e = gp(b, "1", c.domain, c.path)
          , f = hp(c, d);
        f.Ab = Qp();
        Yo(a, e, f)
    }
    function Np(a, b, c) {
        var d = fp(a, b, c, Ip, Qp());
        if (!d)
            return !1;
        Rp(a, d);
        return !0
    }
    function Rp(a, b) {
        var c = b.split(".");
        c.length === 5 ? (Jp[a] = c.slice(0, 2).join("."),
        Kp[a] = {
            id: c.slice(2, 4).join("."),
            wh: Number(c[4]) || 0
        }) : c.length === 3 ? Kp[a] = {
            id: c.slice(0, 2).join("."),
            wh: Number(c[2]) || 0
        } : Jp[a] = b
    }
    function Mp(a) {
        return (a || "_gcl") + "_au"
    }
    function Sp(a) {
        function b() {
            cm(c) && a()
        }
        var c = Qp();
        jm(function() {
            b();
            cm(c) || km(b, c)
        }, c)
    }
    function Tp(a) {
        var b = xp(!0)
          , c = Mp(a.prefix);
        Sp(function() {
            var d = b[c];
            if (d) {
                Rp(c, d);
                var e = Number(Jp[c].split(".")[1]) * 1E3;
                if (e) {
                    mb("TAGGING", 16);
                    var f = hp(a, e);
                    f.Ab = Qp();
                    var g = gp(d, "1", a.domain, a.path);
                    Yo(c, g, f)
                }
            }
        })
    }
    function Up(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {}
              , h = fp(a, e.path, e.domain, Ip, Qp());
            h && (g[a] = h);
            return g
        };
        Sp(function() {
            Ep(f, b, c, d)
        })
    }
    function Qp() {
        return ["ad_storage", "ad_user_data"]
    }
    ;function Vp(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Ph: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    }
    function Wp(a, b) {
        var c = Vp(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].Ph] || (d[c[e].Ph] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    aa: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Ph].push(g)
            }
        }
        return d
    }
    ;var Xp = {}
      , Yp = (Xp.k = {
        La: /^[\w-]+$/
    },
    Xp.b = {
        La: /^[\w-]+$/,
        Jh: !0
    },
    Xp.i = {
        La: /^[1-9]\d*$/
    },
    Xp);
    var Zp = {}
      , bq = (Zp[5] = {
        jk: {
            2: $p
        },
        Tg: ["k", "i", "b"]
    },
    Zp[4] = {
        jk: {
            2: $p,
            GCL: aq
        },
        Tg: ["k", "i", "b"]
    },
    Zp);
    function cq(a) {
        var b = bq[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.jk[c];
                if (d)
                    return d(a, 5)
            }
        }
    }
    function $p(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {}
              , e = bq[b];
            if (e) {
                for (var f = e.Tg, g = oa(c[2].split("$")), h = g.next(); !h.done; h = g.next()) {
                    var m = h.value
                      , n = m[0];
                    if (f.indexOf(n) !== -1)
                        try {
                            var p = decodeURIComponent(m.substring(1))
                              , q = Yp[n];
                            q && (q.Jh ? (d[n] = d[n] || [],
                            d[n].push(p)) : d[n] = p)
                        } catch (r) {}
                }
                return d
            }
        }
    }
    function dq(a, b) {
        var c = bq[5];
        if (c) {
            for (var d = [], e = oa(c.Tg), f = e.next(); !f.done; f = e.next()) {
                var g = f.value
                  , h = Yp[g];
                if (h) {
                    var m = a[g];
                    if (m !== void 0)
                        if (h.Jh && Array.isArray(m))
                            for (var n = oa(m), p = n.next(); !p.done; p = n.next())
                                d.push(encodeURIComponent("" + g + p.value));
                        else
                            d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }
    function aq(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift()
          , d = b.shift()
          , e = {};
        return e.k = d,
        e.i = c,
        e.b = b,
        e
    }
    ;var eq = new Map([[5, "ad_storage"], [4, ["ad_storage", "ad_user_data"]]]);
    function fq(a) {
        if (bq[5]) {
            for (var b = [], c = No(a, void 0, void 0, eq.get(5)), d = oa(c), e = d.next(); !e.done; e = d.next()) {
                var f = cq(e.value);
                f && (gq(f),
                b.push(f))
            }
            return b
        }
    }
    function hq(a, b, c, d) {
        c = c || {};
        var e = cp(c.domain, c.path)
          , f = dq(b, e);
        if (f) {
            var g = hp(c, d, void 0, eq.get(5));
            Yo(a, f, g)
        }
    }
    function iq(a, b) {
        var c = b.La;
        return typeof c === "function" ? c(a) : c.test(a)
    }
    function gq(a) {
        for (var b = oa(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
            te: void 0
        },
        c = b.next()) {
            var e = c.value
              , f = a[e];
            d.te = Yp[e];
            d.te ? d.te.Jh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(h) {
                    return iq(h, g.te)
                }
            }(d)) : void 0 : typeof f === "string" && iq(f, d.te) || (a[e] = void 0) : a[e] = void 0
        }
    }
    ;var jq = /^\w+$/
      , kq = /^[\w-]+$/
      , lq = {}
      , mq = (lq.aw = "_aw",
    lq.dc = "_dc",
    lq.gf = "_gf",
    lq.gp = "_gp",
    lq.gs = "_gs",
    lq.ha = "_ha",
    lq.ag = "_ag",
    lq.gb = "_gb",
    lq);
    function nq() {
        return ["ad_storage", "ad_user_data"]
    }
    function oq(a) {
        return !Zl().j() || cm(a)
    }
    function pq(a, b) {
        function c() {
            var d = oq(b);
            d && a();
            return d
        }
        jm(function() {
            c() || km(c, b)
        }, b)
    }
    function qq(a) {
        return rq(a).map(function(b) {
            return b.aa
        })
    }
    function sq(a) {
        return tq(a).filter(function(b) {
            return b.aa
        }).map(function(b) {
            return b.aa
        })
    }
    function tq(a) {
        var b = uq(a.prefix)
          , c = vq("gb", b)
          , d = vq("ag", b);
        if (!d || !c)
            return [];
        var e = function(h) {
            return function(m) {
                m.type = h;
                return m
            }
        }
          , f = rq(c).map(e("gb"))
          , g = (Yi(6) ? wq(d) : []).map(e("ag"));
        return f.concat(g).sort(function(h, m) {
            return m.timestamp - h.timestamp
        })
    }
    function xq(a, b, c, d, e) {
        var f = tb(a, function(g) {
            return g.aa === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d),
        f.labels = yq(f.labels || [], e || [])) : a.push({
            version: b,
            aa: c,
            timestamp: d,
            labels: e
        })
    }
    function wq(a) {
        for (var b = fq(a) || [], c = [], d = oa(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value
              , g = f
              , h = zq(f);
            h && xq(c, "2", g.k, h, g.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    }
    function rq(a) {
        for (var b = [], c = No(a, H.cookie, void 0, nq()), d = oa(c), e = d.next(); !e.done; e = d.next()) {
            var f = Aq(e.value);
            if (f != null) {
                var g = f;
                xq(b, g.version, g.aa, g.timestamp, g.labels)
            }
        }
        b.sort(function(h, m) {
            return m.timestamp - h.timestamp
        });
        return Bq(b)
    }
    function yq(a, b) {
        if (!a.length)
            return b;
        if (!b.length)
            return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }
    function uq(a) {
        return a && typeof a === "string" && a.match(jq) ? a : "_gcl"
    }
    function Cq(a, b) {
        var c = Yi(6)
          , d = V(a)
          , e = ij(d, "query", !1, void 0, "gclid")
          , f = ij(d, "query", !1, void 0, "gclsrc")
          , g = ij(d, "query", !1, void 0, "wbraid");
        Yi(7) && (g = Ob(g));
        var h;
        c && (h = ij(d, "query", !1, void 0, "gbraid"));
        var m = ij(d, "query", !1, void 0, "gad_source")
          , n = ij(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !h)) {
            var p = d.hash.replace("#", "");
            e = e || fj(p, "gclid", !1);
            f = f || fj(p, "gclsrc", !1);
            g = g || fj(p, "wbraid", !1);
            c && (h = h || fj(p, "gbraid", !1));
            m = m || fj(p, "gad_source", !1)
        }
        return Dq(e, f, n, g, h, m)
    }
    function Eq() {
        return Cq(G.location.href, !0)
    }
    function Dq(a, b, c, d, e, f) {
        var g = {}
          , h = function(m, n) {
            g[n] || (g[n] = []);
            g[n].push(m)
        };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(kq))
            switch (b) {
            case void 0:
                h(a, "aw");
                break;
            case "aw.ds":
                h(a, "aw");
                h(a, "dc");
                break;
            case "ds":
                h(a, "dc");
                break;
            case "3p.ds":
                h(a, "dc");
                break;
            case "gf":
                h(a, "gf");
                break;
            case "ha":
                h(a, "ha")
            }
        c && h(c, "dc");
        d !== void 0 && kq.test(d) && (g.wbraid = d,
        h(d, "gb"));
        Yi(6) && e !== void 0 && kq.test(e) && (g.gbraid = e,
        h(e, "ag"));
        f !== void 0 && kq.test(f) && (g.gad_source = f,
        h(f, "gs"));
        return g
    }
    function Fq(a) {
        var b = Eq();
        if (Yi(5)) {
            for (var c = !0, d = oa(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                }
            c && (b = Cq(G.document.referrer, !1))
        }
        Gq(b, !1, a)
    }
    function Gq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = uq(c.prefix)
          , g = d || Db()
          , h = Math.round(g / 1E3)
          , m = nq()
          , n = !1
          , p = !1
          , q = function() {
            if (oq(m)) {
                var r = hp(c, g, !0);
                r.Ab = m;
                for (var t = function(F, M) {
                    var L = vq(F, f);
                    L && (Yo(L, M, r),
                    F !== "gb" && (n = !0))
                }, u = function(F) {
                    var M = ["GCL", h, F];
                    e.length > 0 && M.push(e.join("."));
                    return M.join(".")
                }, v = oa(["aw", "dc", "gf", "ha", "gp"]), w = v.next(); !w.done; w = v.next()) {
                    var x = w.value;
                    a[x] && t(x, u(a[x][0]))
                }
                if (!n && a.gb) {
                    var y = a.gb[0]
                      , B = vq("gb", f);
                    !b && rq(B).some(function(F) {
                        return F.aa === y && F.labels && F.labels.length > 0
                    }) || t("gb", u(y))
                }
            }
            if (!p && Yi(6) && a.gbraid && oq("ad_storage") && (p = !0,
            !n)) {
                var A = a.gbraid
                  , D = vq("ag", f);
                if (b || !(Yi(6) ? wq(D) : []).some(function(F) {
                    return F.aa === A && F.labels && F.labels.length > 0
                })) {
                    var E = {}
                      , C = (E.k = A,
                    E.i = "" + h,
                    E.b = e,
                    E);
                    hq(D, C, c, g)
                }
            }
            Hq(a, f, g, c)
        };
        jm(function() {
            q();
            oq(m) || km(q, m)
        }, m)
    }
    function Hq(a, b, c, d) {
        if (a.gad_source !== void 0 && oq("ad_storage")) {
            var e = vq("gs", b);
            if (e) {
                var f = Math.round((Db() - (Pc() || 0)) / 1E3)
                  , g = {}
                  , h = (g.k = a.gad_source,
                g.i = "" + f,
                g);
                hq(e, h, d, c)
            }
        }
    }
    function Iq(a, b) {
        var c = xp(!0);
        pq(function() {
            for (var d = uq(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (mq[f] !== void 0) {
                    var g = vq(f, d)
                      , h = c[g];
                    if (h) {
                        var m = Math.min(Jq(h), Db()), n;
                        b: {
                            for (var p = m, q = No(g, H.cookie, void 0, nq()), r = 0; r < q.length; ++r)
                                if (Jq(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = hp(b, m, !0);
                            t.Ab = nq();
                            Yo(g, h, t)
                        }
                    }
                }
            }
            Gq(Dq(c.gclid, c.gclsrc), !1, b)
        }, nq())
    }
    function Kq(a) {
        var b = [];
        Yi(6) && b.push("ag");
        if (b.length !== 0) {
            var c = xp(!0)
              , d = uq(a.prefix);
            pq(function() {
                for (var e = 0; e < b.length; ++e) {
                    var f = vq(b[e], d);
                    if (f) {
                        var g = c[f];
                        if (g) {
                            var h = cq(g);
                            if (h) {
                                var m = zq(h);
                                m || (m = Db());
                                var n;
                                a: {
                                    for (var p = m, q = fq(f), r = 0; r < q.length; ++r)
                                        if (zq(q[r]) > p) {
                                            n = !0;
                                            break a
                                        }
                                    n = !1
                                }
                                if (n)
                                    break;
                                h.i = "" + Math.round(m / 1E3);
                                hq(f, h, a, m)
                            }
                        }
                    }
                }
            }, ["ad_storage"])
        }
    }
    function vq(a, b) {
        var c = mq[a];
        if (c !== void 0)
            return b + c
    }
    function Jq(a) {
        return Lq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }
    function zq(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }
    function Aq(a) {
        var b = Lq(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            aa: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }
    function Lq(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !kq.test(a[2]) ? [] : a
    }
    function Mq(a, b, c, d, e) {
        if (Array.isArray(b) && Mo(G)) {
            var f = uq(e)
              , g = function() {
                for (var h = {}, m = 0; m < a.length; ++m) {
                    var n = vq(a[m], f);
                    if (n) {
                        var p = No(n, H.cookie, void 0, nq());
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            pq(function() {
                Ep(g, b, c, d)
            }, nq())
        }
    }
    function Nq(a, b, c, d) {
        if (Array.isArray(a) && Mo(G)) {
            var e = [];
            Yi(6) && e.push("ag");
            if (e.length !== 0) {
                var f = uq(d)
                  , g = function() {
                    for (var h = {}, m = 0; m < e.length; ++m) {
                        var n = vq(e[m], f);
                        if (!n)
                            return {};
                        var p = fq(n);
                        if (p.length) {
                            var q = p.sort(function(r, t) {
                                return zq(t) - zq(r)
                            })[0];
                            h[n] = dq(q)
                        }
                    }
                    return h
                };
                pq(function() {
                    Ep(g, a, b, c)
                }, ["ad_storage"])
            }
        }
    }
    function Bq(a) {
        return a.filter(function(b) {
            return kq.test(b.aa)
        })
    }
    function Oq(a, b) {
        if (Mo(G)) {
            for (var c = uq(b.prefix), d = {}, e = 0; e < a.length; e++)
                mq[a[e]] && (d[a[e]] = mq[a[e]]);
            pq(function() {
                z(d, function(f, g) {
                    var h = No(c + g, H.cookie, void 0, nq());
                    h.sort(function(t, u) {
                        return Jq(u) - Jq(t)
                    });
                    if (h.length) {
                        var m = h[0], n = Jq(m), p = Lq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [], q = {}, r;
                        r = Lq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Gq(q, !0, b, n, p)
                    }
                })
            }, nq())
        }
    }
    function Pq(a) {
        var b = []
          , c = [];
        Yi(6) && (b.push("ag"),
        c.push("gbraid"));
        b.length !== 0 && pq(function() {
            for (var d = uq(a.prefix), e = 0; e < b.length; ++e) {
                var f = vq(b[e], d);
                if (!f)
                    break;
                var g = fq(f);
                if (g.length) {
                    var h = g.sort(function(q, r) {
                        return zq(r) - zq(q)
                    })[0]
                      , m = zq(h)
                      , n = h.b
                      , p = {};
                    p[c[e]] = h.k;
                    Gq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }
    function Qq(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    function Rq(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (gm()) {
            var c = Eq();
            if (Qq(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                Yi(6) && b(d, "gbraid", c.gbraid);
                Fp(function() {
                    return d
                }, 3);
                Fp(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
    function Sq(a) {
        if (!Yi(1))
            return null;
        var b = xp(!0).gad_source;
        if (b != null)
            return G.location.hash = "",
            b;
        if (Yi(2)) {
            var c = V(G.location.href);
            b = ij(c, "query", !1, void 0, "gad_source");
            if (b != null)
                return b;
            var d = Eq();
            if (Qq(d, a))
                return "0"
        }
        return null
    }
    function Tq(a) {
        var b = Sq(a);
        b != null && Fp(function() {
            var c = {};
            return c.gad_source = b,
            c
        }, 4)
    }
    function Uq(a, b, c) {
        var d = [];
        if (b.length === 0)
            return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f]
              , h = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0),
            e[h] || d.push(g)) : a.push(1);
            e[h] = !0
        }
        return d
    }
    function Vq(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!oq(nq()))
            return e;
        var f = rq(a)
          , g = Uq(e, f, b);
        if (g.length && !d)
            for (var h = oa(g), m = h.next(); !m.done; m = h.next()) {
                var n = m.value
                  , p = n.timestamp
                  , q = [n.version, Math.round(p / 1E3), n.aa].concat(n.labels || [], [b]).join(".")
                  , r = hp(c, p, !0);
                r.Ab = nq();
                Yo(a, q, r)
            }
        return e
    }
    function Wq(a, b) {
        var c = [];
        b = b || {};
        var d = tq(b)
          , e = Uq(c, d, a);
        if (e.length)
            for (var f = oa(e), g = f.next(); !g.done; g = f.next()) {
                var h = g.value
                  , m = uq(b.prefix)
                  , n = vq(h.type, m);
                if (!n)
                    break;
                var p = h
                  , q = p.version
                  , r = p.aa
                  , t = p.labels
                  , u = p.timestamp
                  , v = Math.round(u / 1E3);
                if (h.type === "ag") {
                    var w = {}
                      , x = (w.k = r,
                    w.i = "" + v,
                    w.b = (t || []).concat([a]),
                    w);
                    hq(n, x, b, u)
                } else if (h.type === "gb") {
                    var y = [q, v, r].concat(t || [], [a]).join(".")
                      , B = hp(b, u, !0);
                    B.Ab = nq();
                    Yo(n, y, B)
                }
            }
        return c
    }
    function Xq(a, b) {
        var c = uq(b)
          , d = vq(a, c);
        if (!d)
            return 0;
        var e;
        e = a === "ag" ? Yi(6) ? wq(d) : [] : rq(d);
        for (var f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Yq(a) {
        for (var b = 0, c = oa(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++)
                b = Math.max(b, Number(e[f].timestamp));
        return b
    }
    function Zq(a, b) {
        var c = Math.max(Xq("aw", a), Yq(oq(nq()) ? Wp() : {}))
          , d = Math.max(Xq("gb", a), Yq(oq(nq()) ? Wp("_gac_gb", !0) : {}));
        Yi(6) && b && (d = Math.max(d, Xq("ag", a)));
        return d > c
    }
    ;var $q = function(a, b, c) {
        var d = ni.joined_auid = ni.joined_auid || {}
          , e = (c ? a || "_gcl" : "") + "." + b;
        if (d[e])
            return !0;
        d[e] = !0;
        return !1
    }
      , ar = function() {
        var a = V(G.location.href)
          , b = ij(a, "query", !1, void 0, "gad_source");
        if (b === void 0) {
            var c = a.hash.replace("#", "");
            b = fj(c, "gad_source", !1)
        }
        return b
    }
      , br = function() {
        var a = V(G.location.href).search.replace("?", "");
        return fj(a, "gad", !1, !0) === "1"
    }
      , cr = function() {
        var a = xl(!1) === 1 ? G.top.location.href : G.location.href;
        return a = a.replace(/[\?#].*$/, "")
    }
      , dr = function(a) {
        var b = [];
        z(a, function(c, d) {
            d = Bq(d);
            for (var e = [], f = 0; f < d.length; f++)
                e.push(d[f].aa);
            e.length && b.push(c + ":" + e.join(","))
        });
        return b.join(";")
    }
      , fr = function(a, b, c) {
        if (a === "aw" || a === "dc" || a === "gb") {
            var d = nj("gcl" + a);
            if (d)
                return d.split(".")
        }
        var e = uq(b);
        if (e === "_gcl") {
            var f = !X(er()) && c, g;
            g = Eq()[a] || [];
            if (g.length > 0)
                return f ? ["0"] : g
        }
        var h = vq(a, e);
        return h ? qq(h) : []
    }
      , gr = function(a) {
        var b = er();
        um(function() {
            a();
            X(b) || km(a, b)
        }, b)
    }
      , er = function() {
        return [Q.g.R, Q.g.P]
    }
      , hr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , ir = /^www.googleadservices.com$/
      , jr = function(a, b) {
        return fr("aw", a, b)
    }
      , kr = function(a, b) {
        return fr("dc", a, b)
    }
      , lr = function(a, b, c, d, e) {
        var f = Eq()
          , g = []
          , h = f.gclid
          , m = f.dclid
          , n = f.gclsrc || "aw"
          , p = br()
          , q = ar();
        !h || n !== "aw.ds" && n !== "aw" && n !== "ds" && n !== "3p.ds" || g.push({
            aa: h,
            ye: n
        });
        m && g.push({
            aa: m,
            ye: "ds"
        });
        g.length === 2 && P(147);
        g.length === 0 && f.wbraid && g.push({
            aa: f.wbraid,
            ye: "gb"
        });
        g.length === 0 && n === "aw.ds" && g.push({
            aa: "",
            ye: "aw.ds"
        });
        gr(function() {
            var r = X(er());
            if (r) {
                Lp(a);
                var t = []
                  , u = r ? Jp[Mp(a.prefix)] : void 0;
                u && t.push("auid=" + u);
                if (X(Q.g.P)) {
                    e && t.push("userId=" + e);
                    var v = Jo(Eo.Lg);
                    if (v === void 0)
                        Io(Eo.Mg, !0);
                    else {
                        var w = Jo(Eo.ke);
                        t.push("ga_uid=" + w + "." + v)
                    }
                }
                var x = H.referrer ? ij(V(H.referrer), "host") : ""
                  , y = r || !d ? g : [];
                y.length === 0 && (hr.test(x) || ir.test(x)) && y.push({
                    aa: "",
                    ye: ""
                });
                if (y.length !== 0 || p || q !== void 0) {
                    x && t.push("ref=" + encodeURIComponent(x));
                    var B = cr();
                    t.push("url=" + encodeURIComponent(B));
                    t.push("tft=" + Db());
                    var A = Pc();
                    A !== void 0 && t.push("tfd=" + Math.round(A));
                    var D = xl(!0);
                    t.push("frm=" + D);
                    p && t.push("gad=1");
                    q !== void 0 && t.push("gad_source=" + encodeURIComponent(q));
                    var E = c;
                    E === void 0 && (E = rn.D[Q.g.ma]);
                    var C = {}
                      , F = mn(bn(new an(0), (C[Q.g.ma] = E,
                    C)));
                    t.push("gtm=" + Do({
                        xa: b
                    }));
                    qo() && t.push("gcs=" + ro());
                    t.push("gcd=" + vo(F));
                    yo() && t.push("dma_cps=" + wo());
                    t.push("dma=" + xo());
                    po(F) ? t.push("npa=0") : t.push("npa=1");
                    U(64) && Ao() && t.push("_ng=1");
                    Jn(Rn()) && t.push("tcfd=" + zo());
                    var M = io();
                    M && t.push("gdpr=" + M);
                    var L = Wn();
                    L && t.push("gdpr_consent=" + L);
                    U(17) && t.push("apve=" + (U(18) ? 1 : 0));
                    Fi.j && t.push("tag_exp=" + Fi.j);
                    if (y.length > 0)
                        for (var O = 0; O < y.length; O++) {
                            var T = y[O]
                              , ba = T.aa
                              , aa = T.ye;
                            if (!$q(a.prefix, aa + "." + ba, u !== void 0)) {
                                var R = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                ba !== "" ? R = aa === "gb" ? R + "&wbraid=" + ba : R + "&gclid=" + ba + "&gclsrc=" + aa : aa === "aw.ds" && (R += "&gclsrc=aw.ds");
                                Kc(R)
                            }
                        }
                    else if ((p || q !== void 0) && !$q(a.prefix, "gad", u !== void 0)) {
                        var pa = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                        Kc(pa)
                    }
                }
            }
        })
    };
    var mr, nr = !1;
    function or() {
        nr = !0;
        mr = mr || {}
    }
    function pr(a) {
        nr || or();
        return mr[a]
    }
    var qr = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.o = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = k(c.eventMetadata || {}, {})
    };
    qr.prototype.copyToHitData = function(a, b, c) {
        var d = W(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && l(d) && U(57))
            try {
                d = c(d)
            } catch (e) {}
        d !== void 0 && (this.o[a] = d)
    }
    ;
    var rr = function(a, b, c) {
        var d = pr(a.target.ia);
        return d && d[b] !== void 0 ? d[b] : c
    };
    function sr() {
        ni.dedupe_gclid || (ni.dedupe_gclid = ep());
        return ni.dedupe_gclid
    }
    ;var tr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , ur = /^www.googleadservices.com$/;
    function vr(a) {
        a || (a = wr());
        return a.Vm ? !1 : a.Ll || a.Ml || a.Ol || a.Nl || a.lh || a.gh || a.zl || a.Dl ? !0 : !1
    }
    function wr() {
        var a = {}
          , b = xp(!0);
        a.Vm = !!b._up;
        var c = Eq();
        a.Ll = c.aw !== void 0;
        a.Ml = c.dc !== void 0;
        a.Ol = c.wbraid !== void 0;
        a.Nl = c.gbraid !== void 0;
        var d = V(G.location.href)
          , e = ij(d, "query", !1, void 0, "gad");
        a.lh = e !== void 0;
        if (!a.lh) {
            var f = d.hash.replace("#", "")
              , g = fj(f, "gad", !1);
            a.lh = g !== void 0
        }
        a.gh = ij(d, "query", !1, void 0, "gad_source");
        if (a.gh === void 0) {
            var h = d.hash.replace("#", "")
              , m = fj(h, "gad_source", !1);
            a.gh = m
        }
        var n = H.referrer ? ij(V(H.referrer), "host") : "";
        a.Dl = tr.test(n);
        a.zl = ur.test(n);
        return a
    }
    ;var xr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , yr = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , zr = /^\d+\.fls\.doubleclick\.net$/
      , Ar = /;gac=([^;?]+)/
      , Br = /;gacgb=([^;?]+)/;
    function Cr(a, b) {
        if (zr.test(H.location.host)) {
            var c = H.location.href.match(b);
            return c && c.length === 2 && c[1].match(xr) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = oa(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, h = [], m = a[g], n = 0; n < m.length; n++)
                h.push(m[n].aa);
            d.push(g + ":" + h.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }
    function Dr(a, b, c) {
        for (var d = oq(nq()) ? Wp("_gac_gb", !0) : {}, e = [], f = !1, g = oa(Object.keys(d)), h = g.next(); !h.done; h = g.next()) {
            var m = h.value
              , n = Vq("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            yl: f ? e.join(";") : "",
            xl: Cr(d, Br)
        }
    }
    function Er(a) {
        var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(yr) ? b[1] : void 0
    }
    function Fr(a) {
        var b = {
            hh: void 0,
            ih: void 0
        }, c, d;
        zr.test(H.location.host) && (c = Er("gclgs"),
        d = Er("gclst"));
        if (c && d)
            b.hh = c,
            b.ih = d;
        else {
            var e = Db()
              , f = wq((a || "_gcl") + "_gs")
              , g = f.map(function(m) {
                return m.aa
            })
              , h = f.map(function(m) {
                return e - m.timestamp
            });
            g.length > 0 && h.length > 0 && (b.hh = g.join("."),
            b.ih = h.join("."))
        }
        return b
    }
    function Gr(a, b, c) {
        if (zr.test(H.location.host)) {
            var d = Er(c);
            if (d)
                return [{
                    aa: d
                }]
        } else {
            if (b === "gclid")
                return rq((a || "_gcl") + "_aw");
            if (b === "wbraid")
                return rq((a || "_gcl") + "_gb");
            if (b === "braids")
                return tq({
                    prefix: a
                })
        }
        return []
    }
    function Hr(a) {
        return Gr(a, "gclid", "gclaw").map(function(b) {
            return b.aa
        }).join(".")
    }
    function Ir(a) {
        return Gr(a, "wbraid", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }
    function Jr(a) {
        return Gr(a, "braids", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }
    function Kr(a, b) {
        return zr.test(H.location.host) ? !(Er("gclaw") || Er("gac")) : Zq(a, b)
    }
    function Lr(a, b, c) {
        var d;
        d = c ? Wq(a, b) : Vq((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    }
    ;var Mr = function() {
        if (qb(G.__uspapi)) {
            var a = "";
            try {
                G.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Pr = function(a) {
        if (a.eventName === Q.g.ba && a.metadata.hit_type === "page_view")
            if (U(18)) {
                a.metadata.redact_click_ids = W(a.m, Q.g.fa) != null && W(a.m, Q.g.fa) !== !1 && !X([Q.g.R, Q.g.P]);
                var b = Nr(a)
                  , c = W(a.m, Q.g.ra) !== !1;
                c || (a.o[Q.g.xi] = "1");
                var d = uq(b.prefix)
                  , e = a.metadata.is_server_side_destination;
                if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
                    var f = W(a.m, Q.g.Xa)
                      , g = W(a.m, Q.g.sa) || {};
                    Or({
                        rd: c,
                        wd: g,
                        Cd: f,
                        jc: b
                    });
                    var h;
                    if (h = !e) {
                        var m;
                        var n = ni.ads_pageview = ni.ads_pageview || {};
                        m = n[d] ? !1 : n[d] = !0;
                        h = !m
                    }
                    if (h) {
                        a.isAborted = !0;
                        return
                    }
                }
                if (e)
                    a.isAborted = !0;
                else {
                    a.o[Q.g.xc] = Q.g.Sb;
                    if (a.metadata.consent_updated)
                        a.o[Q.g.xc] = Q.g.pk,
                        a.o[Q.g.Qb] = "1";
                    else if (a.metadata.user_id_updated)
                        a.o[Q.g.xc] = Q.g.uk;
                    else {
                        var p = Eq();
                        a.o[Q.g.Fd] = p.gclid;
                        a.o[Q.g.Md] = p.dclid;
                        a.o[Q.g.ri] = p.gclsrc;
                        a.o[Q.g.Fd] || a.o[Q.g.Md] || (a.o[Q.g.Re] = p.wbraid,
                        a.o[Q.g.Wf] = p.gbraid);
                        a.o[Q.g.Da] = H.referrer ? ij(V(H.referrer), "host") : "";
                        a.o[Q.g.wa] = cr();
                        a.o[Q.g.oi] = ar();
                        a.o[Q.g.Gb] = xl(!0);
                        var q = wr();
                        vr(q) && (a.o[Q.g.ed] = "1");
                        a.o[Q.g.ui] = sr();
                        xp(!1)._up === "1" && (a.o[Q.g.Ki] = "1")
                    }
                    var r = X([Q.g.R, Q.g.P]);
                    c && r && (Lp(b),
                    a.o[Q.g.Db] = Jp[Mp(b.prefix)]);
                    a.o[Q.g.jb] = void 0;
                    a.o[Q.g.Ua] = void 0;
                    var t = U(61);
                    if (!a.o[Q.g.Fd] && !a.o[Q.g.Md] && Kr(d, t)) {
                        var u = t ? sq(b) : qq(d + "_gb");
                        u.length > 0 && (a.o[Q.g.jb] = u.join("."))
                    } else if (!a.o[Q.g.Re] && r) {
                        var v = qq(d + "_aw");
                        v.length > 0 && (a.o[Q.g.Ua] = v.join("."))
                    }
                    a.m.isGtmEvent && (a.m.j[Q.g.ma] = rn.D[Q.g.ma]);
                    po(a.m) ? a.o[Q.g.Nb] = !1 : a.o[Q.g.Nb] = !0;
                    a.metadata.add_tag_timing = !0;
                    var w = Mr();
                    w !== void 0 && (a.o[Q.g.de] = w || "error");
                    var x = io();
                    x && (a.o[Q.g.Ac] = x);
                    var y = Wn();
                    y && (a.o[Q.g.Cc] = y);
                    a.metadata.speculative = !1
                }
            } else
                a.isAborted = !0
    }
      , Nr = function(a) {
        var b = {
            prefix: W(a.m, Q.g.Za) || W(a.m, Q.g.Na),
            domain: W(a.m, Q.g.Va),
            zb: W(a.m, Q.g.Wa),
            flags: W(a.m, Q.g.ab)
        };
        a.m.isGtmEvent && (b.path = W(a.m, Q.g.Eb));
        return b
    }
      , Qr = function(a, b) {
        var c, d, e, f, g, h, m, n;
        c = a.rd;
        d = a.wd;
        e = a.Cd;
        f = a.xa;
        g = a.allowAdPersonalizationSignals;
        h = a.xd;
        m = a.Hn;
        n = a.fk;
        Or({
            rd: c,
            wd: d,
            Cd: e,
            jc: b
        });
        c && m !== !0 && (n != null ? n = String(n) : n = void 0,
        lr(b, f, g, h, n))
    }
      , Or = function(a) {
        var b, c, d, e;
        b = a.rd;
        c = a.wd;
        d = a.Cd;
        e = a.jc;
        b && (Hp(c[Q.g.Bc], !!c[Q.g.W]) && (Iq(Rr, e),
        Kq(e),
        Tp(e)),
        Fq(e),
        Oq(Rr, e),
        Pq(e));
        c[Q.g.W] && (Mq(Rr, c[Q.g.W], c[Q.g.Ib], !!c[Q.g.sb], e.prefix),
        Nq(c[Q.g.W], c[Q.g.Ib], !!c[Q.g.sb], e.prefix),
        Up(Mp(e.prefix), c[Q.g.W], c[Q.g.Ib], !!c[Q.g.sb], e),
        Up("FPAU", c[Q.g.W], c[Q.g.Ib], !!c[Q.g.sb], e));
        d && Rq(Sr);
        Tq(Sr)
    }
      , Tr = function(a, b, c, d) {
        var e, f, g;
        e = a.gk;
        f = a.callback;
        g = a.Kj;
        if (typeof f === "function")
            if (e === Q.g.Ua && g === void 0) {
                var h = d(b.prefix, c);
                h.length === 0 ? f(void 0) : h.length === 1 ? f(h[0]) : f(h)
            } else
                e === Q.g.Db ? (P(65),
                Lp(b, !1),
                f(Jp[Mp(b.prefix)])) : f(g)
    }
      , Rr = ["aw", "dc", "gb"]
      , Sr = ["aw", "dc", "gb", "ag"];
    function Ur(a) {
        var b = W(a.m, Q.g.Hb)
          , c = W(a.m, Q.g.Wb);
        b && !c ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Mc && P(131),
        a.isAborted = !0) : !b && c && (P(132),
        a.isAborted = !0)
    }
    function Vr(a) {
        var b = X(Q.g.R) ? ni.pscdl : "denied";
        b != null && (a.o[Q.g.Ve] = b)
    }
    function Wr(a) {
        var b = xl(!0);
        a.o[Q.g.Gb] = b
    }
    function Xr(a) {
        U(64) && Ao() && (a.o[Q.g.bd] = 1)
    }
    ;function ds(a, b, c, d) {
        var e = Bc(), f;
        if (e === 1)
            a: {
                var g = yi;
                g = g.toLowerCase();
                for (var h = "https://" + g, m = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (r.indexOf(m) === 0) {
                            f = 3;
                            break a
                        }
                        n === 1 && r.indexOf(h) === 0 && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (f === 2 || d || "http:" != G.location.protocol ? a : b) + c
    }
    ;function qs(a) {
        return {
            getDestinationId: function() {
                return a.target.ia
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                a.o[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.o[b] === void 0 && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return W(a.m, b)
            },
            Fj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.o)
            }
        }
    }
    ;var ss = function(a) {
        var b = rs[a.target.ia];
        if (!a.isAborted && b)
            for (var c = qs(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.isAborted = !0
                }
                if (a.isAborted)
                    break
            }
    }
      , ts = function(a, b) {
        var c = rs[a];
        c || (c = rs[a] = []);
        c.push(b)
    }
      , rs = {};
    function xs() {
        var a = G.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
    function ys(a) {
        if (H.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
            return !0;
        var c = G.getComputedStyle(a, null);
        if (c.visibility === "hidden")
            return !0;
        for (var d = a, e = c; d; ) {
            if (e.display === "none")
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                h >= 0 && (g = g.substring(h + 8, g.indexOf(")", h)),
                g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
                f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0)
                return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d, null))
        }
        return !1
    }
    var As = function(a) {
        var b = zs()
          , c = b.height
          , d = b.width
          , e = a.getBoundingClientRect()
          , f = e.bottom - e.top
          , g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
    }
      , zs = function() {
        var a = H.body, b = H.documentElement || a && a.parentElement, c, d;
        if (H.compatMode && H.compatMode !== "BackCompat")
            c = b ? b.clientHeight : 0,
            d = b ? b.clientWidth : 0;
        else {
            var e = function(f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g)
            };
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
        }
        return {
            width: d,
            height: c
        }
    };
    var Ds = function(a) {
        if (Bs) {
            if (a >= 0 && a < Cs.length && Cs[a]) {
                var b;
                (b = Cs[a]) == null || b.disconnect();
                Cs[a] = void 0
            }
        } else
            G.clearInterval(a)
    }
      , Gs = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            c[d] > 1 ? c[d] = 1 : c[d] < 0 && (c[d] = 0);
        if (Bs) {
            var e = !1;
            I(function() {
                e || Es(a, b, c)()
            });
            return Fs(function(f) {
                e = !0;
                for (var g = {
                    Ce: 0
                }; g.Ce < f.length; g = {
                    Ce: g.Ce
                },
                g.Ce++)
                    I(function(h) {
                        return function() {
                            a(f[h.Ce])
                        }
                    }(g))
            }, b, c)
        }
        return G.setInterval(Es(a, b, c), 1E3)
    }
      , Es = function(a, b, c) {
        function d(h, m) {
            var n = {
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: 0,
                height: 0
            }
              , p = {
                boundingClientRect: h.getBoundingClientRect(),
                intersectionRatio: m,
                intersectionRect: n,
                isIntersecting: m > 0,
                rootBounds: n,
                target: h,
                time: Db()
            };
            I(function() {
                a(p)
            })
        }
        for (var e = [], f = [], g = 0; g < b.length; g++)
            e.push(0),
            f.push(-1);
        c.sort(function(h, m) {
            return h - m
        });
        return function() {
            for (var h = 0; h < b.length; h++) {
                var m = As(b[h]);
                if (m > e[h])
                    for (; f[h] < c.length - 1 && m >= c[f[h] + 1]; )
                        d(b[h], m),
                        f[h]++;
                else if (m < e[h])
                    for (; f[h] >= 0 && m <= c[f[h]]; )
                        d(b[h], m),
                        f[h]--;
                e[h] = m
            }
        }
    }
      , Fs = function(a, b, c) {
        for (var d = new G.IntersectionObserver(a,{
            threshold: c
        }), e = 0; e < b.length; e++)
            d.observe(b[e]);
        for (var f = 0; f < Cs.length; f++)
            if (!Cs[f])
                return Cs[f] = d,
                f;
        return Cs.push(d) - 1
    }
      , Cs = []
      , Bs = !(!G.IntersectionObserver || !G.IntersectionObserverEntry);
    var Is = function(a, b, c) {
        var d = a.element
          , e = {
            X: a.X,
            type: a.qa,
            tagName: d.tagName
        };
        b && (e.querySelector = Hs(d));
        c && (e.isVisible = !ys(d));
        return e
    }
      , Js = function(a, b, c) {
        return Is({
            element: a.element,
            X: a.X,
            qa: "1"
        }, b, c)
    }
      , Ks = function(a) {
        var b = !!a.ud + "." + !!a.vd;
        a && a.ve && a.ve.length && (b += "." + a.ve.join("."));
        a && a.vb && (b += "." + a.vb.email + "." + a.vb.phone + "." + a.vb.address);
        return b
    }
      , Ns = function(a) {
        if (a.length != 0) {
            var b;
            b = Ls(a, function(c) {
                return !Ms.test(c.X)
            });
            b = Ls(b, function(c) {
                return c.element.tagName.toUpperCase() === "INPUT"
            });
            b = Ls(b, function(c) {
                return !ys(c.element)
            });
            return b[0]
        }
    }
      , Os = function(a, b) {
        if (!b || b.length === 0)
            return a;
        for (var c = [], d = 0; d < a.length; d++) {
            for (var e = !0, f = 0; f < b.length; f++) {
                var g = b[f];
                if (g && rh(a[d].element, g)) {
                    e = !1;
                    break
                }
            }
            e && c.push(a[d])
        }
        return c
    }
      , Ls = function(a, b) {
        if (a.length <= 1)
            return a;
        var c = a.filter(b);
        return c.length == 0 ? a : c
    }
      , Hs = function(a) {
        var b;
        if (a === H.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = Hs(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , Qs = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c]
              , e = d.textContent;
            d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
            if (e) {
                var f = e.match(Ps);
                if (f) {
                    var g = f[0], h;
                    if (G.location) {
                        var m = hj(G.location, "host", !0);
                        h = g.toLowerCase().indexOf(m) >= 0
                    } else
                        h = !1;
                    h || b.push({
                        element: d,
                        X: g
                    })
                }
            }
        }
        return b
    }
      , Us = function() {
        var a = []
          , b = H.body;
        if (!b)
            return {
                elements: a,
                status: "4"
            };
        for (var c = b.querySelectorAll("*"), d = 0; d < c.length && d < 1E4; d++) {
            var e = c[d];
            if (!(Rs.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                    if (!(Ss.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                        f = !0;
                        break
                    }
                (!f || U(22) && Ts.indexOf(e.tagName) !== -1) && a.push(e)
            }
        }
        return {
            elements: a,
            status: c.length > 1E4 ? "2" : "1"
        }
    }
      , Vs = !1;
    var Ps = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      , Ws = /@(gmail|googlemail)\./i
      , Ms = /support|noreply/i
      , Rs = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , Ss = ["BR"]
      , Xs = {
        gn: "1",
        un: "2",
        ln: "3",
        on: "4",
        bn: "5",
        vn: "6",
        qn: "7"
    }
      , Ys = {}
      , Ts = ["INPUT", "SELECT"];
    var qt = function(a) {
        a = a || {
            ud: !0,
            vd: !0,
            Lf: void 0
        };
        a.vb = a.vb || {
            email: !0,
            phone: !1,
            address: !1
        };
        var b = Ks(a)
          , c = Ys[b];
        if (c && Db() - c.timestamp < 200)
            return c.result;
        var d = Us(), e = d.status, f = [], g, h, m = [];
        if (!U(22)) {
            if (a.vb && a.vb.email) {
                var n = Qs(d.elements);
                f = Os(n, a && a.ve);
                g = Ns(f);
                n.length > 10 && (e = "3")
            }
            !a.Lf && g && (f = [g]);
            for (var p = 0; p < f.length; p++)
                m.push(Js(f[p], a.ud, a.vd));
            m = m.slice(0, 10)
        } else if (a.vb) {}
        g && (h = Js(g, a.ud, a.vd));
        var D = {
            elements: m,
            Fh: h,
            status: e
        };
        Ys[b] = {
            timestamp: Db(),
            result: D
        };
        return D
    }
      , rt = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Ws.test(a.X)
    };
    var st = function(a) {
        return rr(a, Q.g.Vb, W(a.m, Q.g.Vb)) || !!rr(a, "google_ng", !1)
    }
      , tt = function(a) {
        if (a.metadata.is_merchant_center || !sj(a.m))
            return !1;
        if (!W(a.m, Q.g.jd)) {
            var b = W(a.m, Q.g.yc);
            return b === !0 || b === "true"
        }
        return !0
    }
      , ut = function(a) {
        var b = a.metadata.user_data;
        if (Ya(b))
            return b
    }
      , vt = function(a, b) {
        var c = rr(a, Q.g.Sd, a.m.D[Q.g.Sd]);
        if (c && c[b || a.eventName] !== void 0)
            return c[b || a.eventName]
    }
      , wt = function(a, b, c) {
        a.o[Q.g.je] || (a.o[Q.g.je] = {});
        a.o[Q.g.je][b] = c
    };
    var xt = Number('') || 5
      , zt = Number('') || 50
      , At = ub();
    var Ft = {
        Tk: Number('') || 500,
        Hk: Number('') || 5E3,
        ej: Number('20') || 10,
        nk: Number('') || 5E3
    };
    function Gt(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Ht = function(a, b) {
        var c;
        return c
    };
    var It = "https://" + mi.Ed + "/gtm/static/", Jt;
    function Ot(a, b) {}
    function Pt(a, b, c, d) {}
    function Qt(a, b, c, d) {}
    function Rt(a, b, c, d) {}
    var St = void 0;
    function Tt(a) {
        var b = [];
        return b
    }
    ;var Ut = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    il();
    ll() || fl("iPod");
    fl("iPad");
    !fl("Android") || jl() || il() || hl() || fl("Silk");
    jl();
    !fl("Safari") || jl() || (gl() ? 0 : fl("Coast")) || hl() || (gl() ? 0 : fl("Edge")) || (gl() ? el("Microsoft Edge") : fl("Edg/")) || (gl() ? el("Opera") : fl("OPR")) || il() || fl("Silk") || fl("Android") || ml();
    var Vt = {}
      , Wt = null
      , Xt = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        f === void 0 && (f = 0);
        if (!Wt) {
            Wt = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                var n = g.concat(h[m].split(""));
                Vt[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    Wt[q] === void 0 && (Wt[q] = p)
                }
            }
        }
        for (var r = Vt[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , B = b[v + 2]
              , A = r[x >> 2]
              , D = r[(x & 3) << 4 | y >> 4]
              , E = r[(y & 15) << 2 | B >> 6]
              , C = r[B & 63];
            t[w++] = "" + A + D + E + C
        }
        var F = 0
          , M = u;
        switch (b.length - v) {
        case 2:
            F = b[v + 1],
            M = r[(F & 15) << 2] || u;
        case 1:
            var L = b[v];
            t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | F >> 4] + M + u
        }
        return t.join("")
    };
    var Yt = function() {};
    Object.freeze(new function() {}
    );
    Object.freeze(new Yt);
    Object.freeze(new Yt);
    var Zt = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function $t(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }
    function au() {
        var a = G.google_tag_data, b;
        if (a != null && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function bu() {
        var a, b;
        return (b = (a = G.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }
    function cu(a) {
        var b, c;
        return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }
    function du() {
        var a = G;
        if (!cu(a))
            return null;
        var b = $t(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Zt).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;var eu, fu = function() {
        if (cu(G) && (eu = Db(),
        !bu())) {
            var a = du();
            a && (a.then(function() {
                P(95);
            }),
            a.catch(function() {
                P(96)
            }))
        }
    }, hu = function(a) {
        var b = gu.Tm
          , c = function(g, h) {
            try {
                a(g, h)
            } catch (m) {}
        }
          , d = au();
        if (d)
            c(d);
        else {
            var e = bu();
            if (e) {
                b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = G.setTimeout(function() {
                    c.Ee || (c.Ee = !0,
                    P(106),
                    c(null, Error("Timeout")))
                }, b);
                e.then(function(g) {
                    c.Ee || (c.Ee = !0,
                    P(104),
                    G.clearTimeout(f),
                    c(g))
                }).catch(function(g) {
                    c.Ee || (c.Ee = !0,
                    P(105),
                    G.clearTimeout(f),
                    c(null, g))
                })
            } else
                c(null)
        }
    }, iu = function(a, b) {
        a && (b.o[Q.g.kf] = a.architecture,
        b.o[Q.g.lf] = a.bitness,
        a.fullVersionList && (b.o[Q.g.nf] = a.fullVersionList.map(function(c) {
            return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
        b.o[Q.g.pf] = a.mobile ? "1" : "0",
        b.o[Q.g.qf] = a.model,
        b.o[Q.g.rf] = a.platform,
        b.o[Q.g.tf] = a.platformVersion,
        b.o[Q.g.uf] = a.wow64 ? "1" : "0")
    };
    function ju(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }
    ;var ku = !1;
    function lu() {
        if (ju("join-ad-interest-group") && qb(qc.joinAdInterestGroup))
            return !0;
        ku || (vl(''),
        ku = !0);
        return ju("join-ad-interest-group") && qb(qc.joinAdInterestGroup)
    }
    function mu(a, b) {
        var c = Xi[3] === void 0 ? 1 : Xi[3]
          , d = 'iframe[data-tagging-id="' + b + '"]'
          , e = [];
        try {
            if (c === 1) {
                var f = H.querySelector(d);
                f && (e = [f])
            } else
                e = Array.from(H.querySelectorAll(d))
        } catch (q) {}
        var g;
        a: {
            try {
                g = H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            g = void 0
        }
        var h = g, m = ((h == null ? void 0 : h.length) || 0) >= (Xi[2] === void 0 ? 50 : Xi[2]), n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && Db() - p < (Xi[1] === void 0 ? 6E4 : Xi[1]) ? (mb("TAGGING", 9),
            n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1)
                    nu(e[0]);
                else {
                    if (m) {
                        mb("TAGGING", 10);
                        return
                    }
                }
            else
                e.length >= c ? nu(e[0]) : m && nu(h[0]);
            Cc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: Db()
            })
        }
    }
    function nu(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }
    function ou() {
        return "https://td.doubleclick.net"
    }
    ;var gv = function(a, b) {
        var c = {}
          , d = function(f, g) {
            var h;
            h = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
            c[f] = h
        };
        z(a.o, function(f, g) {
            var h = fv[f];
            h && g !== void 0 && g !== "" && (!a.metadata.redact_click_ids || f !== Q.g.Fd && f !== Q.g.Md && f !== Q.g.Re && f !== Q.g.Wf || (g = "0"),
            d(h, g))
        });
        d("gtm", Do({
            xa: a.metadata.source_canonical_id
        }));
        qo() && d("gcs", ro());
        d("gcd", vo(a.m));
        yo() && d("dma_cps", wo());
        d("dma", xo());
        Jn(Rn()) && d("tcfd", zo());
        Fi.j && d("tag_exp", Fi.j);
        if (a.metadata.add_tag_timing) {
            d("tft", Db());
            var e = Pc();
            e !== void 0 && d("tfd", Math.round(e))
        }
        U(17) && d("apve", U(18) ? "1" : "0");
        b(c)
    }
      , hv = function(a) {
        gv(a, function(b) {
            var c = [];
            z(b, function(f, g) {
                c.push(f + "=" + g)
            });
            var d;
            d = a.metadata.hit_type === "page_view" ? tj(X([Q.g.R, Q.g.P]) ? "https://www.google.com" : "https://pagead2.googlesyndication.com", !0) + "/ccm/collect" : void 0;
            var e = d + "?" + c.join("&");
            Kc(e);
            if (qb(a.m.onSuccess))
                a.m.onSuccess()
        })
    }
      , iv = {}
      , fv = (iv[Q.g.Qb] = "gcu",
    iv[Q.g.jb] = "gclgb",
    iv[Q.g.Ua] = "gclaw",
    iv[Q.g.oi] = "gad_source",
    iv[Q.g.Fd] = "gclid",
    iv[Q.g.ri] = "gclsrc",
    iv[Q.g.Wf] = "gbraid",
    iv[Q.g.Re] = "wbraid",
    iv[Q.g.Db] = "auid",
    iv[Q.g.ui] = "rnd",
    iv[Q.g.xi] = "ncl",
    iv[Q.g.Zf] = "gcldc",
    iv[Q.g.Md] = "dclid",
    iv[Q.g.ob] = "edid",
    iv[Q.g.xc] = "en",
    iv[Q.g.Ac] = "gdpr",
    iv[Q.g.rb] = "gdid",
    iv[Q.g.bd] = "_ng",
    iv[Q.g.Ki] = "gtm_up",
    iv[Q.g.Gb] = "frm",
    iv[Q.g.ed] = "lps",
    iv[Q.g.Yd] = "did",
    iv[Q.g.wa] = "dl",
    iv[Q.g.Da] = "dr",
    iv[Q.g.ff] = "ga_uid",
    iv[Q.g.Cc] = "gdpr_consent",
    iv[Q.g.Ba] = "uid",
    iv[Q.g.de] = "us_privacy",
    iv[Q.g.Nb] = "npa",
    iv);
    var jv = {
        M: {
            Rh: "ads_conversion_hit",
            Dd: "container_execute_start",
            Uh: "container_setup_end",
            Pf: "container_setup_start",
            Sh: "container_blocking_end",
            Th: "container_execute_end",
            Vh: "container_yield_end",
            Qf: "container_yield_start",
            Ui: "event_execute_end",
            Ti: "event_evaluation_end",
            Hg: "event_evaluation_start",
            Vi: "event_setup_end",
            ee: "event_setup_start",
            Xi: "ga4_conversion_hit",
            he: "page_load",
            tn: "pageview",
            hc: "snippet_load",
            sj: "tag_callback_error",
            tj: "tag_callback_failure",
            uj: "tag_callback_success",
            vj: "tag_execute_end",
            od: "tag_execute_start"
        }
    };
    function kv() {
        function a(c, d) {
            var e = nb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    }
    ;var lv = !1;
    var Uv = function(a, b) {}
      , Vv = function(a, b) {}
      , Wv = function(a, b) {}
      , Xv = function(a, b) {}
      , Yv = function() {
        var a = {};
        return a
    }
      , Lv = function(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }
      , Zv = function() {}
      , $v = function(a, b) {}
      , aw = function(a, b, c) {}
      , bw = function() {};
    function cw(a, b) {
        var c = G, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    }
    ;var dw = function(a, b, c) {
        var d = ql(a, "fmt");
        if (b) {
            var e = ql(a, "random")
              , f = ql(a, "label") || "";
            if (!e)
                return !1;
            var g = Xt(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!cw(g, b))
                return !1
        }
        d && d != 4 && (a = sl(a, "rfmt", d));
        var h = sl(a, "fmt", 4);
        Ac(h, function() {
            G.google_noFurtherRedirects && b && b.call && (G.google_noFurtherRedirects = null,
            b())
        }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    function vw(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c)
                return c[b]
        }
    }
    ;function ww(a, b, c) {
        c = c === void 0 ? !1 : c;
        xw().addRestriction(0, a, b, c)
    }
    function yw(a, b, c) {
        c = c === void 0 ? !1 : c;
        xw().addRestriction(1, a, b, c)
    }
    function zw() {
        var a = Oj();
        return xw().getRestrictions(1, a)
    }
    var Aw = function() {
        this.j = {};
        this.D = {}
    }
      , Bw = function(a, b) {
        var c = a.j[b];
        c || (c = {
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        },
        a.j[b] = c);
        return c
    };
    Aw.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.D[b]) {
            var e = Bw(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    }
    ;
    Aw.prototype.getRestrictions = function(a, b) {
        var c = Bw(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(ra((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ra((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(ra((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ra((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    }
    ;
    Aw.prototype.getExternalRestrictions = function(a, b) {
        var c = Bw(this, b), d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    }
    ;
    Aw.prototype.removeExternalRestrictions = function(a) {
        var b = Bw(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.D[a] = !0
    }
    ;
    function xw() {
        var a = ni.r;
        a || (a = new Aw,
        ni.r = a);
        return a
    }
    ;var Cw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Dw = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Ew = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Fw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    function Gw() {
        var a = Mi("gtm.allowlist") || Mi("gtm.whitelist");
        a && P(9);
        si && (a = ["google", "gtagfl", "lcl", "zone"]);
        Cw.test(G.location && G.location.hostname) && (si ? P(116) : (P(117),
        Hw && (a = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Hb(Ab(a), Dw)
          , c = Mi("gtm.blocklist") || Mi("gtm.blacklist");
        c || (c = Mi("tagTypeBlacklist")) && P(3);
        c ? P(8) : c = [];
        Cw.test(G.location && G.location.hostname) && (c = Ab(c),
        c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        Ab(c).indexOf("google") >= 0 && P(2);
        var d = c && Hb(Ab(c), Ew)
          , e = {};
        return function(f) {
            var g = f && f[Ie.oa];
            if (!g || typeof g !== "string")
                return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0)
                return e[g];
            var h = Ci[g] || []
              , m = !0;
            if (a) {
                var n;
                if (n = m)
                    a: {
                        if (b.indexOf(g) < 0)
                            if (h && h.length > 0)
                                for (var p = 0; p < h.length; p++) {
                                    if (b.indexOf(h[p]) < 0) {
                                        P(11);
                                        n = !1;
                                        break a
                                    }
                                }
                            else {
                                n = !1;
                                break a
                            }
                        n = !0
                    }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r)
                    q = r;
                else {
                    var t = vb(d, h || []);
                    t && P(10);
                    q = t
                }
            }
            var u = !m || q;
            u || !(h.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !== -1 || (u = vb(d, Fw));
            return e[g] = u
        }
    }
    var Hw = !1;
    Hw = !0;
    function Iw() {
        Gj && ww(Oj(), function(a) {
            var b = tf(a.entityId), c;
            if (wf(b)) {
                var d = b[Ie.oa];
                if (!d)
                    throw Error("Error: No function name given for function call.");
                var e = lf[d];
                c = !!e && !!e.runInSiloedMode
            } else
                c = !!vw(b[Ie.oa], 4);
            return c
        })
    }
    var Kw = function(a, b, c, d, e) {
        if (!Jw()) {
            var f = d.siloed ? Jj(a) : a;
            if (!ek(f)) {
                var g = "?id=" + encodeURIComponent(a) + "&l=" + mi.Ya
                  , h = a.indexOf("GTM-") === 0;
                h || (g += "&cx=c");
                U(65) && (g += "&gtm=" + Do());
                var m = rj();
                m && (g += "&sign=" + mi.yf);
                var n = c ? "/gtag/js" : "/gtm.js"
                  , p = qj() ? pj(b, n + g) : void 0;
                if (!p) {
                    var q = mi.Ed + n;
                    m && tc && h ? (q = tc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0],
                    p = ds("https://", "http://", q + g)) : p = Fi.D ? Gi() + n + g : ds("https://", "http://", q + g)
                }
                d.siloed && gk({
                    ctid: f,
                    isDestination: !1
                });
                var r = Xj();
                Dj().container[f] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                Cj({
                    ctid: f,
                    isDestination: !1
                }, e);
                Ac(p)
            }
        }
    }
      , Lw = function(a, b, c, d) {
        if (!Jw()) {
            var e = c.siloed ? Jj(a) : a;
            if (!fk(e))
                if (!c.siloed && hk())
                    Dj().destination[e] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Xj()
                    },
                    Cj({
                        ctid: e,
                        isDestination: !0
                    }, d),
                    P(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + mi.Ya + "&cx=c";
                    U(65) && (f += "&gtm=" + Do());
                    rj() && (f += "&sign=" + mi.yf);
                    var g = qj() ? pj(b, f) : void 0;
                    g || (g = Fi.D ? Gi() + f : ds("https://", "http://", mi.Ed + f));
                    c.siloed && gk({
                        ctid: e,
                        isDestination: !0
                    });
                    Dj().destination[e] = {
                        state: 1,
                        context: c,
                        parent: Xj()
                    };
                    Cj({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    Ac(g)
                }
        }
    };
    function Jw() {
        if (Bo()) {
            return !0
        }
        return !1
    }
    ;var Mw = !1
      , Nw = 0
      , Ow = [];
    function Pw(a) {
        if (!Mw) {
            var b = H.createEventObject
              , c = H.readyState === "complete"
              , d = H.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                Mw = !0;
                for (var e = 0; e < Ow.length; e++)
                    I(Ow[e])
            }
            Ow.push = function() {
                for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++)
                    I(f[g]);
                return 0
            }
        }
    }
    function Qw() {
        if (!Mw && Nw < 140) {
            Nw++;
            try {
                var a, b;
                (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
                Pw()
            } catch (c) {
                G.setTimeout(Qw, 50)
            }
        }
    }
    function Rw(a) {
        Mw ? a() : Ow.push(a)
    }
    ;var Sw = function() {
        this.K = 0;
        this.j = {}
    };
    Sw.prototype.addListener = function(a, b, c) {
        var d = ++this.K;
        this.j[a] = this.j[a] || {};
        this.j[a][String(d)] = {
            listener: b,
            Bb: c
        };
        return d
    }
    ;
    Sw.prototype.D = function(a, b) {
        var c = this.j[a]
          , d = String(b);
        if (!c || !c[d])
            return !1;
        delete c[d];
        return !0
    }
    ;
    Sw.prototype.H = function(a, b) {
        var c = [];
        z(this.j[a], function(d, e) {
            c.indexOf(e.listener) < 0 && (e.Bb === void 0 || b.indexOf(e.Bb) >= 0) && c.push(e.listener)
        });
        return c
    }
    ;
    function Tw(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Mj()
        }
    }
    ;var Vw = function(a, b) {
        this.j = !1;
        this.K = [];
        this.eventData = {
            tags: []
        };
        this.O = !1;
        this.D = this.H = 0;
        Uw(this, a, b)
    }
      , sx = function(a, b, c, d) {
        if (pi.hasOwnProperty(b) || b === "__zone")
            return -1;
        var e = {};
        Ya(d) && (e = k(d, e));
        e.id = c;
        e.status = "timeout";
        return a.eventData.tags.push(e) - 1
    }
      , yx = function(a, b, c, d) {
        var e = a.eventData.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , zx = function(a) {
        if (!a.j) {
            for (var b = a.K, c = 0; c < b.length; c++)
                b[c]();
            a.j = !0;
            a.K.length = 0
        }
    }
      , Uw = function(a, b, c) {
        b !== void 0 && a.ne(b);
        c && G.setTimeout(function() {
            zx(a)
        }, Number(c))
    };
    Vw.prototype.ne = function(a) {
        var b = this
          , c = Fb(function() {
            I(function() {
                a(Mj(), b.eventData)
            })
        });
        this.j ? c() : this.K.push(c)
    }
    ;
    var Ax = function(a) {
        a.H++;
        return Fb(function() {
            a.D++;
            a.O && a.D >= a.H && zx(a)
        })
    }
      , Bx = function(a) {
        a.O = !0;
        a.D >= a.H && zx(a)
    };
    var Cx = {}
      , Ex = function() {
        return G[Dx()]
    };
    function Dx() {
        return G.GoogleAnalyticsObject || "ga"
    }
    var Hx = function() {
        var a = Mj();
    }
      , Ix = function(a, b) {
        return function() {
            var c = Ex()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var Nx = ["es", "1"]
      , Ox = {}
      , Px = {};
    function Qx(a, b) {
        if (Aj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Ox[a] = [["e", c], ["eid", a]];
            Ak(a)
        }
    }
    function Rx(a) {
        var b = a.eventId
          , c = a.Sa;
        if (!Ox[b])
            return [];
        var d = [];
        Px[b] || d.push(Nx);
        d.push.apply(d, ra(Ox[b]));
        c && (Px[b] = !0);
        return d
    }
    ;var Sx = {}
      , Tx = {}
      , Ux = {};
    function Vx(a, b, c, d) {
        Aj && U(74) && ((d === void 0 ? 0 : d) ? (Ux[b] = Ux[b] || 0,
        ++Ux[b]) : c !== void 0 ? (Tx[a] = Tx[a] || {},
        Tx[a][b] = Math.round(c)) : (Sx[a] = Sx[a] || {},
        Sx[a][b] = (Sx[a][b] || 0) + 1))
    }
    function Wx(a) {
        var b = a.eventId, c = a.Sa, d = Sx[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Sx[b];
        return e.length ? [["md", e.join(".")]] : []
    }
    function Xx(a) {
        var b = a.eventId, c = a.Sa, d = Tx[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Tx[b];
        return e.length ? [["mtd", e.join(".")]] : []
    }
    function Yx() {
        for (var a = [], b = oa(Object.keys(Ux)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Ux[d])
        }
        return a.length ? [["mec", a.join(".")]] : []
    }
    ;var Zx = {}
      , $x = {};
    function ay(a, b, c) {
        if (Aj && b) {
            var d = uj(b);
            Zx[a] = Zx[a] || [];
            Zx[a].push(c + d);
            var e = (wf(b) ? "1" : "2") + d;
            $x[a] = $x[a] || [];
            $x[a].push(e);
            Ak(a)
        }
    }
    function by(a) {
        var b = a.eventId
          , c = a.Sa
          , d = []
          , e = Zx[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = $x[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Zx[b],
        delete $x[b]);
        return d
    }
    ;function cy(a, b, c, d) {
        var e = jf[a]
          , f = dy(a, b, c, d);
        if (!f)
            return null;
        var g = xf(e[Ie.qj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = cy(h.index, {
                onSuccess: f,
                onFailure: h.Ej === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function dy(a, b, c, d) {
        function e() {
            if (f[Ie.Lk])
                h();
            else {
                var w = vf(f, c, [])
                  , x = w[Ie.lk];
                if (x != null)
                    for (var y = 0; y < x.length; y++)
                        if (!X(x[y])) {
                            h();
                            return
                        }
                var B = sx(c.ic, String(f[Ie.oa]), Number(f[Ie.me]), w[Ie.Mk])
                  , A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var C = Db() - E;
                        ay(c.id, jf[a], "5");
                        yx(c.ic, B, "success", C);
                        U(66) && aw(c, f, jv.M.uj);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var C = Db() - E;
                        ay(c.id, jf[a], "6");
                        yx(c.ic, B, "failure", C);
                        U(66) && aw(c, f, jv.M.tj);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ay(c.id, f, "1");
                var D = function() {
                    Kl(3);
                    var C = Db() - E;
                    ay(c.id, f, "7");
                    yx(c.ic, B, "exception", C);
                    U(66) && aw(c, f, jv.M.sj);
                    A || (A = !0,
                    h())
                };
                U(66) && $v(c, f);
                var E = Db();
                try {
                    yf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (C) {
                    D(C)
                }
                U(66) && aw(c, f, jv.M.vj)
            }
        }
        var f = jf[a]
          , g = b.onSuccess
          , h = b.onFailure
          , m = b.terminate;
        if (c.isBlocked(f))
            return null;
        var n = xf(f[Ie.wj], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = cy(p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = p.Ej === 2 ? m : q
        }
        if (f[Ie.ij] || f[Ie.Ok]) {
            var r = f[Ie.ij] ? kf : c.Lm
              , t = g
              , u = h;
            if (!r[a]) {
                e = Fb(e);
                var v = ey(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function ey(a, b, c) {
        var d = []
          , e = [];
        b[a] = fy(d, e, c);
        return {
            onSuccess: function() {
                b[a] = gy;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = hy;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function fy(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function gy(a) {
        a()
    }
    function hy(a, b) {
        b()
    }
    ;var ky = function(a, b) {
        for (var c = [], d = 0; d < jf.length; d++)
            if (a[d]) {
                var e = jf[d];
                var f = Ax(b.ic);
                try {
                    var g = cy(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[Ie.oa];
                        if (!h)
                            throw Error("Error: No function name given for function call.");
                        var m = lf[h];
                        c.push({
                            dk: d,
                            Qj: (m ? m.priorityOverride || 0 : 0) || vw(e[Ie.oa], 1) || 0,
                            execute: g
                        })
                    } else
                        iy(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(jy);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return c.length > 0
    };
    var my = function(a, b) {
        if (!ly)
            return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"])
          , d = ly.H(a.event, c ? String(c).split(",") : []);
        if (!d.length)
            return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = Ax(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    };
    function jy(a, b) {
        var c, d = b.Qj, e = a.Qj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0)
            f = c;
        else {
            var g = a.dk
              , h = b.dk;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function iy(a, b) {
        if (Aj) {
            var c = function(d) {
                var e = b.isBlocked(jf[d]) ? "3" : "4"
                  , f = xf(jf[d][Ie.qj], b, []);
                f && f.length && c(f[0].index);
                ay(b.id, jf[d], e);
                var g = xf(jf[d][Ie.wj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var ny = !1, ly;
    var oy = function() {
        ly || (ly = new Sw);
        return ly
    };
    var ty = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        if (U(66)) {}
        if (d === "gtm.js") {
            if (ny)
                return !1;
            ny = !0
        }
        var e = !1
          , f = zw()
          , g = k(a);
        if (!f.every(function(t) {
            return t({
                originalEventData: g
            })
        })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
                return !1;
            e = !0
        }
        Qx(b, d);
        var h = a.eventCallback
          , m = a.eventTimeout
          , n = {
            id: b,
            priorityId: c,
            name: d,
            isBlocked: py(g, e),
            Lm: [],
            logMacroError: function() {
                P(6);
                Kl(0)
            },
            cachedModelValues: qy(),
            ic: new Vw(function() {
                if (U(66)) {}
                h && h.apply(h, [].slice.call(arguments, 0))
            }
            ,m),
            originalEventData: g
        };
        U(74) && Aj && (n.reportMacroDiscrepancy = Vx);
        U(66) && Wv(n.id, n.name);
        var p = Gf(n);
        U(66) && Xv(n.id, n.name);
        e && (p = ry(p));
        if (U(66)) {}
        var q = ky(p, n)
          , r = !1;
        r = my(a, n.ic);
        Bx(n.ic);
        d !== "gtm.js" && d !== "gtm.sync" || Hx();
        return sy(p, q) || r
    };
    function qy() {
        var a = {};
        a.event = Ri("event", 1);
        a.ecommerce = Ri("ecommerce", 1);
        a.gtm = Ri("gtm");
        a.eventModel = Ri("eventModel");
        return a
    }
    function py(a, b) {
        var c = Gw();
        return function(d) {
            if (c(d))
                return !0;
            var e = d && d[Ie.oa];
            if (!e || typeof e != "string")
                return !0;
            e = e.replace(/^_*/, "");
            var f, g = Oj();
            f = xw().getRestrictions(0, g);
            var h = a;
            b && (h = k(a),
            h["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Ci[e] || [], n = oa(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                        entityId: e,
                        securityGroups: m,
                        originalEventData: h
                    }))
                        return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }
    function ry(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(jf[c][Ie.oa]);
                if (oi[d] || jf[c][Ie.Pk] !== void 0 || vw(d, 2))
                    b[c] = !0
            }
        return b
    }
    function sy(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && jf[c] && !pi[String(jf[c][Ie.oa])])
                return !0;
        return !1
    }
    var uy = 0;
    function vy() {
        uy === 1 && zk()
    }
    var wy = function(a) {
        if (!a.Dj || uy !== 1)
            return [];
        a.mc();
        var b = Dl();
        b.push(["mcc", "1"]);
        uy = 3;
        return b
    };
    function xy() {
        U(43) ? Jk("mcc", "1", !1, function() {
            return uy === 1
        }) : mk.push(wy)
    }
    ;function yy(a, b) {
        return arguments.length === 1 ? zy("set", a) : zy("set", a, b)
    }
    function Ay(a, b) {
        return arguments.length === 1 ? zy("config", a) : zy("config", a, b)
    }
    function By(a, b, c) {
        c = c || {};
        c[Q.g.Yb] = a;
        return zy("event", b, c)
    }
    function zy() {
        return arguments
    }
    ;var Cy = function() {
        this.messages = [];
        this.j = []
    };
    Cy.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
            eventId: b,
            priorityId: d,
            fromContainerExecution: !0
        })
          , f = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: e
        };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++)
            try {
                this.j[g](f)
            } catch (h) {}
    }
    ;
    Cy.prototype.listen = function(a) {
        this.j.push(a)
    }
    ;
    Cy.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    Cy.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    }
    ;
    function Dy(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
        Ey().enqueue(a, b, c)
    }
    function Fy() {
        var a = Gy;
        Ey().listen(a)
    }
    function Ey() {
        var a = ni.mb;
        a || (a = new Cy,
        ni.mb = a);
        return a
    }
    ;var Jf;
    var Hy = {}
      , Iy = {};
    function Jy(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            Eh: void 0,
            kh: void 0
        },
        f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Eh = Am(g, b),
                e.Eh) {
                    var h = Kj();
                    tb(h, function(r) {
                        return function(t) {
                            return r.Eh.ia === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = Hy[g] || [];
                e.kh = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.kh[t] = !0
                    }
                }(e));
                for (var n = Hj(), p = 0; p < n.length; p++)
                    if (e.kh[n[p]]) {
                        c = c.concat(Kj());
                        break
                    }
                var q = Iy[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            bm: c,
            gm: d
        }
    }
    function Ky(a) {
        z(Hy, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    function Ly(a) {
        z(Iy, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var My = "HA GF G UA AW DC MC".split(" ")
      , Ny = !1
      , Oy = !1
      , Py = !1
      , Qy = !1;
    function Ry(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Di()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Sy = void 0
      , Ty = void 0;
    function Uy(a, b, c) {
        var d = k(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && P(136);
        var e = k(b);
        k(c, e);
        Dy(Ay(Hj()[0], e), a.eventId, d)
    }
    function Vy(a) {
        for (var b = oa([Q.g.jd, Q.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value
              , e = a && a[d] || rn.D[d];
            if (e)
                return e
        }
    }
    var Wy = [Q.g.jd, Q.g.Lb, Q.g.yc, Q.g.lb, Q.g.tb, Q.g.Ba, Q.g.sa, Q.g.Na, Q.g.Va, Q.g.Eb]
      , Xy = {
        config: function(a, b) {
            var c = Ry(a, b);
            if (!(a.length < 2) && l(a[1])) {
                var d = {};
                if (a.length > 2) {
                    if (a[2] != void 0 && !Ya(a[2]) || a.length > 3)
                        return;
                    d = a[2]
                }
                var e = Am(a[1], b.isGtmEvent);
                if (e) {
                    var f, g, h;
                    a: {
                        if (!Fj.fe) {
                            var m = Qj(Xj());
                            if (jk(m)) {
                                var n = m.parent
                                  , p = n.isDestination;
                                h = {
                                    om: Qj(n),
                                    am: p
                                };
                                break a
                            }
                        }
                        h = void 0
                    }
                    var q = h;
                    q && (f = q.om,
                    g = q.am);
                    Qx(c.eventId, "gtag.config");
                    var r = e.ia
                      , t = e.id !== r;
                    if (t ? Kj().indexOf(r) === -1 : Hj().indexOf(r) === -1) {
                        if (!b.inheritParentConfig && !d[Q.g.Hb]) {
                            var u = Vy(d);
                            if (t)
                                Lw(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                var v = d;
                                Sy ? Uy(b, v, Sy) : Ty || (Ty = k(v))
                            } else
                                Kw(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (f && (P(128),
                        g && P(130),
                        b.inheritParentConfig)) {
                            var w;
                            var x = d;
                            Ty ? (Uy(b, Ty, x),
                            w = !1) : (!x[Q.g.Zb] && ri && Sy || (Sy = k(x)),
                            w = !0);
                            w && f.containers && f.containers.join(",");
                            return
                        }
                        var y = d;
                        if (!Py && (Py = !0,
                        Oy))
                            for (var B = oa(Wy), A = B.next(); !A.done; A = B.next())
                                if (y.hasOwnProperty(A.value)) {
                                    Il("erc");
                                    break
                                }
                        Bj && !Gj && (uy !== 1 || U(43) || Fc(G, "pagehide", vy),
                        uy = 2);
                        if (ri && !t && !d[Q.g.Zb]) {
                            var D = Qy;
                            Qy = !0;
                            if (D)
                                return
                        }
                        Ny || P(43);
                        if (!b.noTargetGroup)
                            if (t) {
                                Ly(e.id);
                                var E = e.id
                                  , C = d[Q.g.Wd] || "default";
                                C = String(C).split(",");
                                for (var F = 0; F < C.length; F++) {
                                    var M = Iy[C[F]] || [];
                                    Iy[C[F]] = M;
                                    M.indexOf(E) < 0 && M.push(E)
                                }
                            } else {
                                Ky(e.id);
                                var L = e.id
                                  , O = d[Q.g.Wd] || "default";
                                O = O.toString().split(",");
                                for (var T = 0; T < O.length; T++) {
                                    var ba = Hy[O[T]] || [];
                                    Hy[O[T]] = ba;
                                    ba.indexOf(L) < 0 && ba.push(L)
                                }
                            }
                        delete d[Q.g.Wd];
                        var aa = b.eventMetadata || {};
                        aa.hasOwnProperty("is_external_event") || (aa.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = aa;
                        delete d[Q.g.Zc];
                        for (var R = t ? [e.id] : Kj(), pa = 0; pa < R.length; pa++) {
                            var ma = d
                              , fa = R[pa]
                              , ha = k(b)
                              , Ia = Am(fa, ha.isGtmEvent);
                            Ia && rn.push("config", [ma], Ia, ha)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (a.length === 3) {
                P(39);
                var c = Ry(a, b)
                  , d = a[1]
                  , e = a[2];
                b.fromContainerExecution || (e[Q.g.P] && P(139),
                e[Q.g.ya] && P(140));
                d === "default" ? pm(e) : d === "update" ? qm(e, c) : d === "declare" && b.fromContainerExecution && om(e)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(a.length < 2) && l(c)) {
                var d;
                if (a.length > 2) {
                    if (!Ya(a[2]) && a[2] != void 0 || a.length > 3)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = k(e),
                e[Q.g.Zc] && (g.eventCallback = e[Q.g.Zc]),
                e[Q.g.Td] && (g.eventTimeout = e[Q.g.Td]));
                var h = Ry(a, b)
                  , m = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = m;
                n && (g["gtm.priorityId"] = n);
                if (c === "optimize.callback")
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[Q.g.Yb];
                r === void 0 && (r = Mi(Q.g.Yb, 2),
                r === void 0 && (r = "default"));
                if (l(r) || Array.isArray(r)) {
                    var t;
                    t = b.isGtmEvent ? l(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                    var u = Jy(t, b.isGtmEvent)
                      , v = u.bm
                      , w = u.gm;
                    if (w.length)
                        for (var x = Vy(q), y = 0; y < w.length; y++) {
                            var B = Am(w[y], b.isGtmEvent);
                            B && Lw(B.ia, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = Bm(v, b.isGtmEvent)
                } else
                    p = void 0;
                var A = p;
                if (A) {
                    var D;
                    !A.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (Oy = !0);
                    Qx(m, c);
                    for (var E = [], C = 0; C < A.length; C++) {
                        var F = A[C]
                          , M = k(b);
                        if (My.indexOf(Zj(F.prefix)) !== -1) {
                            var L = k(d)
                              , O = M.eventMetadata || {};
                            O.hasOwnProperty("is_external_event") || (O.is_external_event = !M.fromContainerExecution);
                            M.eventMetadata = O;
                            delete L[Q.g.Zc];
                            sn(c, L, F.id, M);
                            Bj && !Gj && uy === 0 && (U(43) || Ec(G, "pagehide", vy),
                            uy = 1)
                        }
                        E.push(F.id)
                    }
                    g.eventModel = g.eventModel || {};
                    A.length > 0 ? g.eventModel[Q.g.Yb] = E.join() : delete g.eventModel[Q.g.Yb];
                    Ny || P(43);
                    b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    g.eventModel[Q.g.Wb] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            P(53);
            if (a.length === 4 && l(a[1]) && l(a[2]) && qb(a[3])) {
                var c = Am(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Ny || P(43);
                    var f = Vy();
                    if (!tb(Kj(), function(h) {
                        return c.ia === h
                    }))
                        Lw(c.ia, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (My.indexOf(Zj(c.prefix)) !== -1) {
                        Ry(a, b);
                        var g = {};
                        k((g[Q.g.qb] = d,
                        g[Q.g.Fb] = e,
                        g));
                        tn(d, function(h) {
                            I(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (a.length == 2 && a[1].getTime) {
                Ny = !0;
                var c = Ry(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (a.length === 3 && l(a[1]) && qb(a[2])) {
                if (Kf(a[1], a[2]),
                P(74),
                a[1] === "all") {
                    P(75);
                    var b = !1;
                    try {
                        b = a[2](Mj(), "unknown", {})
                    } catch (c) {}
                    b || P(76)
                }
            } else
                P(73)
        },
        set: function(a, b) {
            var c;
            a.length == 2 && Ya(a[1]) ? c = k(a[1]) : a.length == 3 && l(a[1]) && (c = {},
            Ya(a[2]) || Array.isArray(a[2]) ? c[a[1]] = k(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Ry(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                k(c);
                var g = k(c);
                rn.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Yy = {
        policy: !0
    };
    var $y = function(a) {
        if (Zy(a))
            return a;
        this.value = a
    };
    $y.prototype.getUntrustedMessageValue = function() {
        return this.value
    }
    ;
    var Zy = function(a) {
        return !a || Va(a) !== "object" || Ya(a) ? !1 : "getUntrustedMessageValue"in a
    };
    $y.prototype.getUntrustedMessageValue = $y.prototype.getUntrustedMessageValue;
    var az = !1
      , bz = [];
    function cz() {
        if (!az) {
            az = !0;
            for (var a = 0; a < bz.length; a++)
                I(bz[a])
        }
    }
    function dz(a) {
        az ? I(a) : bz.push(a)
    }
    ;var ez = 0
      , fz = {}
      , gz = []
      , hz = []
      , iz = !1
      , jz = !1;
    function kz(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var lz = function(a) {
        return G[mi.Ya].push(a)
    }
      , mz = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return lz(a)
    }
      , nz = function(a, b) {
        if (!rb(b) || b < 0)
            b = 0;
        var c = ni[mi.Ya]
          , d = 0
          , e = !1
          , f = void 0;
        f = G.setTimeout(function() {
            e || (e = !0,
            a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (G.clearTimeout(f),
            f = void 0),
            e || (a(),
            e = !0))
        }
    };
    function oz(a, b) {
        var c = a._clear || b.overwriteModelFields;
        z(a, function(e, f) {
            e !== "_clear" && (c && Pi(e),
            Pi(e, f))
        });
        zi || (zi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        typeof d !== "number" && (d = Di(),
        a["gtm.uniqueEventId"] = d,
        Pi("gtm.uniqueEventId", d));
        return ty(a)
    }
    function pz(a) {
        if (a == null || typeof a !== "object")
            return !1;
        if (a.event)
            return !0;
        if (xb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get")
                return !0
        }
        return !1
    }
    function qz() {
        var a;
        if (hz.length)
            a = hz.shift();
        else if (gz.length)
            a = gz.shift();
        else
            return;
        var b;
        var c = a;
        if (iz || !pz(c.message))
            b = c;
        else {
            iz = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Di());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            gz.unshift(h, c);
            if (Bj) {
                var m = Nf.ctid;
                if (m) {
                    var n, p = Qj(Xj());
                    n = p && p.context;
                    var q = xl(!0)
                      , r = Nf.canonicalContainerId
                      , t = Cl()
                      , u = n && n.fromContainerExecution
                      , v = Fj.fe
                      , w = n && n.source;
                    yl || (yl = t);
                    Al.push(m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0));
                    zl = q;
                    Nk()
                }
            }
            b = f
        }
        return b
    }
    function rz() {
        for (var a = !1, b; !jz && (b = qz()); ) {
            jz = !0;
            delete Ji.eventModel;
            Li();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (d == null)
                jz = !1;
            else {
                e.fromContainerExecution && Qi();
                try {
                    if (qb(d))
                        try {
                            d.call(Ni)
                        } catch (v) {}
                    else if (Array.isArray(d)) {
                        var f = d;
                        if (l(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , m = f.slice(1)
                              , n = Mi(g.join("."), 2);
                            if (n != null)
                                try {
                                    n[h].apply(n, m)
                                } catch (v) {}
                        }
                    } else {
                        var p = void 0;
                        if (xb(d))
                            a: {
                                if (d.length && l(d[0])) {
                                    var q = Xy[d[0]];
                                    if (q && (!e.fromContainerExecution || !Yy[d[0]])) {
                                        p = q(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                        else
                            p = d;
                        p && (a = oz(p, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Li(!0);
                    var r = d["gtm.uniqueEventId"];
                    if (typeof r === "number") {
                        for (var t = fz[String(r)] || [], u = 0; u < t.length; u++)
                            hz.push(sz(t[u]));
                        t.length && hz.sort(kz);
                        delete fz[String(r)];
                        r > ez && (ez = r)
                    }
                    jz = !1
                }
            }
        }
        return !a
    }
    function tz() {
        if (U(66)) {
            var a = uz();
        }
        var b = rz();
        if (U(66)) {}
        try {
            var c = Mj()
              , d = G[mi.Ya].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0, f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] === !0) {
                        e = !1;
                        break
                    }
                e && (d.end(),
                d.end = null)
            }
        } catch (g) {}
        return b
    }
    function Gy(a) {
        if (ez < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            fz[b] = fz[b] || [];
            fz[b].push(a)
        } else
            hz.push(sz(a)),
            hz.sort(kz),
            I(function() {
                jz || rz()
            })
    }
    function sz(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var vz = function() {
        function a(f) {
            var g = {};
            if (Zy(f)) {
                var h = f;
                f = Zy(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = uc(mi.Ya, [])
          , c = ni[mi.Ya] = ni[mi.Ya] || {};
        c.pruned === !0 && P(83);
        fz = Ey().get();
        Fy();
        Rw(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        dz(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (ni.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new $y(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            gz.push.apply(gz, h);
            var m = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (P(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = typeof m !== "boolean" || m;
            return rz() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        gz.push.apply(gz, e);
        if (uz()) {
            if (U(66)) {}
            I(tz)
        }
    }
      , uz = function() {
        var a = !0;
        return a
    };
    function wz(a) {
        if (a == null || a.length === 0)
            return !1;
        var b = Number(a)
          , c = Db();
        return b < c + 3E5 && b > c - 9E5
    }
    function xz(a) {
        return a && a.indexOf("pending:") === 0 ? wz(a.substr(8)) : !1
    }
    ;var yz = !1
      , zz = function(a) {
        if (yz)
            return [];
        var b = [["bt", String(Fi.H ? 2 : ui ? 1 : 0)]];
        a.Sa && (yz = !0,
        a.mc());
        return b
    };
    var Az = !1;
    function Bz() {
        var a = Pj();
        if (a) {
            var b;
            return a.canonicalContainerId || "_" + (a.scriptContainerId || ((b = a.destinations) == null ? void 0 : b[0]))
        }
    }
    var Cz = function(a) {
        if (Az)
            return [];
        var b = []
          , c = Bz();
        c && b.push(["pcid", c]);
        a.Sa && (Az = !0,
        b.length && a.mc());
        return b
    };
    var Dz = /gtag[.\/]js/
      , Ez = /gtm[.\/]js/
      , Fz = !1;
    function Gz(a) {
        if (a.scriptSource) {
            var b;
            try {
                var c;
                b = (c = Qc()) == null ? void 0 : c.getEntriesByType("resource")
            } catch (h) {}
            if (b) {
                for (var d = {}, e = 0; e < b.length; ++e) {
                    var f = b[e]
                      , g = f.initiatorType;
                    if (g === "script" && f.name === a.scriptSource)
                        return {
                            Vj: e,
                            Wj: d
                        };
                    d[g] = 1 + (d[g] || 0)
                }
                P(146)
            } else
                P(145)
        }
    }
    function Hz(a) {
        if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
            var b;
            a: {
                if (a.scriptSource) {
                    for (var c = Fi.H, d = V(a.scriptSource), e = c ? d.pathname : "" + d.hostname + d.pathname, f = H.scripts, g = "", h = 0; h < f.length; ++h) {
                        var m = f[h];
                        if (!(m.innerHTML.length === 0 || !c && m.innerHTML.indexOf(a.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || m.innerHTML.indexOf(e) < 0)) {
                            if (m.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                b = String(h);
                                break a
                            }
                            g = String(h)
                        }
                    }
                    if (g) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            var n = b;
            if (n)
                return Fz = !0,
                n
        }
        var p = [].slice.call(document.scripts);
        return a.scriptElement ? String(p.indexOf(a.scriptElement)) : "-1"
    }
    function Iz(a) {
        if (Fz)
            return "1";
        var b = a.scriptSource;
        if (b) {
            if (Dz.test(b))
                return "3";
            if (Ez.test(b))
                return "2"
        }
        return "0"
    }
    function Jz() {
        var a = Yj();
        if (!a)
            P(144);
        else if (a.canonicalContainerId) {
            var b = Gz(a);
            if (b)
                if (U(43))
                    Jk("rtg", String(a.canonicalContainerId)),
                    Jk("rlo", String(b.Vj)),
                    Jk("slo", String(b.Wj.script || "0")),
                    U(70) && (Jk("hlo", Hz(a)),
                    Jk("lst", String(Iz(a))));
                else {
                    var c = !1;
                    mk.push(function(d) {
                        if (c)
                            return [];
                        d.Sa && (c = !0);
                        d.mc();
                        var e = [["rtg", String(a.canonicalContainerId)], ["rlo", String(b.Vj)], ["slo", String(b.Wj.script || "0")]];
                        U(70) && (e.push(["hlo", Hz(a)]),
                        e.push(["lst", Iz(a)]));
                        return e
                    })
                }
        }
    }

    var dA = function() {};
    var eA = function() {};
    eA.prototype.toString = function() {
        return "undefined"
    }
    ;
    var fA = new eA;
    function mA(a, b) {
        function c(g) {
            var h = V(g)
              , m = ij(h, "protocol")
              , n = ij(h, "host", !0)
              , p = ij(h, "port")
              , q = ij(h, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443")
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function nA(a) {
        return oA(a) ? 1 : 0
    }
    function oA(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = k(a, {});
                k({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (nA(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return rg(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < ng.length; g++) {
                            var h = ng[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return og(b, c);
        case "_eq":
            return sg(b, c);
        case "_ge":
            return tg(b, c);
        case "_gt":
            return vg(b, c);
        case "_lc":
            return String(b).split(",").indexOf(String(c)) >= 0;
        case "_le":
            return ug(b, c);
        case "_lt":
            return wg(b, c);
        case "_re":
            return qg(b, c, a.ignore_case);
        case "_sw":
            return xg(b, c);
        case "_um":
            return mA(b, c)
        }
        return !1
    }
    ;function pA() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    }
    ;function qA() {
        var a = [["cv", U(81) ? pA() : "1"], ["rv", mi.Kg], ["tc", jf.filter(function(b) {
            return b
        }).length]];
        mi.ie && a.push(["x", mi.ie]);
        Fi.j && a.push(["tag_exp", Fi.j]);
        return a
    }
    ;function rA() {
        var a = Ml();
        return a.length ? [["exp_geo", a]] : []
    }
    var sA;
    function tA() {
        try {
            sA != null || (sA = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return ((a = sA) == null ? 0 : a.length) ? [["exp_tz", sA]] : []
    }
    ;function uA() {
        return !1
    }
    function vA() {
        var a = {};
        return function(b, c, d) {}
    }
    ;function wA() {
        var a = xA;
        return function(b, c, d) {
            var e = d && d.event;
            yA(c);
            var f = b.indexOf("__cvt_") === 0 ? void 0 : 1
              , g = new db;
            z(c, function(r, t) {
                var u = ed(t, void 0, f);
                u === void 0 && t !== void 0 && P(44);
                g.set(r, u)
            });
            a.j.j.D = Df();
            var h = {
                Aj: Rf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                ne: e !== void 0 ? function(r) {
                    e.ic.ne(r)
                }
                : void 0,
                wb: function() {
                    return b
                },
                log: function() {},
                vl: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Cm: !!vw(b, 3),
                originalEventData: e == null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (uA()) {
                var m = vA(), n, p;
                h.Ra = {
                    Oh: [],
                    oe: {},
                    xb: function(r, t, u) {
                        t === 1 && (n = r);
                        t === 7 && (p = u);
                        m(r, t, u)
                    },
                    If: gh()
                };
                h.log = function(r) {
                    var t = Aa.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = Ce(a, h, [b, g]);
            a.j.j.D = void 0;
            q instanceof Ha && q.type === "return" && (q = q.data);
            return J(q, void 0, f)
        }
    }
    function yA(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        qb(b) && (a.gtmOnSuccess = function() {
            I(b)
        }
        );
        qb(c) && (a.gtmOnFailure = function() {
            I(c)
        }
        )
    }
    ;function zA(a, b) {
        var c = this;
    }
    zA.T = "addConsentListener";
    var AA = !1;
    function BA(a) {
        for (var b = 0; b < a.length; ++b)
            if (AA)
                try {
                    a[b]()
                } catch (c) {
                    P(77)
                }
            else
                a[b]()
    }
    function CA(a, b, c) {
        var d = this, e;
        K(this.getName(), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments),
        BA([function() {
            return N(d, "listen_data_layer", a)
        }
        ]),
        e = oy().addListener(a, J(b), c);
        return e
    }
    CA.J = "internal.addDataLayerEventListener";
    function DA(a, b, c) {}
    DA.T = "addDocumentEventListener";
    function EA(a, b, c, d) {}
    EA.T = "addElementEventListener";
    function FA(a) {
        return a.F.j
    }
    ;function GA(a) {}
    GA.T = "addEventCallback";
    var HA = function(a) {
        return typeof a === "string" ? a : String(Di())
    }
      , KA = function(a, b) {
        IA(a, "init", !1) || (JA(a, "init", !0),
        b())
    }
      , IA = function(a, b, c) {
        var d = LA(a);
        return Eb(d, b, c)
    }
      , MA = function(a, b, c, d) {
        var e = LA(a)
          , f = Eb(e, b, d);
        e[b] = c(f)
    }
      , JA = function(a, b, c) {
        LA(a)[b] = c
    }
      , LA = function(a) {
        ni.hasOwnProperty("autoEventsSettings") || (ni.autoEventsSettings = {});
        var b = ni.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , NA = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": Oc(a, "className"),
            "gtm.elementId": a["for"] || Gc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || Oc(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Oc(a, "href") || a.src || a.code || a.codebase || "";
        return d
    };
    var PA = function(a, b, c) {
        if (!a.elements)
            return 0;
        for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
            var g = a.elements[e];
            if (OA(g)) {
                if (g.dataset[c] === d)
                    return f;
                f++
            }
        }
        return 0
    }
      , QA = function(a) {
        if (a.form) {
            var b;
            return ((b = a.form) == null ? 0 : b.tagName) ? a.form : H.getElementById(a.form)
        }
        return Jc(a, ["form"], 100)
    }
      , OA = function(a) {
        var b = a.tagName.toLowerCase();
        return RA.indexOf(b) < 0 || b === "input" && SA.indexOf(a.type.toLowerCase()) >= 0 ? !1 : !0
    }
      , RA = ["input", "select", "textarea"]
      , SA = ["button", "hidden", "image", "reset", "submit"];
    function WA(a) {}
    WA.J = "internal.addFormAbandonmentListener";
    function XA(a, b, c, d) {}
    XA.J = "internal.addFormData";
    var YA = {}
      , ZA = []
      , $A = {}
      , aB = 0
      , bB = 0;
    var dB = function() {
        Ec(H, "change", function(a) {
            for (var b = 0; b < ZA.length; b++)
                ZA[b](a)
        });
        Ec(G, "pagehide", function() {
            cB()
        })
    }
      , cB = function() {
        z($A, function(a, b) {
            var c = YA[a];
            c && z(b, function(d, e) {
                eB(e, c)
            })
        })
    }
      , hB = function(a, b) {
        var c = "" + a;
        if (YA[c])
            YA[c].push(b);
        else {
            var d = [b];
            YA[c] = d;
            var e = $A[c];
            e || (e = {},
            $A[c] = e);
            ZA.push(function(f) {
                var g = f.target;
                if (g) {
                    var h = QA(g);
                    if (h) {
                        var m = fB(h, "gtmFormInteractId", function() {
                            return aB++
                        })
                          , n = fB(g, "gtmFormInteractFieldId", function() {
                            return bB++
                        })
                          , p = e[m];
                        p ? (p.Pb && (G.clearTimeout(p.Pb),
                        p.yb.dataset.gtmFormInteractFieldId !== n && eB(p, d)),
                        p.yb = g,
                        gB(p, d, a)) : (e[m] = {
                            form: h,
                            yb: g,
                            Oe: 0,
                            Pb: null
                        },
                        gB(e[m], d, a))
                    }
                }
            })
        }
    }
      , eB = function(a, b) {
        var c = a.form
          , d = a.yb
          , e = NA(c, "gtm.formInteract")
          , f = c.action;
        f && f.tagName && (f = c.cloneNode(!1).action);
        e["gtm.elementUrl"] = f;
        e["gtm.interactedFormName"] = c.getAttribute("name");
        e["gtm.interactedFormLength"] = c.length;
        e["gtm.interactedFormField"] = d;
        e["gtm.interactedFormFieldPosition"] = PA(c, d, "gtmFormInteractFieldId");
        e["gtm.interactSequenceNumber"] = a.Oe;
        e["gtm.interactedFormFieldId"] = d.id;
        e["gtm.interactedFormFieldName"] = d.getAttribute("name");
        e["gtm.interactedFormFieldType"] = d.getAttribute("type");
        for (var g = 0; g < b.length; g++)
            b[g](e);
        a.Oe++;
        a.Pb = null
    }
      , gB = function(a, b, c) {
        c ? a.Pb = G.setTimeout(function() {
            eB(a, b)
        }, c) : eB(a, b)
    }
      , fB = function(a, b, c) {
        var d = a.dataset[b];
        if (d)
            return d;
        d = String(c());
        return a.dataset[b] = d
    };
    function iB(a, b) {
        K(this.getName(), ["callback:!Fn", "options:?*"], arguments);
        var c = J(b) || {}
          , d = Number(c.interval);
        if (!d || d < 0)
            d = 0;
        var e = J(a), f;
        IA("pix.fil", "init") ? f = IA("pix.fil", "reg") : (dB(),
        f = hB,
        JA("pix.fil", "reg", hB),
        JA("pix.fil", "init", !0));
        f(d, e);
    }
    iB.J = "internal.addFormInteractionListener";
    var kB = function(a, b, c) {
        var d = NA(a, "gtm.formSubmit");
        d["gtm.interactedFormName"] = a.getAttribute("name");
        d["gtm.interactedFormLength"] = a.length;
        d["gtm.willOpenInCurrentWindow"] = !b && jB(a);
        c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
        var e = a.action;
        e && e.tagName && (e = a.cloneNode(!1).action);
        d["gtm.elementUrl"] = e;
        d["gtm.formCanceled"] = b;
        return d
    }
      , lB = function(a, b) {
        var c = IA("pix.fsl", a ? "nv.mwt" : "mwt", 0);
        G.setTimeout(b, c)
    }
      , mB = function(a, b, c, d, e) {
        var f = IA("pix.fsl", c ? "nv.mwt" : "mwt", 0)
          , g = IA("pix.fsl", c ? "runIfCanceled" : "runIfUncanceled", []);
        if (!g.length)
            return !0;
        var h = kB(a, c, e);
        P(121);
        if (h["gtm.elementUrl"] === "https://www.facebook.com/tr/")
            return P(122),
            !0;
        if (d && f) {
            for (var m = Nb(b, g.length), n = 0; n < g.length; ++n)
                g[n](h, m);
            return m.done
        }
        for (var p = 0; p < g.length; ++p)
            g[p](h, function() {});
        return !0
    }
      , nB = function() {
        var a = []
          , b = function(c) {
            return tb(a, function(d) {
                return d.form === c
            })
        };
        return {
            store: function(c, d) {
                var e = b(c);
                e ? e.button = d : a.push({
                    form: c,
                    button: d
                })
            },
            get: function(c) {
                var d = b(c);
                return d ? d.button : null
            }
        }
    }
      , jB = function(a) {
        var b = Oc(a, "target");
        return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
    }
      , oB = function() {
        var a = nB()
          , b = HTMLFormElement.prototype.submit;
        Ec(H, "click", function(c) {
            var d = c.target;
            if (d && (d = Jc(d, ["button", "input"], 100)) && (d.type == "submit" || d.type == "image") && d.name && Gc(d, "value")) {
                var e = QA(d);
                e && a.store(e, d)
            }
        }, !1);
        Ec(H, "submit", function(c) {
            var d = c.target;
            if (!d)
                return c.returnValue;
            var e = c.defaultPrevented || c.returnValue === !1
              , f = jB(d) && !e
              , g = a.get(d)
              , h = !0
              , m = function() {
                if (h) {
                    var n, p = {};
                    g && (n = H.createElement("input"),
                    n.type = "hidden",
                    n.name = g.name,
                    n.value = g.value,
                    d.appendChild(n),
                    g.hasAttribute("formaction") && (p.action = d.getAttribute("action"),
                    oc(d, fc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") && (p.enctype = d.getAttribute("enctype"),
                    d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") && (p.method = d.getAttribute("method"),
                    d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") && (p.validate = d.getAttribute("validate"),
                    d.setAttribute("validate", g.getAttribute("formvalidate"))),
                    g.hasAttribute("formtarget") && (p.target = d.getAttribute("target"),
                    d.setAttribute("target", g.getAttribute("formtarget"))));
                    b.call(d);
                    n && (d.removeChild(n),
                    p.hasOwnProperty("action") && oc(d, p.action),
                    p.hasOwnProperty("enctype") && d.setAttribute("enctype", p.enctype),
                    p.hasOwnProperty("method") && d.setAttribute("method", p.method),
                    p.hasOwnProperty("validate") && d.setAttribute("validate", p.validate),
                    p.hasOwnProperty("target") && d.setAttribute("target", p.target))
                }
            };
            if (mB(d, m, e, f, g))
                return h = !1,
                c.returnValue;
            lB(e, m);
            e || (c.preventDefault && c.preventDefault(),
            c.returnValue = !1);
            return !1
        }, !1);
        HTMLFormElement.prototype.submit = function() {
            var c = this
              , d = !0
              , e = function() {
                d && b.call(c)
            };
            mB(c, e, !1, jB(c)) ? (b.call(c),
            d = !1) : lB(!1, e)
        }
    };
    function pB(a, b) {
        K(this.getName(), ["callback:!Fn", "options:?PixieMap"], arguments);
        var c = J(b, this.F, 1) || {}
          , d = c.waitForCallbacks
          , e = c.waitForCallbacksTimeout
          , f = c.checkValidation;
        e = e && e > 0 ? e : 2E3;
        var g = J(a, this.F, 1);
        if (d) {
            var h = function(n) {
                return Math.max(e, n)
            };
            MA("pix.fsl", "mwt", h, 0);
            f || MA("pix.fsl", "nv.mwt", h, 0)
        }
        var m = function(n) {
            n.push(g);
            return n
        };
        MA("pix.fsl", "runIfUncanceled", m, []);
        f || MA("pix.fsl", "runIfCanceled", m, []);
        IA("pix.fsl", "init") || (oB(),
        JA("pix.fsl", "init", !0));
    }
    pB.J = "internal.addFormSubmitListener";
    function uB(a) {}
    uB.J = "internal.addGaSendListener";
    function vB(a) {
        if (!a)
            return {};
        var b = a.vl;
        return Tw(b.type, b.index, b.name)
    }
    function wB(a) {
        return a ? {
            originatingEntity: vB(a)
        } : {}
    }
    ;function EB(a) {
        var b = ni.zones;
        return b ? b.getIsAllowedFn(Hj(), a) : function() {
            return !0
        }
    }
    function FB() {
        yw(Oj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"]
              , c = ni.zones;
            return c ? c.isActive(Hj(), b) : !0
        });
        ww(Oj(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return EB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    }
    ;var GB = function(a, b) {
        this.tagId = a;
        this.qe = b
    };
    function HB(a, b) {
        var c = this, d;
        return d
    }
    HB.J = "internal.loadGoogleTag";
    function IB(a) {
        return new Xc("",function(b) {
            var c = this.evaluate(b);
            if (c instanceof Xc)
                return new Xc("",function() {
                    var d = Aa.apply(0, arguments)
                      , e = this
                      , f = k(FA(this), null);
                    f.eventId = a.eventId;
                    f.priorityId = a.priorityId;
                    f.originalEventData = a.originalEventData;
                    var g = d.map(function(m) {
                        return e.evaluate(m)
                    })
                      , h = Oa(this.F);
                    h.j = f;
                    return c.fb.apply(c, [h].concat(ra(g)))
                }
                )
        }
        )
    }
    ;function JB(a, b, c) {
        var d = this;
    }
    JB.J = "internal.addGoogleTagRestriction";
    var KB = {}
      , LB = [];
    function SB(a, b) {}
    SB.J = "internal.addHistoryChangeListener";
    function TB(a, b, c) {}
    TB.T = "addWindowEventListener";
    function UB(a, b) {
        return !0
    }
    UB.T = "aliasInWindow";
    function VB(a, b, c) {}
    VB.J = "internal.appendRemoteConfigParameter";
    function WB(a) {
        var b;
        return b
    }
    WB.T = "callInWindow";
    function XB(a) {}
    XB.T = "callLater";
    function YB(a) {}
    YB.J = "callOnDomReady";
    function ZB(a) {}
    ZB.J = "callOnWindowLoad";
    function $B(a, b) {
        var c;
        return c
    }
    $B.J = "internal.computeGtmParameter";
    function aC(a) {
        var b;
        return b
    }
    aC.J = "internal.copyFromCrossContainerData";
    function bC(a, b) {
        var c;
        var d = FA(this).wb().indexOf("__cvt_") === 0 ? 2 : 1
          , e = ed(c, this.F, d);
        e === void 0 && c !== void 0 && P(45);
        return e
    }
    bC.T = "copyFromDataLayer";
    function cC(a) {
        var b = void 0;
        return b
    }
    cC.J = "internal.copyFromDataLayerCache";
    function dC(a) {
        var b;
        return b
    }
    dC.T = "copyFromWindow";
    function eC(a) {
        var b = void 0;
        return ed(b, this.F, 1)
    }
    eC.J = "internal.copyKeyFromWindow";
    function fC(a, b) {
        var c;
        K(this.getName(), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
        var d = J(b) || {}
          , e = J(a, this.F, 1).Fj()
          , f = e.m;
        d.omitEventContext && (f = mn(new an(e.m.eventId,e.m.priorityId)));
        var g = new qr(e.target,e.eventName,f);
        d.omitHitData || k(e.o, g.o);
        d.omitMetadata ? g.metadata = {} : k(e.metadata, g.metadata);
        g.isAborted = e.isAborted;
        c = ed(qs(g), this.F, 1);
        return c
    }
    fC.J = "internal.copyPreHit";
    function gC(a, b) {
        var c = null;
        return ed(c, this.F, 2)
    }
    gC.T = "createArgumentsQueue";
    function hC(a) {
        return ed(function(c) {
            var d = Ex();
            if (typeof c === "function")
                d(function() {
                    c(function(f, g, h) {
                        var m = Ex()
                          , n = m && m.getByName && m.getByName(f);
                        return Sk(G.gaplugins.Linker, n).decorate(g, h)
                    })
                });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded")
                return !!d.loaded
        }, this.F, 1)
    }
    hC.J = "internal.createGaCommandQueue";
    function iC(a) {
        var f = FA(this).wb().indexOf("__cvt_") === 0 ? 2 : 1;
        return ed(function() {
            if (!qb(e.push))
                throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.F, f)
    }
    iC.T = "createQueue";
    function jC(a, b) {
        var c = null;
        K(this.getName(), ["pattern:!string", "flags:?string"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return "ig".indexOf(e) >= 0
            }).join("");
            c = new bd(new RegExp(a,d))
        } catch (e) {}
        return c
    }
    jC.J = "internal.createRegex";
    function kC() {
        var a = {};
        return a
    }
    ;function lC(a) {}
    lC.J = "internal.declareConsentState";
    function mC(a) {
        var b = "";
        return b
    }
    mC.J = "internal.decodeUrlHtmlEntities";
    function nC(a, b, c) {
        var d;
        return d
    }
    nC.J = "internal.decorateUrlWithGaCookies";
    function oC(a) {
        var b;
        N(this, "detect_user_provided_data", "auto");
        var c = J(a) || {}
          , d = qt({
            ud: !!c.includeSelector,
            vd: !!c.includeVisibility,
            ve: c.excludeElementSelectors,
            vb: c.fieldFilters,
            Lf: !!c.selectMultipleElements
        });
        b = new db;
        var e = new ab;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++)
            e.push(pC(f[g]));
        d.Fh !== void 0 && b.set("preferredEmailElement", pC(d.Fh));
        b.set("status", d.status);
        return b
    }
    var pC = function(a) {
        var b = new db;
        b.set("userData", a.X);
        b.set("tagName", a.tagName);
        a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
        a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
        if (U(22)) {} else
            switch (a.type) {
            case "1":
                b.set("type", "email")
            }
        return b
    };
    oC.J = "internal.detectUserProvidedData";
    function sC(a, b) {
        return b
    }
    sC.J = "internal.enableAutoEventOnClick";
    var vC = function(a) {
        if (!tC) {
            var b = function() {
                var c = H.body;
                if (c)
                    if (uC)
                        (new MutationObserver(function() {
                            for (var e = 0; e < tC.length; e++)
                                I(tC[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        Ec(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            I(function() {
                                d = !1;
                                for (var e = 0; e < tC.length; e++)
                                    I(tC[e])
                            }))
                        })
                    }
            };
            tC = [];
            H.body ? b() : I(b)
        }
        tC.push(a)
    }, uC = !!G.MutationObserver, tC;
    function AC(a, b) {
        return b
    }
    AC.J = "internal.enableAutoEventOnElementVisibility";
    function BC() {}
    BC.J = "internal.enableAutoEventOnError";
    var CC = {}
      , DC = []
      , EC = {}
      , FC = 0
      , GC = 0;
    var IC = function() {
        z(EC, function(a, b) {
            var c = CC[a];
            c && z(b, function(d, e) {
                HC(e, c)
            })
        })
    }
      , LC = function(a, b) {
        var c = "" + b;
        if (CC[c])
            CC[c].push(a);
        else {
            var d = [a];
            CC[c] = d;
            var e = EC[c];
            e || (e = {},
            EC[c] = e);
            DC.push(function(f) {
                var g = f.target;
                if (g) {
                    var h = QA(g);
                    if (h) {
                        var m = JC(h, "gtmFormInteractId", function() {
                            return FC++
                        })
                          , n = JC(g, "gtmFormInteractFieldId", function() {
                            return GC++
                        });
                        if (m !== null && n !== null) {
                            var p = e[m];
                            p ? (p.Pb && (G.clearTimeout(p.Pb),
                            p.yb.getAttribute("data-gtm-form-interact-field-id") !== n && HC(p, d)),
                            p.yb = g,
                            KC(p, d, b)) : (e[m] = {
                                form: h,
                                yb: g,
                                Oe: 0,
                                Pb: null
                            },
                            KC(e[m], d, b))
                        }
                    }
                }
            })
        }
    }
      , HC = function(a, b) {
        var c = a.form
          , d = a.yb
          , e = NA(c, "gtm.formInteract", b)
          , f = c.action;
        f && f.tagName && (f = c.cloneNode(!1).action);
        e["gtm.elementUrl"] = f;
        e["gtm.interactedFormName"] = c.getAttribute("name") != null ? c.getAttribute("name") : void 0;
        e["gtm.interactedFormLength"] = c.length;
        e["gtm.interactedFormField"] = d;
        e["gtm.interactedFormFieldId"] = d.id;
        e["gtm.interactedFormFieldName"] = d.getAttribute("name") != null ? d.getAttribute("name") : void 0;
        e["gtm.interactedFormFieldPosition"] = PA(c, d, "gtmFormInteractFieldId");
        e["gtm.interactedFormFieldType"] = d.getAttribute("type") != null ? d.getAttribute("type") : void 0;
        e["gtm.interactSequenceNumber"] = a.Oe;
        lz(e);
        a.Oe++;
        a.Pb = null
    }
      , KC = function(a, b, c) {
        c ? a.Pb = G.setTimeout(function() {
            HC(a, b)
        }, c) : HC(a, b)
    }
      , JC = function(a, b, c) {
        var d;
        try {
            if (d = a.dataset[b])
                return d;
            d = String(c());
            a.dataset[b] = d
        } catch (e) {
            d = null
        }
        return d
    };
    function MC(a, b) {
        var c = this;
        K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
        BA([function() {
            return N(c, "detect_form_interaction_events")
        }
        ]);
        b = HA(b);
        var d = a && Number(a.get("interval"));
        d > 0 && isFinite(d) || (d = 0);
        if (IA("fil", "init", !1)) {
            var e = IA("fil", "reg");
            if (e)
                e(b, d);
            else
                throw Error("Failed to register trigger: " + b);
        } else
            Ec(H, "change", function(f) {
                for (var g = 0; g < DC.length; g++)
                    DC[g](f)
            }),
            Ec(G, "pagehide", function() {
                IC()
            }),
            LC(b, d),
            JA("fil", "reg", LC),
            JA("fil", "init", !0);
        return b
    }
    MC.J = "internal.enableAutoEventOnFormInteraction";
    var NC = function(a, b, c, d, e) {
        var f = IA("fsl", c ? "nv.mwt" : "mwt", 0), g;
        g = c ? IA("fsl", "nv.ids", []) : IA("fsl", "ids", []);
        if (!g.length)
            return !0;
        var h = NA(a, "gtm.formSubmit", g)
          , m = a.action;
        m && m.tagName && (m = a.cloneNode(!1).action);
        P(121);
        if (m === "https://www.facebook.com/tr/")
            return P(122),
            !0;
        h["gtm.elementUrl"] = m;
        h["gtm.formCanceled"] = c;
        a.getAttribute("name") != null && (h["gtm.interactedFormName"] = a.getAttribute("name"));
        e && (h["gtm.formSubmitElement"] = e,
        h["gtm.formSubmitElementText"] = e.value);
        if (d && f) {
            if (!mz(h, nz(b, f), f))
                return !1
        } else
            mz(h, function() {}, f || 2E3);
        return !0
    }
      , OC = function() {
        var a = []
          , b = function(c) {
            return tb(a, function(d) {
                return d.form === c
            })
        };
        return {
            store: function(c, d) {
                var e = b(c);
                e ? e.button = d : a.push({
                    form: c,
                    button: d
                })
            },
            get: function(c) {
                var d = b(c);
                if (d)
                    return d.button
            }
        }
    }
      , PC = function(a) {
        var b = a.target;
        return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
    }
      , QC = function() {
        var a = OC()
          , b = HTMLFormElement.prototype.submit;
        Ec(H, "click", function(c) {
            var d = c.target;
            if (d && (d = Jc(d, ["button", "input"], 100)) && (d.type == "submit" || d.type == "image") && d.name && Gc(d, "value")) {
                var e = QA(d);
                e && a.store(e, d)
            }
        }, !1);
        Ec(H, "submit", function(c) {
            var d = c.target;
            if (!d)
                return c.returnValue;
            var e = c.defaultPrevented || c.returnValue === !1
              , f = PC(d) && !e
              , g = a.get(d)
              , h = !0;
            if (NC(d, function() {
                if (h) {
                    var m, n = {};
                    g && (m = H.createElement("input"),
                    m.type = "hidden",
                    m.name = g.name,
                    m.value = g.value,
                    d.appendChild(m),
                    g.hasAttribute("formaction") && (n.action = d.getAttribute("action"),
                    oc(d, fc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") && (n.enctype = d.getAttribute("enctype"),
                    d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"),
                    d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"),
                    d.setAttribute("validate", g.getAttribute("formvalidate"))),
                    g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"),
                    d.setAttribute("target", g.getAttribute("formtarget"))));
                    b.call(d);
                    m && (d.removeChild(m),
                    n.hasOwnProperty("action") && oc(d, n.action),
                    n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") && d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") && d.setAttribute("target", n.target))
                }
            }, e, f, g))
                h = !1;
            else
                return e || (c.preventDefault && c.preventDefault(),
                c.returnValue = !1),
                !1;
            return c.returnValue
        }, !1);
        HTMLFormElement.prototype.submit = function() {
            var c = this
              , d = !0;
            NC(c, function() {
                d && b.call(c)
            }, !1, PC(c)) && (b.call(c),
            d = !1)
        }
    };
    function RC(a, b) {
        var c = this;
        K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
        var d = a && a.get("waitForTags");
        BA([function() {
            return N(c, "detect_form_submit_events", {
                waitForTags: !!d
            })
        }
        ]);
        var e = a && a.get("checkValidation");
        b = HA(b);
        if (d) {
            var f = Number(a.get("waitForTagsTimeout"));
            f > 0 && isFinite(f) || (f = 2E3);
            var g = function(m) {
                return Math.max(f, m)
            };
            MA("fsl", "mwt", g, 0);
            e || MA("fsl", "nv.mwt", g, 0)
        }
        var h = function(m) {
            m.push(b);
            return m
        };
        MA("fsl", "ids", h, []);
        e || MA("fsl", "nv.ids", h, []);
        IA("fsl", "init", !1) || (QC(),
        JA("fsl", "init", !0));
        return b
    }
    RC.J = "internal.enableAutoEventOnFormSubmit";
    function WC() {
        var a = this;
    }
    WC.J = "internal.enableAutoEventOnGaSend";
    var XC = {}
      , YC = [];
    var $C = function(a, b) {
        var c = "" + b;
        if (XC[c])
            XC[c].push(a);
        else {
            var d = [a];
            XC[c] = d;
            var e = ZC("gtm.historyChange-v2")
              , f = -1;
            YC.push(function(g) {
                f >= 0 && G.clearTimeout(f);
                b ? f = G.setTimeout(function() {
                    e(g, d);
                    f = -1
                }, b) : e(g, d)
            })
        }
    }
      , ZC = function(a) {
        var b = G.location.href
          , c = {
            source: null,
            state: G.history.state || null,
            url: jj(V(b)),
            Ga: ij(V(b), "fragment")
        };
        return function(d, e) {
            var f = c
              , g = {};
            g[f.source] = !0;
            g[d.source] = !0;
            if (!g.popstate || !g.hashchange || f.Ga != d.Ga) {
                var h = {
                    event: a,
                    "gtm.historyChangeSource": d.source,
                    "gtm.oldUrlFragment": c.Ga,
                    "gtm.newUrlFragment": d.Ga,
                    "gtm.oldHistoryState": c.state,
                    "gtm.newHistoryState": d.state,
                    "gtm.oldUrl": c.url,
                    "gtm.newUrl": d.url
                };
                e && (h["gtm.triggers"] = e.join(","));
                c = d;
                lz(h)
            }
        }
    }
      , aD = function(a, b) {
        var c = G.history
          , d = c[a];
        if (qb(d))
            try {
                c[a] = function(e, f, g) {
                    d.apply(c, [].slice.call(arguments, 0));
                    var h = G.location.href;
                    b({
                        source: a,
                        state: e,
                        url: jj(V(h)),
                        Ga: ij(V(h), "fragment")
                    })
                }
            } catch (e) {}
    }
      , cD = function(a) {
        G.addEventListener("popstate", function(b) {
            var c = bD(b);
            a({
                source: "popstate",
                state: b.state,
                url: jj(V(c)),
                Ga: ij(V(c), "fragment")
            })
        })
    }
      , dD = function(a) {
        G.addEventListener("hashchange", function(b) {
            var c = bD(b);
            a({
                source: "hashchange",
                state: null,
                url: jj(V(c)),
                Ga: ij(V(c), "fragment")
            })
        })
    }
      , bD = function(a) {
        var b, c;
        return ((b = a.target) == null ? void 0 : (c = b.location) == null ? void 0 : c.href) || G.location.href
    };
    function eD(a, b) {
        var c = this;
        K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
        BA([function() {
            return N(c, "detect_history_change_events")
        }
        ]);
        var d = a && a.get("useV2EventName") ? "ehl" : "hl"
          , e = Number(a && a.get("interval"));
        e > 0 && isFinite(e) || (e = 0);
        if (!IA(d, "init", !1)) {
            var f;
            d === "ehl" ? (f = function(h) {
                for (var m = 0; m < YC.length; m++)
                    YC[m](h)
            }
            ,
            b = HA(b),
            $C(b, e),
            JA(d, "reg", $C)) : f = ZC("gtm.historyChange");
            dD(f);
            cD(f);
            aD("pushState", f);
            aD("replaceState", f);
            JA(d, "init", !0)
        } else if (d === "ehl") {
            var g = IA(d, "reg");
            g && (b = HA(b),
            g(b, e))
        }
        d === "hl" && (b = void 0);
        return b
    }
    eD.J = "internal.enableAutoEventOnHistoryChange";
    var fD = ["http://", "https://", "javascript:", "file://"];
    var gD = function(a, b) {
        if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
            return !1;
        var c = Oc(b, "href");
        if (c.indexOf(":") !== -1 && !fD.some(function(h) {
            return c.indexOf(h) === 0
        }))
            return !1;
        var d = c.indexOf("#")
          , e = Oc(b, "target");
        if (e && e !== "_self" && e !== "_parent" && e !== "_top" || d === 0)
            return !1;
        if (d > 0) {
            var f = jj(V(c))
              , g = jj(V(G.location.href));
            return f !== g
        }
        return !0
    }
      , hD = function(a, b) {
        for (var c = ij(V((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Oc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++)
            try {
                if ((new RegExp(a[d])).test(c))
                    return !1
            } catch (e) {}
        return !0
    }
      , iD = function() {
        var a = 0
          , b = function(c) {
            var d = c.target;
            if (d && c.which !== 3 && !(c.oh || c.timeStamp && c.timeStamp === a)) {
                a = c.timeStamp;
                d = Jc(d, ["a", "area"], 100);
                if (!d)
                    return c.returnValue;
                var e = c.defaultPrevented || c.returnValue === !1, f = IA("lcl", e ? "nv.mwt" : "mwt", 0), g;
                g = e ? IA("lcl", "nv.ids", []) : IA("lcl", "ids", []);
                for (var h = [], m = 0; m < g.length; m++) {
                    var n = g[m]
                      , p = IA("lcl", "aff.map", {})[n];
                    p && !hD(p, d) || h.push(n)
                }
                if (h.length) {
                    var q = gD(c, d)
                      , r = NA(d, "gtm.linkClick", h);
                    r["gtm.elementText"] = Hc(d);
                    r["gtm.willOpenInNewWindow"] = !q;
                    if (q && !e && f && d.href) {
                        var t = !!tb(String(Oc(d, "rel") || "").split(" "), function(x) {
                            return x.toLowerCase() === "noreferrer"
                        })
                          , u = G[(Oc(d, "target") || "_self").substring(1)]
                          , v = !0
                          , w = nz(function() {
                            var x;
                            if (x = v && u) {
                                var y;
                                a: if (t) {
                                    var B;
                                    try {
                                        B = new MouseEvent(c.type,{
                                            bubbles: !0
                                        })
                                    } catch (A) {
                                        if (!H.createEvent) {
                                            y = !1;
                                            break a
                                        }
                                        B = H.createEvent("MouseEvents");
                                        B.initEvent(c.type, !0, !0)
                                    }
                                    B.oh = !0;
                                    c.target.dispatchEvent(B);
                                    y = !0
                                } else
                                    y = !1;
                                x = !y
                            }
                            x && (u.location.href = Oc(d, "href"))
                        }, f);
                        if (mz(r, w, f))
                            v = !1;
                        else
                            return c.preventDefault && c.preventDefault(),
                            c.returnValue = !1
                    } else
                        mz(r, function() {}, f || 2E3);
                    return !0
                }
            }
        };
        Ec(H, "click", b, !1);
        Ec(H, "auxclick", b, !1)
    };
    function jD(a, b) {
        var c = this;
        K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
        var d = J(a);
        BA([function() {
            return N(c, "detect_link_click_events", d)
        }
        ]);
        var e = d && !!d.waitForTags
          , f = d && !!d.checkValidation
          , g = d ? d.affiliateDomains : void 0;
        b = HA(b);
        if (e) {
            var h = Number(d.waitForTagsTimeout);
            h > 0 && isFinite(h) || (h = 2E3);
            var m = function(p) {
                return Math.max(h, p)
            };
            MA("lcl", "mwt", m, 0);
            f || MA("lcl", "nv.mwt", m, 0)
        }
        var n = function(p) {
            p.push(b);
            return p
        };
        MA("lcl", "ids", n, []);
        f || MA("lcl", "nv.ids", n, []);
        g && MA("lcl", "aff.map", function(p) {
            p[b] = g;
            return p
        }, {});
        IA("lcl", "init", !1) || (iD(),
        JA("lcl", "init", !0));
        return b
    }
    jD.J = "internal.enableAutoEventOnLinkClick";
    var kD, lD;
    var mD = function(a) {
        return IA("sdl", a, {})
    }
      , nD = function(a, b, c) {
        if (b) {
            var d = Array.isArray(a) ? a : [a];
            MA("sdl", c, function(e) {
                for (var f = 0; f < d.length; f++) {
                    var g = String(d[f]);
                    e.hasOwnProperty(g) || (e[g] = []);
                    e[g].push(b)
                }
                return e
            }, {})
        }
    }
      , qD = function() {
        function a() {
            oD();
            pD(a, !0)
        }
        return a
    }
      , rD = function() {
        function a() {
            f ? e = G.setTimeout(a, c) : (e = 0,
            oD(),
            pD(b));
            f = !1
        }
        function b() {
            d && kD();
            e ? f = !0 : (e = G.setTimeout(a, c),
            JA("sdl", "pending", !0))
        }
        var c = 250
          , d = !1;
        H.scrollingElement && H.documentElement && (c = 50,
        d = !0);
        var e = 0
          , f = !1;
        return b
    }
      , pD = function(a, b) {
        IA("sdl", "init", !1) && !sD() && (b ? Fc(G, "scrollend", a) : Fc(G, "scroll", a),
        Fc(G, "resize", a),
        JA("sdl", "init", !1))
    }
      , oD = function() {
        var a = kD()
          , b = a.Wg
          , c = a.Xg
          , d = b / lD.scrollWidth * 100
          , e = c / lD.scrollHeight * 100;
        tD(b, "horiz.pix", "PIXELS", "horizontal");
        tD(d, "horiz.pct", "PERCENT", "horizontal");
        tD(c, "vert.pix", "PIXELS", "vertical");
        tD(e, "vert.pct", "PERCENT", "vertical");
        JA("sdl", "pending", !1)
    }
      , tD = function(a, b, c, d) {
        var e = mD(b), f = {}, g;
        for (g in e)
            if (f = {
                zd: f.zd
            },
            f.zd = g,
            e.hasOwnProperty(f.zd)) {
                var h = Number(f.zd);
                if (!(a < h)) {
                    var m = {};
                    lz((m.event = "gtm.scrollDepth",
                    m["gtm.scrollThreshold"] = h,
                    m["gtm.scrollUnits"] = c.toLowerCase(),
                    m["gtm.scrollDirection"] = d,
                    m["gtm.triggers"] = e[f.zd].join(","),
                    m));
                    MA("sdl", b, function(n) {
                        return function(p) {
                            delete p[n.zd];
                            return p
                        }
                    }(f), {})
                }
            }
    }
      , vD = function() {
        MA("sdl", "scr", function(a) {
            a || (a = H.scrollingElement || H.body && H.body.parentNode);
            return lD = a
        }, !1);
        MA("sdl", "depth", function(a) {
            a || (a = uD());
            return kD = a
        }, !1)
    }
      , uD = function() {
        var a = 0
          , b = 0;
        return function() {
            var c = zs()
              , d = c.height;
            a = Math.max(lD.scrollLeft + c.width, a);
            b = Math.max(lD.scrollTop + d, b);
            return {
                Wg: a,
                Xg: b
            }
        }
    }
      , sD = function() {
        return !!(Object.keys(mD("horiz.pix")).length || Object.keys(mD("horiz.pct")).length || Object.keys(mD("vert.pix")).length || Object.keys(mD("vert.pct")).length)
    };
    function wD(a, b) {
        var c = this;
        K(this.getName(), ["options:!PixieMap", "triggerId:?*"], arguments);
        BA([function() {
            N(c, "detect_scroll_events")
        }
        ]);
        vD();
        if (!lD)
            return;
        b = HA(b);
        var d = J(a);
        switch (d.horizontalThresholdUnits) {
        case "PIXELS":
            nD(d.horizontalThresholds, b, "horiz.pix");
            break;
        case "PERCENT":
            nD(d.horizontalThresholds, b, "horiz.pct")
        }
        switch (d.verticalThresholdUnits) {
        case "PIXELS":
            nD(d.verticalThresholds, b, "vert.pix");
            break;
        case "PERCENT":
            nD(d.verticalThresholds, b, "vert.pct")
        }
        IA("sdl", "init", !1) ? IA("sdl", "pending", !1) || I(function() {
            oD()
        }) : (JA("sdl", "init", !0),
        JA("sdl", "pending", !0),
        I(function() {
            oD();
            if (sD()) {
                var e = rD();
                "onscrollend"in G ? (e = qD(),
                Ec(G, "scrollend", e)) : Ec(G, "scroll", e);
                Ec(G, "resize", e)
            } else
                JA("sdl", "init", !1)
        }));
        return b
    }
    wD.J = "internal.enableAutoEventOnScroll";
    function xD(a) {
        return function() {
            if (a.xh && a.zh >= a.xh)
                a.Gf && G.clearInterval(a.Gf);
            else {
                a.zh++;
                var b = Db();
                lz({
                    event: a.eventName,
                    "gtm.timerId": a.Gf,
                    "gtm.timerEventNumber": a.zh,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.xh,
                    "gtm.timerStartTime": a.bk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.bk,
                    "gtm.triggers": a.Sm
                })
            }
        }
    }
    function yD(a, b) {
        return b
    }
    yD.J = "internal.enableAutoEventOnTimer";
    var zD = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Db() - e) * g.playbackRate / 1E3 : 0;
            e = Db()
        }
        var e = 0
          , f = 0;
        return {
            createEvent: function(g, h, m) {
                var n = a()
                  , p = n.Yg
                  , q = m !== void 0 ? Math.round(m) : h !== void 0 ? Math.round(n.Yg * h) : Math.round(n.Bj)
                  , r = h !== void 0 ? Math.round(h * 100) : p <= 0 ? 0 : Math.round(q / p * 100)
                  , t = H.hidden ? !1 : As(c) >= .5;
                d();
                var u = void 0;
                b !== void 0 && (u = [b]);
                var v = NA(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] = Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Uj: function() {
                e = Db()
            },
            pd: function() {
                d()
            }
        }
    };
    var ic = la(["data-gtm-yt-inspected-"]), AD = ["www.youtube.com", "www.youtube-nocookie.com"], BD, CD = !1;
    var DD = function(a, b, c) {
        var d = a.map(function(g) {
            return {
                Fa: g,
                Ne: g,
                Le: void 0
            }
        });
        if (!b.length)
            return d;
        var e = b.map(function(g) {
            return {
                Fa: g * c,
                Ne: void 0,
                Le: g
            }
        });
        if (!d.length)
            return e;
        var f = d.concat(e);
        f.sort(function(g, h) {
            return g.Fa - h.Fa
        });
        return f
    }
      , ED = function(a) {
        a = a === void 0 ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            a[c] < 0 || b.push(a[c]);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , FD = function(a) {
        a = a === void 0 ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            a[c] > 100 || a[c] < 0 || (b[c] = a[c] / 100);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , GD = function(a, b) {
        var c, d;
        function e() {
            t = zD(function() {
                return {
                    url: w,
                    title: x,
                    Yg: v,
                    Bj: a.getCurrentTime(),
                    playbackRate: y
                }
            }, b.Bb, a.getIframe());
            v = 0;
            x = w = "";
            y = 1;
            return f
        }
        function f(E) {
            switch (E) {
            case 1:
                v = Math.round(a.getDuration());
                w = a.getVideoUrl();
                if (a.getVideoData) {
                    var C = a.getVideoData();
                    x = C ? C.title : ""
                }
                y = a.getPlaybackRate();
                b.Rg ? lz(t.createEvent("start")) : t.pd();
                u = DD(b.Hh, b.Gh, a.getDuration());
                return g(E);
            default:
                return f
            }
        }
        function g() {
            B = a.getCurrentTime();
            A = Cb().getTime();
            t.Uj();
            r();
            return h
        }
        function h(E) {
            var C;
            switch (E) {
            case 0:
                return n(E);
            case 2:
                C = "pause";
            case 3:
                var F = a.getCurrentTime() - B;
                C = Math.abs((Cb().getTime() - A) / 1E3 * y - F) > 1 ? "seek" : C || "buffering";
                a.getCurrentTime() && (b.Qg ? lz(t.createEvent(C)) : t.pd());
                q();
                return m;
            case -1:
                return e(E);
            default:
                return h
            }
        }
        function m(E) {
            switch (E) {
            case 0:
                return n(E);
            case 1:
                return g(E);
            case -1:
                return e(E);
            default:
                return m
            }
        }
        function n() {
            for (; d; ) {
                var E = c;
                G.clearTimeout(d);
                E()
            }
            b.Pg && lz(t.createEvent("complete", 1));
            return e(-1)
        }
        function p() {}
        function q() {
            d && (G.clearTimeout(d),
            d = 0,
            c = p)
        }
        function r() {
            if (u.length && y !== 0) {
                var E = -1, C;
                do {
                    C = u[0];
                    if (C.Fa > a.getDuration())
                        return;
                    E = (C.Fa - a.getCurrentTime()) / y;
                    if (E < 0 && (u.shift(),
                    u.length === 0))
                        return
                } while (E < 0);
                c = function() {
                    d = 0;
                    c = p;
                    u.length > 0 && u[0].Fa === C.Fa && (u.shift(),
                    lz(t.createEvent("progress", C.Le, C.Ne)));
                    r()
                }
                ;
                d = G.setTimeout(c, E * 1E3)
            }
        }
        var t, u = [], v, w, x, y, B, A, D = e(-1);
        d = 0;
        c = p;
        return {
            onStateChange: function(E) {
                D = D(E)
            },
            onPlaybackRateChange: function(E) {
                B = a.getCurrentTime();
                A = Cb().getTime();
                t.pd();
                y = E;
                q();
                r()
            }
        }
    }
      , ID = function(a) {
        I(function() {
            function b() {
                for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++)
                    HD(d[f], a)
            }
            var c = H;
            b();
            vC(b)
        })
    }
      , HD = function(a, b) {
        if (!a.getAttribute("data-gtm-yt-inspected-" + b.Bb) && (nc(a, "data-gtm-yt-inspected-" + b.Bb),
        JD(a, b.xe))) {
            a.id || (a.id = KD());
            var c = G.YT
              , d = c.get(a.id);
            d || (d = new c.Player(a.id));
            var e = GD(d, b), f = {}, g;
            for (g in e)
                f = {
                    Fe: f.Fe
                },
                f.Fe = g,
                e.hasOwnProperty(f.Fe) && d.addEventListener(f.Fe, function(h) {
                    return function(m) {
                        return e[h.Fe](m.data)
                    }
                }(f))
        }
    }
      , JD = function(a, b) {
        var c = a.getAttribute("src");
        if (LD(c, "embed/")) {
            if (c.indexOf("enablejsapi=1") > 0)
                return !0;
            if (b) {
                var d;
                var e = c.indexOf("?") !== -1 ? "&" : "?";
                c.indexOf("origin=") > -1 ? d = c + e + "enablejsapi=1" : (BD || (BD = H.location.protocol + "//" + H.location.hostname,
                H.location.port && (BD += ":" + H.location.port)),
                d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(BD));
                var f;
                f = Ub(d);
                a.src = Sb(f).toString();
                return !0
            }
        }
        return !1
    }
      , LD = function(a, b) {
        if (!a)
            return !1;
        for (var c = 0; c < AD.length; c++)
            if (a.indexOf("//" + AD[c] + "/" + b) >= 0)
                return !0;
        return !1
    }
      , KD = function() {
        var a = Math.round(Math.random() * 1E9) + "";
        return H.getElementById(a) ? KD() : a
    };
    function MD(a, b) {
        var c = this;
        K(this.getName(), ["dustOptions:!PixieMap", "triggerId:?*"], arguments);
        BA([function() {
            return N(c, "detect_youtube_activity_events", {
                fixMissingApi: !!a.get("fixMissingApi")
            })
        }
        ]);
        b = HA(b);
        var d = !!a.get("captureStart")
          , e = !!a.get("captureComplete")
          , f = !!a.get("capturePause")
          , g = FD(J(a.get("progressThresholdsPercent")))
          , h = ED(J(a.get("progressThresholdsTimeInSeconds")))
          , m = !!a.get("fixMissingApi");
        if (!(d || e || f || g.length || h.length))
            return;
        var n = {
            Rg: d,
            Pg: e,
            Qg: f,
            Gh: g,
            Hh: h,
            xe: m,
            Bb: b
        }
          , p = G.YT
          , q = function() {
            ID(n)
        };
        if (p)
            return p.ready && p.ready(q),
            b;
        var r = G.onYouTubeIframeAPIReady;
        G.onYouTubeIframeAPIReady = function() {
            r && r();
            q()
        }
        ;
        I(function() {
            for (var t = H.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
                var w = t[v].getAttribute("src");
                if (LD(w, "iframe_api") || LD(w, "player_api"))
                    return b
            }
            for (var x = H.getElementsByTagName("iframe"), y = x.length, B = 0; B < y; B++)
                if (!CD && JD(x[B], n.xe))
                    return Ac("https://www.youtube.com/iframe_api"),
                    CD = !0,
                    b
        });
        return b
    }
    MD.J = "internal.enableAutoEventOnYouTubeActivity";
    var ND;
    function OD(a) {
        var b = !1;
        return b
    }
    OD.J = "internal.evaluateMatchingRules";
    var wE = function() {
        var a = !0;
        jo(7) && jo(9) && jo(10) || (a = !1);
        return a
    };
    function rF(a, b, c, d) {}
    rF.J = "internal.executeEventProcessor";
    function sF(a) {
        var b;
        return ed(b, this.F, 1)
    }
    sF.J = "internal.executeJavascriptString";
    function tF(a) {
        var b;
        return b
    }
    ;var uF = null;
    function vF() {
        var a = new db;
        N(this, "read_container_data"),
        U(37) && uF ? a = uF : (a.set("containerId", 'G-NVVV9T5J9P'),
        a.set("version", '1'),
        a.set("environmentName", ''),
        a.set("debugMode", Wf),
        a.set("previewMode", Yf),
        a.set("environmentMode", Xf),
        a.set("firstPartyServing", qj()),
        a.set("containerUrl", tc),
        a.Mb(),
        U(37) && (uF = a));
        return a
    }
    vF.T = "getContainerVersion";
    function wF(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    wF.T = "getCookieValues";
    function xF() {
        return Ml()
    }
    xF.J = "internal.getCountryCode";
    function yF() {
        var a = [];
        a = Kj();
        return ed(a)
    }
    yF.J = "internal.getDestinationIds";
    function zF(a, b) {
        var c = null;
        return c
    }
    zF.J = "internal.getElementAttribute";
    function AF(a) {
        var b = null;
        return b
    }
    AF.J = "internal.getElementById";
    function BF(a) {
        var b = "";
        return b
    }
    BF.J = "internal.getElementInnerText";
    function CF(a, b) {
        var c = null;
        return c
    }
    CF.J = "internal.getElementProperty";
    function DF(a) {
        var b;
        return b
    }
    DF.J = "internal.getElementValue";
    function EF(a) {
        var b = 0;
        return b
    }
    EF.J = "internal.getElementVisibilityRatio";
    function FF(a) {
        var b = null;
        return b
    }
    FF.J = "internal.getElementsByCssSelector";
    function GF(a) {
        var b;
        K(this.getName(), ["keyPath:!string"], arguments);
        N(this, "read_event_data", a);
        var c;
        a: {
            var d = a
              , e = FA(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, h = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var u = r[t].split("."), v = 0; v < u.length; v++)
                            n.push(u[v]),
                            v !== u.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(h)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = oa(n), B = y.next(); !B.done; B = y.next()) {
                    var A = B.value;
                    A === m ? (w.push(x),
                    x = "") : x = A === g ? x + "\\" : A === h ? x + "." : x + A
                }
                x && w.push(x);
                for (var D = oa(w), E = D.next(); !E.done; E = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[E.value]
                }
                c = f
            } else
                c = void 0
        }
        b = ed(c, this.F, 1);
        return b
    }
    GF.J = "internal.getEventData";
    var HF = {};
    HF.enableAWFledge = U(23);
    HF.enableAdsConversionValidation = U(14);
    HF.enableAutoPiiOnPhoneAndAddress = U(22);
    HF.enableCachedEcommerceData = U(29);
    HF.enableCcdPreAutoPiiDetection = U(30);
    HF.enableCloudRecommentationsErrorLogging = U(31);
    HF.enableCloudRecommentationsSchemaIngestion = U(32);
    HF.enableCloudRetailInjectPurchaseMetadata = U(34);
    HF.enableCloudRetailLogging = U(33);
    HF.enableCloudRetailPageCategories = U(35);
    HF.enableConsentDisclosureActivity = U(36);
    HF.enableConversionMarkerPageViewRename = U(38);
    HF.enableDCFledge = U(41);
    HF.enableDecodeUri = U(57);
    HF.enableDeferAllEnhancedMeasurement = U(42);
    HF.enableDmaBlockDisclosure = U(46);
    HF.enableEuidAutoMode = U(50);
    HF.enableFormSkipValidation = U(54);
    HF.enableUrlDecodeEventUsage = U(80);
    HF.enableZoneConfigInChildContainers = U(83);
    HF.ignoreServerMacroInGoogleSignal = U(86);
    HF.useEnableAutoEventOnFormApis = U(91);
    HF.autoPiiEligible = Rl();
    function IF() {
        return ed(HF)
    }
    IF.J = "internal.getFlags";
    function JF() {
        return new bd(fA)
    }
    JF.J = "internal.getHtmlId";
    function KF(a, b) {
        var c;
        K(this.getName(), ["targetId:!string", "name:!string"], arguments);
        var d = pr(a) || {};
        c = ed(d[b], this.F);
        return c
    }
    KF.J = "internal.getProductSettingsParameter";
    function LF(a, b) {
        var c;
        K(this.getName(), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        N(this, "get_url", "query", a);
        var d = ij(V(G.location.href), "query")
          , e = fj(d, a, b);
        c = ed(e, this.F);
        return c
    }
    LF.T = "getQueryParameters";
    function MF(a, b) {
        var c;
        return c
    }
    MF.T = "getReferrerQueryParameters";
    function NF(a) {
        var b = "";
        return b
    }
    NF.T = "getReferrerUrl";
    function OF() {
        return Nl()
    }
    OF.J = "internal.getRegionCode";
    function PF(a, b) {
        var c;
        K(this.getName(), ["targetId:!string", "name:!string"], arguments);
        var d = un(a);
        c = ed(d[b], this.F);
        return c
    }
    PF.J = "internal.getRemoteConfigParameter";
    function QF(a) {
        var b = "";
        K(this.getName(), ["component:?string"], arguments),
        N(this, "get_url", a),
        b = ij(V(G.location.href), a);
        return b
    }
    QF.T = "getUrl";
    function RF() {
        N(this, "get_user_agent");
        return qc.userAgent
    }
    RF.J = "internal.getUserAgent";
    var SF = !1
      , TF = function(a) {
        var b = (U(6) || a.eventName === Q.g.Sb && gm()) && tt(a)
          , c = a.metadata.is_sgtm_service_worker
          , d = a.metadata.batch_on_navigation
          , e = a.metadata.is_conversion
          , f = a.metadata.is_session_start
          , g = a.metadata.create_dc_join
          , h = a.metadata.create_google_join
          , m = a.metadata.euid_mode_enabled && !!ut(a);
        return !(!(U(58) && U(59) && "fetch"in G || qc.sendBeacon) || e || m || f || g || h || b || c || !d && SF)
    };
    var UF = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Db()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.rh() && (d = Db() - b);
                return d + c
            }
        }
    }
      , VF = function() {
        this.j = void 0;
        this.D = 0;
        this.isActive = this.isVisible = this.H = !1;
        this.O = this.K = void 0
    };
    ca = VF.prototype;
    ca.Ik = function(a) {
        var b = this;
        if (!this.j) {
            this.H = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                Ec(d, e, function(g) {
                    b.j.stop();
                    f(g);
                    b.rh() && b.j.start()
                })
            };
            c(G, "focus", function() {
                b.H = !0
            });
            c(G, "blur", function() {
                b.H = !1
            });
            c(G, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && P(56);
                b.O && b.O()
            });
            c(G, "pagehide", function() {
                b.isActive = !1;
                b.K && b.K()
            });
            c(H, "visibilitychange", function() {
                b.isVisible = !H.hidden
            });
            tt(a) && !vc("Firefox") && !vc("FxiOS") && c(G, "beforeunload", function() {
                SF = !0
            });
            this.Kh();
            this.D = 0
        }
    }
    ;
    ca.Kh = function() {
        this.D += this.Cf();
        this.j = UF(this);
        this.rh() && this.j.start()
    }
    ;
    ca.Rm = function(a) {
        var b = this.Cf();
        b > 0 && (a.o[Q.g.Od] = b)
    }
    ;
    ca.Kl = function(a) {
        a.o[Q.g.Od] = void 0;
        this.Kh();
        this.D = 0
    }
    ;
    ca.rh = function() {
        return this.H && this.isVisible && this.isActive
    }
    ;
    ca.Cl = function() {
        return this.D + this.Cf()
    }
    ;
    ca.Cf = function() {
        return this.j && this.j.get() || 0
    }
    ;
    ca.Am = function(a) {
        this.K = a
    }
    ;
    ca.Tj = function(a) {
        this.O = a
    }
    ;
    var WF = function() {
        delete lb.GA4_EVENT
    }
      , XF = function(a) {
        mb("GA4_EVENT", a)
    };
    function YF() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var ZF = function() {
        var a = YF();
        a.hid = a.hid || ub();
        return a.hid
    }
      , $F = function(a, b) {
        var c = YF();
        if (c.vid == void 0 || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var aG = function(a, b, c) {
        var d = a.metadata.client_id_source;
        if (d === void 0 || c <= d)
            a.o[Q.g.lb] = b,
            a.metadata.client_id_source = c
    }
      , dG = function(a, b) {
        var c;
        var d = b.metadata.cookie_options
          , e = d.prefix + "_ga"
          , f = hp(d, void 0, void 0, Q.g.U);
        if (W(b.m, Q.g.vc) === !1 && bG(b) === a)
            c = !0;
        else {
            var g = gp(a, cG[0], d.domain, d.path);
            c = Yo(e, g, f) !== 1
        }
        return c
    }
      , bG = function(a) {
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = fp(c, b.domain, b.path, cG, Q.g.U);
        if (!d) {
            var e = String(W(a.m, Q.g.uc, ""));
            e && e != c && (d = fp(e, b.domain, b.path, cG, Q.g.U))
        }
        return d
    }
      , cG = ["GA1"]
      , eG = function(a, b) {
        var c = a.o[Q.g.lb];
        if (W(a.m, Q.g.Hb) && W(a.m, Q.g.Wb) || b && c === b)
            return c;
        if (c) {
            c = "" + c;
            if (!dG(c, a))
                return P(31),
                a.isAborted = !0,
                "";
            $F(c, X(Q.g.U));
            return c
        }
        P(32);
        a.isAborted = !0;
        return ""
    };
    var hG = function(a, b, c) {
        if (!b)
            return a;
        if (!a)
            return b;
        var d = fG(a);
        if (!d)
            return b;
        var e, f = yb((e = W(c.m, Q.g.kd)) != null ? e : 30);
        if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.He + f * 60))
            return a;
        var g = fG(b);
        if (!g)
            return a;
        g.Kc = d.Kc + 1;
        var h;
        return (h = gG(g.sessionId, g.Kc, g.yd, g.He, g.vh, g.Gc, g.ue)) != null ? h : b
    }
      , kG = function(a, b) {
        var c = b.metadata.cookie_options
          , d = iG(b, c)
          , e = gp(a, jG[0], c.domain, c.path)
          , f = {
            Ab: Q.g.U,
            domain: c.domain,
            path: c.path,
            expires: c.zb ? new Date(Db() + Number(c.zb) * 1E3) : void 0,
            flags: c.flags
        };
        Yo(d, void 0, f);
        return Yo(d, e, f) !== 1
    }
      , lG = function(a) {
        var b = a.metadata.cookie_options
          , c = iG(a, b)
          , d = fp(c, b.domain, b.path, jG, Q.g.U);
        if (!d)
            return d;
        var e = No(c, void 0, void 0, Q.g.U);
        if (d && e.length > 1) {
            P(114);
            for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                var m = e[h].split(".");
                if (!(m.length < 7)) {
                    var n = Number(m[5]);
                    n && (!g || n > g) && (g = n,
                    f = e[h])
                }
            }
            f && f.substring(f.length - d.length, f.length) !== d && (P(115),
            d = f.split(".").slice(2).join("."))
        }
        return d
    }
      , gG = function(a, b, c, d, e, f, g) {
        if (a && b) {
            var h = [a, b, yb(c), d, e];
            h.push(f ? "1" : "0");
            h.push(g || "0");
            return h.join(".")
        }
    }
      , jG = ["GS1"]
      , iG = function(a, b) {
        return b.prefix + "_ga_" + a.target.la[Dm[0]]
    }
      , fG = function(a) {
        if (a) {
            var b = a.split(".");
            if (!(b.length < 5 || b.length > 7)) {
                b.length < 7 && P(67);
                var c = Number(b[1])
                  , d = Number(b[3])
                  , e = Number(b[4] || 0);
                c || P(118);
                d || P(119);
                isNaN(e) && P(120);
                if (c && d && !isNaN(e))
                    return {
                        sessionId: b[0],
                        Kc: c,
                        yd: !!Number(b[2]),
                        He: d,
                        vh: e,
                        Gc: b[5] === "1",
                        ue: b[6] !== "0" ? b[6] : void 0
                    }
            }
        }
    }
      , mG = function(a) {
        return gG(a.o[Q.g.tb], a.o[Q.g.be], a.o[Q.g.ae], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[Q.g.Ze], a.o[Q.g.Pd])
    };
    var nG = function(a) {
        var b = W(a.m, Q.g.sa)
          , c = a.m.D[Q.g.sa];
        if (c === b)
            return c;
        var d = k(b);
        c && c[Q.g.W] && (d[Q.g.W] = (d[Q.g.W] || []).concat(c[Q.g.W]));
        return d
    }
      , oG = function(a, b) {
        var c = xp(!0);
        return c._up !== "1" ? {} : {
            clientId: c[a],
            Mf: c[b]
        }
    }
      , pG = function(a, b, c) {
        var d = xp(!0)
          , e = d[b];
        e && (aG(a, e, 2),
        dG(e, a));
        var f = d[c];
        f && kG(f, a);
        return {
            clientId: e,
            Mf: f
        }
    }
      , qG = !1
      , rG = function(a) {
        var b = nG(a) || {}
          , c = a.metadata.cookie_options
          , d = c.prefix + "_ga"
          , e = iG(a, c)
          , f = {};
        Hp(b[Q.g.Bc], !!b[Q.g.W]) && (f = pG(a, d, e),
        f.clientId && f.Mf && (qG = !0));
        b[Q.g.W] && Ep(function() {
            var g = {}
              , h = bG(a);
            h && (g[d] = h);
            var m = lG(a);
            m && (g[e] = m);
            var n = No("FPLC", void 0, void 0, Q.g.U);
            n.length && (g._fplc = n[0]);
            return g
        }, b[Q.g.W], b[Q.g.Ib], !!b[Q.g.sb]);
        return f
    }
      , tG = function(a) {
        if (!W(a.m, Q.g.Xa))
            return {};
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = iG(a, b);
        Fp(function() {
            var e;
            if (X("analytics_storage"))
                e = {};
            else {
                var f = {};
                e = (f._up = "1",
                f[c] = a.o[Q.g.lb],
                f[d] = mG(a),
                f)
            }
            return e
        }, 1);
        return !X("analytics_storage") && sG() ? oG(c, d) : {}
    }
      , sG = function() {
        var a = hj(G.location, "host")
          , b = hj(V(H.referrer), "host");
        return a && b ? a === b || a.indexOf("." + b) >= 0 || b.indexOf("." + a) >= 0 ? !0 : !1 : !1
    };
    var uG = function() {
        var a = Db()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function(e) {
            var f = Db();
            f >= b && (b = f + 864E5,
            d = 5E3);
            c = Math.min(c + (f - a) / 1E3 * 5, 20);
            a = f;
            var g = !1;
            d < 1 || c < 1 || (g = !0,
            d--,
            c--);
            e && (e.ol = d,
            e.fl = c);
            return g
        }
    };
    var vG = function(a, b) {
        qo() && (a.gcs = ro(),
        b.metadata.is_consent_update && (a.gcu = "1"));
        a.gcd = vo(b.m);
        po(b.m) ? a.npa = "0" : a.npa = "1";
        U(64) && Ao() && (a._ng = "1")
    }
      , yG = function(a) {
        if (a.metadata.is_merchant_center)
            return {
                url: tj("https://www.merchant-center-analytics.goog") + "/mc/collect",
                endpoint: 20
            };
        var b = pj(sj(a.m), "/g/collect");
        if (b)
            return {
                url: b,
                endpoint: 16
            };
        if (Fi.D)
            return {
                url: "" + Gi() + "/g/collect",
                endpoint: 16
            };
        var c = st(a)
          , d = W(a.m, Q.g.kb);
        return c && !Ol() && d !== !1 && wE() && X(Q.g.R) && X(Q.g.U) ? {
            url: wG(),
            endpoint: 17
        } : {
            url: xG(),
            endpoint: 16
        }
    }
      , zG = !1;
    zG = !0;
    var AG = {};
    AG[Q.g.lb] = "cid";
    AG[Q.g.Yf] = "gcut";
    AG[Q.g.Ub] = "are";
    AG[Q.g.Ve] = "pscdl";
    AG[Q.g.af] = "_fid";
    AG[Q.g.og] = "_geo";
    AG[Q.g.rb] = "gdid";
    AG[Q.g.Gb] = "frm";
    AG[Q.g.dd] = "ir";
    AG[Q.g.Oa] = "ul";
    AG[Q.g.zg] = "pae";
    AG[Q.g.Zd] = "_rdi";
    AG[Q.g.Kb] = "sr";
    AG[Q.g.Ri] = "tid";
    AG[Q.g.jf] = "tt";
    AG[Q.g.md] = "ec_mode";
    AG[Q.g.cj] = "gtm_up";
    AG[Q.g.kf] = "uaa";
    AG[Q.g.lf] = "uab";
    AG[Q.g.nf] = "uafvl";
    AG[Q.g.pf] = "uamb";
    AG[Q.g.qf] = "uam";
    AG[Q.g.rf] = "uap";
    AG[Q.g.tf] = "uapv";
    AG[Q.g.uf] = "uaw";
    AG[Q.g.Si] = "ur";
    AG[Q.g.ed] = "lps";
    var BG = {};
    BG[Q.g.Nc] = "cc";
    BG[Q.g.Oc] = "ci";
    BG[Q.g.Pc] = "cm";
    BG[Q.g.Qc] = "cn";
    BG[Q.g.Sc] = "cs";
    BG[Q.g.Tc] = "ck";
    BG[Q.g.za] = "cu";
    BG[Q.g.wa] = "dl";
    BG[Q.g.Da] = "dr";
    BG[Q.g.Jb] = "dt";
    BG[Q.g.ae] = "seg";
    BG[Q.g.tb] = "sid";
    BG[Q.g.be] = "sct";
    BG[Q.g.Ba] = "uid";
    U(85) && (BG[Q.g.gd] = "dp");
    var CG = {};
    CG[Q.g.Od] = "_et";
    CG[Q.g.ob] = "edid";
    var DG = {};
    DG[Q.g.Nc] = "cc";
    DG[Q.g.Oc] = "ci";
    DG[Q.g.Pc] = "cm";
    DG[Q.g.Qc] = "cn";
    DG[Q.g.Sc] = "cs";
    DG[Q.g.Tc] = "ck";
    var EG = {}
      , FG = Object.freeze((EG[Q.g.Ea] = 1,
    EG))
      , xG = function() {
        var a = "www";
        zG && Ql() && (a = Ql());
        return "https://" + a + ".google-analytics.com/g/collect"
    }
      , wG = function() {
        var a;
        zG && Ql() !== "" && (a = Ql());
        return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
    }
      , GG = function(a, b, c) {
        var d = {}
          , e = {}
          , f = {};
        d.v = "2";
        d.tid = a.target.ia;
        rr(a, "google_ng", !1) && !Ol() && (d._ng = 1);
        d.gtm = Do({
            xa: a.metadata.source_canonical_id
        });
        d._p = U(93) ? zi : ZF();
        c && (d.em = c);
        a.metadata.create_google_join && (d._gaz = 1);
        vG(d, a);
        yo() && (d.dma_cps = wo());
        d.dma = xo();
        Jn(Rn()) && (d.tcfd = zo());
        Fi.j && (d.tag_exp = Fi.j);
        var g = a.o[Q.g.rb];
        g && (d.gdid = g);
        e.en = String(a.eventName);
        a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
        a.metadata.is_new_to_site && (e._nsi = 1);
        a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
        a.metadata.is_conversion && (e._c = 1);
        a.metadata.is_external_event && (e._ee = 1);
        if (a.metadata.is_ecommerce) {
            var h = a.o[Q.g.da] || W(a.m, Q.g.da);
            if (Array.isArray(h))
                for (var m = 0; m < h.length && m < 200; m++)
                    e["pr" + (m + 1)] = bg(h[m])
        }
        var n = a.o[Q.g.ob];
        n && (e.edid = n);
        var p = function(t, u) {
            if (typeof u !== "object" || !FG[t]) {
                var v = "ep." + t
                  , w = "epn." + t;
                t = rb(u) ? w : v;
                var x = rb(u) ? v : w;
                e.hasOwnProperty(x) && delete e[x];
                e[t] = String(u)
            }
        };
        z(a.o, function(t, u) {
            if (u !== void 0 && !Yh.hasOwnProperty(t)) {
                u === null && (u = "");
                var v;
                var w = u;
                t !== Q.g.Pd ? v = !1 : a.metadata.euid_mode_enabled || tt(a) ? (d.ecid = w,
                v = !0) : v = void 0;
                if (!v && t !== Q.g.Ze) {
                    var x = u;
                    u === !0 && (x = "1");
                    u === !1 && (x = "0");
                    x = String(x);
                    var y;
                    if (AG[t])
                        y = AG[t],
                        d[y] = x;
                    else if (BG[t])
                        y = BG[t],
                        f[y] = x;
                    else if (CG[t])
                        y = CG[t],
                        e[y] = x;
                    else if (t.charAt(0) === "_")
                        d[t] = x;
                    else {
                        var B;
                        DG[t] ? B = !0 : t !== Q.g.Rc ? B = !1 : (typeof u !== "object" && p(t, u),
                        B = !0);
                        B || p(t, u)
                    }
                }
            }
        });
        (function(t) {
            tt(a) && typeof t === "object" && z(t || {}, function(u, v) {
                typeof v !== "object" && (d["sst." + u] = String(v))
            })
        }
        )(a.o[Q.g.je]);
        var q = a.o[Q.g.cb] || {};
        U(67) && W(a.m, Q.g.kb, void 0, 4) === !1 && (d.ngs = "1");
        z(q, function(t, u) {
            u !== void 0 && ((u === null && (u = ""),
            t !== Q.g.Ba || f.uid) ? b[t] !== u && (e[(rb(u) ? "upn." : "up.") + String(t)] = String(u),
            b[t] = u) : f.uid = String(u))
        });
        var r = yG(a);
        dg.call(this, {
            ja: d,
            Lc: f,
            bh: e
        }, r.url, tt(a), void 0, r.endpoint)
    };
    za(GG, dg);
    var HG = function(a) {
        this.D = a;
        this.H = "";
        this.j = this.D
    }
      , IG = function(a, b) {
        a.j = b;
        return a
    }
      , JG = function(a, b) {
        a.K = b;
        return a
    };
    function KG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
    function LG(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Ya(b) ? b : {}, f = oa(d), g = f.next(); !g.done; g = f.next())
                    c(g.value, e)
        }
    }
    ;var MG = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , NG = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        d >= 0 && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , OG = function(a, b, c, d) {
        var e = JG(IG(new HG(function(h, m) {
            var n = MG(h, c);
            d && (n = n.replace("_is_sw=0", d));
            var p = {};
            m.attribution_reporting && (p.attributionsrc = "");
            Dc(n, void 0, void 0, p)
        }
        ), function(h) {
            var m = MG(h, c);
            Kc(m)
        }), function(h, m) {
            var n = MG(h, c)
              , p = m.dedupe_key;
            p && mu(n, p)
        })
          , f = 0
          , g = new G.XMLHttpRequest;
        g.withCredentials = !0;
        g.onprogress = function(h) {
            if (g.status === 200) {
                var m = g.responseText.substring(f);
                f = h.loaded;
                var n;
                n = e.H + m;
                for (var p = n.indexOf("\n\n"); p !== -1; ) {
                    var q;
                    a: {
                        var r = oa(n.substring(0, p).split("\n"))
                          , t = r.next().value
                          , u = r.next().value;
                        if (t.indexOf("event: message") === 0 && u.indexOf("data: ") === 0)
                            try {
                                q = JSON.parse(u.substring(u.indexOf(":") + 1));
                                break a
                            } catch (F) {}
                        q = void 0
                    }
                    var v = e
                      , w = q;
                    if (w) {
                        LG(w.send_pixel, w.options, v.D);
                        LG(w.send_beacon, void 0, v.j);
                        var x = w.create_iframe
                          , y = w.options
                          , B = v.K;
                        if (x && B) {
                            var A = x || [];
                            if (Array.isArray(A))
                                for (var D = Ya(y) ? y : {}, E = oa(A), C = E.next(); !C.done; C = E.next())
                                    B(C.value, D)
                        }
                    }
                    n = n.substring(p + 2);
                    p = n.indexOf("\n\n")
                }
                e.H = n
            }
        }
        ;
        g.open(b ? "POST" : "GET", a);
        g.setAttributionReporting && g.setAttributionReporting({
            eventSourceEligible: !1,
            triggerEligible: !0
        });
        g.send(b)
    }
      , PG = function(a, b) {
        var c = V(a)
          , d = NG(c)
          , e = KG(c);
        U(77) ? Rt(e, b, d, function(f) {
            OG(e, b, d, f)
        }) : OG(e, b, d)
    };
    var QG = function(a, b) {
        return a ? [a, b].join("&") : b
    }
      , TG = function(a, b, c, d) {
        var e = b
          , f = Pc();
        f !== void 0 && (e += "&tfd=" + Math.round(f));
        b = e;
        var g = a + "?" + b;
        RG && (d = !(g.indexOf(xG()) === 0 || g.indexOf(wG()) === 0));
        if (d && !SF)
            PG(g, c);
        else {
            var h;
            var m = b;
            U(58) ? ("fetch"in G ? U(59) ? Nc(a + "?" + QG(m, "_z=fetch"), c, {
                Ln: !0
            }) || SG(a, QG(m, "_z=failedfetch"), c) : SG(a, QG(m, "_z=sendBeacon"), c) : SG(a, QG(m, "_z=nofetch"), c),
            h = !0) : h = !1;
            h || SG(a, b, c)
        }
    }
      , UG = function(a, b) {
        function c(u) {
            n.push(u + "=" + encodeURIComponent("" + a.ja[u]))
        }
        var d = b.Hm
          , e = b.Im
          , f = b.El
          , g = b.Ul
          , h = b.Tl
          , m = b.zm;
        if (d || e) {
            var n = [];
            a.ja._ng && c("_ng");
            c("tid");
            c("cid");
            c("gtm");
            n.push("aip=1");
            a.Lc.uid && !h && n.push("uid=" + encodeURIComponent("" + a.Lc.uid));
            var p = function() {
                c("dma");
                a.ja.dma_cps != null && c("dma_cps");
                a.ja.gcs != null && c("gcs");
                c("gcd");
                a.ja.npa != null && c("npa")
            };
            p();
            a.ja.frm != null && c("frm");
            d && (SG("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")),
            n.join("&"));
            if (e) {
                var q = function() {
                    var u = ou() + "/td/ga/rul?";
                    n = [];
                    c("tid");
                    n.push("gacid=" + encodeURIComponent(String(a.ja.cid)));
                    c("gtm");
                    p();
                    c("pscdl");
                    a.ja._ng != null && c("_ng");
                    n.push("aip=1");
                    n.push("fledge=1");
                    a.ja.frm != null && c("frm");
                    n.push("z=" + ub());
                    var v = u + n.join("&");
                    mu(v, a.ja.tid)
                };
                n.push("z=" + ub());
                if (!g) {
                    var r = f && f.indexOf("google.") === 0 && f != "google.com" ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    if (r) {
                        var t = r + n.join("&");
                        Dc(t)
                    }
                }
                U(67) && m && !SF && q()
            }
        }
    }
      , RG = !1;
    var VG = function() {
        this.K = 1;
        this.O = {};
        this.j = new eg;
        this.D = -1
    };
    VG.prototype.H = function(a, b) {
        var c = this
          , d = new GG(a,this.O,b)
          , e = TF(a);
        e && this.j.O(d) || this.flush();
        if (e && this.j.add(d)) {
            if (this.D < 0) {
                var f = G.setTimeout, g;
                tt(a) ? WG ? (WG = !1,
                g = XG) : g = YG : g = 5E3;
                this.D = f.call(G, function() {
                    return c.flush()
                }, g)
            }
        } else {
            var h = ig(d, this.K++);
            TG(d.baseUrl, h.params, h.body, d.H);
            var m = a.metadata.create_dc_join
              , n = a.metadata.create_google_join
              , p = W(a.m, Q.g.Ca) !== !1
              , q = po(a.m)
              , r = {
                eventId: a.m.eventId,
                priorityId: a.m.priorityId
            }
              , t = a.o[Q.g.zg]
              , u = {
                Hm: m,
                Im: n,
                El: Sl(),
                Dn: p,
                Cn: q,
                Ul: Ol(),
                Tl: a.metadata.euid_mode_enabled,
                Jn: r,
                zm: t,
                m: a.m
            };
            UG(d, u)
        }
        Uv(a.m.eventId, a.eventName)
    }
    ;
    VG.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !SF ? this.Z(a) : this.H(a)
    }
    ;
    VG.prototype.flush = function() {
        if (this.j.events.length) {
            var a = jg(this.j, this.K++);
            TG(this.j.baseUrl, a.params, a.body, this.j.D);
            this.j = new eg;
            this.D >= 0 && (G.clearTimeout(this.D),
            this.D = -1)
        }
    }
    ;
    VG.prototype.Z = function(a) {
        var b = this
          , c = ut(a);
        c ? Eh(c, function(d) {
            b.H(a, d.split("~").length === 1 ? void 0 : d)
        }) : this.H(a)
    }
    ;
    var SG = function(a, b, c) {
        var d = a + "?" + b;
        c ? Lc(d, c) : Kc(d)
    }
      , XG = Vi('', 500)
      , YG = Vi('', 5E3)
      , WG = !0;
    var ZG = function(a, b, c) {
        c === void 0 && (c = {});
        if (typeof b === "object")
            for (var d in b)
                ZG(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , $G = function(a) {
        if (tt(a)) {
            var b = rr(a, "ccd_add_1p_data", !1) ? 1 : 0;
            wt(a, "ude", b);
            var c = function(e) {
                var f = ZG(Q.g.Ea, e);
                z(f, function(g, h) {
                    a.o[g] = h
                })
            }
              , d = W(a.m, Q.g.Ea);
            d !== void 0 ? (c(d),
            a.o[Q.g.md] = "c") : c(a.metadata.user_data);
            a.metadata.user_data = void 0
        }
    };
    var aH = window
      , bH = document
      , cH = function(a) {
        var b = aH._gaUserPrefs;
        if (b && b.ioo && b.ioo() || bH.documentElement.hasAttribute("data-google-analytics-opt-out") || a && aH["ga-disable-" + a] === !0)
            return !0;
        try {
            var c = aH.external;
            if (c && c._gaUserPrefs && c._gaUserPrefs == "oo")
                return !0
        } catch (p) {}
        for (var d = [], e = String(bH.cookie).split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == "AMP_TOKEN") {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        for (var n = 0; n < d.length; n++)
            if (d[n] == "$OPT_OUT")
                return !0;
        return bH.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var eH = function(a) {
        return !a || dH.test(a) || $h.hasOwnProperty(a)
    }
      , fH = function(a) {
        var b = Q.g.Kb, c;
        c || (c = function() {}
        );
        a.o[b] !== void 0 && (a.o[b] = c(a.o[b]))
    }
      , gH = function(a) {
        var b = a.indexOf("?")
          , c = b === -1 ? a : a.substring(0, b);
        try {
            c = decodeURIComponent(c)
        } catch (d) {}
        return b === -1 ? c : "" + c + a.substring(b)
    }
      , hH = function(a, b, c) {
        X(c) || tm(function() {
            b.metadata.is_consent_update = !0;
            var d = hi[c || ""];
            d && wt(b, "gcut", d);
            a.yj(b)
        }, c)
    }
      , iH = function(a) {
        var b = Mb(Zm(a.m, Q.g.ka, 1), ".");
        b && (a.o[Q.g.rb] = b);
        var c = Mb(Zm(a.m, Q.g.ka, 2), ".");
        c && (a.o[Q.g.ob] = c)
    }
      , gu = {
        sl: "",
        Tm: Number("")
    }
      , jH = {}
      , kH = (jH[Q.g.Nc] = 1,
    jH[Q.g.Oc] = 1,
    jH[Q.g.Pc] = 1,
    jH[Q.g.Qc] = 1,
    jH[Q.g.Sc] = 1,
    jH[Q.g.Tc] = 1,
    jH)
      , dH = /^(_|ga_|google_|gtag\.|firebase_).*$/
      , lH = [Pr, iH, ss]
      , mH = function(a) {
        this.O = a;
        this.ac = new VG;
        this.j = void 0;
        this.K = new VF;
        this.D = this.H = void 0;
        this.bc = this.Pa = !1;
        this.nd = 0;
        this.Z = !1
    };
    ca = mH.prototype;
    ca.xm = function(a, b, c) {
        var d = this
          , e = Am(this.O);
        if (e)
            if (c.eventMetadata.is_external_event && a.charAt(0) === "_")
                c.onFailure();
            else {
                a !== Q.g.ba && a !== Q.g.Ta && eH(a) && P(58);
                nH(c.j);
                var f = new qr(e,a,c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [Q.g.U];
                if (rr(f, Q.g.Vb, W(f.m, Q.g.Vb)) || tt(f))
                    g.push(Q.g.R),
                    g.push(Q.g.P);
                hu(function() {
                    um(function() {
                        d.ym(f)
                    }, g)
                });
                this.vm(a, c, f)
            }
        else
            c.onFailure()
    }
    ;
    ca.vm = function(a, b, c) {
        var d = Am(this.O);
        if (U(55) && a === Q.g.ba && rr(c, "ga4_ads_linked", !1)) {
            var e = function() {
                for (var h = oa(lH), m = h.next(); !m.done; m = h.next()) {
                    var n = m.value;
                    n(f);
                    if (f.isAborted)
                        break
                }
                f.metadata.speculative || f.isAborted || hv(f)
            }
              , f = new qr(d,a,b);
            f.metadata.hit_type = "page_view";
            f.metadata.speculative = !0;
            f.metadata.is_server_side_destination = tt(c);
            var g = [Q.g.R, Q.g.P];
            um(function() {
                e();
                X(g) || tm(function(h) {
                    var m, n;
                    m = h.consentEventId;
                    n = h.consentPriorityId;
                    f.metadata.consent_updated = !0;
                    f.metadata.consent_event_id = m;
                    f.metadata.consent_priority_id = n;
                    e()
                }, g)
            }, g)
        }
    }
    ;
    ca.ym = function(a) {
        this.D = a;
        try {
            if (cH(a.target.ia))
                P(28),
                a.isAborted = !0;
            else if (U(84)) {
                var b = Pj();
                if (b && Array.isArray(b.destinations))
                    for (var c = 0; c < b.destinations.length; c++)
                        if (cH(b.destinations[c])) {
                            P(125);
                            a.isAborted = !0;
                            break
                        }
            }
            if (gu.sl.replace(/\s+/g, "").split(",").indexOf(a.eventName) >= 0)
                a.isAborted = !0;
            else {
                var d = vt(a);
                d && d.blacklisted && (a.isAborted = !0)
            }
            var e = H.location.protocol;
            e != "http:" && e != "https:" && (P(29),
            a.isAborted = !0);
            qc && qc.loadPurpose == "preview" && (P(30),
            a.isAborted = !0);
            U(79) && (a.isAborted = !0);
            Ur(a);
            var f = {}
              , g = ni.grl;
            g || (g = uG(),
            ni.grl = g);
            g(f) || (P(35),
            a.isAborted = !0);
            if (a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            var h = f.fl;
            f.ol === 0 && XF(25);
            h === 0 && XF(26);
            var m = {
                prefix: String(W(a.m, Q.g.Na, "")),
                path: String(W(a.m, Q.g.Eb, "/")),
                flags: String(W(a.m, Q.g.ab, "")),
                domain: String(W(a.m, Q.g.Va, "auto")),
                zb: Number(W(a.m, Q.g.Wa, 63072E3))
            };
            a.metadata.cookie_options = m;
            oH(a);
            this.Jk(a);
            this.K.Rm(a);
            a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : rr(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
            if (a.metadata.euid_mode_enabled && rr(a, "ccd_add_1p_data", !1)) {
                var n = a.m.D[Q.g.ce];
                if (Ui(n)) {
                    var p = W(a.m, Q.g.Ea);
                    p === null ? a.metadata.user_data_from_code = null : (n.enable_code && Ya(p) && (a.metadata.user_data_from_code = p),
                    Ya(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = Ti(n.selectors)))
                }
            }
            if (U(56) && !U(55) && rr(a, "ga4_ads_linked", !1) && a.eventName === Q.g.ba) {
                var q = W(a.m, Q.g.ra) !== !1;
                if (q) {
                    var r = Nr(a);
                    r.zb && (r.zb = Math.min(r.zb, 7776E3));
                    Or({
                        rd: q,
                        wd: W(a.m, Q.g.sa) || {},
                        Cd: W(a.m, Q.g.Xa),
                        jc: r
                    })
                }
            }
            var t = this.Sj, u;
            W(a.m, Q.g.Xa) && (X(Q.g.U) || W(a.m, Q.g.lb) || (a.o[Q.g.cj] = !0));
            var v;
            var w;
            w = w === void 0 ? 3 : w;
            var x = G.location.href;
            if (x) {
                var y = V(x).search.replace("?", "")
                  , B = fj(y, "_gl", !1, !0) || "";
                v = B ? yp(B, w) !== void 0 : !1
            } else
                v = !1;
            v && tt(a) && wt(a, "glv", 1);
            if (a.eventName !== Q.g.ba)
                u = {};
            else {
                W(a.m, Q.g.Xa) && Rq(["aw", "dc"]);
                Tq(["aw", "dc"]);
                var A = rG(a)
                  , D = tG(a);
                u = Object.keys(A).length ? A : D
            }
            t.call(this, u);
            var E = a.eventName === Q.g.ba;
            E && (this.Z = !0);
            a.eventName == Q.g.ba && (W(a.m, Q.g.Ja, !0) ? (a.m.j[Q.g.ka] && (a.m.H[Q.g.ka] = a.m.j[Q.g.ka],
            a.m.j[Q.g.ka] = void 0,
            a.o[Q.g.ka] = void 0),
            a.eventName = Q.g.Sb) : a.isAborted = !0);
            E && !a.isAborted && this.nd++ > 0 && XF(17);
            iH(a);
            var C = this.H
              , F = this.K
              , M = !this.bc
              , L = this.j
              , O = W(a.m, Q.g.lb);
            if (W(a.m, Q.g.Hb) && W(a.m, Q.g.Wb))
                O ? aG(a, O, 1) : (P(127),
                a.isAborted = !0);
            else {
                var T = O ? 1 : 8;
                a.metadata.is_new_to_site = !1;
                O || (O = bG(a),
                T = 3);
                O || (O = L,
                T = 5);
                if (!O) {
                    var ba = X(Q.g.U)
                      , aa = YF();
                    O = !aa.from_cookie || ba ? aa.vid : void 0;
                    T = 6
                }
                O ? O = "" + O : (O = ep(),
                T = 7,
                a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
                aG(a, O, T)
            }
            var R = Math.floor(a.metadata.event_start_timestamp_ms / 1E3)
              , pa = void 0;
            a.metadata.is_new_to_site || (pa = lG(a) || C);
            var ma = yb(W(a.m, Q.g.kd, 30));
            ma = Math.min(475, ma);
            ma = Math.max(5, ma);
            var fa = yb(W(a.m, Q.g.ef, 1E4))
              , ha = fG(pa);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            ha && ha.vh && (a.metadata.join_timer_sec = Math.max(0, ha.vh - Math.max(0, R - ha.He)));
            var Ia = !1;
            ha || (Ia = a.metadata.is_first_visit = !0,
            ha = {
                sessionId: String(R),
                Kc: 1,
                yd: !1,
                He: R,
                Gc: !1,
                ue: void 0
            });
            R > ha.He + ma * 60 && (Ia = !0,
            ha.sessionId = String(R),
            ha.Kc++,
            ha.yd = !1,
            ha.ue = void 0);
            if (Ia)
                a.metadata.is_session_start = !0,
                F.Kl(a);
            else if (F.Cl() > fa || a.eventName == Q.g.Sb)
                ha.yd = !0;
            a.metadata.euid_mode_enabled ? W(a.m, Q.g.Ba) ? ha.Gc = !0 : (ha.Gc && !U(12) && (ha.ue = void 0),
            ha.Gc = !1) : ha.Gc = !1;
            var Ba = ha.ue;
            if (a.metadata.euid_mode_enabled || tt(a)) {
                var Ja = W(a.m, Q.g.Pd)
                  , Xa = Ja ? 1 : 8;
                Ja || (Ja = Ba,
                Xa = 4);
                Ja || (Ja = dp(),
                Xa = 7);
                var Le = Ja.toString()
                  , ce = Xa
                  , Tf = a.metadata.enhanced_client_id_source;
                if (Tf === void 0 || ce <= Tf)
                    a.o[Q.g.Pd] = Le,
                    a.metadata.enhanced_client_id_source = ce
            }
            M ? (a.copyToHitData(Q.g.tb, ha.sessionId),
            a.copyToHitData(Q.g.be, ha.Kc),
            a.copyToHitData(Q.g.ae, ha.yd ? 1 : 0)) : (a.o[Q.g.tb] = ha.sessionId,
            a.o[Q.g.be] = ha.Kc,
            a.o[Q.g.ae] = ha.yd ? 1 : 0);
            a.metadata[Q.g.Ze] = ha.Gc ? 1 : 0;
            pH(a);
            if (!W(a.m, Q.g.Wb) || !W(a.m, Q.g.Hb)) {
                var TI = a.copyToHitData
                  , UI = Q.g.wa
                  , Ww = ""
                  , th = H.location;
                if (th) {
                    var Rj = th.pathname || "";
                    Rj.charAt(0) != "/" && (Rj = "/" + Rj);
                    var Xw;
                    var Uf = th.search || "";
                    if (U(82) && Uf && Uf.indexOf("?") === 0)
                        for (var Yw = Uf.substring(1).split("&"), Xn = 0; Xn < Yw.length; ++Xn) {
                            var Sj = Yw[Xn].split("=");
                            Sj && Sj.length == 2 && Sj[0] === "wbraid" && (Uf = Uf.replace(/([?&])wbraid=[^&]+/, "$1wbraid=" + Ob(Sj[1])))
                        }
                    Xw = Uf;
                    Ww = th.protocol + "//" + th.hostname + Rj + Xw
                }
                TI.call(a, UI, Ww, gH);
                var VI = a.copyToHitData, WI = Q.g.Da, Tj;
                a: {
                    var Zw = No("_opt_expid", void 0, void 0, Q.g.U)[0];
                    if (Zw) {
                        var $w = decodeURIComponent(Zw).split("$");
                        if ($w.length === 3) {
                            Tj = $w[2];
                            break a
                        }
                    }
                    if (ni.ga4_referrer_override !== void 0)
                        Tj = ni.ga4_referrer_override;
                    else {
                        var ax = Mi("gtm.gtagReferrer." + a.target.ia)
                          , XI = H.referrer;
                        Tj = ax ? "" + ax : XI
                    }
                }
                VI.call(a, WI, Tj || void 0, gH);
                a.copyToHitData(Q.g.Jb, H.title);
                a.copyToHitData(Q.g.Oa, (qc.language || "").toLowerCase());
                var bx = xs();
                a.copyToHitData(Q.g.Kb, bx.width + "x" + bx.height);
                U(85) && a.copyToHitData(Q.g.gd, void 0, gH);
                U(60) && vr() && a.copyToHitData(Q.g.ed, "1")
            }
            rr(a, "google_ng") ? a.copyToHitData(Q.g.bd, 1) : Xr(a);
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(Fi.D || U(7) && tt(a) || a.metadata.is_merchant_center || W(a.m, Q.g.kb) === !1) && wE() && X(Q.g.R)) {
                var cx = st(a);
                (a.metadata.is_session_start || W(a.m, Q.g.ng)) && (a.metadata.create_dc_join = !!cx);
                var dx;
                dx = a.metadata.join_timer_sec;
                cx && (dx || 0) === 0 && (a.metadata.join_timer_sec = 60,
                a.metadata.create_google_join = !0)
            }
            qH(a);
            bi.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0,
            a.copyToHitData(Q.g.da),
            a.copyToHitData(Q.g.za));
            a.copyToHitData(Q.g.jf);
            for (var ex = W(a.m, Q.g.bf) || [], Yn = 0; Yn < ex.length; Yn++) {
                var fx = ex[Yn];
                if (fx.rule_result) {
                    a.copyToHitData(Q.g.jf, fx.traffic_type);
                    XF(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && sj(a.m)) {
                var gx = nG(a) || {}
                  , ZI = (Hp(gx[Q.g.Bc], !!gx[Q.g.W]) ? xp(!0)._fplc : void 0) || (No("FPLC", void 0, void 0, Q.g.U).length > 0 ? void 0 : "0");
                a.o._fplc = ZI
            }
            if (W(a.m, Q.g.dd) !== void 0)
                a.copyToHitData(Q.g.dd);
            else {
                var hx = W(a.m, Q.g.cf), Zn, Uj;
                a: {
                    if (qG) {
                        var $n = nG(a) || {};
                        if ($n && $n[Q.g.W])
                            for (var ix = ij(V(a.o[Q.g.Da]), "host", !0), Vj = $n[Q.g.W], uh = 0; uh < Vj.length; uh++)
                                if (Vj[uh]instanceof RegExp) {
                                    if (Vj[uh].test(ix)) {
                                        Uj = !0;
                                        break a
                                    }
                                } else if (ix.indexOf(Vj[uh]) >= 0) {
                                    Uj = !0;
                                    break a
                                }
                    }
                    Uj = !1
                }
                if (!(Zn = Uj)) {
                    var Wj;
                    if (Wj = hx)
                        a: {
                            for (var jx = hx.include_conditions || [], $I = ij(V(a.o[Q.g.Da]), "host", !0), ao = 0; ao < jx.length; ao++)
                                if (jx[ao].test($I)) {
                                    Wj = !0;
                                    break a
                                }
                            Wj = !1
                        }
                    Zn = Wj
                }
                Zn && (a.o[Q.g.dd] = "1",
                XF(4))
            }
            tt(a) && gm() && wt(a, "rnd", sr());
            if (U(63) && tt(a)) {
                rr(a, Q.g.Vb, !1) && wt(a, "gse", 1);
                W(a.m, Q.g.kb, void 0, 4) === !1 && wt(a, "ngs", 1);
                Ol() && wt(a, "ga_rd", 1);
                wE() || wt(a, "ngst", 1);
                var kx = Sl();
                kx && wt(a, "etld", kx)
            }
            if (tt(a)) {
                var lx = zG ? Ql() : "";
                lx && wt(a, "gcsub", lx)
            }
            tt(a) && (wt(a, "gcd", vo(a.m)),
            gm() && W(a.m, Q.g.fa) && wt(a, "adr", 1));
            if (tt(a)) {
                var mx = Mr();
                mx && wt(a, "us_privacy", mx);
                var nx = io();
                nx && wt(a, "gdpr", nx);
                var ox = Wn();
                ox && wt(a, "gdpr_consent", ox)
            }
            tt(a) && (a.o[Q.g.Si] = Nl() || Ml());
            if (tt(a)) {
                var px = zi;
                px && wt(a, "tft", Number(px))
            }
            tt(a) && (a.metadata.speculative && wt(a, "sp", 1),
            a.metadata.is_syn && wt(a, "syn", 1),
            a.metadata.em_event && (wt(a, "em_event", 1),
            wt(a, "sp", 1)));
            U(88) && tt(a) && W(a.m, Q.g.Ca) !== !1 && ju("join-ad-interest-group") && qb(qc.joinAdInterestGroup) && wt(a, "flg", 1);
            if (tt(a) && a.eventName === Q.g.Mc && a.metadata.is_consent_update) {
                var qx = a.o[Q.g.Yf];
                qx && (wt(a, "gcut", qx),
                wt(a, "syn", 1))
            }
            if (!cu(G))
                P(87);
            else if (eu !== void 0) {
                P(85);
                var rx = au();
                rx ? W(a.m, Q.g.Zd) && !tt(a) || iu(rx, a) : P(86)
            }
            var bo = ju("attribution-reporting");
            bo || rH || (rH = !0,
            vl(''),
            bo = ju("attribution-reporting"));
            bo && (a.o[Q.g.Ub] = "1");
            if (W(a.m, Q.g.Ca) !== !1 && po(a.m)) {
                var aJ = st(a)
                  , bJ = W(a.m, Q.g.kb);
                aJ && bJ !== !1 && wE() && X(Q.g.R) && cm(Q.g.P) && em(["ads"]).ads && ju("join-ad-interest-group") && qb(qc.joinAdInterestGroup) && (a.o[Q.g.zg] = !0)
            }
            Wr(a);
            Vr(a);
            if (a.eventName == Q.g.Ta) {
                var tx = W(a.m, Q.g.qb)
                  , cJ = W(a.m, Q.g.Fb)
                  , ux = void 0;
                ux = a.o[tx];
                cJ(ux || W(a.m, tx));
                a.isAborted = !0
            }
            a.copyToHitData(Q.g.Ba);
            a.copyToHitData(Q.g.cb);
            ss(a);
            $G(a);
            tt(a) && (a.metadata.speculative = !1);
            var vx = W(a.m, Q.g.Hb);
            vx && XF(12);
            a.metadata.em_event && XF(14);
            var vh = Qj(Xj());
            (vx || jk(vh) || vh && vh.parent && vh.context && vh.context.source === 5) && XF(19);
            !this.Z && a.metadata.em_event && XF(18);
            var co = a.metadata.event_usage;
            if (Array.isArray(co))
                for (var eo = 0; eo < co.length; eo++)
                    XF(co[eo]);
            var wx = nb("GA4_EVENT");
            wx && (a.o._eu = wx);
            if (a.metadata.speculative || a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            var dJ = this.Sj, xx, eJ = this.j, fo;
            a: {
                var go = mG(a);
                if (go) {
                    if (kG(go, a)) {
                        fo = go;
                        break a
                    }
                    P(25);
                    a.isAborted = !0
                }
                fo = void 0
            }
            var fJ = fo;
            xx = {
                clientId: eG(a, eJ),
                Mf: fJ
            };
            dJ.call(this, xx);
            this.bc = !0;
            this.Mm(a);
            if (U(77) && X(Q.g.U)) {
                tt(a) && (a.metadata.is_sgtm_service_worker = !0);
                a: {}
            }
            if (tt(a)) {
                var hJ = a.metadata.is_conversion;
                if (a.eventName === "page_view" || hJ)
                    hH(this, a, Q.g.R),
                    hH(this, a, Q.g.P)
            }
            this.K.Kh();
            a.copyToHitData(Q.g.og);
            W(a.m, Q.g.Zd) && (a.o[Q.g.Zd] = !0,
            tt(a) || fH(a));
            if (a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            this.yj(a);
            a.m.onSuccess()
        } catch (EJ) {
            a.m.onFailure()
        }
        WF()
    }
    ;
    ca.yj = function(a) {
        this.ac.add(a)
    }
    ;
    ca.Sj = function(a) {
        var b = a.clientId
          , c = a.Mf;
        b && c && (this.j = b,
        this.H = c)
    }
    ;
    ca.flush = function() {
        this.ac.flush()
    }
    ;
    ca.Mm = function(a) {
        var b = this;
        if (!this.Pa) {
            var c = X(Q.g.P)
              , d = X(Q.g.U);
            sm([Q.g.P, Q.g.U], function() {
                var e = X(Q.g.P)
                  , f = X(Q.g.U)
                  , g = !1
                  , h = {}
                  , m = {};
                if (d !== f && b.D && b.H && b.j) {
                    var n = b.j;
                    if (f) {
                        var p = bG(b.D);
                        if (p) {
                            b.j = p;
                            var q = lG(b.D);
                            q && (b.H = hG(q, b.H, b.D))
                        } else
                            dG(b.j, b.D),
                            $F(b.j, !0);
                        kG(b.H, b.D);
                        g = !0;
                        h[Q.g.ng] = n
                    } else
                        b.H = void 0,
                        b.j = void 0,
                        G.gaGlobal = {}
                }
                e && !c && (g = !0,
                m.is_consent_update = !0,
                h[Q.g.Yf] = hi[Q.g.P]);
                if (g) {
                    var r = By(b.O, Q.g.Mc, h);
                    Dy(r, a.m.eventId, {
                        eventMetadata: m
                    })
                }
                d = f;
                c = e
            });
            this.Pa = !0
        }
    }
    ;
    ca.Jk = function(a) {
        a.eventName !== Q.g.Ta && this.K.Ik(a)
    }
    ;
    var oH = function(a) {
        function b(c, d) {
            Yh[c] || d === void 0 || (a.o[c] = d)
        }
        z(a.m.H, b);
        z(a.m.j, b)
    }
      , pH = function(a) {
        var b = $m(a.m)
          , c = function(d, e) {
            kH[d] && (a.o[d] = e)
        };
        Ya(b[Q.g.Rc]) ? z(b[Q.g.Rc], function(d, e) {
            c((Q.g.Rc + "_" + d).toLowerCase(), e)
        }) : z(b, c)
    }
      , qH = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.metadata.is_conversion = b(vt(a));
        a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(vt(a, "first_visit")));
        a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(vt(a, "session_start")))
    }
      , rH = !1;
    function nH(a) {
        z(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[Q.g.cb] || {};
        z(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }
    ;var tH = function(a) {
        if (!sH(a)) {
            var b = !1
              , c = function() {
                !b && sH(a) && (b = !0,
                Fc(H, "visibilitychange", c),
                U(4) && Fc(H, "prerenderingchange", c),
                P(55))
            };
            Ec(H, "visibilitychange", c);
            U(4) && Ec(H, "prerenderingchange", c);
            P(54)
        }
    }
      , sH = function(a) {
        if (U(4) && "prerendering"in H ? H.prerendering : H.visibilityState === "prerender")
            return !1;
        a();
        return !0
    };
    var vH = function(a, b) {
        tH(function() {
            var c = Am(a);
            if (c) {
                var d = uH(c, b);
                qn(a, d)
            }
        });
    };
    function uH(a, b) {
        var c = function() {};
        var d = new mH(a.id)
          , e = a.prefix === "MC";
        c = function(f, g, h, m) {
            e && (m.eventMetadata.is_merchant_center = !0);
            d.xm(g, h, m)
        }
        ;
        Gj || wH(a, d, b);
        return c
    }
    function wH(a, b, c) {
        var d = b.K
          , e = {}
          , f = {
            eventId: c,
            eventMetadata: (e.batch_on_navigation = !0,
            e)
        };
        U(42) && (f.deferrable = !0);
        d.Am(function() {
            SF = !0;
            rn.flush();
            d.Cf() >= 1E3 && qc.sendBeacon && sn(Q.g.Mc, {}, a.id, f);
            b.flush();
            d.Tj(function() {
                SF = !1;
                d.Tj()
            })
        });
    }
    ;var xH = uH;
    function zH(a, b, c) {
        var d = this;
    }
    zH.J = "internal.gtagConfig";
    function AH() {
        var a = {};
        return a
    }
    ;function CH(a, b) {}
    CH.T = "gtagSet";
    function DH(a, b) {}
    DH.T = "injectHiddenIframe";
    function EH(a, b, c, d, e) {}
    EH.J = "internal.injectHtml";
    var IH = {};
    function KH(a, b, c, d) {}
    var LH = {
        dl: 1,
        id: 1
    }
      , MH = {};
    function NH(a, b, c, d) {}
    KH.T = "injectScript";
    NH.J = "internal.injectScript";
    function OH(a) {
        var b = !0;
        return b
    }
    OH.T = "isConsentGranted";
    function PH() {
        return Pl()
    }
    PH.J = "internal.isDmaRegion";
    function QH(a) {
        var b = !1;
        return b
    }
    QH.J = "internal.isEntityInfrastructure";
    function RH() {
        var a = bh(function(b) {
            FA(this).log("error", b)
        });
        a.T = "JSON";
        return a
    }
    ;function SH(a) {
        var b = void 0;
        return ed(b)
    }
    SH.J = "internal.legacyParseUrl";
    function TH() {
        return !1
    }
    var UH = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    function VH() {}
    VH.T = "logToConsole";
    function WH(a, b) {}
    WH.J = "internal.mergeRemoteConfig";
    function XH(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return ed(d)
    }
    XH.J = "internal.parseCookieValuesFromString";
    function YH(a) {
        var b = void 0;
        if (typeof a !== "string")
            return;
        a && a.indexOf("//") === 0 && (a = H.location.protocol + a);
        if (typeof URL === "function") {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (w) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var h = f[g][0]
                      , m = f[g][1];
                    e.hasOwnProperty(h) ? typeof e[h] === "string" ? e[h] = [e[h], m] : e[h].push(m) : e[h] = m
                }
                c = ed({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = V(a)
        } catch (w) {
            return
        }
        if (!n.protocol || !n.host)
            return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var t = q[r].split("=")
                  , u = t[0]
                  , v = decodeURIComponent(t.splice(1).join("=")).replace(/\+/g, " ");
                p.hasOwnProperty(u) ? typeof p[u] === "string" ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = ed(n);
        return b
    }
    YH.T = "parseUrl";
    function ZH(a) {}
    ZH.J = "internal.processAsNewEvent";
    function $H(a, b, c) {
        var d;
        return d
    }
    $H.J = "internal.pushToDataLayer";
    function aI(a) {
        var b = !1;
        return b
    }
    aI.T = "queryPermission";
    function bI() {
        var a = "";
        return a
    }
    bI.T = "readCharacterSet";
    function cI() {
        return mi.Ya
    }
    cI.J = "internal.readDataLayerName";
    function dI() {
        var a = "";
        return a
    }
    dI.T = "readTitle";
    function eI(a, b) {
        var c = this;
        K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments),
        ts(a, function(d) {
            b.invoke(c.F, ed(d, c.F, 1))
        });
    }
    eI.J = "internal.registerCcdCallback";
    function fI(a) {
        return !0
    }
    fI.J = "internal.registerDestination";
    var gI = ["config", "event", "get", "set"];
    function hI(a, b, c) {}
    hI.J = "internal.registerGtagCommandListener";
    function iI(a, b) {
        var c = !1;
        return c
    }
    iI.J = "internal.removeDataLayerEventListener";
    function jI(a, b) {}
    jI.J = "internal.removeFormData";
    function kI() {}
    kI.T = "resetDataLayer";
    function lI(a, b, c, d) {
        K(this.getName(), ["destinationIds:!*", "eventName:!*", "eventParameters:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = c ? J(c) : {}
          , f = J(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? J(d) : {}
          , h = FA(this);
        g.originatingEntity = vB(h);
        var m = f;
        for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (typeof p === "string") {
                var q = {};
                k(e, q);
                var r = {};
                k(g, r);
                var t = By(p, b, q);
                Dy(t, g.eventId || h.eventId, r)
            }
        }
    }
    lI.J = "internal.sendGtagEvent";
    function mI(a, b, c) {}
    mI.T = "sendPixel";
    function nI(a, b) {}
    nI.J = "internal.setAnchorHref";
    function oI(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    oI.T = "setCookie";
    function pI(a) {}
    pI.J = "internal.setCorePlatformServices";
    function qI(a, b) {}
    qI.J = "internal.setDataLayerValue";
    function rI(a) {}
    rI.T = "setDefaultConsentState";
    function sI(a, b) {}
    sI.J = "internal.setDelegatedConsentType";
    function tI(a, b) {}
    tI.J = "internal.setFormAction";
    function uI(a, b, c) {}
    uI.J = "internal.setInCrossContainerData";
    function vI(a, b, c) {
        return !1
    }
    vI.T = "setInWindow";
    function wI(a, b, c) {
        K(this.getName(), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = pr(a) || {};
        d[b] = J(c, this.F);
        var e = a;
        nr || or();
        mr[e] = d;
    }
    wI.J = "internal.setProductSettingsParameter";
    function xI(a, b, c) {
        K(this.getName(), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = un(a), f = 0; f < d.length - 1; f++) {
            if (e[d[f]] === void 0)
                e[d[f]] = {};
            else if (!Ya(e[d[f]]))
                throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = J(c, this.F, 1);
    }
    xI.J = "internal.setRemoteConfigParameter";
    function yI(a, b, c, d) {
        var e = this;
    }
    yI.T = "sha256";
    function zI(a, b, c) {}
    zI.J = "internal.sortRemoteConfigParameters";
    function AI(a, b) {
        var c = void 0;
        return c
    }
    AI.J = "internal.subscribeToCrossContainerData";
    var BI = {}
      , CI = {};
    BI.getItem = function(a) {
        var b = null;
        N(this, "access_template_storage");
        var c = FA(this).wb();
        CI[c] && (b = CI[c].hasOwnProperty("gtm." + a) ? CI[c]["gtm." + a] : null);
        return b
    }
    ;
    BI.setItem = function(a, b) {
        N(this, "access_template_storage");
        var c = FA(this).wb();
        CI[c] = CI[c] || {};
        CI[c]["gtm." + a] = b;
    }
    ;
    BI.removeItem = function(a) {
        N(this, "access_template_storage");
        var b = FA(this).wb();
        if (!CI[b] || !CI[b].hasOwnProperty("gtm." + a))
            return;
        delete CI[b]["gtm." + a];
    }
    ;
    BI.clear = function() {
        N(this, "access_template_storage"),
        delete CI[FA(this).wb()];
    }
    ;
    BI.T = "templateStorage";
    function DI(a, b) {
        var c = !1;
        return c
    }
    DI.J = "internal.testRegex";
    function EI(a) {
        var b;
        return b
    }
    ;function FI(a) {
        var b;
        return b
    }
    FI.J = "internal.unsiloId";
    function GI(a, b) {
        var c;
        return c
    }
    GI.J = "internal.unsubscribeFromCrossContainerData";
    function HI(a) {}
    HI.T = "updateConsentState";
    var II;
    function JI(a, b, c) {
        II = II || new mh;
        II.add(a, b, c)
    }
    function KI(a, b) {
        var c = II = II || new mh;
        if (c.D.hasOwnProperty(a))
            throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.j.hasOwnProperty(a))
            throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.D[a] = qb(b) ? Ig(a, b) : Jg(a, b)
    }
    function LI() {
        return function(a) {
            var b;
            var c = II;
            if (c.j.hasOwnProperty(a))
                b = c.get(a, this);
            else {
                var d;
                if (d = c.D.hasOwnProperty(a)) {
                    var e = !1
                      , f = this.F.j;
                    if (f) {
                        var g = f.wb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else
                        e = !0;
                    d = e
                }
                if (d) {
                    var h = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
                    b = h
                } else
                    throw Error(a + " is not a valid API name.");
            }
            return b
        }
    }
    ;var MI = function() {
        var a = function(c) {
            return KI(c.J, c)
        }
          , b = function(c) {
            return JI(c.T, c)
        };
        b(zA);
        b(GA);
        b(UB);
        b(WB);
        b(XB);
        b(bC);
        b(dC);
        b(gC);
        b(iC);
        b(vF);
        b(wF);
        b(LF);
        b(MF);
        b(NF);
        b(QF);
        b(CH);
        b(DH);
        b(KH);
        b(OH);
        b(VH);
        b(YH);
        b(aI);
        b(bI);
        b(dI);
        b(mI);
        b(oI);
        b(rI);
        b(vI);
        b(yI);
        b(BI);
        b(HI);
        b(RH());
        JI("Math", Og());
        JI("Object", kh);
        JI("TestHelper", oh());
        JI("assertApi", Kg);
        JI("assertThat", Lg);
        JI("decodeUri", Pg);
        JI("decodeUriComponent", Qg);
        JI("encodeUri", Rg);
        JI("encodeUriComponent", Sg);
        JI("fail", Yg);
        JI("generateRandom", Zg);
        JI("getTimestamp", $g);
        JI("getTimestampMillis", $g);
        JI("getType", ah);
        JI("makeInteger", ch);
        JI("makeNumber", dh);
        JI("makeString", eh);
        JI("makeTableMap", fh);
        JI("mock", ih);
        JI("fromBase64", tF, !("atob"in G));
        JI("localStorage", UH, !TH());
        JI("toBase64", EI, !("btoa"in G));
        a(CA);
        a(XA);
        a(iB);
        a(pB);
        a(uB);
        a(JB);
        a(SB);
        a(VB);
        a(YB);
        a(ZB);
        a($B);
        a(aC);
        a(cC);
        a(eC);
        a(fC);
        a(hC);
        a(jC);
        a(lC);
        a(mC);
        a(nC);
        a(oC);
        a(sC);
        a(AC);
        a(BC);
        a(MC);
        a(RC);
        a(WC);
        a(eD);
        a(jD);
        a(wD);
        a(yD);
        a(MD);
        a(Tg);
        a(OD);
        a(rF);
        a(sF);
        a(xF);
        a(yF);
        a(zF);
        a(AF);
        a(BF);
        a(CF);
        a(DF);
        a(EF);
        a(FF);
        a(GF);
        a(IF);
        a(JF);
        a(KF);
        a(OF);
        a(PF);
        a(zH);
        a(EH);
        a(NH);
        a(PH);
        a(QH);
        a(SH);
        a(HB);
        a(WH);
        a(XH);
        a(ZH);
        a($H);
        a(cI);
        a(eI);
        a(fI);
        a(hI);
        a(iI);
        a(jI);
        a(lI);
        a(nI);
        a(pI);
        a(qI);
        a(sI);
        a(tI);
        a(uI);
        a(wI);
        a(xI);
        a(zI);
        a(AI);
        a(DI);
        a(FI);
        a(GI);
        KI("internal.CrossContainerSchema", kC());
        KI("internal.GtagSchema", AH());
        JI("mockObject", jh);
        return LI()
    };
    var xA;
    function NI() {
        xA.j.j.K = function(a, b, c) {
            ni.SANDBOXED_JS_SEMAPHORE = ni.SANDBOXED_JS_SEMAPHORE || 0;
            ni.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ni.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function OI(a) {
        a && z(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Ci[e] = Ci[e] || [];
                Ci[e].push(b)
            }
        })
    }
    ;var PI = encodeURI
      , Y = encodeURIComponent
      , QI = Array.isArray
      , RI = function(a, b, c) {
        Dc(a, b, c)
    }
      , SI = function(a, b) {
        if (!a)
            return !1;
        var c = ij(V(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) != "." && (f--,
                e = "." + e);
                if (f >= 0 && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , YI = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var qJ = G.clearTimeout
      , rJ = G.setTimeout
      , sJ = function(a, b, c) {
        if (Bo()) {
            b && I(b)
        } else
            return Ac(a, b, c)
    }
      , tJ = function() {
        return G.location.href
    }
      , uJ = function(a, b) {
        return Mi(a, b || 2)
    }
      , vJ = function(a, b, c) {
        return b ? mz(a, b, c) : lz(a)
    }
      , wJ = function(a, b) {
        G[a] = b
    }
      , xJ = function(a, b, c) {
        b && (G[a] === void 0 || c && !G[a]) && (G[a] = b);
        return G[a]
    }
      , yJ = function(a, b) {
        if (Bo()) {
            b && I(b)
        } else
            Cc(a, b)
    }
      , zJ = function(a) {
        return !!IA(a, "init", !1)
    }
      , AJ = function(a) {
        JA(a, "init", !0)
    };

    var BJ = {};
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.access_template_storage = ["google"],
    Z.__access_template_storage = function() {
        return {
            assert: function() {},
            N: function() {
                return {}
            }
        }
    }
    ,
    Z.__access_template_storage.C = "access_template_storage",
    Z.__access_template_storage.isVendorTemplate = !0,
    Z.__access_template_storage.priorityOverride = 0,
    Z.__access_template_storage.isInfrastructure = !1,
    Z.__access_template_storage.runInSiloedMode = !1;
    Z.securityGroups.v = ["google"],
    Z.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace)
            return !1;
        var c = uJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }
    ,
    Z.__v.C = "v",
    Z.__v.isVendorTemplate = !0,
    Z.__v.priorityOverride = 0,
    Z.__v.isInfrastructure = !0,
    Z.__v.runInSiloedMode = !1;

    Z.securityGroups.read_event_data = ["google"],
    function() {
        function a(b, c) {
            return {
                key: c
            }
        }
        (function(b) {
            Z.__read_event_data = b;
            Z.__read_event_data.C = "read_event_data";
            Z.__read_event_data.isVendorTemplate = !0;
            Z.__read_event_data.priorityOverride = 0;
            Z.__read_event_data.isInfrastructure = !1;
            Z.__read_event_data.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_eventDataAccess
              , d = b.vtp_keyPatterns || []
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g) {
                    if (g != null && !l(g))
                        throw e(f, {
                            key: g
                        }, "Key must be a string.");
                    if (c !== "any") {
                        try {
                            if (c === "specific" && g != null && mg(g, d))
                                return
                        } catch (h) {
                            throw e(f, {
                                key: g
                            }, "Invalid key filter.");
                        }
                        throw e(f, {
                            key: g
                        }, "Prohibited read from event data.");
                    }
                },
                N: a
            }
        })
    }();

    Z.securityGroups.process_dom_events = ["google"],
    function() {
        function a(b, c, d) {
            return {
                targetType: c,
                eventName: d
            }
        }
        (function(b) {
            Z.__process_dom_events = b;
            Z.__process_dom_events.C = "process_dom_events";
            Z.__process_dom_events.isVendorTemplate = !0;
            Z.__process_dom_events.priorityOverride = 0;
            Z.__process_dom_events.isInfrastructure = !1;
            Z.__process_dom_events.runInSiloedMode = !1
        }
        )(function(b) {
            for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                e[g.targetType] = e[g.targetType] || [];
                e[g.targetType].push(g.eventName)
            }
            return {
                assert: function(h, m, n) {
                    if (!e[m])
                        throw d(h, {}, "Prohibited event target " + m + ".");
                    if (e[m].indexOf(n) === -1)
                        throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                },
                N: a
            }
        })
    }();
    Z.securityGroups.detect_youtube_activity_events = ["google"],
    function() {
        function a(b, c) {
            return {
                options: {
                    fixMissingApi: !!c.fixMissingApi
                }
            }
        }
        (function(b) {
            Z.__detect_youtube_activity_events = b;
            Z.__detect_youtube_activity_events.C = "detect_youtube_activity_events";
            Z.__detect_youtube_activity_events.isVendorTemplate = !0;
            Z.__detect_youtube_activity_events.priorityOverride = 0;
            Z.__detect_youtube_activity_events.isInfrastructure = !1;
            Z.__detect_youtube_activity_events.runInSiloedMode = !1
        }
        )(function(b) {
            var c = !!b.vtp_allowFixMissingJavaScriptApi
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!c && f && f.fixMissingApi)
                        throw d(e, {}, "Prohibited option: fixMissingApi.");
                },
                N: a
            }
        })
    }();

    Z.securityGroups.detect_history_change_events = ["google"],
    function() {
        function a() {
            return {}
        }
        (function(b) {
            Z.__detect_history_change_events = b;
            Z.__detect_history_change_events.C = "detect_history_change_events";
            Z.__detect_history_change_events.isVendorTemplate = !0;
            Z.__detect_history_change_events.priorityOverride = 0;
            Z.__detect_history_change_events.isInfrastructure = !1;
            Z.__detect_history_change_events.runInSiloedMode = !1
        }
        )(function() {
            return {
                assert: function() {},
                N: a
            }
        })
    }();

    Z.securityGroups.detect_link_click_events = ["google"],
    function() {
        function a(b, c) {
            return {
                options: c
            }
        }
        (function(b) {
            Z.__detect_link_click_events = b;
            Z.__detect_link_click_events.C = "detect_link_click_events";
            Z.__detect_link_click_events.isVendorTemplate = !0;
            Z.__detect_link_click_events.priorityOverride = 0;
            Z.__detect_link_click_events.isInfrastructure = !1;
            Z.__detect_link_click_events.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_allowWaitForTags
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!c && f && f.waitForTags)
                        throw d(e, {}, "Prohibited option waitForTags.");
                },
                N: a
            }
        })
    }();
    Z.securityGroups.detect_form_submit_events = ["google"],
    function() {
        function a(b, c) {
            return {
                options: c
            }
        }
        (function(b) {
            Z.__detect_form_submit_events = b;
            Z.__detect_form_submit_events.C = "detect_form_submit_events";
            Z.__detect_form_submit_events.isVendorTemplate = !0;
            Z.__detect_form_submit_events.priorityOverride = 0;
            Z.__detect_form_submit_events.isInfrastructure = !1;
            Z.__detect_form_submit_events.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_allowWaitForTags
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!c && f && f.waitForTags)
                        throw d(e, {}, "Prohibited option waitForTags.");
                },
                N: a
            }
        })
    }();
    Z.securityGroups.read_container_data = ["google"],
    Z.__read_container_data = function() {
        return {
            assert: function() {},
            N: function() {
                return {}
            }
        }
    }
    ,
    Z.__read_container_data.C = "read_container_data",
    Z.__read_container_data.isVendorTemplate = !0,
    Z.__read_container_data.priorityOverride = 0,
    Z.__read_container_data.isInfrastructure = !1,
    Z.__read_container_data.runInSiloedMode = !1;

    Z.securityGroups.listen_data_layer = ["google"],
    function() {
        function a(b, c) {
            return {
                eventName: c
            }
        }
        (function(b) {
            Z.__listen_data_layer = b;
            Z.__listen_data_layer.C = "listen_data_layer";
            Z.__listen_data_layer.isVendorTemplate = !0;
            Z.__listen_data_layer.priorityOverride = 0;
            Z.__listen_data_layer.isInfrastructure = !1;
            Z.__listen_data_layer.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_accessType
              , d = b.vtp_allowedEvents || []
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g) {
                    if (!l(g))
                        throw e(f, {
                            eventName: g
                        }, "Event name must be a string.");
                    if (!(c === "any" || c === "specific" && d.indexOf(g) >= 0))
                        throw e(f, {
                            eventName: g
                        }, "Prohibited listen on data layer event.");
                },
                N: a
            }
        })
    }();
    Z.securityGroups.detect_user_provided_data = ["google"],
    function() {
        function a(b, c) {
            return {
                dataSource: c
            }
        }
        (function(b) {
            Z.__detect_user_provided_data = b;
            Z.__detect_user_provided_data.C = "detect_user_provided_data";
            Z.__detect_user_provided_data.isVendorTemplate = !0;
            Z.__detect_user_provided_data.priorityOverride = 0;
            Z.__detect_user_provided_data.isInfrastructure = !1;
            Z.__detect_user_provided_data.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_createPermissionError;
            return {
                assert: function(d, e) {
                    if (e !== "auto" && e !== "manual" && e !== "code")
                        throw c(d, {}, "Unknown user provided data source.");
                    if (b.vtp_limitDataSources)
                        if (e !== "auto" || b.vtp_allowAutoDataSources) {
                            if (e === "manual" && !b.vtp_allowManualDataSources)
                                throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                            if (e === "code" && !b.vtp_allowCodeDataSources)
                                throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                        } else
                            throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                },
                N: a
            }
        })
    }();

    Z.securityGroups.get_url = ["google"],
    function() {
        function a(b, c, d) {
            return {
                component: c,
                queryKey: d
            }
        }
        (function(b) {
            Z.__get_url = b;
            Z.__get_url.C = "get_url";
            Z.__get_url.isVendorTemplate = !0;
            Z.__get_url.priorityOverride = 0;
            Z.__get_url.isInfrastructure = !1;
            Z.__get_url.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_urlParts === "any" ? null : [];
            c && (b.vtp_protocol && c.push("protocol"),
            b.vtp_host && c.push("host"),
            b.vtp_port && c.push("port"),
            b.vtp_path && c.push("path"),
            b.vtp_extension && c.push("extension"),
            b.vtp_query && c.push("query"),
            b.vtp_fragment && c.push("fragment"));
            var d = c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g, h) {
                    if (g) {
                        if (!l(g))
                            throw e(f, {}, "URL component must be a string.");
                        if (c && c.indexOf(g) < 0)
                            throw e(f, {}, "Prohibited URL component: " + g);
                        if (g === "query" && d) {
                            if (!h)
                                throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                            if (!l(h))
                                throw e(f, {}, "Query key must be a string.");
                            if (d.indexOf(h) < 0)
                                throw e(f, {}, "Prohibited query key: " + h);
                        }
                    } else if (c)
                        throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                },
                N: a
            }
        })
    }();

    Z.securityGroups.gct = ["google"],
    function() {
        function a(b) {
            for (var c = [], d = 0; d < b.length; d++)
                try {
                    c.push(new RegExp(b[d]))
                } catch (e) {}
            return c
        }
        (function(b) {
            Z.__gct = b;
            Z.__gct.C = "gct";
            Z.__gct.isVendorTemplate = !0;
            Z.__gct.priorityOverride = 0;
            Z.__gct.isInfrastructure = !1;
            Z.__gct.runInSiloedMode = !0
        }
        )(function(b) {
            var c = {}
              , d = b.vtp_sessionDuration;
            d > 0 && (c[Q.g.kd] = d);
            c[Q.g.Sd] = b.vtp_eventSettings;
            c[Q.g.cg] = b.vtp_dynamicEventSettings;
            c[Q.g.Vb] = b.vtp_googleSignals === 1;
            c[Q.g.pg] = b.vtp_foreignTld;
            c[Q.g.mg] = b.vtp_restrictDomain === 1;
            c[Q.g.bf] = b.vtp_internalTrafficResults;
            var e = Q.g.sa
              , f = b.vtp_linker;
            f && f[Q.g.W] && (f[Q.g.W] = a(f[Q.g.W]));
            c[e] = f;
            var g = Q.g.cf
              , h = b.vtp_referralExclusionDefinition;
            h && h.include_conditions && (h.include_conditions = a(h.include_conditions));
            c[g] = h;
            var m = Zj(b.vtp_trackingId);
            wn(m, c);
            vH(m, b.vtp_gtmEventId);
            I(b.vtp_gtmOnSuccess)
        })
    }();

    Z.securityGroups.get = ["google"],
    Z.__get = function(a) {
        var b = a.vtp_settings
          , c = b.eventParameters || {}
          , d = String(a.vtp_eventName)
          , e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = By(String(b.streamId), d, c);
        Dy(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
    }
    ,
    Z.__get.C = "get",
    Z.__get.isVendorTemplate = !0,
    Z.__get.priorityOverride = 0,
    Z.__get.isInfrastructure = !1,
    Z.__get.runInSiloedMode = !1;
    Z.securityGroups.detect_scroll_events = ["google"],
    function() {
        function a() {
            return {}
        }
        (function(b) {
            Z.__detect_scroll_events = b;
            Z.__detect_scroll_events.C = "detect_scroll_events";
            Z.__detect_scroll_events.isVendorTemplate = !0;
            Z.__detect_scroll_events.priorityOverride = 0;
            Z.__detect_scroll_events.isInfrastructure = !1;
            Z.__detect_scroll_events.runInSiloedMode = !1
        }
        )(function() {
            return {
                assert: function() {},
                N: a
            }
        })
    }();

    Z.securityGroups.detect_form_interaction_events = ["google"],
    function() {
        function a() {
            return {}
        }
        (function(b) {
            Z.__detect_form_interaction_events = b;
            Z.__detect_form_interaction_events.C = "detect_form_interaction_events";
            Z.__detect_form_interaction_events.isVendorTemplate = !0;
            Z.__detect_form_interaction_events.priorityOverride = 0;
            Z.__detect_form_interaction_events.isInfrastructure = !1;
            Z.__detect_form_interaction_events.runInSiloedMode = !1
        }
        )(function() {
            return {
                assert: function() {},
                N: a
            }
        })
    }();

    var CJ = {};
    CJ.dataLayer = Ni;
    CJ.callback = function(a) {
        Bi.hasOwnProperty(a) && qb(Bi[a]) && Bi[a]();
        delete Bi[a]
    }
    ;
    CJ.bootstrap = 0;
    CJ._spx = !1;
    function DJ() {
        ni[Mj()] = ni[Mj()] || CJ;
        dk();
        hk() || z(ik(), function(d, e) {
            Lw(d, e.transportUrl, e.context);
            P(92)
        });
        Gb(Ci, Z.securityGroups);
        var a = Qj(Xj()), b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || P(142);
        qf = Hf
    }
    (function(a) {
        function b() {
            n = H.documentElement.getAttribute("data-tag-assistant-present");
            wz(n) && (m = h.Wi)
        }
        function c() {
            m && tc ? g(m) : a()
        }
        if (!G["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (H.referrer) {
                var e = V(H.referrer);
                d = hj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = No("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (G["__TAGGY_INSTALLED"] = !0,
            Ac("https://cct.google/taggy/agent.js"))
        }
        var g = function(u) {
            var v = "GTM"
              , w = "GTM";
            si && (v = "OGT",
            w = "GTAG");
            var x = G["google.tagmanager.debugui2.queue"];
            x || (x = [],
            G["google.tagmanager.debugui2.queue"] = x,
            Ac("https://" + mi.Ed + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Do()));
            var y = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: tc,
                    containerProduct: v,
                    debug: !1,
                    id: Nf.ctid,
                    targetRef: {
                        ctid: Nf.ctid,
                        isDestination: Fj.fe
                    },
                    aliases: Ij(),
                    destinations: Lj()
                }
            };
            y.data.resume = function() {
                a()
            }
            ;
            mi.mk && (y.data.initialPublish = !0);
            x.push(y)
        }
          , h = {
            Gk: 1,
            Yi: 2,
            nj: 3,
            bi: 4,
            Wi: 5
        };
        h[h.Gk] = "GTM_DEBUG_LEGACY_PARAM";
        h[h.Yi] = "GTM_DEBUG_PARAM";
        h[h.nj] = "REFERRER";
        h[h.bi] = "COOKIE";
        h[h.Wi] = "EXTENSION_PARAM";
        var m = void 0
          , n = void 0
          , p = ij(G.location, "query", !1, void 0, "gtm_debug");
        wz(p) && (m = h.Yi);
        if (!m && H.referrer) {
            var q = V(H.referrer);
            hj(q, "host") === "tagassistant.google.com" && (m = h.nj)
        }
        if (!m) {
            var r = No("__TAG_ASSISTANT");
            r.length && r[0].length && (m = h.bi)
        }
        m || b();
        if (!m && xz(n)) {
            var t = !1;
            Ec(H, "TADebugSignal", function() {
                t || (t = !0,
                b(),
                c())
            }, !1);
            G.setTimeout(function() {
                t || (t = !0,
                b(),
                c())
            }, 200)
        } else
            c()
    }
    )(function() {
        try {
            bk();
            if (U(66)) {}
            Zl().D();
            ho();
            xm();
            var a = Oj();
            if (Dj().canonical[a]) {
                var b = ni.zones;
                b && b.unregisterChild(Hj());
                xw().removeExternalRestrictions(Oj());
            } else {
                fu();
                a: {}
                Fi.j = "0";
                Fi.D = Fi.H;
                Fi.K = "";
                Fi.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Fi.O = "ad_storage|analytics_storage|ad_user_data";
                Fi.Pa = "";
                Iw();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                    ff.push(d[e]);
                for (var f = c.tags || [], g = 0; g < f.length; g++)
                    jf.push(f[g]);
                for (var h = c.predicates || [], m = 0; m < h.length; m++)
                    hf.push(h[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var u = q[t][0];
                        r[u] = Array.prototype.slice.call(q[t], 1);
                        u !== "if" && u !== "unless" || pf(r[u])
                    }
                    gf.push(r)
                }
                lf = Z;
                mf = nA;
                Jf = new Qf;
                var v = data.sandboxed_scripts
                  , w = data.security_groups;
                a: {
                    var x = data.runtime || []
                      , y = data.runtime_lines;
                    xA = new Ae;
                    NI();
                    ef = wA();
                    var B = xA
                      , A = MI()
                      , D = new Xc("require",A);
                    D.Mb();
                    B.j.j.set("require", D);
                    for (var E = [], C = 0; C < x.length; C++) {
                        var F = x[C];
                        if (!Array.isArray(F) || F.length < 3) {
                            if (F.length === 0)
                                continue;
                            break a
                        }
                        y && y[C] && y[C].length && Af(F, y[C]);
                        try {
                            xA.execute(F),
                            U(74) && Aj && F[0] === 50 && E.push(F[1])
                        } catch (Ba) {}
                    }
                    U(74) && (rf = E)
                }
                if (v && v.length)
                    for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
                        var O = v[L].replace(/^_*/, "");
                        Ci[O] = M
                    }
                OI(w);
                DJ();
                if (!wi)
                    for (var T = Pl() ? Hi(Fi.O) : Hi(Fi.Z), ba = 0; ba < lm.length; ba++) {
                        var aa = lm[ba]
                          , R = aa
                          , pa = T[aa] ? "granted" : "denied";
                        Ul().implicit(R, pa)
                    }
                vz();
                Mw = !1;
                Nw = 0;
                if (H.readyState === "interactive" && !H.createEventObject || H.readyState === "complete")
                    Pw();
                else {
                    Ec(H, "DOMContentLoaded", Pw);
                    Ec(H, "readystatechange", Pw);
                    if (H.createEventObject && H.documentElement.doScroll) {
                        var ma = !0;
                        try {
                            ma = !G.frameElement
                        } catch (Ba) {}
                        ma && Qw()
                    }
                    Ec(G, "load", Pw)
                }
                az = !1;
                H.readyState === "complete" ? cz() : Ec(G, "load", cz);
                Aj && (nk(Dk),
                G.setInterval(Ck, 864E5),
                nk(qA),
                nk(Rx),
                nk(kv),
                nk(pn),
                nk(by),
                nk(Tt),
                U(74) && (nk(Wx),
                nk(Xx),
                nk(Yx)),
                U(62) && (nk(rA),
                nk(tA)));
                if (Bj) {
                    Rk();
                    Vm();
                    Fl();
                    Jz();
                    U(43) || mk.push(Jl);
                    xy();
                    if (U(43)) {
                        var ha = Bz();
                        ha && Jk("pcid", ha)
                    } else
                        mk.push(Cz);
                    U(28) && (U(43) ? Jk("bt", String(Fi.H ? 2 : ui ? 1 : 0)) : mk.push(zz))
                }
                dA();
                Kl(1);
                FB();
                Ai = Db();
                CJ.bootstrap = Ai;
                if (U(66)) {}
            }
        } catch (Ba) {
            if (Kl(4),
            Aj) {
                var Ia = vk(!1, !0, !0);
                Dc(Ia)
            }
        }
    });

}
)()
