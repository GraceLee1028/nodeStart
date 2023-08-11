// 1、字符串和buffer的转换
const str = 'hello'
//将字符串保存在buffer中,转为二进制来保存
const buffer = Buffer.from(str);
console.log(str.length)
console.log(buffer.length)
//将二进制转为utf-8的字符串
console.log(buffer.toString('utf-8'))
console.log(buffer)
const name = "钟离野"
const nameBuffer = Buffer.from(name,"utf8");
console.log("name的buffer值：",nameBuffer)
console.log("toString()的值",nameBuffer.toString())
//base64的值
const nameBase64 = nameBuffer.toString("base64")
console.log('toString("base64")的值：',nameBase64)
const nameBufferByBase64 = Buffer.from(nameBase64,"base64")
console.log("通过utf8创建的buffer值：",nameBuffer)
console.log("通过base64创建的buffer值:",nameBufferByBase64)
console.log("不同格式的值创建的buffer数据相同")
console.log('=========================================================')
//2、buffer的创建
//长度为20的buffer，默认用0填充
const bufferOne = Buffer.alloc(20)
// 写入数据到buffer
const bufferOneLength = bufferOne.write('hello alloc ，你好')
console.log(bufferOne)
console.log('长度',bufferOneLength)
console.log('toString()：真实数据',bufferOne.toString())
console.log('=========================================================')

