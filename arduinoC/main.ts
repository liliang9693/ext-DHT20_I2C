
//% color="#ff9f06" iconWidth=50 iconHeight=40
namespace gravitydht20 {

    
    //% block="Wait until is connected " blockType="command"
    export function untilConnected(parameter: any, block: any) {
        Generator.addInclude("includeDFRobot_DHT20","#include<DFRobot_DHT20.h>");
        Generator.addObject("dht20object","DFRobot_DHT20","dht20");
        Generator.addCode(`while(dht20.begin()){delay(1000);}`);
        
    }
    
    //% block="read DHT20 [TH]" blockType="reporter"
    //% TH.shadow="dropdown" TH.options="TH"
    export function read(parameter: any, block: any) {
        let th=parameter.TH.code;

        Generator.addCode([`dht20.${th}`, Generator.ORDER_UNARY_POSTFIX]);

    }


}
