(function(window, document, define, undefined) {
	'use strict';

var riTemplate = {};

riTemplate["ridisplay.html"] = "<style>\n" +
    "\n" +
    "        div.riform h1 {\n" +
    "            color: #888888;\n" +
    "            border-bottom: 1px solid #DDDDDD;\n" +
    "            font-size: 20px;\n" +
    "            line-height: 1;\n" +
    "            margin: 0;\n" +
    "            padding-bottom: 5px;\n" +
    "            padding-left: 5px;\n" +
    "        }\n" +
    "\n" +
    "        div.riform form {\n" +
    "            margin-bottom: 0;\n" +
    "        }\n" +
    "\n" +
    "        div.riform .rifield {\n" +
    "            clear: both;\n" +
    "        }\n" +
    "\n" +
    "            div.riform .rifield .field {\n" +
    "                float: left;\n" +
    "                clear: none;\n" +
    "            }\n" +
    "\n" +
    "        div.riform .rilabel {\n" +
    "            display: block;\n" +
    "            float: left;\n" +
    "            font-weight: bold;\n" +
    "            margin-right: 10px;\n" +
    "            text-align: right;\n" +
    "            width: 130px;\n" +
    "        }\n" +
    "\n" +
    "        div.riform .rirtemplate {\n" +
    "            margin-top: 6px;\n" +
    "        }\n" +
    "\n" +
    "    div.riformfields {\n" +
    "        min-height: 11em;\n" +
    "        min-width: 25em;\n" +
    "    }\n" +
    "\n" +
    "    div.riform .rirangeoptions input,\n" +
    "    div.riform .rimonthlyoptions input,\n" +
    "    div.riform .riyearlyoptions input {\n" +
    "        margin: 0;\n" +
    "    }\n" +
    "\n" +
    "    div.riform .riweeklyweekdays .riweeklyweekday input {\n" +
    "        display: block;\n" +
    "        margin: 8px auto 0;\n" +
    "    }\n" +
    "\n" +
    "    div.riform .riweeklyweekdays .riweeklyweekday label {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    div.riform .riweeklyweekdays .riweeklyweekday {\n" +
    "        margin-right: 15px;\n" +
    "        float: left;\n" +
    "    }\n" +
    "\n" +
    "    div.riform input.ricancelbutton {\n" +
    "        background-image: url(pb_close.png);\n" +
    "        background-color: transparent;\n" +
    "        font-size: 0; /* For IE8 */\n" +
    "        color: transparent;\n" +
    "        border: none;\n" +
    "        position: absolute;\n" +
    "        left: -14px;\n" +
    "        top: -14px;\n" +
    "        cursor: pointer;\n" +
    "        height: 30px;\n" +
    "        width: 30px;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrencesactions .riaddoccurrence #adddate {\n" +
    "        width: 75%;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrencesactions .rioccurancesheader {\n" +
    "        border-bottom: 1px solid #DDDDDD;\n" +
    "        line-height: 1.5;\n" +
    "        clear: both;\n" +
    "        margin-top: 30px;\n" +
    "    }\n" +
    "\n" +
    "        div.rioccurrencesactions .rioccurancesheader h2 {\n" +
    "            color: #888888;\n" +
    "            display: inline;\n" +
    "            font-size: 18px;\n" +
    "            font-weight: bold;\n" +
    "            margin: 0px 0px 5px 5px;\n" +
    "        }\n" +
    "\n" +
    "\n" +
    "    div.rioccurrences div.batching {\n" +
    "        font-size: 70%;\n" +
    "        text-align: center;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences span.current {\n" +
    "        font-weight: bold;\n" +
    "    }\n" +
    "\n" +
    "    div.riform span.action a {\n" +
    "        height: 19px;\n" +
    "        width: 19px;\n" +
    "        overflow: hidden;\n" +
    "        float: right;\n" +
    "        text-indent: 9999px;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences .occurrence {\n" +
    "        border-top: 1px solid transparent;\n" +
    "        border-bottom: 1px solid transparent;\n" +
    "    }\n" +
    "\n" +
    "        div.rioccurrences .occurrence:hover {\n" +
    "            border-top: 1px solid #DDDDDD;\n" +
    "            border-bottom: 1px solid #DDDDDD;\n" +
    "        }\n" +
    "\n" +
    "        div.rioccurrences .occurrence.start span.rlabel,\n" +
    "        div.rioccurrences .occurrence.rdate span.rlabel {\n" +
    "            color: #9CBA9B;\n" +
    "            margin: 0 5px;\n" +
    "            font-size: 70%;\n" +
    "            font-weight: bold;\n" +
    "        }\n" +
    "\n" +
    "        div.rioccurrences .occurrence.exdate {\n" +
    "            opacity: 0.4;\n" +
    "            filter: alpha(opacity=40);\n" +
    "        }\n" +
    "\n" +
    "    div.ridisplay .occurrence.exdate {\n" +
    "        display: none;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences .occurrence.rdate {\n" +
    "        background: #FFFFE0;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences div.occurrence {\n" +
    "        margin-left: 5px;\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences a.rrule,\n" +
    "    div.rioccurrences a.rdate,\n" +
    "    div.rioccurrences a.exdate {\n" +
    "        color: transparent;\n" +
    "        margin-top: 6px;\n" +
    "        margin-right: 5px;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    div.rioccurrences a.rrule {\n" +
    "        background-image: url(delete.png);\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences a.rdate {\n" +
    "        background-image: url(delete.png);\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrences a.exdate {\n" +
    "        background-image: url(undelete.png);\n" +
    "    }\n" +
    "\n" +
    "    div.rioccurrencesactions a.rirefreshbutton {\n" +
    "        background-image: url(refresh.png);\n" +
    "        color: transparent;\n" +
    "        margin-top: 4px;\n" +
    "        margin-right: 5px;\n" +
    "    }\n" +
    "\n" +
    "    div.messagearea,\n" +
    "    div.errorarea {\n" +
    "        background-color: red;\n" +
    "        color: white;\n" +
    "        font-weight: bold;\n" +
    "        padding: 2px 10px;\n" +
    "    }\n" +
    "\n" +
    "    div.ributtons .risavebutton {\n" +
    "        display: block;\n" +
    "        margin: 30px auto 0;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"ridisplay\">\n" +
    "    <div class=\"rimain\">\n" +
    "        <input type=\"checkbox\" id=\"{{name}}enable\" name=\"richeckbox\" ng-show=\"!conf.readOnly\" ng-change=\"enableChanged()\" ng-model=\"ri.enabled\" />\n" +
    "        <label class=\"ridisplay\" for=\"{{name}}enable\" ng-show=\"!ri.enabled\">{{i18n.displayUnactivate}}</label>\n" +
    "		<label class=\"ridisplay\" ng-show=\"ri.enabled\">{{ri.display}}</label>\n" +
    "        <a ng-show=\"!conf.readOnly && ri.enabled\" ng-click=\"ri.showForm()\">{{i18n.edit_rules}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"rioccurrences\" style=\"display:none\" />\n" +
    "</div>";

riTemplate["riform.html"] = "<div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\" data-ng-show=\"message\">\n" +
    "            <h4 data-ng-bind=\"message\"></h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\">\n" +
    "            <div class=\"riform\">\n" +
    "                <form ng-submit=\"ri.save()\">\n" +
    "                    <h1>{{i18n.title}}</h1>\n" +
    "                    <div class=\"messagearea\" ng-show=\"ri.messageAreaText\" ng-bind=\"ri.messageAreaText\">\n" +
    "                    </div>\n" +
    "                    <div class=\"rirtemplate\">\n" +
    "                        <label for=\"{{name}}rtemplate\" class=\"rilabel\">\n" +
    "                            {{i18n.recurrenceType}}\n" +
    "                        </label>\n" +
    "                        <select ng-model=\"ri.rtemplate\" name=\"rirtemplate\" class=\"rifield\" ng-options=\"v as i18n.rtemplate[k] for (k,v) in conf.rtemplate\"></select>\n" +
    "                        <div>\n" +
    "                            <div class=\"riformfields\">\n" +
    "                                <div ng-show=\"ri.showridailyinterval()\" class=\"rifield\">\n" +
    "                                    <label for=\"{{name}}dailyinterval\" class=\"rilabel\">\n" +
    "                                        {{i18n.dailyInterval1}}\n" +
    "                                    </label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <input type=\"text\" size=\"2\"\n" +
    "                                               value=\"1\"\n" +
    "                                               ng-model=\"ri.dailyinterval\"\n" +
    "                                               id=\"{{name}}dailyinterval\" />\n" +
    "                                        {{i18n.dailyInterval2}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showriweeklyinterval()\" class=\"rifield\">\n" +
    "                                    <label for=\"{{name}}weeklyinterval\" class=\"rilabel\">\n" +
    "                                        {{i18n.weeklyInterval1}}\n" +
    "                                    </label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <input type=\"text\" size=\"2\"\n" +
    "                                               value=\"1\"\n" +
    "                                               ng-model=\"ri.weeklyinterval\"\n" +
    "                                               id=\"{{name}}weeklyinterval\" />\n" +
    "                                        {{i18n.weeklyInterval2}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showriweeklyweekdays()\" class=\"rifield riweeklyweekdays\">\n" +
    "                                    <label class=\"rilabel\" for=\"{{name}}weeklyinterval\">{{i18n.weeklyWeekdays}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <div class=\"riweeklyweekday\" ng-repeat=\"weekday in conf.orderedWeekdays\">\n" +
    "                                            <input type=\"checkbox\"\n" +
    "                                                   name=\"riweeklyweekdays{{weekdays[weekday]}}\"\n" +
    "                                                   id=\"{{name}}weeklyWeekdays{{weekdays[weekday]}}\"\n" +
    "                                                   ng-model=\"ri.weeklyweekdays[weekday]\" />\n" +
    "                                            <label for=\"{{name}}weeklyWeekdays{{weekdays[weekday]}}\">{{i18n.shortWeekdays[weekday]}}</label>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showrimonthlyinterval()\" class=\"rifield\">\n" +
    "                                    <label for=\"rimonthlyinterval\" class=\"rilabel\">{{i18n.monthlyInterval1}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <input type=\"text\" size=\"2\"\n" +
    "                                               value=\"1\"\n" +
    "                                               ng-model=\"ri.monthlyinterval\" />\n" +
    "                                        {{i18n.monthlyInterval2}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showrimonthlyoptions()\" class=\"rifield rimonthlyoptions\">\n" +
    "                                    <label for=\"rimonthlytype\" class=\"rilabel\">{{i18n.monthlyRepeatOn}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"DAYOFMONTH\"\n" +
    "                                                   ng-model=\"ri.monthlytype\"\n" +
    "                                                   id=\"{{name}}monthlytype:DAYOFMONTH\" />\n" +
    "                                            <label for=\"{{name}}monthlytype:DAYOFMONTH\">\n" +
    "                                                {{i18n.monthlyDayOfMonth1}}\n" +
    "                                            </label>\n" +
    "                                            <select ng-model=\"ri.monthlydayofmonthday\" id=\"{{name}}monthlydayofmonthday\"\n" +
    "                                                    ng-options=\"o as o for o in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]\"></select>\n" +
    "                                            {{i18n.monthlyDayOfMonth2}}\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"WEEKDAYOFMONTH\"\n" +
    "                                                   ng-model=\"ri.monthlytype\"\n" +
    "                                                   id=\"{{name}}monthlytype:WEEKDAYOFMONTH\" />\n" +
    "                                            <label for=\"{{name}}monthlytype:WEEKDAYOFMONTH\">\n" +
    "                                                {{i18n.monthlyWeekdayOfMonth1}}\n" +
    "                                            </label>\n" +
    "                                            <select ng-model=\"ri.monthlyweekdayofmonthindex\" ng-options=\"conf.orderIndexes[i] as o for (i,o) in i18n.orderIndexes\"></select>\n" +
    "                                            {{i18n.monthlyWeekdayOfMonth2}}\n" +
    "                                            <select ng-model=\"ri.monthlyweekdayofmonth\" ng-options=\"conf.weekdays[o] as i18n.weekdays[o] for o in conf.orderedWeekdays\"></select>\n" +
    "                                            {{i18n.monthlyWeekdayOfMonth3}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showriyearlyinterval()\" class=\"rifield\">\n" +
    "                                    <label for=\"riyearlyinterval\" class=\"rilabel\">{{i18n.yearlyInterval1}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <input type=\"text\" size=\"2\"\n" +
    "                                               value=\"1\"\n" +
    "                                               ng-model=\"ri.yearlyinterval\" />\n" +
    "                                        {{i18n.yearlyInterval2}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showriyearlyoptions()\" class=\"rifield riyearlyoptions\">\n" +
    "                                    <label for=\"riyearlyType\" class=\"rilabel\">{{i18n.yearlyRepeatOn}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"DAYOFMONTH\"\n" +
    "                                                   ng-model=\"ri.yearlyType\"\n" +
    "                                                   id=\"{{name}}yearlytype:DAYOFMONTH\" />\n" +
    "                                            <label for=\"{{name}}yearlytype:DAYOFMONTH\">\n" +
    "                                                {{i18n.yearlyDayOfMonth1}}\n" +
    "                                            </label>\n" +
    "                                            <select ng-model=\"ri.yearlydayofmonthmonth\" ng-options=\"i18n.months.indexOf(m)+1 as m for m in i18n.months\"></select>\n" +
    "                                            {{i18n.yearlyDayOfMonth2}}\n" +
    "                                            <select ng-model=\"ri.yearlydayofmonthday\"\n" +
    "                                                    ng-options=\"o as o for o in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]\"></select>\n" +
    "                                            {{i18n.yearlyDayOfMonth3}}\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"WEEKDAYOFMONTH\"\n" +
    "                                                   ng-model=\"ri.yearlyType\"\n" +
    "                                                   id=\"{{name}}yearlytype:WEEKDAYOFMONTH\" />\n" +
    "                                            <label for=\"{{name}}yearlytype:WEEKDAYOFMONTH\">\n" +
    "                                                {{i18n.yearlyWeekdayOfMonth1}}\n" +
    "                                            </label>\n" +
    "                                            <select ng-model=\"ri.yearlyweekdayofmonthindex\" ng-options=\"conf.orderIndexes[i] as o for (i,o) in i18n.orderIndexes\"></select>\n" +
    "                                            <label for=\"{{name}}yearlytype:WEEKDAYOFMONTH\">\n" +
    "                                                {{i18n.yearlyWeekdayOfMonth2}}\n" +
    "                                            </label>\n" +
    "                                            <select ng-model=\"ri.yearlyweekdayofmonthday\" ng-options=\"conf.weekdays[o] as i18n.weekdays[o] for o in conf.orderedWeekdays\"></select>\n" +
    "                                            {{i18n.yearlyWeekdayOfMonth3}}\n" +
    "                                            <select ng-model=\"ri.yearlyweekdayofmonthmonth\" ng-options=\"i18n.months.indexOf(m)+1 as m for m in i18n.months\"></select>\n" +
    "                                            {{i18n.yearlyWeekdayOfMonth4}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"ri.showrirangeoptions()\" class=\"rifield rirangeoptions\">\n" +
    "                                    <label class=\"rilabel\">{{i18n.range}}</label>\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <div ng-show=\"conf.hasRepeatForeverButton\">\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"NOENDDATE\"\n" +
    "                                                   ng-model=\"ri.rangetype\"\n" +
    "                                                   id=\"{{name}}rangetype:NOENDDATE\" />\n" +
    "                                            <label for=\"{{name}}rangetype:NOENDDATE\">\n" +
    "                                                {{i18n.rangeNoEnd}}\n" +
    "                                            </label>\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   checked=\"checked\"\n" +
    "                                                   value=\"BYOCCURRENCES\"\n" +
    "                                                   ng-model=\"ri.rangetype\"\n" +
    "                                                   id=\"{{name}}rangetype:BYOCCURRENCES\" />\n" +
    "                                            <label for=\"{{name}}rangetype:BYOCCURRENCES\">\n" +
    "                                                {{i18n.rangeByOccurrences1}}\n" +
    "                                            </label>\n" +
    "                                            <input type=\"text\" size=\"3\"\n" +
    "                                                   value=\"10\"\n" +
    "                                                   ng-model=\"ri.rangebyoccurrencesvalue\" />\n" +
    "                                            {{i18n.rangeByOccurrences2}}\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <input type=\"radio\"\n" +
    "                                                   value=\"BYENDDATE\"\n" +
    "                                                   ng-model=\"ri.rangetype\"\n" +
    "                                                   id=\"{{name}}rangetype:BYENDDATE\" />\n" +
    "                                            <label for=\"{{name}}rangetype:BYENDDATE\">\n" +
    "                                                {{i18n.rangeByEndDate}}\n" +
    "                                            </label>\n" +
    "                                            <input type=\"text\" ng-model=\"ri.rangebyenddate\" datepicker-popup=\"MM/dd/yyyy\" />\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"rioccurrencesactions\" ng-show=\"ri.showrioccurrencesactions\">\n" +
    "                                <div class=\"rioccurancesheader\">\n" +
    "                                    <h2>{{i18n.preview}}</h2>\n" +
    "                                    <span class=\"refreshbutton action\">\n" +
    "                                        <a class=\"rirefreshbutton\" href=\"#\" title=\"{{i18n.refresh}}\">\n" +
    "                                            {{i18n.refresh}}\n" +
    "                                        </a>\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"rioccurrences\">\n" +
    "                            </div>\n" +
    "                            <div class=\"rioccurrencesactions\" ng-show=\"ri.showrioccurrencesactions\">\n" +
    "                                <div class=\"rioccurancesheader\">\n" +
    "                                    <h2>{{i18n.addDate}}</h2>\n" +
    "                                </div>\n" +
    "                                <div class=\"riaddoccurrence\">\n" +
    "                                    <div class=\"errorarea\" ng-bind=\"ri.errorsText\" ng-show=\"ri.errorsText\"></div>\n" +
    "                                    <input type=\"date\" name=\"adddate\" id=\"adddate\" />\n" +
    "                                    <input type=\"button\" name=\"addaction\" id=\"addaction\" value=\"{{i18n.add}}\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <br />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "            <button class=\"btn btn-primary\" data-ng-click=\"ri.save()\">{{i18n.save}}</button>\n" +
    "            <button class=\"btn btn-warning\" data-ng-click=\"ri.cancel()\">{{i18n.cancel}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--<div class=\"rioccurrences\">\n" +
    "\n" +
    "    {{each occurrences}}\n" +
    "    <div class=\"occurrence {{occurrences[$index].type}}\">\n" +
    "\n" +
    "        <span>\n" +
    "\n" +
    "            {{occurrences[$index].formattedDate}}\n" +
    "            {{if occurrences[$index].type === \"start\"}}\n" +
    "            <span class=\"rlabel\">{{i18n.recurrenceStart}}</span>\n" +
    "            {{/if}}\n" +
    "            {{if occurrences[$index].type === \"rdate\"}}\n" +
    "            <span class=\"rlabel\">{{i18n.additionalDate}}</span>\n" +
    "            {{/if}}\n" +
    "\n" +
    "        </span>\n" +
    "        {{if !readOnly}}\n" +
    "        <span class=\"action\">\n" +
    "\n" +
    "            {{if occurrences[$index].type === \"rrule\"}}\n" +
    "            <a date=\"{{occurrences[$index].date}}\" href=\"#\"\n" +
    "                                class=\"{{occurrences[$index].type}}\" title=\"{{i18n.exclude}}\">\n" +
    "\n" +
    "                {{i18n.exclude}}\n" +
    "\n" +
    "            </a>\n" +
    "            {{/if}}\n" +
    "            {{if occurrences[$index].type === \"rdate\"}}\n" +
    "            <a date=\"{{occurrences[$index].date}}\" href=\"#\"\n" +
    "                                class=\"{{occurrences[$index].type}}\" title=\"{{i18n.remove}}\">\n" +
    "\n" +
    "                {{i18n.remove}}\n" +
    "\n" +
    "            </a>\n" +
    "            {{/if}}\n" +
    "            {{if occurrences[$index].type === \"exdate\"}}\n" +
    "            <a date=\"{{occurrences[$index].date}}\" href=\"#\"\n" +
    "                                class=\"{{occurrences[$index].type}}\" title=\"{{i18n.include}}\">\n" +
    "\n" +
    "                {{i18n.include}}\n" +
    "\n" +
    "            </a>\n" +
    "            {{/if}}\n" +
    "\n" +
    "        </span>\n" +
    "        {{/if}}\n" +
    "\n" +
    "    </div>\n" +
    "    {{/each}}\n" +
    "    <div class=\"batching\">\n" +
    "\n" +
    "        {{each batch.batches}}\n" +
    "        {{if $index === batch.currentBatch}}<span class=\"current\">\n" +
    "            {{/if}}\n" +
    "            <a href=\"#\" start=\"{{batch.batches[$index][0]}}\">[{{batch.batches[$index][0]}} - {{batch.batches[$index][1]}}]</a>\n" +
    "            {{if $index === batch.currentBatch}}\n" +
    "        </span>{{/if}}\n" +
    "        {{/each}}\n" +
    "\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "";
    var riDirective = function () {
        /**********************************
            Configuration
        ***********************************/
        var LABELS = {};
        var tool = {
            conf: {
                lang: 'en',
                readOnly: false,
                firstDay: 0,

                // "REMOTE" FIELD
                startField: null,
                startFieldYear: null,
                startFieldMonth: null,
                startFieldDay: null,
                ajaxURL: null,
                ajaxContentType: 'application/json; charset=utf8',
                ributtonExtraClass: '',

                // INPUT CONFIGURATION
                hasRepeatForeverButton: true,

                // RECURRENCE TEMPLATES
                rtemplate: {
                    daily: {
                        rrule: 'FREQ=DAILY',
                        fields: [
                            'ridailyinterval',
                            'rirangeoptions'
                        ]
                    },
                    mondayfriday: {
                        rrule: 'FREQ=WEEKLY;BYDAY=MO,FR',
                        fields: [
                            'rirangeoptions'
                        ]
                    },
                    weekdays: {
                        rrule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
                        fields: [
                            'rirangeoptions'
                        ]
                    },
                    weekly: {
                        rrule: 'FREQ=WEEKLY',
                        fields: [
                            'riweeklyinterval',
                            'riweeklyweekdays',
                            'rirangeoptions'
                        ]
                    },
                    monthly: {
                        rrule: 'FREQ=MONTHLY',
                        fields: [
                            'rimonthlyinterval',
                            'rimonthlyoptions',
                            'rirangeoptions'
                        ]
                    },
                    yearly: {
                        rrule: 'FREQ=YEARLY',
                        fields: [
                            'riyearlyinterval',
                            'riyearlyoptions',
                            'rirangeoptions'
                        ]
                    }
                }
            },

            localize: function (language, labels) {
                LABELS[language] = labels;
            },

            setTemplates: function (templates, titles) {
                var lang, template;
                tool.conf.rtemplate = templates;
                for (lang in titles) {
                    if (titles.hasOwnProperty(lang)) {
                        for (template in titles[lang]) {
                            if (titles[lang].hasOwnProperty(template)) {
                                LABELS[lang].rtemplate[template] = titles[lang][template];
                            }
                        }
                    }
                }
            }
        };

        tool.localize("en", {
            displayUnactivate: 'Repeat...',
            displayActivate: 'Repeats every',
            add_rules: 'Add',
            edit_rules: 'Edit...',
            delete_rules: 'Delete',
            add: 'Add',
            refresh: 'Refresh',

            title: 'Repeat',
            preview: 'Selected dates',
            addDate: 'Add date',

            recurrenceType: 'Repeats:',

            dailyInterval1: 'Repeat every:',
            dailyInterval2: 'days',

            weeklyInterval1: 'Repeat every:',
            weeklyInterval2: 'week(s)',
            weeklyWeekdays: 'Repeat on:',
            weeklyWeekdaysHuman: 'on:',

            monthlyInterval1: 'Repeat every:',
            monthlyInterval2: 'month(s)',
            monthlyDayOfMonth1: 'Day',
            monthlyDayOfMonth1Human: 'on day',
            monthlyDayOfMonth2: 'of the month',
            monthlyDayOfMonth3: 'month(s)',
            monthlyWeekdayOfMonth1: 'The',
            monthlyWeekdayOfMonth1Human: 'on the',
            monthlyWeekdayOfMonth2: '',
            monthlyWeekdayOfMonth3: 'of the month',
            monthlyRepeatOn: 'Repeat on:',

            yearlyInterval1: 'Repeat every:',
            yearlyInterval2: 'year(s)',
            yearlyDayOfMonth1: 'Every',
            yearlyDayOfMonth1Human: 'on',
            yearlyDayOfMonth2: '',
            yearlyDayOfMonth3: '',
            yearlyWeekdayOfMonth1: 'The',
            yearlyWeekdayOfMonth1Human: 'on the',
            yearlyWeekdayOfMonth2: '',
            yearlyWeekdayOfMonth3: 'of',
            yearlyWeekdayOfMonth4: '',
            yearlyRepeatOn: 'Repeat on:',

            range: 'End recurrence:',
            rangeNoEnd: 'Never',
            rangeByOccurrences1: 'After',
            rangeByOccurrences1Human: 'ends after',
            rangeByOccurrences2: 'occurrence(s)',
            rangeByEndDate: 'On',
            rangeByEndDateHuman: 'until',

            including: ', and also',
            except: ', except for',

            cancel: 'Cancel',
            save: 'Save',

            recurrenceStart: 'Start of the recurrence',
            additionalDate: 'Additional date',
            include: 'Include',
            exclude: 'Exclude',
            remove: 'Remove',

            orderIndexes: ['first', 'second', 'third', 'fourth', 'last'],
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday'],
            shortWeekdays: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

            longDateFormat: 'mmmm dd, yyyy',
            shortDateFormat: 'mm/dd/yyyy',

            unsupportedFeatures: 'Warning: This event uses recurrence features not ' +
                                  'supported by this widget. Saving the recurrence ' +
                                  'may change the recurrence in unintended ways:',
            noTemplateMatch: 'No matching recurrence template',
            multipleDayOfMonth: 'This widget does not support multiple days in monthly or yearly recurrence',
            bysetpos: 'BYSETPOS is not supported',
            noRule: 'No RRULE in RRULE data',
            noRepeatEvery: 'Error: The "Repeat every"-field must be between 1 and 1000',
            noEndDate: 'Error: End date is not set. Please set a correct value',
            noRepeatOn: 'Error: "Repeat on"-value must be selected',
            noEndRecurrence: 'Error: "End recurrence"-value must be selected',
            pastEndDate: 'Error: End date cannot be before start date',
            noEndAfterNOccurrences: 'Error: The "After N occurrences"-field must be between 1 and 1000',
            alreadyAdded: 'This date was already added',

            rtemplate: {
                daily: 'Daily',
                mondayfriday: 'Monday and Friday',
                weekdays: 'Weekday',
                weekly: 'Weekly',
                monthly: 'Monthly',
                yearly: 'Yearly'
            }
        });

        /**********************************
            Directive definition
        ***********************************/

        return {
            restrict: 'E',
            template: riTemplate["ridisplay.html"],
            scope: {
                xrrule: '=ngModel',
                riConfig: '=',
                riName: '=',
                EXDATES: '=riExdates',
                RDATES: '=riRdates',
                riStartDate: '='
            },
            link: function (scope, elem, attr, ctrl) {
                /* elem.bind('click', function(e) {
                     e.stopPropagation();
                 });
                 $document.bind('click', function() {
                     scope.$apply(attr.kdAntiClick);
                 });*/
            },
            controller: function ($scope, $modal) {
                $scope.ri = {};
                /**********************************
                    Parsing functionality
                ***********************************/
                // Formatting function (mostly) from jQueryTools dateinput
                var Re = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g;

                function zeropad(val, len) {
                    val = val.toString();
                    len = len || 2;
                    while (val.length < len) { val = "0" + val; }
                    return val;
                }

                function format(date, fmt, conf) {
                    var d = date.getDate(),
                        D = date.getDay(),
                        m = date.getMonth(),
                        y = date.getFullYear(),

                        flags = {
                            d: d,
                            dd: zeropad(d),
                            ddd: conf.i18n.shortWeekdays[D],
                            dddd: conf.i18n.weekdays[D],
                            m: m + 1,
                            mm: zeropad(m + 1),
                            mmm: conf.i18n.shortMonths[m],
                            mmmm: conf.i18n.months[m],
                            yy: String(y).slice(2),
                            yyyy: y
                        };

                    var result = fmt.replace(Re, function ($0) {
                        return flags.hasOwnProperty($0) ? flags[$0] : $0.slice(1, $0.length - 1);
                    });

                    return result;
                }

                /**
                 * Parsing RFC5545 from widget
                 */
                function widgetSaveToRfc5545(tz) {
                    var rtemplate = $scope.ri.rtemplate;
                    var result = rtemplate.rrule;
                    var rtemplateName = '';
                    for (var prop in conf.rtemplate) {
                        if (conf.rtemplate.hasOwnProperty(prop)) {
                            if (conf.rtemplate[prop] === rtemplate) {
                                rtemplateName = prop;
                                break;
                            }
                        }
                    }
                    var human = conf.i18n.rtemplate[rtemplateName];
                    var field, input, weekdays, i18nweekdays, i, j, index, tmp;
                    var day, month, year, interval, yearlyType, occurrences, date;

                    for (i = 0; i < rtemplate.fields.length; i++) {
                        field = rtemplate.fields[i];
                        switch (field) {

                            case 'ridailyinterval':
                                interval = $scope.ri.dailyinterval;
                                if (interval !== '1') {
                                    result += ';INTERVAL=' + interval;
                                }
                                human = interval + ' ' + conf.i18n.dailyInterval2;
                                break;

                            case 'riweeklyinterval':
                                interval = $scope.ri.weeklyinterval;
                                if (interval !== '1') {
                                    result += ';INTERVAL=' + interval;
                                }
                                human = interval + ' ' + conf.i18n.weeklyInterval2;
                                break;

                            case 'riweeklyweekdays':
                                weekdays = '';
                                i18nweekdays = '';
                                for (j = 0; j < conf.weekdays.length; j++) {
                                    input = $scope.ri.weeklyweekdays[j];
                                    if (input) {
                                        if (weekdays) {
                                            weekdays += ',';
                                            i18nweekdays += ', ';
                                        }
                                        weekdays += conf.weekdays[j];
                                        i18nweekdays += conf.i18n.weekdays[j];
                                    }
                                }
                                if (weekdays) {
                                    result += ';BYDAY=' + weekdays;
                                    human += ' ' + conf.i18n.weeklyWeekdaysHuman + ' ' + i18nweekdays;
                                }
                                break;

                            case 'rimonthlyinterval':
                                interval = $scope.ri.monthlyinterval;
                                if (interval !== '1') {
                                    result += ';INTERVAL=' + interval;
                                }
                                human = interval + ' ' + conf.i18n.monthlyInterval2;
                                break;

                            case 'rimonthlyoptions':
                                var monthlyType = $scope.ri.monthlytype;
                                switch (monthlyType) {

                                    case 'DAYOFMONTH':
                                        day = $scope.ri.monthlydayofmonthday;
                                        result += ';BYMONTHDAY=' + day;
                                        human += ', ' + conf.i18n.monthlyDayOfMonth1Human + ' ' + day + ' ' + conf.i18n.monthlyDayOfMonth2;
                                        break;
                                    case 'WEEKDAYOFMONTH':
                                        index = $scope.ri.monthlyweekdayofmonthindex;
                                        day = $scope.ri.monthlyweekdayofmonth;
                                        if ($.inArray(day, ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']) > -1) {
                                            result += ';BYDAY=' + index + day;
                                            human += ', ' + conf.i18n.monthlyWeekdayOfMonth1Human + ' ';
                                            human += ' ' + conf.i18n.orderIndexes[$.inArray(index, conf.orderIndexes)];
                                            human += ' ' + conf.i18n.monthlyWeekdayOfMonth2;
                                            human += ' ' + conf.i18n.weekdays[$.inArray(day, conf.weekdays)];
                                            human += ' ' + conf.i18n.monthlyDayOfMonth2;
                                        }
                                        break;
                                }
                                break;

                            case 'riyearlyinterval':
                                interval = $scope.ri.yearlyinterval;
                                if (interval !== '1') {
                                    result += ';INTERVAL=' + interval;
                                }
                                human = interval + ' ' + conf.i18n.yearlyInterval2;
                                break;

                            case 'riyearlyoptions':
                                yearlyType = $scope.ri.yearlyType;
                                switch (yearlyType) {

                                    case 'DAYOFMONTH':
                                        month = $scope.ri.yearlydayofmonthmonth;
                                        day = $scope.ri.yearlydayofmonthday;
                                        result += ';BYMONTH=' + month;
                                        result += ';BYMONTHDAY=' + day;
                                        human += ', ' + conf.i18n.yearlyDayOfMonth1Human + ' ' + conf.i18n.months[month - 1] + ' ' + day;
                                        break;
                                    case 'WEEKDAYOFMONTH':
                                        index = $scope.ri.yearlyweekdayofmonthindex;
                                        day = $scope.ri.yearlyweekdayofmonthday;
                                        month = $scope.ri.yearlyweekdayofmonthmonth;
                                        result += ';BYMONTH=' + month;
                                        if ($.inArray(day, ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']) > -1) {
                                            result += ';BYDAY=' + index + day;
                                            human += ', ' + conf.i18n.yearlyWeekdayOfMonth1Human;
                                            human += ' ' + conf.i18n.orderIndexes[$.inArray(index, conf.orderIndexes)];
                                            human += ' ' + conf.i18n.yearlyWeekdayOfMonth2;
                                            human += ' ' + conf.i18n.weekdays[$.inArray(day, conf.weekdays)];
                                            human += ' ' + conf.i18n.yearlyWeekdayOfMonth3;
                                            human += ' ' + conf.i18n.months[month - 1];
                                            human += ' ' + conf.i18n.yearlyWeekdayOfMonth4;
                                        }
                                        break;
                                }
                                break;

                            case 'rirangeoptions':
                                var rangeType = $scope.ri.rangetype;
                                switch (rangeType) {

                                    case 'BYOCCURRENCES':
                                        occurrences = $scope.ri.rangebyoccurrencesvalue;
                                        result += ';COUNT=' + occurrences;
                                        human += ', ' + conf.i18n.rangeByOccurrences1Human;
                                        human += ' ' + occurrences;
                                        human += ' ' + conf.i18n.rangeByOccurrences2;
                                        break;
                                    case 'BYENDDATE':
                                        date = format($scope.ri.rangebyenddate, 'yyyymmdd', conf);
                                        result += ';UNTIL=' + date + 'T235959';
                                        if (tz === true) {
                                            // Make it UTC:
                                            result += 'Z';
                                        }
                                        human += ', ' + conf.i18n.rangeByEndDateHuman;
                                        human += ' ' + format($scope.ri.rangebyenddate, conf.i18n.longDateFormat, conf);
                                        break;
                                }
                                break;
                        }
                    }

                    if ($scope.RDATES !== undefined && $scope.RDATES.length > 0) {
                        $scope.RDATES.sort();
                        tmp = [];
                        for (i = 0; i < $scope.RDATES.length; i++) {
                            if ($scope.RDATES[i] !== '') {
                                tmp.push(format($scope.RDATES[i], conf.i18n.longDateFormat, conf));
                            }
                        }
                        if (tmp.length !== 0) {
                            human = human + conf.i18n.including + ' ' + tmp.join('; ');
                        }
                    }

                    if ($scope.EXDATE !== undefined && $scope.EXDATE.length > 0) {
                        $scope.EXDATE.sort();
                        tmp = [];
                        for (i = 0; i < $scope.EXDATE.length; i++) {
                            if ($scope.EXDATE[i] !== '') {
                                tmp.push(format($scope.EXDATES[i], conf.i18n.longDateFormat, conf));
                            }
                        }
                        if (tmp.length !== 0) {
                            human = human + conf.i18n.except + ' ' + tmp.join('; ');
                        }
                    }
                    result = result;
                    //if ($scope.EXDATE !== undefined && $scope.EXDATE.join() !== "") {
                    //    tmp = $.map($scope.EXDATE, function (x) {
                    //        if (x.length === 8) { // DATE format. Make it DATE-TIME
                    //            x += 'T000000';
                    //        }
                    //        if (tz === true) {
                    //            // Make it UTC:
                    //            x += 'Z';
                    //        }
                    //        return x;
                    //    });
                    //    result = result + '\nEXDATE:' + tmp;
                    //}
                    //if ($scope.RDATES !== undefined && $scope.RDATES.join() !== "") {
                    //    tmp = $.map($scope.RDATES, function (x) {
                    //        if (x.length === 8) { // DATE format. Make it DATE-TIME
                    //            x += 'T000000';
                    //        }
                    //        if (tz === true) {
                    //            // Make it UTC:
                    //            x += 'Z';
                    //        }
                    //        return x;
                    //    });
                    //    result = result + '\nRDATE:' + tmp;
                    //}
                    return { result: result, description: human };
                }

                function parseLine(icalline) {
                    var result = {};
                    var pos = icalline.indexOf(':');
                    var property = icalline.substring(0, pos);
                    result.value = icalline.substring(pos + 1);

                    if (property.indexOf(';') !== -1) {
                        pos = property.indexOf(';');
                        result.parameters = property.substring(pos + 1);
                        result.property = property.substring(0, pos);
                    } else {
                        result.parameters = null;
                        result.property = property;
                    }
                    return result;
                }

                function cleanDates(dates) {
                    // Get rid of timezones
                    // TODO: We could parse dates and range here, maybe?
                    var result = [];
                    var splitDates = dates.split(',');
                    var date;

                    for (date in splitDates) {
                        if (splitDates.hasOwnProperty(date)) {
                            if (splitDates[date].indexOf('Z') !== -1) {
                                result.push(splitDates[date].substring(0, 15));
                            } else {
                                result.push(splitDates[date]);
                            }
                        }
                    }
                    return result;
                }

                function parseIcal(icaldata) {
                    var lines = [];
                    var result = {};
                    var propAndValue = [];
                    var line = null;
                    var nextline;

                    lines = icaldata.split('\n');
                    lines.reverse();
                    while (true) {
                        if (lines.length > 0) {
                            nextline = lines.pop();
                            if (nextline.charAt(0) === ' ' || nextline.charAt(0) === '\t') {
                                // Line continuation:
                                line = line + nextline;
                                continue;
                            }
                        } else {
                            nextline = '';
                        }

                        // New line; the current one is finished, add it to the result.
                        if (line !== null) {
                            line = parseLine(line);
                            // We ignore properties for now
                            if (line.property === 'RDATE' || line.property === 'EXDATE') {
                                result[line.property] = cleanDates(line.value);
                            } else {
                                result[line.property] = line.value;
                            }
                        }

                        line = nextline;
                        if (line === '') {
                            break;
                        }
                    }
                    return result;
                }

                function widgetLoadFromRfc5545(rrule, force) {
                    var unsupportedFeatures = [];
                    var i, matches, match, matchIndex, rtemplate, d, input, index;
                    var selector, selectors, field, radiobutton, start, end;
                    var interval, byday, bymonth, bymonthday, count, until;
                    var day, month, year, hour, minute, second, weekday, ical;

                    if (!rrule) {
                        unsupportedFeatures.push(conf.i18n.noRule);
                        if (!force) {
                            return -1; // Fail!
                        }
                    } else {


                        matches = /INTERVAL=([0-9]+);?/.exec(rrule);
                        if (matches) {
                            interval = matches[1];
                        } else {
                            interval = '1';
                        }

                        matches = /BYDAY=([^;]+);?/.exec(rrule);
                        if (matches) {
                            byday = matches[1];
                        } else {
                            byday = '';
                        }

                        matches = /BYMONTHDAY=([^;]+);?/.exec(rrule);
                        if (matches) {
                            bymonthday = matches[1].split(",");
                        } else {
                            bymonthday = null;
                        }

                        matches = /BYMONTH=([^;]+);?/.exec(rrule);
                        if (matches) {
                            bymonth = matches[1].split(",");
                        } else {
                            bymonth = null;
                        }

                        matches = /COUNT=([0-9]+);?/.exec(rrule);
                        if (matches) {
                            count = matches[1];
                        } else {
                            count = null;
                        }

                        matches = /UNTIL=([0-9T]+);?/.exec(rrule);
                        if (matches) {
                            until = matches[1];
                        } else {
                            until = null;
                        }

                        matches = /BYSETPOS=([^;]+);?/.exec(rrule);
                        if (matches) {
                            unsupportedFeatures.push(conf.i18n.bysetpos);
                        }

                        // Find the best rule:
                        match = '';
                        matchIndex = null;
                        for (i in conf.rtemplate) {
                            if (conf.rtemplate.hasOwnProperty(i)) {
                                rtemplate = conf.rtemplate[i];
                                if (rrule.indexOf(rtemplate.rrule) === 0) {
                                    if (rrule.length > match.length) {
                                        // This is the best match so far
                                        match = rrule;
                                        matchIndex = i;
                                    }
                                }
                            }
                        }

                        if (match) {
                            rtemplate = conf.rtemplate[matchIndex];
                            $scope.ri.rtemplate = rtemplate;
                            // Set the selector:
                            selector = matchIndex;
                        } else {
                            for (rtemplate in conf.rtemplate) {
                                if (conf.rtemplate.hasOwnProperty(rtemplate)) {
                                    rtemplate = conf.rtemplate[rtemplate];
                                    break;
                                }
                            }
                            unsupportedFeatures.push(conf.i18n.noTemplateMatch);
                        }

                        for (i = 0; i < rtemplate.fields.length; i++) {
                            field = rtemplate.fields[i];
                            switch (field) {

                                case 'ridailyinterval':
                                    $scope.ri.dailyinterval = interval;
                                    break;

                                case 'riweeklyinterval':
                                    $scope.ri.weeklyinterval = interval;
                                    break;

                                case 'riweeklyweekdays':
                                    byday = byday.split(",");
                                    for (d = 0; d < conf.weekdays.length; d++) {
                                        day = conf.weekdays[d];
                                        input = $scope.ri.weeklyweekdays[d] = $.inArray(day, byday) !== -1;
                                    }
                                    break;

                                case 'rimonthlyinterval':
                                    $scope.ri.monthlyinterval = interval;
                                    break;

                                case 'rimonthlyoptions':
                                    var monthlyType = 'DAYOFMONTH'; // Default to using BYMONTHDAY

                                    if (bymonthday) {
                                        monthlyType = 'DAYOFMONTH';
                                        if (bymonthday.length > 1) {
                                            // No support for multiple days in one month
                                            unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);
                                            // Just keep the first
                                            bymonthday = bymonthday[0];
                                        }
                                        $scope.ri.monthlydayofmonthday = parseInt(bymonthday, 10);
                                    }

                                    if (byday) {
                                        monthlyType = 'WEEKDAYOFMONTH';

                                        if (byday.indexOf(',') !== -1) {
                                            // No support for multiple days in one month
                                            unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);
                                            byday = byday.split(",")[0];
                                        }
                                        index = byday.slice(0, -2);
                                        if (index.charAt(0) !== '+' && index.charAt(0) !== '-') {
                                            index = '+' + index;
                                        }
                                        weekday = byday.slice(-2);
                                        $scope.ri.monthlyweekdayofmonthindex = index;
                                        $scope.ri.monthlyweekdayofmonth = weekday;
                                    }

                                    $scope.ri.monthlytype = monthlyType;
                                    break;

                                case 'riyearlyinterval':
                                    $scope.ri.yearlyinterval = interval;
                                    break;

                                case 'riyearlyoptions':
                                    var yearlyType = 'DAYOFMONTH'; // Default to using BYMONTHDAY

                                    if (bymonthday) {
                                        yearlyType = 'DAYOFMONTH';
                                        if (bymonthday.length > 1) {
                                            // No support for multiple days in one month
                                            unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);
                                            bymonthday = bymonthday[0];
                                        }
                                        $scope.ri.yearlydayofmonthmonth = parseInt(bymonth, 10);
                                        $scope.ri.yearlydayofmonthday = parseInt(bymonthday, 10);
                                    }

                                    if (byday) {
                                        yearlyType = 'WEEKDAYOFMONTH';

                                        if (byday.indexOf(',') !== -1) {
                                            // No support for multiple days in one month
                                            unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);
                                            byday = byday.split(",")[0];
                                        }
                                        index = byday.slice(0, -2);
                                        if (index.charAt(0) !== '+' && index.charAt(0) !== '-') {
                                            index = '+' + index;
                                        }
                                        weekday = byday.slice(-2);
                                        $scope.ri.yearlyweekdayofmonthindex = index;
                                        $scope.ri.yearlyweekdayofmonthday = weekday;
                                        $scope.ri.yearlyweekdayofmonthmonth = parseInt(bymonth, 10);
                                    }

                                    $scope.ri.yearlyType = yearlyType;
                                    break;

                                case 'rirangeoptions':
                                    var rangeType = 'NOENDDATE';

                                    if (count) {
                                        rangeType = 'BYOCCURRENCES';
                                        $scope.ri.rangebyoccurrencesvalue = count;
                                    }

                                    if (until) {
                                        rangeType = 'BYENDDATE';
                                        year = until.slice(0, 4);
                                        month = until.slice(4, 6);
                                        month = parseInt(month, 10) - 1;
                                        day = until.slice(6, 8);
                                        hour = until.slice(9, 11);
                                        minute = until.slice(11, 13);
                                        second = until.slice(13, 15);
                                        $scope.ri.rangebyenddatecalendar = new Date(year, month, day, hour, minute, second);
                                    }

                                    $scope.ri.rangetype = rangeType;
                                    break;
                            }
                        }
                    }

                    if (unsupportedFeatures.length !== 0) {
                        $scope.ri.messageAreaText = conf.i18n.unsupportedFeatures + ' ' + unsupportedFeatures.join('; ');
                        return 1;
                    } else {
                        $scope.ri.messageAreaText = '';
                        return 0;
                    }

                }

                /**********************************
                    Control Setup
                ***********************************/
                var conf = angular.extend({}, tool.conf);
                angular.extend(conf, $scope.riConfig);
                angular.extend(conf, { i18n: LABELS[conf.lang], name: $scope.riName });
                $scope.conf = conf;

                /**********************************
                    RecurrenceInput Definition
                ***********************************/
                // Extend conf with non-configurable data used by templates.
                var orderedWeekdays = [];
                var index, i;
                for (i = 0; i < 7; i++) {
                    index = i + conf.firstDay;
                    if (index > 6) {
                        index = index - 7;
                    }
                    orderedWeekdays.push(index);
                }

                $.extend(conf, {
                    orderIndexes: ['+1', '+2', '+3', '+4', '-1'],
                    weekdays: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
                    orderedWeekdays: orderedWeekdays
                });

                // The recurrence type dropdown should show certain fields depending
                // on selection:
                $scope.ri.showridailyinterval = function () {
                    return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('ridailyinterval') != -1;
                };
                $scope.ri.showrirangeoptions = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('rirangeoptions') != -1; };
                $scope.ri.showriweeklyinterval = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('riweeklyinterval') != -1; };
                $scope.ri.showriweeklyweekdays = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('riweeklyweekdays') != -1; };
                $scope.ri.showrimonthlyinterval = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('rimonthlyinterval') != -1; };
                $scope.ri.showrimonthlyoptions = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('rimonthlyoptions') != -1; };
                $scope.ri.showriyearlyinterval = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('riyearlyinterval') != -1; };
                $scope.ri.showriyearlyoptions = function () { return $scope.ri.rtemplate && $scope.ri.rtemplate.fields.indexOf('riyearlyoptions') != -1; };

                /*function occurrenceExclude(event) {
                    event.preventDefault();
                    if ($scope.ical.EXDATE === undefined) {
                        $scope.ical.EXDATE = [];
                    }
                    $scope.ical.EXDATE.push(this.attributes.date.value);
                    var $this = $(this);
                    $this.attr('class', 'exdate');
                    $this.parent().parent().addClass('exdate');
                    $this.unbind(event);
                    $this.click(occurrenceInclude); // Jslint warns here, but that's OK.
                }

                function occurrenceInclude(event) {
                    event.preventDefault();
                    $scope.ical.EXDATE.splice($.inArray(this.attributes.date.value, $scope.ical.EXDATE), 1);
                    var $this = $(this);
                    $this.attr('class', 'rrule');
                    $this.parent().parent().removeClass('exdate');
                    $this.unbind(event);
                    $this.click(occurrenceExclude);
                }

                function occurrenceDelete(event) {
                    event.preventDefault();
                    $scope.ical.RDATE.splice($.inArray(this.attributes.date.value, $scope.ical.RDATE), 1);
                    $(this).parent().parent().hide('slow', function () {
                        $(this).remove();
                    });
                }

                function occurrenceAdd(event) {
                    event.preventDefault();
                    var dateinput = form
                        .find('.riaddoccurrence input#adddate')
                        .data('dateinput');
                    var datevalue = dateinput.getValue('yyyymmddT000000');
                    if ($scope.ical.RDATE === undefined) {
                        $scope.ical.RDATE = [];
                    }
                    $scope.ri.errorsText = '';

                    // Add date only if it is not already in RDATE
                    if ($.inArray(datevalue, $scope.ical.RDATE) === -1) {
                        $scope.ical.RDATE.push(datevalue);
                        var html = ['<div class="occurrence rdate" style="display: none;">',
                                '<span class="rdate">',
                                    dateinput.getValue(conf.i18n.longDateFormat),
                                    '<span class="rlabel">' + conf.i18n.additionalDate + '</span>',
                                '</span>',
                                '<span class="action">',
                                    '<a date="' + datevalue + '" href="#" class="rdate" >',
                                        'Include',
                                    '</a>',
                                '</span>',
                                '</div>'].join('\n');
                        form.find('div.rioccurrences').prepend(html);
                        $(form.find('div.rioccurrences div')[0]).slideDown();
                        $(form.find('div.rioccurrences .action a.rdate')[0]).click(occurrenceDelete);
                    } else {
                        $scope.ri.errorsText = conf.i18n.alreadyAdded;
                    }
                }

                // element is where to find the tag in question. Can be the form
                // or the display widget. Defaults to the form.
                function loadOccurrences(startdate, rfc5545, start, readonly) {
                    var element, occurrenceDiv;

                    if (!readonly) {
                        element = form;
                    } else {
                        element = display;
                    }

                    occurrenceDiv = element.find('.rioccurrences');
                    occurrenceDiv.hide();

                    var year, month, day;
                    year = startdate.getFullYear();
                    month = startdate.getMonth() + 1;
                    day = startdate.getDate();

                    var data = {
                        year: year,
                        month: month, // Sending January as 0? I think not.
                        day: day,
                        rrule: rfc5545,
                        format: conf.i18n.longDateFormat,
                        start: start
                    };

                    // TODO: finish this out and make it include R/ExDates
                }*/

                // Loading (populating) display and form widget with
                // passed RFC5545 string (data)
                function loadData(rfc5545) {
                    var selector, format, startdate, dayindex, day;

                    if (rfc5545) {
                        widgetLoadFromRfc5545(rfc5545, true);
                        // check checkbox
                        recurrenceOn();
                    } else {
                        $scope.ri.display = conf.i18n.noRule;
                    }

                    startdate = $scope.ri.StartDate;

                    if (startdate !== null && startdate !== undefined) {
                        // If the date is a real date, set the defaults in the form
                        $scope.ri.monthlydayofmonthday = startdate.getDate();
                        dayindex = conf.orderIndexes[Math.floor((startdate.getDate() - 1) / 7)];
                        day = conf.weekdays[startdate.getDay()];
                        $scope.ri.monthlyweekdayofmonthindex = dayindex;
                        $scope.ri.monthlyweekdayofmonth = day;

                        $scope.ri.yearlydayofmonthmonth = startdate.getMonth() + 1;
                        $scope.ri.yearlydayofmonthday = startdate.getDate();
                        $scope.ri.yearlyweekdayofmonthindex = dayindex;
                        $scope.ri.yearlyweekdayofmonthday = day;
                        $scope.ri.yearlyweekdayofmonthmonth = startdate.getMonth() + 1;

                        // Now when we have a start date, we can also do an ajax call to calculate occurrences:
                        //loadOccurrences(startdate, widgetSaveToRfc5545(true).result, 0, false);

                        // Show the add and refresh buttons:
                        $scope.ri.showrioccurrencesactions = true;

                    } else {
                        // No EXDATE/RDATE support
                        $scope.ri.showrioccurrencesactions = false;
                    }
                }

                function recurrenceOn() {
                    var RFC5545 = widgetSaveToRfc5545(true);
                    $scope.ri.display = conf.i18n.displayActivate + ' ' + RFC5545.description;
                    $scope.xrrule = RFC5545.result;
                    var startdate = $scope.ri.StartDate;
                    if (startdate !== null && startdate !== undefined) {
                        //loadOccurrences(startdate, widgetSaveToRfc5545(form, conf, true).result, 0, true);
                    }
                }

                function recurrenceOff() {
                    $scope.ri.display = conf.i18n.displayUnactivate;
                    $scope.xrrule = null;
                    //display.find('.rioccurrences').hide();
                    $scope.ri.enabled = false;
                }

                $scope.enableChanged = function () {
                    if ($scope.ri.enabled) {
                        $scope.ri.showForm();
                        recurrenceOn();
                    } else {
                        recurrenceOff();
                    }
                };

                $scope.toggleRecurrence = function (e) {
                    if ($scope.ri.enabled) {
                        $scope.ri.showForm();
                    }
                };

                function checkFields() {
                    var startDate, endDate, num, messagearea;
                    startDate = $scope.riStartDate;

                    // Hide any error message from before
                    $scope.ri.messageAreaText = "";

                    // Hide add field errors
                    $scope.ri.errorsText = "";

                    // Repeats Daily
                    if ($scope.ri.showridailyinterval()) {
                        // Check repeat every field
                        num = $scope.ri.dailyinterval;
                        if (!num || num < 1 || num > 1000) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatEvery;
                            return false;
                        }
                    }

                    // Repeats Weekly
                    if ($scope.ri.showriweeklyinterval()) {
                        // Check repeat every field
                        num = $scope.ri.weeklyinterval;
                        if (!num || num < 1 || num > 1000) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatEvery;
                            return false;
                        }
                    }

                    // Repeats Monthly
                    if ($scope.ri.showrimonthlyinterval()) {
                        // Check repeat every field
                        num = $scope.ri.monthlyinterval;
                        if (!num || num < 1 || num > 1000) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatEvery;
                            return false;
                        }

                        // Check repeat on
                        if (!$scope.ri.monthlytype) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatOn;
                            return false;
                        }
                    }

                    // Repeats Yearly
                    if ($scope.ri.showriyearlyinterval()) {
                        // Check repeat every field
                        num = $scope.ri.yearlyinterval;
                        if (!num || num < 1 || num > 1000) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatEvery;
                            return false;
                        }

                        // Check repeat on
                        if (!$scope.ri.yearlyType) {
                            $scope.ri.messageAreaText = conf.i18n.noRepeatOn;
                            return false;
                        }
                    }

                    // End recurrence fields

                    // If after N occurences is selected, check its value
                    if ($scope.ri.rangetype == "BYOCCURRENCES") {
                        num = $scope.ri.rangebyoccurrencesvalue;
                        if (!num || num < 1 || num > 1000) {
                            $scope.ri.messageAreaText = conf.i18n.noEndAfterNOccurrences;
                            return false;
                        }
                    }

                    // If end date is selected, check its value
                    if ($scope.ri.rangetype == "BYENDDATE") {
                        endDate = new Date($scope.ri.rangebyenddate);
                        if (isNaN(endDate.getTime())) {
                            // if endDate is null that means the field is empty
                            $scope.ri.messageAreaText = conf.i18n.noEndDate;
                            return false;
                        } else if (endDate < startDate) {
                            // the end date cannot be before start date
                            $scope.ri.messageAreaText = conf.i18n.pastEndDate;
                            return false;
                        }
                    }
                    
                    if (!$scope.ri.rangetype) {
                        $scope.ri.messageAreaText = conf.i18n.noEndRecurrence;
                        return false;
                    }

                    return true;
                }

                $scope.ri.save = function () {
                    // if no field errors, process the request
                    if (checkFields()) {
                        // close overlay
                        $scope.ri.hideForm();
                        // check checkbox
                        $scope.ri.enabled = true;
                        recurrenceOn();
                    }
                };

                $scope.ri.cancel = function () {
                    // close overlay
                    $scope.ri.hideForm();
                    updateInternals();
                    // focus on checkbox
                    //display.find('input[name=richeckbox]').focus();
                };

                function updateOccurances() {
                    var startDate;
                    startDate = findStartDate();

                    // if no field errors, process the request
                    if (checkFields()) {
                        loadOccurrences(startDate,
                            widgetSaveToRfc5545(true).result,
                            0,
                            false);
                    }
                }

                /*
                    Load the templates
                */

                $scope.ri.showForm = function () {
                    var directiveScope = $scope;
                    if ($scope.ri.enabled) {
                        $scope.modal = $modal.open({
                            backdrop: true,
                            template: riTemplate["riform.html"],
                            controller: function ($scope, $modalInstance) {
                                $scope.ri = directiveScope.ri;
                                $scope.i18n = directiveScope.i18n;
                                $scope.conf = directiveScope.conf;
                                $scope.ri.$modalInstance = $modalInstance;
                                $scope.name = directiveScope.name;
                            }
                        });
                    }
                };

                $scope.ri.hideForm = function () {
					if($scope.ri.$modalInstance)
						$scope.ri.$modalInstance.close();
                };

                $scope.ical = { RDATE: [], EXDATE: [] };

                // Pop up the little add form when clicking "Add"
                /*form.find('div.riaddoccurrence input#adddate').dateinput({
                    selectors: true,
                    lang: conf.lang,
                    format: conf.i18n.shortDateFormat,
                    firstDay: conf.firstDay,
                    yearRange: [-5, 10]
                }).data('dateinput').setValue(new Date());
                form.find('input#addaction').click(occurrenceAdd);*/

                /**********************************
                    Default Values
                ***********************************/
                $scope.i18n = $scope.conf.i18n;
                angular.extend($scope.ri, {
                    dailyinterval: 1,
                    weeklyinterval: 1,
                    weeklyweekdays: [false, false, false, false, false, false, false],
                    monthlyinterval: 1,
                    monthlydayofmonthday: 1,
                    monthlyweekdayofmonthindex: '+1',
                    monthlyweekdayofmonth: 'SU',
                    yearlyinterval: 1,
                    yearlydayofmonthmonth: 1,
                    yearlydayofmonthday: 1,
                    yearlyweekdayofmonthindex: '+1',
                    yearlyweekdayofmonthday: 'SU',
                    yearlyweekdayofmonthmonth: 1
                });

                /**********************************
                    Scope Management
                ***********************************/

                // xrrule will hold the external rrule.

                function updateInternals() {
                    $scope.ri.enabled = ($scope.xrrule && true) || false;
                    loadData($scope.xrrule);
                }

                $scope.$watch('xrrule', updateInternals);
            }
        };
    };
	
	if(typeof define === "function" && define.amd) {
        define("riDirective", function (require, exports, module) {
            return riDirective;
        });
	} else {
		window.riDirective = riDirecetive;
	}})(window, document, define);