const headBuffer = Buffer.alloc(4);
const headBufferLength = headBuffer.write("12345")
console.log(headBufferLength)
console.log(headBuffer)
console.log("headBuffer",headBuffer.toString())
console.log("======================================================")
const jsonStr = JSON.stringify({"base_info":{"id":"1460430637138726917","patientSex":1,"name":"吴继先","patient_id":"3001049","birthday":"1952-05-13","id_card":"230104195205130930","department":"重症医学科","department_code":"1858","outpatient_no":null,"outpatient_pipeline_no":null,"inhospital_no":"550542","inhospital_pipeline_no":"IP0000013885","inpatient_time":"2021-11-12 08:16:27","out_time":null,"charge_doctor":"李焱","charge_doctor_num":"101437","dept_name":"重症医学科","dept_code":"1858","disease_name":"高血压3级","diseaseIcd":"I10.x05","age":null,"ageUnit":null,"height":null,"weight":null,"inHospitalDiagnosis":"高血压3级、牙髓坏死、颌骨肿物、上消化道出血、反流性食管炎、1型糖尿病、眼鼠疫","examine_name":"★血常规(五分类静脉血)","examine_code":"JY21187","examine_date":"2022-09-21 07:00:06","disease_code":"I10.x05","disease_icd":"I10.x05"},"examine_list":[{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"嗜酸性粒细胞百分数","examineSubitemsCode":"A4018","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"0.4-8.0","examineSubitemsUnit":"","abnormalValueType":null,
"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"淋巴细胞百分数","examineSubitemsCode":"A4016","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"20.0-50","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"中性粒细胞绝对值","examineSubitemsCode":"A4020","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"10-50","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187",
"examineName":"★血常规(五分类静脉血)","examineSubitemsName":"淋巴细胞绝对值","examineSubitemsCode":"A4021","hisExamineCode":"JY21187","examineSubitemsValue":"20","normalValue":"20-50","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"白细胞计数","examineSubitemsCode":"A4014","hisExamineCode":"JY21187","examineSubitemsValue":"2.5","normalValue":"3.5-9.5","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"单核细胞绝对值","examineSubitemsCode":"A4022","hisExamineCode":"JY21187","examineSubitemsValue":"5","normalValue":"3-10","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06",
"examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)",
"examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"中性粒细胞百分数","examineSubitemsCode":"A4015","hisExamineCode":"JY21187","examineSubitemsValue":"20","normalValue":"40-75","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"嗜酸性粒细胞绝对值","examineSubitemsCode":"A4023","hisExamineCode":"JY21187","examineSubitemsValue":"5","normalValue":"4-8","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"单核细胞百分数","examineSubitemsCode":"A4017","hisExamineCode":"JY21187","examineSubitemsValue":"5","normalValue":"3-10","examineSubitemsUnit":"",
"abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"嗜碱性粒细胞百分数","examineSubitemsCode":"A4019","hisExamineCode":"JY21187","examineSubitemsValue":"30","normalValue":"20-60","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"嗜碱性粒细胞绝对值","examineSubitemsCode":"A4024","hisExamineCode":"JY21187","examineSubitemsValue":"20","normalValue":"20-60","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)",
"examineSubitemsName":"血红蛋白","examineSubitemsCode":"A4503","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"50-70","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"红细胞比容","examineSubitemsCode":"A4027","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"35-45","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"红细胞计数","examineSubitemsCode":"A4025","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"3.8-5.1","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028",
"reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"血小板计数","examineSubitemsCode":"A4033","hisExamineCode":"JY21187","examineSubitemsValue":"150","normalValue":"125-350","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"平均红细胞血红蛋白量","examineSubitemsCode":"A4029","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"10-20","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"血小板体积分布宽度","examineSubitemsCode":"A4034","hisExamineCode":"JY21187","examineSubitemsValue":"9.6","normalValue":"9.6-15.2","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,
"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"大血小板比例","examineSubitemsCode":"A4037","hisExamineCode":"JY21187","examineSubitemsValue":"50","normalValue":"19.6-42.6","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"RBC体积分布宽度","examineSubitemsCode":"A4032","hisExamineCode":"JY21187","examineSubitemsValue":"39","normalValue":"39-52.3","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"平均红细胞血红蛋白浓度","examineSubitemsCode":"A4031",
"hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"50-70","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"平均红细胞体积","examineSubitemsCode":"A4028","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"82-100","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"RBC体积分布宽度","examineSubitemsCode":"A4030","hisExamineCode":"JY21187","examineSubitemsValue":"10","normalValue":"11-16","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)",
"examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"平均血小板体积","examineSubitemsCode":"A4035","hisExamineCode":"JY21187","examineSubitemsValue":"9","normalValue":"9-13","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"},{"primaryId":"1657611159984","reportId":"1615364197028","reportHisExamineCode":"JY21187","reportHisExamineName":"★血常规(五分类静脉血)","examineCode":"JY21187","examineName":"★血常规(五分类静脉血)","examineSubitemsName":"血小板比容","examineSubitemsCode":"A4036","hisExamineCode":"JY21187","examineSubitemsValue":"0.12","normalValue":"0.11-0.31","examineSubitemsUnit":"","abnormalValueType":null,"crisisvalValue":null,"createTime":"2022-08-25 07:00:06","examineValueChange":null,"examineTime":"2022-09-21 07:00:06"}],"disease_list":[{"disease_name":"牙髓坏死","disease_code":"K04.100","disease_icd":"K04.100"},{"disease_name":"颌骨肿物","disease_code":"K10.901","disease_icd":"K10.901"},{"disease_name":"上消化道出血","disease_code":"K92.208","disease_icd":"K92.208"},{"disease_name":"反流性食管炎","disease_code":"K21.001","disease_icd":"K21.001"},{"disease_name":"1型糖尿病","disease_code":"E10.900","disease_icd":"E10.900"},{"disease_name":"眼鼠疫","disease_code":"","disease_icd":"A20.800x005"}],"dept_code_now":"1858",
"dept_name_now":"重症医学科","doctor_code_now":"101437","doctor_name_now":"李焱","cached":0})
const jsonBuffer = Buffer.from(jsonStr);
const headJsonBuffer = Buffer.alloc(4)
headJsonBuffer.writeInt16LE(jsonBuffer.byteLength,0)
console.log("jsonBuffer的长度：",jsonBuffer.byteLength)
console.log(headJsonBuffer,'headJsonBuffer============')
const jsonBufferByteLenth = headJsonBuffer.readInt16LE(0)
console.log(jsonBufferByteLenth,'jsonBufferByteLenth.readInt16LE(0)============')
console.log("======================================================")
//3、buffer中对象的转换
const bufferTwo = Buffer.from(JSON.stringify({name:"测试"}))//,'utf8'
const bufferTwoStr = bufferTwo.toString('utf8')
console.log("Buffer.from(): ",bufferTwo)
console.log(".toString(): ",bufferTwoStr,typeof bufferTwoStr)
const bufferTwoJSON = JSON.parse(bufferTwoStr);
console.log("JSON.parse(): ",bufferTwoJSON,typeof bufferTwoJSON)
const bufferThressJson = bufferTwo.toJSON();
console.log("toJson():  ",bufferThressJson)
console.log('=========================================================')

//4、缓冲合并 concat
const bufferThree = Buffer.from('hello concat');
const bufferFour = Buffer.concat([bufferOne,bufferThree])
console.log(bufferThree,bufferFour)
console.log('concat+toString(): ',bufferFour.toString('utf8'))

//5、缓冲区比较 compare
const bufferFive = Buffer.from('hello');
const bufferFiveTwo = Buffer.from('t');
const result = bufferFiveTwo.compare(bufferFive);
console.log(result)//0:bufferFiveTwo在bufferFive之前;//完全没有匹配上则在之后

//6、缓冲区拷贝插入 copy
const bufferCopy1 = Buffer.from('hello');
const bufferCopy2 = Buffer.from('world');
const copyBuffer = Buffer.alloc(bufferCopy1.length+bufferCopy2.length)
//copy(拷贝进的buffer,拷贝进的偏移量,拷贝的开始位置，拷贝的结束位置)
bufferCopy1.copy(copyBuffer,0,0,1)//将bufferCopy1的h拷贝插入到copyBuffer指定位置0
bufferCopy1.copy(copyBuffer,1,1,2)//将bufferCopy1的e拷贝插入到copyBuffer指定位置1
console.log("copy()==========",copyBuffer.toString())//结果为he