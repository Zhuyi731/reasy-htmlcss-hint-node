var jsonFormatter=function(o){o.on("end",function(o){console.log(JSON.stringify(o.arrAllMessages))})};module.exports=jsonFormatter;